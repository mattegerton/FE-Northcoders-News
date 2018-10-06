import React from "react";
import "./css/Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" activeClassName="linkStyle">
        <h1> Northcoders News </h1>
      </NavLink>
    </div>
  );
};

export default Header;
