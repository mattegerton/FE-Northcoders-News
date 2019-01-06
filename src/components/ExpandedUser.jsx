import React, { Component } from "react";
import * as api from "../api";
import "./css/ExpandedUser.css";

class ExpandedUser extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div>
        <table id="expandedUserCard">
          <tbody>
            <tr>
              <th> {this.state.user.username} </th>
            </tr>
            <tr>
              <th>
                <img
                  alt="userAvatar"
                  id="userAvatar"
                  src={`${this.state.user.avatar_url}`}
                  onError={e => {
                    e.target.src = "https://i.imgflip.com/27q3o0.jpg";
                  }}
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userID);
  }

  getUser = params => {
    api.getUserById(params).then(response => {
      this.setState({
        user: response.data.user
      });
    });
  };
}

export default ExpandedUser;
