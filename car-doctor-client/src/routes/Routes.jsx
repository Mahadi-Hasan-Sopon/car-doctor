import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../components/error/Error";
import Cart from "../pages/cart/Cart";
import Services from "../pages/services/Services";
import ServiceDetails from "../pages/serviceDetails/ServiceDetails";
import ProductDetails from "../pages/productDetails/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import Checkout from "../pages/checkout/Checkout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "/checkout/service/:serviceId",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.serviceId}`, {
            credentials: "include",
          }),
      },
      {
        path: "/checkout/product/:serviceId",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.serviceId}`, {
            credentials: "include",
          }),
      },
      {
        path: "/services/service-details/:serviceId",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/products/product-details/:productId",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
