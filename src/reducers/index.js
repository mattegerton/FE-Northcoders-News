import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import postReducer from "./postReducers";
import userReducer from "./userReducers";
import topicReducer from "./topicReducers";
import extendedArticleReducer from "./extendedArticleReducer";

export default combineReducers({
  articles: articleReducer,
  postArticle: postReducer,
  users: userReducer,
  topics: topicReducer,
  extArticle: extendedArticleReducer
});
