import { FETCH_ARTICLES, NEW_ARTICLE } from "./types";
import * as api from "../api";

export const fetchArticles = params => dispatch => {
  if (params !== undefined) {
    api
      .getArticlesByTopicSlug(params)
      .then(response => {
        let articlesData = response.data.articles.map(article => {
          return {
            ...article,
            created_by: article.created_by
              ? article.created_by.username
              : "Guest"
          };
        });
        dispatch({
          type: FETCH_ARTICLES,
          payload: {
            articlesData,
            params
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    api
      .getAllArticles()
      .then(response => {
        const articlesData = response.data.articles.map(article => {
          return {
            ...article,
            created_by: article.created_by
              ? article.created_by.username
              : "Guest"
          };
        });
        dispatch({
          type: FETCH_ARTICLES,
          payload: {
            articlesData,
            params
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
