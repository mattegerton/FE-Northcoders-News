import { EXTENDED_ARTICLE } from "./types";
import * as api from "../api";

export const renderExtendedArticle = (article, articleID) => dispatch => {
  console.log("!!!!!!");
  if (article.length < 1) {
    console.log("???????");
    api.getArticleByArticleId(articleID).then(response => {
      const articleData = {
        ...response.data.article,
        created_by: response.data.article.created_by.username
      };
      article = articleData;
    });
  }
  api
    .getCommentsByArticleId(articleID)
    .then(response =>
      dispatch({
        type: EXTENDED_ARTICLE,
        payload: {
          article,
          comments: response.data.comments
        }
      })
    )
    .catch(error => {
      console.log(error);
    });
};
