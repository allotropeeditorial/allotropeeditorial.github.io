import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <nav className="bg-[#4b0082] text-[#b498c8]">
      <div id="nav-container" className="flex flex-row">
        <div id="brand-container" className="flex items-center">
          <Link className="" to={"/"}>
            <img
              className=""
              src="https://i.imgur.com/yvDDyuh.png"
              width="150"
              height="100"
            />
            {/* <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
              </button> */}
          </Link>
        </div>
        <div id="links-container" className="ml-auto flex items-center">
          <ul className="links flex flex-row">
            <li className="px-3 pt-2 md:hover:text-white">
              <Link className="" to={"/"}>
                <div className="">Home</div>
              </Link>
            </li>
            <li className="px-3 pt-2 md:hover:text-white">
              <Link className="" to={"/services"}>
                Services
              </Link>
            </li>
            <li className="px-3 pt-2 md:hover:text-white">
              <Link className="" to={"/about"}>
                About
              </Link>
            </li>
            <li className="px-3 pt-2 md:hover:text-white">
              <Link className="" to={"/resources"}>
                Resources
              </Link>
            </li>
            <li className="px-3">
              <Contact>
                <button onClick={() => setShowModal(true)}>Contact</button>
              </Contact>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
