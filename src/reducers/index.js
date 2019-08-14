import { combineReducers } from "redux";
import ContentReducer from "./reducer_contents";

const rootReducer = combineReducers({
  content: ContentReducer
});

export default rootReducer;
