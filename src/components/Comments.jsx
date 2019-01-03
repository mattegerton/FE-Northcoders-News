import React, { Component } from "react";
import { connect } from "react-redux";
import { voteOnComment } from "../actions/commentActions";

class Comments extends Component {
  render() {
    return (
      <div>
        {this.props.extComments.length > 0 ? (
          <div>
            {this.props.extComments.map(comment => {
              return (
                <div key={comment._id}>
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
                              this.props.commentVoted === "down" &&
                              this.props.comment._id === comment._id
                                ? true
                                : false
                            }
                            onClick={() =>
                              this.props.voteOnComment(
                                comment._id,
                                "down",
                                comment
                              )
                            }
                          >
                            <ion-icon name="thumbs-down" />
                          </button>
                          <button
                            disabled={
                              this.props.commentVoted === "up" &&
                              this.props.comment._id === comment._id
                                ? true
                                : false
                            }
                            onClick={() =>
                              this.props.voteOnComment(
                                comment._id,
                                "up",
                                comment
                              )
                            }
                          >
                            <ion-icon name="thumbs-up" />
                          </button>
                        </th>
                        <th />
                        <th>
                          {/* <button
                            onClick={() => this.deleteComment(comment._id)}
                          >
                            <ion-icon name="trash" /> Delete
                          </button> */}
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
            {/* <PostComment
              user={this.props.user}
              articleID={this.props.match.params.articleID}
              commentPosted={this.commentPosted}
            /> */}
          </div>
        ) : (
          <div>
            <p id="noComment">
              There are no comments yet to show.
              <br />
              Be the first to comment on this article!
            </p>
            {/* <PostComment
              user={this.props.user}
              articleID={this.props.match.params.articleID}
              commentPosted={this.commentPosted}
            /> */}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  extComments: state.extArticle.comments,
  commentVoted: state.comments.voted,
  comment: state.comments.comment
});

export default connect(
  mapStateToProps,
  { voteOnComment }
)(Comments);
