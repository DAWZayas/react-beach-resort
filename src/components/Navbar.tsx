import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav" data-testid="navbar">
      <div className="nav__left">
        <Link to="/" data-testid="logo">
          <img src={logo} alt="Beach Resort" />
        </Link>
        <ul
          className={isOpen ? "nav__links-show" : "nav__links"}
          data-testid="navbar-links"
        >
          <li>
            <Link to="/" data-testid="home-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rooms" data-testid="rooms-link">
              Rooms
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav__right">
        <button
          type="button"
          className="nav__btn"
          onClick={handleToggle}
          data-testid="menu"
        >
          <FaAlignRight className="nav__icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
