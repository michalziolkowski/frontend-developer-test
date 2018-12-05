import React, { ReactNode } from "react";
// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

export const StyledIndicator = styled.View`
  flex-direction: row;
  align-self: baseline;
  padding-vertical: ${styles.sliderIndicator.padding};
  padding-horizontal: ${styles.sliderIndicator.padding};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 2;
`;
StyledIndicator.displayName = "Indicator";

export const StyledPoint = styled.View((props: { isActive: boolean }) => {
  const { isActive } = props;
  const { point } = styles.sliderIndicator;

  const size = isActive ? point.size.active : point.size.inactive;
  const color = isActive ? point.color.active : point.color.inactive;

  return `
    justify-content: center;
    margin-horizontal: ${point.margin};
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

  return (
    <StyledIndicator activeOpacity={styles.sliderIndicator.opacity}>
      {renderPoints()}
    </StyledIndicator>
  );
};

export default SliderIndicator;
