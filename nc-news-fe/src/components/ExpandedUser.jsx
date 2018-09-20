import React, { Component } from "react";
import axios from "axios";
import "./css/ExpandedUser.css";

class ExpandedUser extends Component {
  state = {
    user: {}
  };
  render() {
    console.log(this.state.user);
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
    axios
      .get(
        `https://nc-news-matt.herokuapp.com/api/users/${
          this.props.match.params.userID
        }`
      )
      .then(data => {
        console.log(data.data.user, "<---");
        this.setState({
          user: data.data.user
        });
      });
  }
}

export default ExpandedUser;
