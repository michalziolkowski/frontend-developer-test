import React from "react";
// @ts-ignore
import styled from "styled-components/native";
import { IUserInfo } from "../../../resources/model";
import { strings } from "../../../resources/strings";
import styles from "../../../resources/styles";
import TextUtils from "../../../utils/TextUtils";
import Text from "../../atoms/Text";

export interface IProps {
  userInfo: IUserInfo;
}

const StyledView = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
`;

export const TopMarginTextStyle = `margin-top: ${
  styles.userInfo.details.header.margin
};`;

const UserInfoDetails = (props: IProps) => {
  const { about, desires, interests } = props.userInfo;

  return (
    <StyledView>
      <Text>{about}</Text>

      <Text style={TopMarginTextStyle} variant="h2">
        {strings.headerDesires}
      </Text>

      <Text>{TextUtils.getFormattedStringList(desires)}</Text>

      <Text style={TopMarginTextStyle} variant="h2">
        {strings.headerInterests}
      </Text>

      <Text>{TextUtils.getFormattedStringList(interests)}</Text>
    </StyledView>
  );
};

export default UserInfoDetails;
