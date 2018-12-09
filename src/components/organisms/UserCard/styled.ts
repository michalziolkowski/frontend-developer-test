// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const {
  width,
  padding,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  associatedButtonOffset,
  headerHeight,
  headerOffset
} = styles.userCard;

export const StyledCard = styled.View`
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  border-color: ${borderColor};
  border-bottom-width: ${borderWidth};
  overflow: hidden;
`;

export const StyledUserInfoDetails = styled.View`
  margin-vertical: ${padding};
  align-self: stretch;
  flex: 1;
`;
StyledUserInfoDetails.displayName = "StyledUserInfoDetails";

export const SliderView = styled.View`
  height: ${width};
  margin-bottom: ${headerHeight - headerOffset};
`;

export const HeaderView = styled.View`
  height: ${headerHeight};
`;

export const UserInfoAnimStyles = {
  width,
  borderColor,
  borderRadius,
  borderWidth,
  backgroundColor,
  paddingHorizontal: padding,
  paddingBottom: padding,
  overflow: "hidden",
  position: "absolute",
  height: width + headerHeight,
  bottom: -width
};

export const AssociatedButtonAnimStyles = {
  position: "absolute",
  top: associatedButtonOffset,
  left: associatedButtonOffset
};
