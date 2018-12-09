import { applyMiddleware, compose, createStore } from "redux";
// @ts-ignore
import { apiMiddleware } from "redux-api-middleware";
import thunk from "redux-thunk";
import { api } from "../store/API";
import reducers from "../store/reducers";

const configureStore = () => {
  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(apiMiddleware, thunk.withExtraArgument(api)))
  );
  return store;
};

export default { configureStore };
