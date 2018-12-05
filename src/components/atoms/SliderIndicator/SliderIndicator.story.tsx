import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import SliderIndicator from ".";

storiesOf("atoms/SliderIndicator", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <SliderIndicator count={number("count", 6)} index={number("index", 2)} />
  ));
