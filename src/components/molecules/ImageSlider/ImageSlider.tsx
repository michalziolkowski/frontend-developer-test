import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import { IImage } from "../../../resources/model";
import styles from "../../../resources/styles";
import CachingImage from "../../atoms/CachingImage";
import SliderIndicator from "../../atoms/SliderIndicator";

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

export interface IProps {
  images: IImage[];
  viewSize: number;
}

export interface IState {
  index: number;
  count: number;
}

class ImageSlider extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      count: props.images.length,
      index: 0
    };
  }

  public render = () => (
    <TouchableWithoutFeedback onPress={this.onTouchablePress}>
      <StyledTouchable>{this.renderSlider()}</StyledTouchable>
    </TouchableWithoutFeedback>
  );

  private renderSlider = () => {
    const { viewSize, images } = this.props;
    const { count, index } = this.state;
    if (count === 0) {
      return <View style={{ height: viewSize, width: viewSize }} />;
    }

    return (
      <>
        <CachingImage
          url={images[index].url}
          nextUrl={images[this.getNextIndex()].url}
          viewSize={viewSize}
        />

        <IndicatorView>
          <SliderIndicator count={count} index={index} />
        </IndicatorView>
      </>
    );
  };

  private getNextIndex = (): number => {
    const { count, index } = this.state;
    return (index + 1) % count;
  };

  private onTouchablePress = () => {
    const { count, index } = this.state;
    const nextIndex = (index + 1) % count;
    this.setState({ index: nextIndex });
  };
}

export default ImageSlider;
