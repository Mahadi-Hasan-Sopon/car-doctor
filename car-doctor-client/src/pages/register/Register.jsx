import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { RegisterWithEmailPassword, SignInWithGoogle, updateProfileInfo } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (
      !/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)
    ) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password Must be 6 characters long, with at least 1 Uppercase, 1 lowercase, 1 number & 1 special!",
      });
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please provide valid email",
      });
    }

    RegisterWithEmailPassword(email, password)
      .then((result) => {
        // console.log(result?.user);
        if (result?.user) {
          updateProfileInfo(result.user, name);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate(location?.state ? location.state : "/");
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: err,
        });
      });
  };

  const loginWithGoogle = () => {
    SignInWithGoogle()
      .then((response) => {
        console.log(response.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          text: err,
        });
      });
  };

  return (
    <div>
      <Navbar />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-6 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Register Now
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleRegisterSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    className="text-sky-600 font-medium hover:text-sky-700 hover:underline"
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
              </form>
              <div className="google flex justify-center">
                <button
                  onClick={loginWithGoogle}
                  type="button"
                  className="flex justify-center items-center gap-2 border border-sky-500 py-2 px-6 rounded-lg text-sky-600 hover:text-slate-200 hover:bg-sky-600 hover:border-transparent"
                >
                  <span className="text-xl">
                    <FaGoogle />
                  </span>
                  <span className="text-lg font-medium">
                    Sign in with google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
