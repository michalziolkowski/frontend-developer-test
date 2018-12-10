import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import MockUtils from "../../../utils/MockUtils";
import UserCard from "./UserCard";

const BackgroundView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background-color: #eee;
`;

storiesOf("organisms/UserCard", module)
  .addDecorator(story => <BackgroundView>{story()}</BackgroundView>)
  .add("default", () => <UserCard user={MockUtils.mockUser} />);
