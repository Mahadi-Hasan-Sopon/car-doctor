import { useLoaderData, useNavigate } from "react-router-dom";
import GoBack from "../../utils/BackButton/GoBack";
import Swal from "sweetalert2";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContextProvider";

function Checkout() {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fullName = form.full_name.value;
    const emailAddress = form.email_address.value;
    const phoneNumber = form.phone_number.value;
    const price = form.price.value;
    const message = form.message.value;

    if (!emailAddress || !phoneNumber) {
      return Swal.fire({
        icon: "error",
        title: "Info Missing",
        text: "Please provide valid Information",
      });
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please provide valid email",
      });
    }

    if (phoneNumber.length < 11) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please provide valid Number",
      });
    }

    const checkoutUserDetails = {
      fullName,
      emailAddress,
      phoneNumber,
      price,
      message,
    };
    const checkoutInfo = { serviceId: service._id, checkoutUserDetails };
    axios
      .post("http://localhost:5000/checkout", checkoutInfo, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon: "success",
          title: "Checkout Successful",
          text: "Visit Cart to see details.",
        });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Check Out Failed",
          text: err.message,
        });
      });

    navigate("/");
  };

  return (
    <div>
      <GoBack />
      <h1 className="text-4xl font-bold text-center">Check Out</h1>
      <div className="checkout-form p-24 bg-[#f3f3f3] my-10">
        <form onSubmit={handleCheckout}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="full_name"
                type="text"
                id="floating_full_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_full_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Full name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="email_address"
                defaultValue={user?.email}
                type="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="test@email.com"
                required
                readOnly
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="phone_number"
                type="text"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                name="price"
                defaultValue={`$${service?.price?.toFixed(2)}`}
                type="text"
                id="price"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                readOnly
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
          </div>
          <div className="form-control">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-500 dark:text-white"
            >
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write anything we should be aware..."
            ></textarea>
          </div>
          <div className="flex mt-8">
            <button
              type="submit"
              className="text-center w-full rounded-lg bg-primary-orange font-semibold text-lg py-4 text-white"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
