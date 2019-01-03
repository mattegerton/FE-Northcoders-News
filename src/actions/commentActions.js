import { COMMENT_VOTES } from "./types";

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
