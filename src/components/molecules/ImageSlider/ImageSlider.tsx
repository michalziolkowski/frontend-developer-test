import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { IImage } from "../../../resources/model";
import CachingImage from "../../atoms/CachingImage";
import SliderIndicator from "../../atoms/SliderIndicator";
import { IndicatorView, StyledTouchable } from "./styled";

export interface IProps {
  images: IImage[];
  viewSize: number;
}

export interface IState {
  index: number;
  count: number;
}

/**
 * Renders touchable CachingImage for given *images* array and SliderIndicator for current state *index*.
 * On being clicked increases *index* (or sets to 0 on making full circle) and displays next image from *images* array.
 * If *images* array is empty, renders placeholder view with *viewSize* hegiht & width
 */
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

  /**
   * Renders CachingImage & SliderIndicator if images array is not empty.
   * Otherwise renders View for given size (sort of a placeholder)
   */
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
