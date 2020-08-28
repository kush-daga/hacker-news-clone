import { combineReducers } from "redux";
import app from "./app/reducer";
import postReducer from "./posts/reducer";
const rootReducer = combineReducers({
  app,
  posts: postReducer,
});
export default rootReducer;
