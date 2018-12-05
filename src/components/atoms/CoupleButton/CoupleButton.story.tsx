import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import CoupleButton from ".";

storiesOf("atoms/CoupleButton", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <CoupleButton uri={text("uri", "https://www.placecage.com/200/200")} />
  ));
