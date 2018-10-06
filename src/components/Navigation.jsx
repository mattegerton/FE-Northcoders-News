import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/Navigation.css";

class Navigation extends Component {
  state = {
    showMenu: false
  };
  render() {
    return (
      <div className="navigation-top">
        {this.state.showMenu === true ? (
          <ion-icon onClick={this.menuShowToggle} name="apps" />
        ) : (
          <div className="navigation-drop">
            <ion-icon onClick={this.menuShowToggle} name="arrow-dropup" />
            <div>
              <div className="navigationLinks">
                <NavLink to="/topics" className="navLinkStyle">
                  <ion-icon name="book" className="navIcon" />
                  <br />
                  Topics
                </NavLink>
              </div>

              <div className="navigationLinks">
                <NavLink to="/articles" className="navLinkStyle">
                  <ion-icon name="list-box" className="navIcon" />
                  <br />
                  Articles
                </NavLink>
              </div>

              <div className="navigationLinks">
                <NavLink to="/users" className="navLinkStyle">
                  <ion-icon name="contact" className="navIcon" />
                  <br />
                  Users
                </NavLink>
              </div>

              <div className="navigationLinks">
                <Link to="/topics/coding" className="navLinkStyle">
                  <ion-icon name="code" className="navIcon" />
                  <br />
                  Coding
                </Link>
              </div>

              <div className="navigationLinks">
                <Link to="/topics/cooking" className="navLinkStyle">
                  <ion-icon name="pizza" className="navIcon" />
                  <br />
                  Cooking
                </Link>
              </div>

              <div className="navigationLinks">
                <Link to="/topics/football" className="navLinkStyle">
                  <ion-icon name="football" className="navIcon" />
                  <br />
                  Football
                </Link>
              </div>
            </div>
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
