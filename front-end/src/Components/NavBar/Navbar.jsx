import React, { useState } from "react";
import JWLogo from "../../Assets/JWLogoW.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import "./Navbar.css";

const Navbar = () => {
  // <==========================Using useState to make the navBar responsive==============.
  const [isMobile, setIsMobile] = useState(false);

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <img src={JWLogo} alt="Logo" />
          </a>
        </div>


        {/* <===================== Function for that retuns false for the value of isMobile once any of the navLinks is clicked ========================>  */}
        <div
          className={isMobile ? "nav-bar-mobile" : "navBar"}
          onClick={() => setIsMobile(false)}
        >
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Event
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Blog
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Gallery
              </a>
            </li>

            <button className="btn">
              <a href="#">PARTNER</a>
            </button>
          </ul>
        </div>
        {/* <===================Toggle icons====================. */}
        <div
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <AiFillCloseCircle className="icon" />
          ) : (
            <VscThreeBars className="icon" />
          )}
        </div>
      </header>
    </section>
  );
};

export default Navbar;
