/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContextProvider";

const SingleLink = ({ route, children }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive, isPending }) =>
        isPending
          ? "text-yellow-600"
          : isActive
          ? "text-lg text-blue-500 font-semibold"
          : "text-lg text-dark-02 font-semibold"
      }
    >
      {children}
    </NavLink>
  );
};

const Navlinks = ({ user, LogOutUser, className }) => {
  return (
    <ul className={className}>
      <li>
        <SingleLink route="/">Home</SingleLink>
      </li>
      <li>
        <SingleLink route={"/about"}>About</SingleLink>
      </li>
      <li>
        <SingleLink route={"/services"}>Services</SingleLink>
      </li>
      <li>
        <SingleLink route={"/cart"}>Cart</SingleLink>
      </li>
      <li>
        <SingleLink route={"/contact"}>Contact</SingleLink>
      </li>
      <li>
        {user ? (
          <button
            className="text-lg text-dark-02 font-semibold border border-orange-700 py-1 px-3 rounded hover:text-orange-600"
            type="button"
            onClick={() => LogOutUser()}
          >
            LogOut
          </button>
        ) : (
          <SingleLink route={"/login"}>Login</SingleLink>
        )}
      </li>
    </ul>
  );
};

const Navbar = () => {
  const { user, loading, LogOutUser } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex md:justify-between gap-6 items-center py-10">
      <div className="logo">
        <img className="max-h-20 mr-3" src={Logo} alt="" />
      </div>
      <div className="links flex-1 relative">
        <div className="flex flex-1 md:hidden transition-all duration-500">
          {toggle ? (
            <AiOutlineClose
              className="text-2xl text-dark-02"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineBars
              className="text-2xl text-dark-02"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } bg-slate-100 absolute top-12 -left-14 my-2 min-w-[250px] rounded-xl sidebar`}
        >
          <Navlinks
            user={user}
            LogOutUser={LogOutUser}
            className={
              "flex flex-col gap-6 items-start justify-center py-6 px-10 transition-all duration-500"
            }
          />
        </div>
        <Navlinks
          user={user}
          LogOutUser={LogOutUser}
          className={"hidden md:flex gap-6 items-center justify-center"}
        />
      </div>
      <div className="right flex items-center gap-6 justify-between">
        {user ? (
          <>
            <div className="avatar flex flex-col items-center">
              <>
                {user?.photoURL ? (
                  <img
                    className="border rounded-full border-sky-600 w-14 h-14"
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <div className="border border-slate-900 p-2 rounded-full">
                    <FaUser className="text-2xl" />
                  </div>
                )}
              </>
              <h2 className="text-lg font-semibold text-slate-700">
                {user.displayName}
              </h2>
            </div>
          </>
        ) : (
          <>
            <BsHandbag className="text-dark-02 text-2xl" />
            <BsSearch className="text-dark-02 text-2xl" />
            <button
              type="button"
              className="text-lg font-semibold py-2 md:py-5 px-5 md:px-7 border border-[#ff3811] text-[#ff3811] rounded-md"
            >
              Appointment
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
