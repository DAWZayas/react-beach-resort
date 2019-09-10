import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="nav">
        <div className="nav__left">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <ul className={this.state.isOpen ? "nav__links-show" : "nav__links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
        <div className="nav__right">
          <button
            type="button"
            className="nav__btn"
            onClick={this.handleToggle}
          >
            <FaAlignRight className="nav__icon" />
          </button>
        </div>
      </nav>
    );
  }
}
