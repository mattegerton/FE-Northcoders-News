import { FETCH_TOPICS } from "./types";
import * as api from "../api";

export const fetchTopics = () => dispatch => {
  api
    .getAllTopics()
    .then(response => {
      dispatch({
        type: FETCH_TOPICS,
        payload: response.topics
      });
    })
    .catch(error => {
      console.log(error);
    });
};
