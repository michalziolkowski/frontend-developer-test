import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import MockUtils from "../../../utils/MockUtils";
import UserDetails from "./UserDetails";

storiesOf("organisms/UserDetails", module).add("default", () => (
  <UserDetails user={MockUtils.mockUser} />
));
