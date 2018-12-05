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
    <UserInfoHeader userInfo={object("userInfo", MockUtils.mockUser.info)} />
  ))
  .add("with information icon", () => (
    <UserInfoHeader
      userInfo={object("userInfo", MockUtils.mockUser.info)}
      icon={text("icon", "information")}
    />
  ))
  .add("with down arrow icon", () => (
    <UserInfoHeader
      userInfo={object("userInfo", MockUtils.mockUser.info)}
      icon={text("icon", "chevron-down")}
    />
  ));
