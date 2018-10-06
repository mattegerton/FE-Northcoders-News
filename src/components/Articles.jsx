import React, { Component } from "react";
import "./css/Articles.css";
import { Link, Route } from "react-router-dom";
import * as api from "../api";
import RenderArticles from "./RenderArticles";

class Articles extends Component {
  state = {
    articles: [],
    newArticle: false,
    error: {}
  };

  render() {
    return this.state.error.code ? (
      <Route component={Error} />
    ) : (
      <div>
        <h3> Articles </h3>
        <button id="articlePostBtn">
          <Link className="articleButton" to="/articles/post">
            Post an article!
          </Link>
        </button>
        <RenderArticles articles={this.state.articles} />
      </div>
    );
  }

  componentDidMount() {
    this.getArticles(this.props.match.params.topic);
  }

  getArticles = params => {
    if (params !== undefined) {
      api
        .getArticlesByTopicSlug(params)
        .then(response => {
          let articlesData = response.data.articles.map(article => {
            console.log(article.created_by);
            return {
              ...article,
              created_by: article.created_by
                ? article.created_by.username
                : "Guest"
            };
          });
          this.setState({
            articles: articlesData
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
              created_by: article.created_by.username
                ? article.created_by.username
                : "Guest"
            };
          });
          this.setState({
            articles: articlesData
          });
        })
        .catch(error => {
          console.log(error);
          this.setState({
            error: {
              statusCode: error.response.status,
              message: error.response.data.message
            }
          });
        });
    }
  };
}
export default Articles;
