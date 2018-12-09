import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { APIReducer } from "./API";
import { AppReducer } from "./app";

export default combineReducers({
  api: APIReducer,
  app: AppReducer,
  routing: routerReducer
});
