import { FETCH_ARTICLES, NEW_ARTICLE } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  newArticle: false,
  error: {},
  topic: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
