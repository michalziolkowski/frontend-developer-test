import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import CoupleButton from ".";

const AtomView = styled.View`
  flex: 1;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;

storiesOf("atoms/CoupleButton", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <AtomView>{story()}</AtomView>)
  .add("default", () => (
    <CoupleButton uri={text("uri", "https://www.placecage.com/200/200")} />
  ));
