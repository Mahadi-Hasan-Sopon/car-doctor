const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

// const { services } = require("./services");
// const { products } = require("./products");

const app = express();

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

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.vdnpxvd.mongodb.net/?retryWrites=true&w=majority`;

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

    const serviceCollection = client.db("carDoctor").collection("services");
    // const serviceData = await serviceCollection.insertMany(services);
    // console.log(serviceData);

    const productCollection = client.db("carDoctor").collection("products");
    // const productData = await productCollection.insertMany(products);
    // console.log(productData);

    app.get("/services", async (req, res) => {
      const result = await serviceCollection.find().toArray();
      res.send(result);
    });

    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });

    app.get("/services/:serviceId", async (req, res) => {
      const serviceId = req.params.serviceId;
      const query = { _id: new ObjectId(serviceId) };
      const result = await serviceCollection.findOne(query);
      res.send(result);
    });

    app.get("/products/:productId", async (req, res) => {
      const productId = req.params.productId;
      const query = { _id: new ObjectId(productId) };
      const product = await productCollection.findOne(query);
      res.send(product);
    });

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1hr",
      });

      console.log(token);

      res
        .cookie("token", token, {
          httpOnly: true,
          sameSite: "none",
          secure: true, //http://localhost:5173/
        })
        .send({ success: true, token: token });
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
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
