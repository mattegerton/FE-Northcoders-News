import axios from "axios";

const URL = "https://nc-news-matt.herokuapp.com/api";

export const getAllTopics = () => {
  return axios.get(`${URL}/topics`).then(response => response.data);
};

export const getArticlesByTopicSlug = topicSlug => {
  return axios.get(`${URL}/topics/${topicSlug}/articles`);
};

export const getAllArticles = () => {
  return axios.get(`${URL}/articles`);
};

export const getAllUsers = () => {
  return axios.get(`${URL}/users`);
};

export const getUserById = params => {
  return axios.get(`${URL}/users/${params}`);
};

export const getArticleByArticleId = params => {
  return axios.get(`${URL}/articles/${params}`);
};

export const getCommentsByArticleId = params => {
  return axios.get(`${URL}/articles/${params}/comments`);
};

export const postArticleToTopic = (params, article) => {
  return axios.post(`${URL}/topics/${params}/articles`, article);
};

export const postCommentToArticle = (params, comment) => {
  return axios.post(`${URL}/articles/${params}/comments`, comment);
};

export const voteByArticleId = (params, selection) => {
  return axios.put(`${URL}/articles/${params}?vote=${selection}`);
};

export const voteByCommentId = (params, selection) => {
  return axios.put(`${URL}/comments/${params}?vote=${selection}`);
};

export const deleteComment = params => {
  return axios.delete(`${URL}/comments/${params}`);
};
