import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import IconButton from ".";
import theme from "../../../resources/theme";

const BackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  align-self: stretch;
  background-color: ${theme.color.primary};
`;

const AtomView = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
`;

storiesOf("atoms/IconButton", module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <BackgroundView>
      <AtomView>{story()}</AtomView>
    </BackgroundView>
  ))
  .add("heart", () =>
    <IconButton
      iconName={text("iconName", "heart")}
      iconColor={text("iconColor", theme.color.white)}
    />
  ).add("information", () =>
    <IconButton
      iconName={text("iconName", "information")}
      iconColor={text("iconColor", null)}
    />
  );
