import React, { Component } from "react";
import "./css/PostComment.css";
import * as api from "../api";

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
      created_by: this.props.user
    };
    api.postCommentToArticle(this.props.articleID, comment).then(response => {
      console.log(response);
      this.setState({
        body: "",
        commentPosted: true
      });
    });
  };
}

export default PostComment;
