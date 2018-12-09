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
  showPartialAbout?: boolean;
}

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  justify-content: space-between;
`;

const AboutView = styled.View`
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-end;
`;

const SectionsView = styled.View`
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-end;
`;

export const TopMarginTextStyle = `margin-top: ${
  styles.userInfoDetails.headerMargin
};`;

const UserInfoDetails = ({ showPartialAbout = false, userInfo }: IProps) => {
  const { about, desires, interests } = userInfo;

  const renderUserInfoDesires = () =>
    desires && (
      <>
        <Text id="desiresHeader" style={TopMarginTextStyle} variant="h2">
          {strings.headerDesires}
        </Text>

        <Text id="desires">{TextUtils.getFormattedStringList(desires)}</Text>
      </>
    );

  const renderUserInfoInterests = () =>
    interests && (
      <>
        <Text id="interestsHeader" style={TopMarginTextStyle} variant="h2">
          {strings.headerInterests}
        </Text>

        <Text id="interests">
          {TextUtils.getFormattedStringList(interests)}
        </Text>
      </>
    );

  return (
    <StyledView>
      <AboutView>
        <Text id="aboutHeader" variant="h2">
          {strings.headerAbout}
        </Text>

        <Text id="about" numberOfLines={showPartialAbout ? 7 : undefined}>
          {about}
        </Text>
      </AboutView>

      <SectionsView>
        {renderUserInfoDesires()}

        {renderUserInfoInterests()}
      </SectionsView>
    </StyledView>
  );
};

export default UserInfoDetails;
