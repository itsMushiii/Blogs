import { combineReducers } from "redux";

import { BlogReducer } from "./BlogReducer";
import { SingleBlogReducer } from "./BlogReducer";

const rootReducer = combineReducers({
  BlogReducer,
  SingleBlogReducer,
});

export default rootReducer;
