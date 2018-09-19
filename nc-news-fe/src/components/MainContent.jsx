import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

class MainContent extends Component {
  render() {
    return (
      <div>
        <h3> Main Content</h3>

        <Link to="/topics">
          <button>
            <ion-icon name="book" />
            Topics
          </button>
        </Link>

        <Link to="/articles">
          <button>
            <ion-icon name="list-box" />
            Articles
          </button>
        </Link>

        <Link to="/users">
          <button>
            <ion-icon name="contact" />
            Users
          </button>
        </Link>
      </div>
    );
  }
}

export default MainContent;
