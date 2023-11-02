import { useQuery } from "@tanstack/react-query";
import GoBack from "../../utils/BackButton/GoBack";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";
import { getCheckouts } from "../../API/API";

const Cart = () => {
  const { user } = useContext(AuthContext);

  const { data: checkouts } = useQuery({
    queryKey: ["checkouts"],
    queryFn: () => getCheckouts(user?.email),
  });

  console.log(checkouts);

  return (
    <div>
      <GoBack />
      <h1 className="text-4xl font-bold text-center">Cart</h1>
      <div></div>
    </div>
  );
};

export default Cart;
