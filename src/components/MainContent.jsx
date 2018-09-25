import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/MainContent.css";

class MainContent extends Component {
  render() {
    return (
      <div>
        <h3> Main Content</h3>

        <Link to="/topics">
          <button className="mainContentButton">
            <ion-icon name="book" />
            <br />
            Topics
          </button>
        </Link>

        <Link to="/articles">
          <button className="mainContentButton">
            <ion-icon name="list-box" />
            <br />
            Articles
          </button>
        </Link>

        <Link to="/users">
          <button className="mainContentButton">
            <ion-icon name="contact" />
            <br />
            Users
          </button>
        </Link>
      </div>
    );
  }
}

export default MainContent;
