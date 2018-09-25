import React, { Component } from "react";
import "./css/ExpandedArticle.css";
import * as api from "../api";
import PostComment from "./PostComment";

class ExpandedArticle extends Component {
  state = {
    article: {},
    comments: [],
    commentPosted: false,
    voted: "",
    commentVoted: ""
  };
  render() {
    return (
      <div>
        <table className="articleTable">
          <tbody>
            <tr>
              <td id="articleTitle">{this.state.article.title}</td>
            </tr>
            <tr id="tableImage">
              <img
                src="https://i.ytimg.com/vi/c-3g5qNkcmU/maxresdefault.jpg"
                alt="placeholder"
                className="articleImage"
              />
            </tr>
            <tr>
              <td id="articleBody">{this.state.article.body}</td>
            </tr>
            <tr>
              <td id="articleCreator">
                Article posted by {this.state.article.created_by}
              </td>
            </tr>
            <tr>
              <th>
                <button
                  disabled={this.state.voted === "down" ? true : false}
                  onClick={() =>
                    this.articleVote(this.state.article._id, "down")
                  }
                >
                  <ion-icon name="thumbs-down" />
                </button>
                <button
                  disabled={this.state.voted === "up" ? true : false}
                  onClick={() => this.articleVote(this.state.article._id, "up")}
                >
                  <ion-icon name="thumbs-up" />
                </button>
              </th>
              <tr id="voteCount">{`${this.state.article.votes} likes`}</tr>
            </tr>
          </tbody>
        </table>
        Comments
        <br />
        {this.state.comments.length > 0 ? (
          <div>
            {this.state.comments.map(comment => {
              return (
                <div>
                  <table className="commentTable">
                    <tbody>
                      <tr>
                        <th id="commentVoteCount">{comment.votes}</th>
                        <th id="commentBody">
                          {comment.body}
                          <p id="commentCreator">{`Posted by ${
                            comment.belongs_to
                          }`}</p>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <button
                            disabled={
                              this.state.commentVoted === "down" ? true : false
                            }
                            onClick={() =>
                              this.commentVote(comment._id, "down", comment)
                            }
                          >
                            <ion-icon name="thumbs-down" />
                          </button>
                          <button
                            disabled={
                              this.state.commentVoted === "up" ? true : false
                            }
                            onClick={() =>
                              this.commentVote(comment._id, "up", comment)
                            }
                          >
                            <ion-icon name="thumbs-up" />
                          </button>
                        </th>
                        <th />
                        <th>
                          <button
                            onClick={() => this.deleteComment(comment._id)}
                          >
                            <ion-icon name="trash" /> Delete
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
            <PostComment
              user={this.props.user}
              articleID={this.props.match.params.articleID}
              commentPosted={this.commentPosted}
            />
          </div>
        ) : (
          <div>
            <p id="noComment">
              There are no comments yet to show.
              <br />
              Be the first to comment on this article!
            </p>
            <PostComment
              user={this.props.user}
              articleID={this.props.match.params.articleID}
              commentPosted={this.commentPosted}
            />
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    this.getComments(articleID);
    this.getArticle(articleID);
  }

  componentDidUpdate() {
    const articleID = this.props.match.params.articleID;
    this.getComments(articleID);
  }

  getComments = params => {
    api
      .getCommentsByArticleId(params)
      .then(response => {
        this.setState({
          comments: response.data.comments
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getArticle = params => {
    api
      .getArticleByArticleId(params)
      .then(response => {
        this.setState({
          article: response.data.article
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  articleVote = (params, selection) => {
    api.voteByArticleId(params, selection).then(response => {
      let vote = this.state.article.votes;
      selection === "up" ? vote++ : vote--;
      this.setState({
        ...this.state,
        voted: selection === "up" ? "up" : "down",
        article: {
          ...this.state.article,
          votes: vote
        }
      });
    });
  };

  setCommentCount = comment => {
    this.setState({
      ...this.state,
      commentCount: comment.vote
    });
  };

  commentVote = (params, selection, comment) => {
    const index = this.state.comments.indexOf(comment);
    api.voteByCommentId(params, selection).then(response => {
      let vote = comment.votes;
      selection === "up" ? vote++ : vote--;
      let updateComments = this.state.comments;
      updateComments[index].votes = response.data.comment.votes;
      this.setState({
        ...this.state,
        comments: updateComments,
        commentVoted: selection === "up" ? "up" : "down"
      });
    });
  };

  deleteComment = params => {
    api.deleteComment(params).then(response => {
      console.log(response);
      let updateComments = this.state.comments;
      console.log(updateComments);
      this.setState({
        ...this.state,
        comments: updateComments
      });
    });
  };

  // Would be used for implementing a successfully posted message.
  // commentPosted = () => {
  //   this.setState({
  //     commentPosted: true
  //   });
  // };
}

export default ExpandedArticle;
