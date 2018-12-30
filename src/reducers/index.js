import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import postReducer from "./postReducers";

export default combineReducers({
  articles: articleReducer,
  postArticle: postReducer
});
