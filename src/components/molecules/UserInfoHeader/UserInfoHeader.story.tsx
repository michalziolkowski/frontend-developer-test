import { object, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import UserInfoHeader from ".";
import MockUtils from "../../../utils/MockUtils";

storiesOf("molecules/UserInfoHeader", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <UserInfoHeader user={object("user", MockUtils.mockUser)} />
  ))
  .add("with information icon", () => (
    <UserInfoHeader
      user={object("user", MockUtils.mockUser)}
      icon={text("icon", "information")}
    />
  ))
  .add("with down arrow icon", () => (
    <UserInfoHeader
      user={object("user", MockUtils.mockUser)}
      icon={text("icon", "chevron-down")}
    />
  ));
