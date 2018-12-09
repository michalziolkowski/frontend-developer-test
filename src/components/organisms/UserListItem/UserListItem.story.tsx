import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import MockUtils from "../../../utils/MockUtils";
import UserListItem from "./UserListItem";

storiesOf("organisms/UserListItem", module)
  .addDecorator(withKnobs)
  .add("default", () => <UserListItem user={MockUtils.mockUser} />);
