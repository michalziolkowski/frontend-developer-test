import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import IconButton from ".";

const BackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: #fc4600;
`;

storiesOf("atoms/IconButton", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <BackgroundView>{story()}</BackgroundView>)
  .add("heart", () => (
    <IconButton
      iconName={text("iconName", "heart")}
      iconColor={text("iconColor", "#fff")}
    />
  ))
  .add("information", () => (
    <IconButton
      iconName={text("iconName", "information")}
      iconColor={text("iconColor", null)}
    />
  ));
