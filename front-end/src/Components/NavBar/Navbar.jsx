import React, { useState } from "react";
import JWLogo from "../../Assets/JWLogoW.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // <==========================Using useState to make the navBar responsive==================>
  const [isMobile, setIsMobile] = useState(false);

  // <===================== Using usestate for the navbar dropdown========================>
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <Link to="/home" className="logo">
            <img src={JWLogo} alt="Logo" />
            </Link>
        </div>

        {/* <===================== Function that retuns false for the value of isMobile once any of the navLinks is clicked ========================>  */}
        <div
          className={isMobile ? "nav-bar-mobile" : "navBar"}
          onClick={() => setIsMobile(false)}
        >
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/home" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink">
                About
              </Link>
            </li>
            <li
              onMouseEnter={handleDropdownOpen}
              onMouseLeave={handleDropdownClose}
              className="navItem dropdown"
            >
              <Link to="/event" className="navLink">
                Event
              </Link>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/">Campus Tour</Link>
                  <Link to="/">Worship Meeting</Link>
                  <Link to="/">Retreat</Link>
                  <Link to="/">Live Recording</Link>
                </div>
              )}
            </li>
            <li className="navItem">
              <Link to="/gallery" className="navLink">
                Gallery
              </Link>
            </li>

            <button className="btn">
              <Link to="/partnership">PARTNER</Link>
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
