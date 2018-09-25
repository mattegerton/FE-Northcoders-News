import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/User.css";
import * as api from "../api";

class Users extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <h3> Here's all of our users! </h3>
        <div className="usersWrapper">
          {this.state.users.map(user => {
            return (
              <div className="userWrapper">
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
              // <div key={user._id}>
              //   <Link to={`/users/${user._id}`}>
              //     <table className="userCard">
              //       <tbody>
              //         <tr>
              //           <th>{user.username}</th>
              //         </tr>
              //         <tr>
              //           <th>
              //             <img
              //               alt="userAvatar"
              //               src={user.avatar_url}
              //               onError={e => {
              //                 e.target.src = "https://i.imgflip.com/27q3o0.jpg";
              //               }}
              //             />
              //           </th>
              //         </tr>
              //       </tbody>
              //     </table>
              //   </Link>
              // </div>
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    api
      .getAllUsers()
      .then(response => {
        this.setState({
          users: response.data.users
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export default Users;
