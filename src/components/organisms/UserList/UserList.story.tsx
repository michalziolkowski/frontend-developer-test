import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import MockUtils from "../../../utils/MockUtils";
import UserList from "./UserList";

storiesOf("organisms/UserList", module)
  .addDecorator(withKnobs)
  .add("default", () => <UserList users={MockUtils.mockUsers} />);
