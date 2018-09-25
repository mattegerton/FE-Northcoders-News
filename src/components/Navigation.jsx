import React, { Component } from "react";
import "./css/Navigation.css";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = {
    showMenu: false
  };
  render() {
    return (
      <div className="navigation-top">
        {this.state.showMenu === false ? (
          <ion-icon onClick={this.menuShowToggle} name="apps" />
        ) : (
          <div className="navigation-drop">
            <ion-icon onClick={this.menuShowToggle} name="close" />
            <tr>
              <th className="navigationLinks">
                <Link to="/topics">
                  <ion-icon name="book" />
                  <br />
                  Topics
                </Link>
              </th>

              <th className="navigationLinks">
                <Link to="/articles">
                  <ion-icon name="list-box" />
                  <br />
                  Articles
                </Link>
              </th>

              <th className="navigationLinks">
                <Link to="/users">
                  <ion-icon name="contact" />
                  <br />
                  Users
                </Link>
              </th>
            </tr>
          </div>
        )}
      </div>
    );
  }

  menuShowToggle = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };
}

export default Navigation;
