import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import AssociatedButton from ".";

storiesOf("atoms/AssociatedButton", module)
  .addDecorator(withKnobs)
  .add("default", () => <AssociatedButton />);
