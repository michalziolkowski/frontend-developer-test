import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import UserInfoDetails from ".";
import MockUtils from "../../../utils/MockUtils";

storiesOf("molecules/UserInfoDetails", module).add("default", () => (
  <UserInfoDetails userInfo={MockUtils.mockUser.info} />
));
