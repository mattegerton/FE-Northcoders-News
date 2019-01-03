import { COMMENT_VOTE } from "../actions/types";

const initialState = {
  comment: {},
  voted: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COMMENT_VOTE:
      return {
        ...state,
        voted: action.payload.voted,
        comment: action.payload
      };
    default:
      return state;
  }
}
