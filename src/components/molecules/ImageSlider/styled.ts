// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const { backgroundColor, indicatorOffset } = styles.imageSlider;

export const StyledTouchable = styled.View`
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
`;

export const IndicatorView = styled.View`
  position: absolute;
  right: ${indicatorOffset};
  top: ${indicatorOffset};
`;
