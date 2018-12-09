// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const { headerHeight, padding, associatedButtonOffset } = styles.userDetails;

export const StyledScrollView = styled.View`
  flex: 1;
  padding-horizontal: ${padding};
  padding-vertical: ${padding};
`;

export const CoupleView = styled.View`
  position: absolute;
  left: ${associatedButtonOffset};
  top: ${associatedButtonOffset};
`;

export const HeaderView = styled.View`
  height: ${headerHeight};
`;

export const DetailsView = styled.View`
  flex: 1;
  align-self: stretch;
`;
