import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import Text from ".";

const defaultText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

storiesOf("atoms/Text", module)
  .addDecorator(withKnobs)
  .add("default", () => <Text>{text("childrenText", defaultText)}</Text>)
  .add("h1", () => (
    <Text variant={"h1"}>{text("childrenText", defaultText)}</Text>
  ))
  .add("h2", () => (
    <Text variant={"h2"}>{text("childrenText", defaultText)}</Text>
  ))
  .add("h3", () => (
    <Text variant={"h3"}>{text("childrenText", defaultText)}</Text>
  ));
