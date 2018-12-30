import { FETCH_ARTICLES, NEW_ARTICLE } from "../actions/types";

const initialState = {
  items: [],
  topic: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        items: action.payload.articlesData,
        topic: action.payload.params
      };
    default:
      return state;
  }
}