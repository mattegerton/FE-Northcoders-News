import React, { Component } from "react";
import PostComment from "./PostComment";
import { connect } from "react-redux";
import { voteOnComment } from "../actions/commentActions";
import { renderExtendedArticle } from "../actions/extendedArticleActions";
import "./css/Comments.css";
import * as api from "../api";

class Comments extends Component {
  render() {
    return (
      <div>
        {this.props.extComments.length > 0 ? (
          <div>
            {this.props.extComments.map(comment => {
              return (
                <div key={comment._id} id="commentContainer">
                  <div id="commentBodyGroup">
                    <div id="commentPoster">
                      {" "}
                      Posted by: {comment.belongs_to}{" "}
                    </div>
                    <div id="commentBody"> {comment.body} </div>
                    <button
                      onClick={() => {
                        this.deleteComment(comment._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div id="commentBtnGroup">
                    <div id="commentVoteGroup">
                      <p> Votes </p>
                      <div> {comment.votes} </div>
                    </div>
                    <button
                      id={`buttonup${comment._id}`}
                      disabled={false}
                      onClick={() =>
                        this.props.voteOnComment(
                          comment._id,
                          "up",
                          comment,
                          this.props.commentVoted
                        )
                      }
                    >
                      <ion-icon name="thumbs-up" />
                    </button>
                    <button
                      id={`buttondown${comment._id}`}
                      disabled={false}
                      onClick={() =>
                        this.props.voteOnComment(
                          comment._id,
                          "down",
                          comment,
                          this.props.commentVoted
                        )
                      }
                    >
                      <ion-icon name="thumbs-down" />
                    </button>
                  </div>
                </div>
              );
            })}
            <PostComment
              articleID={this.props.articleID}
              article={this.props.article}
            />
          </div>
        ) : (
          <div>
            <p id="noComment">
              There are no comments yet to show.
              <br />
              Be the first to comment on this article!
            </p>
            <PostComment articleID={this.props.articleID} />
          </div>
        )}
      </div>
    );
  }

  deleteComment = params => {
    api.deleteComment(params).then(response => {
      this.props.renderExtendedArticle(
        this.props.article,
        this.props.articleID
      );
    });
  };
}

const mapStateToProps = state => ({
  extComments: state.extArticle.comments,
  commentVoted: state.comments.voted,
  comment: state.comments.comment
});

export default connect(
  mapStateToProps,
  { voteOnComment, renderExtendedArticle }
)(Comments);
