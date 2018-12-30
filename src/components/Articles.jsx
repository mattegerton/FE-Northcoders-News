import React, { Component } from "react";
import "./css/Articles.css";
import { Link, Route } from "react-router-dom";
import * as api from "../api";
import RenderArticles from "./RenderArticles";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/articleActions";

class Articles extends Component {
  // state = {
  //   articles: [],
  //   newArticle: false,
  //   error: {},
  //   topic: ""
  // };

  render() {
    // console.log(this.props);
    // return this.props.articles.error.code ? (
    //   <Route component={Error} />
    // ) : (
    return (
      <div>
        <h3> Articles </h3>
        <button id="articlePostBtn">
          <Link className="articleButton" to="/articles/post">
            Post an article!
          </Link>
        </button>
        <RenderArticles articles={this.props.articles} />
      </div>
    );
    // );
  }

  componentDidMount() {
    this.props.fetchArticles(this.props.match.params.topic);
  }

  // componentDidUpdate() {
  //   if (this.state.topic !== this.props.match.params.topic) {
  //     this.getArticles(this.props.match.params.topic);
  //   }
  // }

  // getArticles = params => {
  //   if (params !== undefined) {
  //     api
  //       .getArticlesByTopicSlug(params)
  //       .then(response => {
  //         let articlesData = response.data.articles.map(article => {
  //           console.log(article.created_by);
  //           return {
  //             ...article,
  //             created_by: article.created_by
  //               ? article.created_by.username
  //               : "Guest"
  //           };
  //         });
  //         this.setState({
  //           articles: articlesData,
  //           topic: params
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   } else {
  //     api
  //       .getAllArticles()
  //       .then(response => {
  //         const articlesData = response.data.articles.map(article => {
  //           return {
  //             ...article,
  //             created_by: article.created_by
  //               ? article.created_by.username
  //               : "Guest"
  //           };
  //         });
  //         this.setState({
  //           articles: articlesData
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //         this.setState({
  //           error: {
  //             statusCode: error.response.status,
  //             message: error.response.data.message
  //           }
  //         });
  //       });
  //   }
  // };
}

const mapStateToProps = state => ({
  articles: state.articles.items
});

export default connect(
  mapStateToProps,
  { fetchArticles }
)(Articles);
