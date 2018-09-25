import React, { Component } from "react";
import "./css/Articles.css";
import { Link, Redirect } from "react-router-dom";
import * as api from "../api";
import RenderArticles from "./RenderArticles";

class Articles extends Component {
  state = {
    articles: [],
    newArticle: false,
    error: {}
  };

  render() {
    return (
      <div>
        <h3> Articles </h3>
        <button id="articlePostBtn">
          <Link className="articleButton" to="/articles/post">
            Post an article!
          </Link>
        </button>
        {this.state.error.code && (
          <Redirect
            to={{ pathname: "/WrongPath", state: { error: this.state.error } }}
          />
        )}
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
          this.setState({ articles: response.data.articles });
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      api
        .getAllArticles()
        .then(response => {
          this.setState({
            articles: response.data.articles
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
