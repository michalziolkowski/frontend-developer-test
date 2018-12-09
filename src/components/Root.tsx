import React from "react";
import { View } from "react-native";
// @ts-ignore
import { createAppContainer } from "react-navigation";
import { connect } from "react-redux";
// @ts-ignore
import { ThemeProvider } from "styled-components/native";
import Navigator from "./Navigator";

export interface IProps {
  theme?: "dark" | "light";
}

const Root = (props: IProps) => {
  const AppContainer = createAppContainer(Navigator);
  return (
    <ThemeProvider theme={props.theme === "light" ? {} : {}}>
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
          justifyContent: "center",
          backgroundColor: "#ecf0f1"
        }}
      >
        <AppContainer />
      </View>
    </ThemeProvider>
  );
};

// @ts-ignore
const mapStateToProps = state => ({
  theme: state.app.theme
});

export default connect(
  mapStateToProps,
  null
)(Root);
