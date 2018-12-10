import React from "react";
import { IUserInfo } from "../../../resources/model";
import { strings } from "../../../resources/strings";
import TextUtils from "../../../utils/TextUtils";
import Text from "../../atoms/Text";
import {
  AboutView,
  SectionsView,
  StyledView,
  TopMarginTextStyle
} from "./styled";

export const DESIRES_HEADER_ID = "desiresHeader";
export const INTERESTS_HEADER_ID = "interestsHeader";
export const ABOUT_HEADER_ID = "aboutHeader";
export const DESIRES_ID = "desires";
export const INTERESTS_ID = "interests";
export const ABOUT_ID = "about";

export interface IProps {
  userInfo: IUserInfo;
  showPartialAbout?: boolean;
}

/**
 * Renders headers and text for *userInfo* sections.
 * Desires section is only rendered if *userInfo* has defined desires.
 * Interests section is only rendered if *userInfo* has defined interests.
 * If *showPartialAbout* is true, about text is cut to 7 lines.
 */
const UserInfoDetails = ({ showPartialAbout = false, userInfo }: IProps) => {
  const { about, desires, interests } = userInfo;

  const renderUserInfoDesires = () =>
    desires && (
      <>
        <Text id={DESIRES_HEADER_ID} style={TopMarginTextStyle} variant="h2">
          {strings.headerDesires}
        </Text>

        <Text id={DESIRES_ID}>{TextUtils.getFormattedStringList(desires)}</Text>
      </>
    );

  const renderUserInfoInterests = () =>
    interests && (
      <>
        <Text id={INTERESTS_HEADER_ID} style={TopMarginTextStyle} variant="h2">
          {strings.headerInterests}
        </Text>

        <Text id={INTERESTS_ID}>
          {TextUtils.getFormattedStringList(interests)}
        </Text>
      </>
    );

  return (
    <StyledView>
      <AboutView>
        <Text id={ABOUT_HEADER_ID} variant="h2">
          {strings.headerAbout}
        </Text>

        <Text id={ABOUT_ID} numberOfLines={showPartialAbout ? 7 : undefined}>
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
