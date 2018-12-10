// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const { iconButtonSize } = styles.userInfoHeader;

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  flex: 1;
  align-items: center;
`;
StyledHeader.displayName = "Header";

export const HeaderView = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const IconView = styled.View`
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  height: ${iconButtonSize};
  width: ${iconButtonSize};
`;
