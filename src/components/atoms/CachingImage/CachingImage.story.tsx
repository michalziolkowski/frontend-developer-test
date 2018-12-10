import { number, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import MockUtils from "../../../utils/MockUtils";
import CachingImage from "./CachingImage";

const { photos } = MockUtils.mockUser;

storiesOf("atoms/CachingImage", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <CachingImage
      url={text("url", photos[0].url)}
      nextUrl={text("nextUrl", photos[1].url)}
      viewSize={number("size", 300)}
    />
  ));
