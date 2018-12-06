import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import MockUtils from "../../../utils/MockUtils";
import ImageSlider from "./ImageSlider";

storiesOf("molecules/ImageSlider", module).add("default", () => (
  <ImageSlider images={MockUtils.mockUser.photos} />
));
