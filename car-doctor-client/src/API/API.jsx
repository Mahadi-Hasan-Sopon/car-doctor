import axios from "axios";

const getServices = async () => {
  const result = await axios.get("http://localhost:5000/services");
  return result.data;
};

const getServiceById = async (serviceId) => {
  const result = await axios.get(
    `http://localhost:5000/services/${serviceId}`,
    { withCredentials: true }
  );
  return result.data;
};

const getProducts = async () => {
  const result = await axios.get("http://localhost:5000/products");
  return result.data;
};

const getProductById = async (productId) => {
  const result = await axios.get(
    `http://localhost:5000/products/${productId}`,
    { withCredentials: true }
  );
  return result.data;
};

const getCartItems = async (email) => {
  const result = await axios.get(
    `http://localhost:5000/cart?email=${email}`,
    { withCredentials: true }
  );
  return result.data;
};

export {
  getServices,
  getServiceById,
  getProducts,
  getProductById,
  getCartItems,
};
