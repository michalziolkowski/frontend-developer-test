import { number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import SliderIndicator from ".";

const MoleculeView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

storiesOf("atoms/SliderIndicator", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <MoleculeView>{story()}</MoleculeView>)
  .add("default", () => (
    <SliderIndicator count={number("count", 6)} index={number("index", 2)} />
  ));
