import { EXTENDED_ARTICLE } from "../actions/types";

const initialState = {
  article: {},
  comments: []
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case EXTENDED_ARTICLE:
      return {
        ...state,
        article: action.payload.article,
        comments: action.payload.comments
      };
    default:
      return state;
  }
}
