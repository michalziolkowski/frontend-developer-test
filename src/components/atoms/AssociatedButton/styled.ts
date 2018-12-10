// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const {
  size,
  backgroundColor,
  borderColor,
  borderWidth,
  borderIconOffset
} = styles.associatedButton;

export const ButtonContainer = styled.View`
  align-self: center;
  justify-content: center;
  overflow: visible;
`;

export const IconView = styled.View`
  width: ${size};
  height: ${size};
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
  border-color: rgba(0, 0, 0, 0);
  border-radius: 100;
  border-width: ${borderWidth};
  border-color: ${borderColor};
  overflow: hidden;
`;

export const BorderIconView = styled.View`
  position: absolute;
  right: ${borderIconOffset};
  top: ${borderIconOffset};
  elevation: 2;
`;
