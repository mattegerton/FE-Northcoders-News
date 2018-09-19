import React, { Component } from "react";
import axios from "axios";
import "./css/User.css";

class Users extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <h2> Users </h2>
        {this.state.users.map(user => {
          return (
            <div className="userCard">
              {user.username}
              <img src={user.avatar_url} />
              {user.name}
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://nc-news-matt.herokuapp.com/api/users").then(data => {
      this.setState({
        users: data.data.users
      });
    });
  }
}

export default Users;
