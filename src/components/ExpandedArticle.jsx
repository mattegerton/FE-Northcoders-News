import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/articleActions";
import "./css/ExpandedArticle.css";
import * as api from "../api";
import {
  renderExtendedArticle,
  articleVote
} from "../actions/extendedArticleActions";
import PostComment from "./PostComment";
import Error from "./WrongPath";
import { ARTICLE_VOTES } from "../actions/types";
const isEmpty = require("lodash.isempty");

class ExpandedArticle extends Component {
  state = {
    article: {},
    comments: [],
    commentPosted: false,
    voted: "",
    commentVoted: "",
    error: {}
  };

  render() {
    console.log(this.props.extArticle);
    // return isEmpty(this.state.error) ? (
    return (
      <div>
        <table className="articleTable">
          <tbody>
            <tr>
              <td id="articleTitle">{this.props.extArticle.title}</td>
            </tr>
            <tr id="tableImage">
              <img
                src="https://i.ytimg.com/vi/c-3g5qNkcmU/maxresdefault.jpg"
                alt="placeholder"
                className="articleImage"
              />
            </tr>
            <tr>
              <td id="articleBody">{this.props.extArticle.body}</td>
            </tr>
            <tr>
              <td id="articleCreator">
                Article posted by {this.props.extArticle.created_by}
              </td>
            </tr>
            <tr>
              <th>
                <button
                  disabled={this.state.voted === "down" ? true : false}
                  onClick={() =>
                    this.props.articleVote(
                      this.props.extArticle._id,
                      "down",
                      this.props.extArticle
                    )
                  }
                >
                  <ion-icon name="thumbs-down" />
                </button>
                <button
                  disabled={this.state.voted === "up" ? true : false}
                  onClick={() =>
                    this.props.articleVote(
                      this.props.extArticle._id,
                      "up",
                      this.props.extArticle
                    )
                  }
                >
                  <ion-icon name="thumbs-up" />
                </button>
              </th>
              <tr id="voteCount">{`${this.props.extArticle.votes} likes`}</tr>
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
    // ) : (
    //   <Error />
    // );
  }

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    const currentArticle = this.props.articles.filter(article => {
      return article._id === articleID;
    });
    // this.getComments(articleID);
    // this.getArticle(articleID);
    this.props.renderExtendedArticle(currentArticle, articleID);
  }

  // componentDidUpdate() {
  //   const articleID = this.props.match.params.articleID;
  //   this.getComments(articleID);
  // }

  // getComments = params => {
  //   api
  //     .getCommentsByArticleId(params)
  //     .then(response => {
  //       this.setState({
  //         comments: response.data.comments
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  // getArticle = params => {
  // api
  //   .getArticleByArticleId(params)
  //   .then(response => {
  //     const articleData = {
  //       ...response.data.article,
  //       created_by: response.data.article.created_by.username
  //     };
  //     this.setState({
  //       article: articleData
  //     });
  //   })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({
  //         error: {
  //           statusCode: error.response.status,
  //           message: error.response.data.message
  //         }
  //       });
  //     });
  // };

  // articleVote = (params, selection) => dispatch => {
  //   console.log("clik");
  //   api.voteByArticleId(params, selection).then(response => {
  //     let article = this.props.extArticle;
  //     let vote = this.props.extArticle.votes;
  //     selection === "up" ? vote++ : vote--;
  //     // this.setState({
  //     //   ...this.state,
  //     //   voted: selection === "up" ? "up" : "down",
  //     //   article: {
  //     //     ...this.state.article,
  //     //     votes: vote
  //     //   }
  //     // });
  //     dispatch({
  //       type: ARTICLE_VOTES,
  //       payload: {
  //         article: {
  //           ...article,
  //           voted: selection === "up" ? "up" : "down",
  //           votes: vote
  //         }
  //       }
  //     });
  //   });
  // };

  // setCommentCount = comment => {
  //   this.setState({
  //     ...this.state,
  //     commentCount: comment.vote
  //   });
  // };

  // commentVote = (params, selection, comment) => {
  //   const index = this.state.comments.indexOf(comment);
  //   api.voteByCommentId(params, selection).then(response => {
  //     let vote = comment.votes;
  //     selection === "up" ? vote++ : vote--;
  //     let updateComments = this.state.comments;
  //     updateComments[index].votes = response.data.comment.votes;
  //     this.setState({
  //       ...this.state,
  //       comments: updateComments,
  //       commentVoted: selection === "up" ? "up" : "down"
  //     });
  //   });
  // };

  // deleteComment = params => {
  //   api.deleteComment(params).then(response => {
  //     console.log(response);
  //     let updateComments = this.state.comments;
  //     console.log(updateComments);
  //     this.setState({
  //       ...this.state,
  //       comments: updateComments
  //     });
  //   });
  // };

  // Would be used for implementing a successfully posted message.
  // commentPosted = () => {
  //   this.setState({
  //     commentPosted: true
  //   });
  // };
}

const mapStateToProps = state => ({
  articles: state.articles.items,
  topic: state.articles.topic,
  extArticle: state.extArticle.article,
  extComments: state.extArticle.comments,
  commentPosted: state.extArticle.commentPosted,
  voted: state.extArticle.voted
});

export default connect(
  mapStateToProps,
  { renderExtendedArticle, fetchArticles, articleVote }
)(ExpandedArticle);
