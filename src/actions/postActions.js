import { POST_ARTICLE } from "./types";
import * as api from "../api";

export const postArticle = (topic, postData) => dispatch => {
  api
    .postArticleToTopic(topic, postData)
    .then(post =>
      dispatch({
        type: POST_ARTICLE,
        payload: {
          post: post.data.article,
          posted: true
        }
      })
    )
    .catch(error => {
      console.log(error);
    });
};
