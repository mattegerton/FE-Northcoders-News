import { FETCH_USERS } from "./types";
import * as api from "../api";

export const fetchUsers = () => dispatch => {
  api
    .getAllUsers()
    .then(response => {
      dispatch({
        type: FETCH_USERS,
        payload: response.data.users
      });
    })
    .catch(error => {
      console.log(error);
    });
};
