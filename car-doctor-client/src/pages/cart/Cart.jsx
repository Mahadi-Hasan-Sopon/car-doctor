import { useQuery, useQueryClient } from "@tanstack/react-query";
import GoBack from "../../utils/BackButton/GoBack";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { getCartItems } from "../../API/API";
import { TiDelete } from "react-icons/ti";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import axios from "axios";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const { data: cartItems, isFetching } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCartItems(user?.email),
  });

  if (isFetching) {
    return <LoadingSpinner />;
  }

  if (cartItems.length === 0) {
    return <h1 className="text-5xl text-center font-bold">No Items in cart</h1>;
  }

  const handleDeleteClick = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/cart/delete/${id}`
      );
      console.log(result.data);
      if (result.data.deletedCount > 0) {
        queryClient.invalidateQueries(["cartItems"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GoBack />
      <h1 className="text-4xl font-bold text-center">Cart</h1>
      <div className="cart-items space-y-6 mt-10 mb-20">
        {cartItems?.map((cartItem) => (
          <div key={cartItem.service?._id}>
            <div className="flex justify-between items-center gap-6">
              <div
                className="delete"
                onClick={() => handleDeleteClick(cartItem?._id)}
              >
                <TiDelete className="text-4xl cursor-pointer hover:text-red-600" />
              </div>
              <div className="product-details grid grid-cols-6 gap-4 justify-between items-center">
                <div className="flex justify-center">
                  <img
                    className="max-w-full rounded-lg"
                    src={cartItem?.service.thumbnail}
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl font-bold">
                    {" "}
                    {cartItem?.service.title}{" "}
                  </h3>
                </div>
                <p className="text-xl font-bold">
                  {`$${cartItem?.service.price?.toFixed(2)}`}
                </p>
                <p className="date text-xl font-medium">
                  {cartItem?.createdAt
                    ? new Date(cartItem?.createdAt).toDateString()
                    : "Date missing"}
                </p>
                <button
                  className="text-center rounded-lg bg-primary-orange font-semibold text-xl py-3 text-white"
                  type="button"
                >
                  Pending
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
