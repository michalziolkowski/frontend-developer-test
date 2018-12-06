import React, { ReactNode } from "react";
// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const {
  padding,
  borderRadius,
  opacity,
  pointSize,
  pointColor,
  backgroundColor,
  pointMargin
} = styles.sliderIndicator;

export const StyledIndicator = styled.View`
  flex-direction: row;
  align-self: center;
  padding-vertical: ${padding};
  padding-horizontal: ${padding};
  justify-content: center;
  align-items: center;
  opacity: ${opacity};
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
`;
StyledIndicator.displayName = "Indicator";

export const StyledPoint = styled.View((props: { isActive: boolean }) => {
  const { isActive } = props;
  const size = isActive ? pointSize.active : pointSize.inactive;
  const color = isActive ? pointColor.active : pointColor.inactive;

  return `
    justify-content: center;
    margin-horizontal: ${pointMargin};
    height: ${size};
    width: ${size};
    background-color: ${color};
    border-color: rgba(0, 0, 0, 0);
    border-radius: 100;
  `;
});
StyledPoint.displayName = "Point";

export interface IProps {
  index: number;
  count: number;
}

const SliderIndicator = (props: IProps) => {
  const renderPoints = () => {
    const { count, index } = props;

    const children: ReactNode[] = [];
    for (let i = 0; i < count; i = i + 1) {
      children.push(<StyledPoint key={i} isActive={i === index} />);
    }

    return children;
  };

  return <StyledIndicator>{renderPoints()}</StyledIndicator>;
};

export default SliderIndicator;
