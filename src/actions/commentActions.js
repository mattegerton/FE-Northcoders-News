import { COMMENT_VOTE } from "./types";
import * as api from "../api";

export const voteOnComment = (
  params,
  selection,
  comment,
  newState
) => dispatch => {
  // check if button is disabled //
  let check = document.getElementById(`button${selection}${comment._id}`)
    .disabled;

  let color = "";

  if (selection === "up") {
    color = "green";
  } else {
    color = "red ";
  }

  if (!check) {
    document.getElementById(`button${selection}${comment._id}`).disabled = true;
    document.getElementById(
      `button${selection}${comment._id}`
    ).style.color = color;
  }

  // change vote count api
  api.voteByCommentId(params, selection).then(response => {
    let vote = comment.votes;
    if (selection === "up") {
      document.getElementById(`buttondown${comment._id}`).disabled = true;
      comment.votes++;
      vote++;
    } else {
      document.getElementById(`buttonup${comment._id}`).disabled = true;
      comment.votes--;
      vote--;
    }

    // add to redux store
    dispatch({
      type: COMMENT_VOTE,
      payload: {
        ...comment,
        votes: vote,
        voted: {
          ...newState,
          [comment._id]: selection === "up" ? "up" : "down"
        }
      }
    });
  });
};
