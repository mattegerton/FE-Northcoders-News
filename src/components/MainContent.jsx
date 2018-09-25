import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/MainContent.css";

class MainContent extends Component {
  render() {
    return (
      <div>
        <h3> Welcome to Northcoders News! What would you like to see? </h3>

        <NavLink to="/topics" className="mainContentButton">
          <button>
            <ion-icon name="book" />
            <br />
            Topics
          </button>
        </NavLink>

        <NavLink to="/articles" className="mainContentButton">
          <button>
            <ion-icon name="list-box" />
            <br />
            Articles
          </button>
        </NavLink>

        <NavLink to="/users" className="mainContentButton">
          <button>
            <ion-icon name="contact" />
            <br />
            Users
          </button>
        </NavLink>
      </div>
    );
  }
}

export default MainContent;
