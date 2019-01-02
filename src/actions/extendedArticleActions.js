import { EXTENDED_ARTICLE, ARTICLE_VOTES } from "./types";
import * as api from "../api";

export const renderExtendedArticle = (article, articleID) => dispatch => {
  if (article.length < 1) {
    let articleData = {};
    api.getArticleByArticleId(articleID).then(response => {
      articleData = {
        ...response.data.article,
        created_by: response.data.article.created_by.username
      };
    });
    console.log(article);
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
  console.log(article);
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
