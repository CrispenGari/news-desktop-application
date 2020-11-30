import { combineReducers } from "redux";

import newsReducer from "./newsReducer";
import categoryReducer from "./categoryReducer";
import selectedTabReducer from "./selectedTabReducer";
const rootReducers = combineReducers({
  news: newsReducer,
  category: categoryReducer,
  selectedTab: selectedTabReducer,
});

export default rootReducers;
