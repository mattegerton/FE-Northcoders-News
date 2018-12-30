import { POST_ARTICLE } from "../actions/types";

const initialState = {
  post: {},
  posted: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_ARTICLE:
      return {
        ...state,
        post: action.payload.post,
        posted: action.payload.posted
      };
    default:
      return state;
  }
}
