import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full max-h-screen flex justify-center items-center">
      <Link to="/">
        <button
          type="button"
          className="border border-red-600/90 text-red-600 text-lg font-bold py-2.5 px-7 hover:bg-blue-700 hover:text-slate-100 hover:border-transparent"
        >
          Back to Home
        </button>
      </Link>
      <img
        className="max-w-full"
        src="https://i.ibb.co/0YsdXQG/404-page.png"
        alt=""
      />
    </div>
  );
};

export default Error;
