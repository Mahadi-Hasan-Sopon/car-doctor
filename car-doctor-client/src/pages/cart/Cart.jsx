import { useQuery } from "@tanstack/react-query";
import GoBack from "../../utils/BackButton/GoBack";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import { getCartServices, getCheckouts } from "../../API/API";
import { FiDelete } from "react-icons/fi";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const { data: checkouts } = useQuery({
    queryKey: ["checkouts"],
    queryFn: () => getCheckouts(user?.email),
  });

  const servicesId = checkouts?.map((checkout) => checkout.serviceId) || [];
  // const servicesId = [];
  // if (checkouts?.length > 0) {
  //   for (let service of checkouts) {
  //     servicesId.push(service.serviceId);
  //   }
  // }

  const { data: cartServices } = useQuery({
    queryKey: ["cartServices"],
    queryFn: () => getCartServices(servicesId),
    enabled: !!servicesId.length, // Only fetch if there are serviceIds
  });

  console.log(cartServices);

  return (
    <div>
      <GoBack />
      <h1 className="text-4xl font-bold text-center">Cart</h1>
      <div className="cart-items space-y-6">
        {cartServices?.map((service) => (
          <div key={service._id}>
            <div className="flex justify-between items-center gap-6">
              <div className="delete">
                <FiDelete />
              </div>
              <div className="product-details grid grid-cols-6 gap-4 justify-between items-center">
                <div className="flex justify-center">
                  <img
                    className="max-w-full rounded-lg"
                    src={service.thumbnail}
                    alt=""
                  />
                </div>
                <div className="col-span-2">
                  <h3 className="text-xl font-bold"> {service.title} </h3>
                </div>
                <p className="text-xl font-bold">
                  {`$${service.price?.toFixed(2)}`}
                </p>
                <p className="date text-xl font-medium"> Date Coming soon </p>
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
