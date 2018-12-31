import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import postReducer from "./postReducers";
import userReducer from "./userReducers";

export default combineReducers({
  articles: articleReducer,
  postArticle: postReducer,
  users: userReducer
});
