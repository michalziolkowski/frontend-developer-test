import React from "react";
// @ts-ignore
import { createAppContainer } from "react-navigation";
import Navigator from "./Navigator";

const Root = () => {
  const AppContainer = createAppContainer(Navigator);
  return <AppContainer />;
};

export default Root;
