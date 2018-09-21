import React, { Component } from "react";
import "./css/ExpandedArticle.css";
import * as api from "../api";
import PostComment from "./PostComment";

class ExpandedArticle extends Component {
  state = {
    article: {},
    comments: [],
    commentPosted: false,
    voted: ""
  };
  render() {
    return (
      <div>
        <table className="articleTable">
          <tbody>
            <tr>
              <td id="articleTitle">{this.state.article.title}</td>
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

  commentPosted = () => {
    this.setState({
      commentPosted: true
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
      console.log(response);
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
}

export default ExpandedArticle;
