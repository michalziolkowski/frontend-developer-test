import React, { ReactNode } from "react";
import { StyledIndicator, StyledPoint } from "./styled";

export interface IProps {
  index: number;
  count: number;
}

/**
 * Renders styled container with *count* number of points.
 * Point on index *index* is styled to indicate current element
 */
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
