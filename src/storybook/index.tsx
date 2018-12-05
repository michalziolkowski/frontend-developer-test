import {
  addDecorator,
  configure,
  getStorybookUI,
  RenderFunction
} from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
// @ts-ignore this file is autogenerated
import { loadStories } from "./generated-stories";
import "./rn-addons";

const StoryView = styled.View`
  flex: 1;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;

addDecorator((story: RenderFunction) => <StoryView>{story()}</StoryView>);

configure(() => loadStories(), module);

export default getStorybookUI({});