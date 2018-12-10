// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

export const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  align-self: stretch;
  justify-content: space-between;
`;

export const AboutView = styled.View`
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-end;
`;

export const SectionsView = styled.View`
  flex-direction: column;
  align-self: stretch;
  justify-content: flex-end;
`;

export const TopMarginTextStyle = `margin-top: ${
  styles.userInfoDetails.headerMargin
};`;
