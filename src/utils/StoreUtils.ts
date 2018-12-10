import { applyMiddleware, compose, createStore } from "redux";
// @ts-ignore
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";
import { api, Reducer } from "../store";

const configureStore = () => {
  const store = createStore(
    Reducer,
    {},
    compose(applyMiddleware(apiMiddleware, thunk.withExtraArgument(api)))
  );
  return store;
};

export default { configureStore };
