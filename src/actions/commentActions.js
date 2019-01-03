import { COMMENT_VOTE } from "./types";
import * as api from "../api";

export const voteOnComment = (params, selection, comment) => dispatch => {
  api.voteByCommentId(params, selection).then(response => {
    let vote = comment.votes;
    // selection === "up" ? vote++ : vote--;
    if (selection === "up") {
      comment.votes++;
      vote++;
    } else {
      comment.votes--;
      vote--;
    }
    dispatch({
      type: COMMENT_VOTE,
      payload: {
        ...comment,
        voted: selection === "up" ? "up" : "down",
        votes: vote
      }
    });
  });
};
