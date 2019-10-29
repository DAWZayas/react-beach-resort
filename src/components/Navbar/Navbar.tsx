import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Menu from "./MenuBtn";
import Links from "./NavbarLinks";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="nav" data-testid="navbar">
        <div className="nav__left">
          <Link to="/" data-testid="logo">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <Links isOpen={this.state.isOpen} />
        </div>
        <div className="nav__right">
          <Menu handleToggle={this.handleToggle} />
        </div>
      </nav>
    );
  }
}
