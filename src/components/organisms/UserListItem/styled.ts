// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";
import { StyleProp, TextStyle } from "react-native";

const { itemOpacity, iconBottomPadding } = styles.userListItem;

export const StyledCard = styled.View(
  (props: { gotStatus: boolean }) => `
  align-self: stretch;
  align-items: center;
  justify-content: center;
  overflow: visible;
  opacity: ${props.gotStatus ? itemOpacity.withStatus : itemOpacity.default};
`
);

export const StyledListItem = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CardShadowOptions = {
  color: "#000",
  border: 3,
  radius: 4,
  opacity: 0.3,
  x: 1,
  y: 2,
  style: {
    marginVertical: 10,
    marginHorizontal: 10
  }
};

export const IconStyles: StyleProp<TextStyle> = {
  position: "absolute",
  paddingBottom: iconBottomPadding
};
