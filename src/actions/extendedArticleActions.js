import { EXTENDED_ARTICLE, ARTICLE_VOTES } from "./types";
import * as api from "../api";

export const renderExtendedArticle = (article, articleID) => dispatch => {
  console.log(article, "<<action<<");
  if (article.length < 1) {
    let articleData = {};
    api.getArticleByArticleId(articleID).then(response => {
      articleData = {
        ...response.data.article,
        created_by: response.data.article.created_by.username
      };
    });
    api
      .getCommentsByArticleId(articleID)
      .then(response =>
        dispatch({
          type: EXTENDED_ARTICLE,
          payload: {
            article: articleData,
            comments: response.data.comments
          }
        })
      )
      .catch(error => {
        console.log(error);
      });
  } else {
    console.log(article[0], "<<action comments<<");
    api
      .getCommentsByArticleId(articleID)
      .then(response =>
        dispatch({
          type: EXTENDED_ARTICLE,
          payload: {
            article: article[0],
            comments: response.data.comments
          }
        })
      )
      .catch(error => {
        console.log(error);
      });
  }
};

export const articleVote = (params, selection, article) => dispatch => {
  api.voteByArticleId(params, selection).then(response => {
    let vote = article.votes;
    selection === "up" ? vote++ : vote--;
    dispatch({
      type: ARTICLE_VOTES,
      payload: {
        ...article,
        voted: selection === "up" ? "up" : "down",
        votes: vote
      }
    });
  });
};
