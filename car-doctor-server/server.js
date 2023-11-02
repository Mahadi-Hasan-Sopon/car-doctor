const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

// const { services } = require("./services");
// const { products } = require("./products");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["*", "http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use((req, res, next) => {
  req.headers = {
    "access-control-allow-origin": "*",
  };
  next();
});

// Custom Middlewares
const logger = async (req, res, next) => {
  console.log("logger Url: ", req.protocol, req.originalUrl);
  next();
};

const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).send({ message: "Un Authorized Access" });

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid Credentials" });
      // if decoded token is valid
      console.log(decoded);
      if (decoded) {
        console.log("decoded successfully");
      } else {
        console.log("decoded failed");
      }
      next();
    });
  }
};

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.vdnpxvd.mongodb.net/?retryWrites=true&w=majority`;

// const localUri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("carDoctor");

    const serviceCollection = database.collection("services");
    // const serviceData = await serviceCollection.insertMany(services);
    // console.log(serviceData);

    const productCollection = database.collection("products");
    // const productData = await productCollection.insertMany(products);
    // console.log(productData);

    const cartCollection = database.collection("cartItems");

    // Routes
    app.get("/services", async (req, res) => {
      const result = await serviceCollection.find().toArray();
      res.send(result);
    });

    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });

    app.get("/services/:serviceId", verifyToken, async (req, res) => {
      const serviceId = req.params.serviceId;
      const query = { _id: new ObjectId(serviceId) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    app.get("/products/:productId", verifyToken, async (req, res) => {
      const productId = req.params.productId;
      const query = { _id: new ObjectId(productId) };
      const product = await productCollection.findOne(query);
      res.send(product);
    });

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      // console.log("user in /jwt ", user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1hr",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true,
          domain: "localhost",
        })
        .send({ success: true, token: token });
    });

    app.get("/cart", verifyToken, async (req, res) => {
      const email = req.query?.email;

      // db.inventory.find( { "item.name": { $eq: "ab" } } )
      const query = { "checkoutUserDetails.emailAddress": { $eq: email } };

      const result = await cartCollection.find(query).toArray();
      res.send(result);
    });

    app.post("/cart", verifyToken, async (req, res) => {
      const checkoutDetails = req.body;
      const result = await cartCollection.insertOne({
        ...checkoutDetails,
        createdAt: new Date(),
      });
      res.send(result);
    });

    app.delete("/cart/delete/:cartItemsId", async (req, res) => {
      const id = req.params?.cartItemsId;
      // console.log(id);
      const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("<h1><center>Hello Server</center></h1>");
});

app.listen(port, () => console.log(`server running at Port: ${port}`));
