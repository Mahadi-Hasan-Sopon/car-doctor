import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  // const location = useLocation();
  // const navigate = useNavigate();

  // const handleLoginClick = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   loginWithEmailPassword(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       toast.success("User login successful");
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error(error?.message);
  //     });
  // };

  // const handleGoogleLoginClick = () => {
  //   loginWithGoogle()
  //     .then((result) => {
  //       navigate(location?.state ? location.state : "/");
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-5xl font-bold text-center dark:text-white text-slate-700">
                Login now!
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {"Don’t"} have an account?{" "}
                  <Link
                    className="font-medium text-sky-600 hover:underline dark:text-sky-500"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
              </form>
              <div className="flex justify-center items-center gap-4 mt-6 w-full md:max-lg:w-1/2 mx-auto py-3 px-6 rounded-lg border-2 border-sky-700 cursor-pointer font-bold md:text-xl dark:text-slate-200 text-sky-600 hover:text-slate-200 hover:bg-sky-600 hover:border-transparent">
                <FcGoogle className="text-2xl" />
                <button className="text-lg">Login With Google</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
