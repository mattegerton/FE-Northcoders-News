import { EXTENDED_ARTICLE, ARTICLE_VOTES } from "../actions/types";

const initialState = {
  article: {},
  comments: [],
  commentPosted: false,
  voted: ""
};

export default function(state = initialState, action) {
  console.log(action.payload, "<<<<<<<");
  switch (action.type) {
    case EXTENDED_ARTICLE:
      return {
        ...state,
        article: action.payload.article,
        comments: action.payload.comments
      };
    case ARTICLE_VOTES:
      return {
        ...state,
        voted: action.payload.voted,
        article: action.payload
      };
    default:
      return state;
  }
}
