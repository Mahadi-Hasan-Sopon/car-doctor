/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { BsHandbag, BsSearch } from "react-icons/bs";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

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

const Navlinks = ({ className }) => {
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
        <SingleLink route={"/blog"}>Blog</SingleLink>
      </li>
      <li>
        <SingleLink route={"/contact"}>Contact</SingleLink>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

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
            className={
              "flex flex-col gap-6 items-start justify-center py-6 px-10 transition-all duration-500"
            }
          />
        </div>
        <Navlinks
          className={"hidden md:flex gap-6 items-center justify-center"}
        />
      </div>
      <div className="right flex items-center gap-6 justify-between">
        <BsHandbag className="text-dark-02 text-2xl" />
        <BsSearch className="text-dark-02 text-2xl" />
        <button
          type="button"
          className="text-lg font-semibold py-2 md:py-5 px-5 md:px-7 border border-[#ff3811] text-[#ff3811] rounded-md"
        >
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
