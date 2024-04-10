import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div
      className="sticky top-0 z-10 flex items-center justify-evenly vsm:static sm:sticky "
      style={{ background: "#010d83" }}
    >
      <img
        src="https://cdn.icon-icons.com/icons2/2429/PNG/512/paypal_logo_icon_147252.png"
        alt=""
        className={`w-7 ${menuOpen ? "hidden" : "w-7"} md:hidden xs:w-5`}
      />
      <nav
        className={`p-2 flex items-center justify-around flex-wrap vsm:flex-col-reverse 
      md:flex md:flex-nowrap md:flex-row md:gap-6
      lg:flex lg:flex-wrap lg:gap-10
      xl:gap-14
      xs:flex-col-reverse`}
      >
        <ul
          className={`flex items-center gap-12 text-base ${
            menuOpen ? "flex-col" : "hidden"
          } vsm:flex-col vsm:gap-6 md:flex md:flex-row md:gap-3 
      lg:gap-6 xl:gap-12 xs:gap-4`}
        >
          <Link to='/'><img
            src="https://cdn.dribbble.com/users/5816579/screenshots/15144841/media/a0fada9df4a41c12be7b6a6a55ad4d10.jpg?resize=400x300&vertical=center"
            alt=""
            className="w-24 cursor-pointer md:w-16 xl:w-20 xs:w-14"
          /></Link>

          <a href="#">
            <li className="hover:text-cyan-500 text-white font-roboto font-light cursor-pointer text-lg md:text-sm lg:text-lg">
              Dashboard
            </li>
          </a>
          <a href="#">
            <li className="hover:text-cyan-500 text-white font-roboto font-light cursor-pointer text-lg md:text-sm lg:text-lg">
              Finances
            </li>
          </a>
          <a href="#">
            <li className="hover:text-cyan-500 text-white font-roboto font-light cursor-pointer text-lg md:text-sm lg:text-lg md:text-center">
              Send and Request
            </li>
          </a>
          <Link to="/Sellertools">
            <li className="hover:text-cyan-500 text-white font-roboto font-light cursor-pointer text-lg md:text-sm lg:text-lg">
              Deals
            </li>
          </Link>
          <a href="#">
            <li className="hover:text-cyan-500 text-white font-roboto font-light cursor-pointer text-lg md:text-sm lg:text-lg">
              Wallet
            </li>
          </a>
          <a href="#">
            <li className="hover:text-cyan-500 text-white font-roboto font-light cursor-pointer text-lg md:text-sm lg:text-lg">
              Activity
            </li>
          </a>
          <a href="#">
            <li className="hover:text-cyan-500 text-white font-roboto font-light cursor-pointer text-lg md:text-sm lg:text-lg">
              Help
            </li>
          </a>
        </ul>
        <div
          className={`flex gap-4 items-center vsm:gap-7 sm:gap-16 md:gap-5 xs:gap-3`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2 32"
            height="32"
            width="2"
            fill="var(--color-border-subtle, #303034)"
          >
            <path d="M0 0h2v32H0z"></path>
          </svg>
          <FaBell className="size-5 cursor-pointer md:size-3 lg:size-4 xs:size-3" />
          <IoSettingsSharp className="size-5 cursor-pointer md:size-3 lg:size-4 xs:size-3" />
          <button
            className="border border-solid rounded-xl p-2 w-28
           hover:bg-sky-800 duration-500 uppercase vsm:text-sm vsm:w-20 lg:w-28 lg:text-base xs:w-16 xs:text-xs xs:rounded-md xs:p-1"
            style={{ background: "#152b8e" }}
          >
            logout
          </button>
          {menuOpen ? (
            <IoMdClose
              className="size-5 cursor-pointer md:hidden"
              onClick={handleMenuClick}
            />
          ) : (
            <HiOutlineMenu
              className="size-5 md:hidden cursor-pointer xs:size-4"
              onClick={handleMenuClick}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
