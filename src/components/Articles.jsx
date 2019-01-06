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
  render() {
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
