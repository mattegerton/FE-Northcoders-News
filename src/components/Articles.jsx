import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/articleActions";
import PropTypes from "prop-types";
import RenderArticles from "./RenderArticles";
import "./css/Articles.css";
import Loader from "./Loader";
const isEmpty = require("lodash.isempty");

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
        {isEmpty(this.props.articles) ? (
          <div>
            <Loader />
          </div>
        ) : (
          <RenderArticles articles={this.props.articles} />
        )}
      </div>
    );
    // );
  }

  componentDidMount() {
    if (!this.props.articles.topic) {
      this.props.fetchArticles(this.props.match.params.topic);
    }
  }

  componentDidUpdate() {
    if (this.props.topic !== this.props.match.params.topic) {
      this.props.fetchArticles(this.props.match.params.topic);
    }
  }

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

Articles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  articles: PropTypes.array.isRequired,
  topic: PropTypes.string
};

const mapStateToProps = state => ({
  articles: state.articles.items,
  topic: state.articles.topic
});

export default connect(
  mapStateToProps,
  { fetchArticles }
)(Articles);
