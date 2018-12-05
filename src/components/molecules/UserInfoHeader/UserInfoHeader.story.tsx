import { object, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import UserInfoHeader from ".";
import MockUtils from "../../../utils/MockUtils";

const MoleculeView = styled.View`
  flex: 1;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;

storiesOf("molecules/UserInfoHeader", module)
  .addDecorator(withKnobs)
  .addDecorator(story => <MoleculeView>{story()}</MoleculeView>)
  .add("default", () => (
    <UserInfoHeader userInfo={object("userInfo", MockUtils.mockUser.info)} />
  ))
  .add("with information icon", () => (
    <UserInfoHeader
      userInfo={object("userInfo", MockUtils.mockUser.info)}
      detailsIcon={text("detailsIcon", "information")}
    />
  ))
  .add("with down arrow icon", () => (
    <UserInfoHeader
      userInfo={object("userInfo", MockUtils.mockUser.info)}
      detailsIcon={text("detailsIcon", "chevron-down")}
    />
  ));
