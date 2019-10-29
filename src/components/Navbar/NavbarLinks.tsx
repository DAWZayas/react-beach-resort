import React from "react";
import { Link } from "react-router-dom";

const Links: React.FC<{ isOpen: boolean }> = ({ isOpen = false }) => (
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
);

export default Links;
