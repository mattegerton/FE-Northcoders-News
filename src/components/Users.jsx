import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../actions/userActions";
import "./css/User.css";

class Users extends Component {
  // state = {
  //   users: []
  // };
  render() {
    return (
      <div>
        <h3> Here's all of our users! </h3>
        <div className="usersWrapper">
          {this.props.users.map(user => {
            return (
              <div className="userWrapper" key={user.username}>
                <NavLink to={`/users/${user._id}`} className="userLink">
                  <div className="userCard">
                    <h2> {user.username} </h2>
                    <img
                      alt="userAvatar"
                      src={user.avatar_url}
                      onError={e => {
                        e.target.src = "https://i.imgflip.com/27q3o0.jpg";
                      }}
                    />
                  </div>
                  <div className="userRecentPosts">{user.name}</div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchUsers();
  }

  // getAllUsers = () => {
  //   api
  //     .getAllUsers()
  //     .then(response => {
  //       this.setState({
  //         users: response.data.users
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
}

const mapStateToProps = state => ({
  users: state.users.items
});

export default connect(
  mapStateToProps,
  { fetchUsers }
)(Users);
