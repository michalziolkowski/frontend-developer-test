import React from "react";
import { Provider } from "react-redux";
import Root from "./components/Root";
import StoreUtils from "./utils/StoreUtils";

const App = () => {
  const store = StoreUtils.configureStore();

  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
