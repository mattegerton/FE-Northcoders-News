import React, { Component } from "react";
import "./css/PostComment.css";
import * as api from "../api";
import { connect } from "react-redux";
import { renderExtendedArticle } from "../actions/extendedArticleActions";

class PostComment extends Component {
  state = {
    body: "",
    commentPosted: false
  };
  render() {
    return (
      <div id="comment_form">
        <div>
          <textarea
            className="commentTextArea"
            onChange={this.handleChange}
            value={this.state.body}
            rows="10"
            cols="35"
            name="comment"
            id="comment"
            placeholder="Comment"
          />
        </div>
        <div>
          <input
            id="commentInput"
            type="submit"
            name="submit"
            value="Add Comment"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      body: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const comment = {
      body: this.state.body,
      created_by: "5b740b676ae2b0703855c140"
    };
    api.postCommentToArticle(this.props.articleID, comment).then(res => {
      document.getElementById("commentInput").disabled = true;
      this.props.renderExtendedArticle(
        this.props.article,
        this.props.articleID
      );
    });
  };
}

const mapStateToProps = state => ({
  extArticle: state.extArticle.article,
  extComments: state.extArticle.comments
});

export default connect(
  mapStateToProps,
  { renderExtendedArticle }
)(PostComment);
