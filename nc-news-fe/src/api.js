import axios from "axios";

const URL = "https://nc-news-matt.herokuapp.com/api";

//topics

export const getAllTopics = () => {
  return axios.get(`${URL}/topics`).then(res => res.data);
};
