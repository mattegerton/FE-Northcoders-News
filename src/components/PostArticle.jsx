import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/PostArticle.css";
import { connect } from "react-redux";
import { postArticle } from "../actions/postActions";
import PropTypes from "prop-types";

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: ""
  };
  render() {
    return this.props.posted ? (
      <div>
        <h3>Your article has been posted! </h3>

        <div className="postedArticlePreview">
          <label className="articlePrevLabel"> Title: </label>
          <p> {this.props.post.title}</p>

          <label className="articlePrevLabel"> Topic: </label>
          <p> {this.props.post.belongs_to} </p>

          <label className="articlePrevLabel"> Body: </label>
          <p> {this.props.post.body} </p>
        </div>

        <Link to="/articles">
          <button id="articlePostedButton">
            Take me back to the article page!
          </button>
        </Link>
      </div>
    ) : (
      <div>
        <h3> Post your article! </h3>
        <h6> Just enter a title, choose a topic and post away! </h6>

        <form>
          <div className="articleForm">
            <div className="articleFormRow">
              <label> Title: </label>
              <input onChange={this.handleArticleTitle} />
            </div>

            <div className="articleFormRow">
              <label> Topic: </label>
              <select onChange={this.handleArticleTopic}>
                <option value="" disabled selected>
                  Select your topic
                </option>
                <option value="cooking">Cooking</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
              </select>
            </div>

            <div className="articleFormRow">
              <label> Body: </label>
              <textarea clos="50" rows="10" onChange={this.handleArticleBody} />
            </div>

            <div className="articleFormRow">
              <label> Post: </label>
              <input
                id="submitArticle"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  handleArticleTitle = event => {
    this.setState({
      title: event.target.value
    });
  };

  handleArticleBody = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleArticleTopic = event => {
    this.setState({
      topic: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const article = {
      title: this.state.title,
      body: this.state.body,
      created_by: this.props.user
    };
    this.props.postArticle(this.state.topic, article);
    // api
    //   .postArticleToTopic(this.state.topic, article)
    //   .then(response => {
    //     this.setState({
    //       posted: true
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };
}

PostArticle.PropTypes = {
  postArticle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posted: state.postArticle.posted,
  post: state.postArticle.post
});

export default connect(
  mapStateToProps,
  { postArticle }
)(PostArticle);
