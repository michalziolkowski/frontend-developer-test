import React from "react";
// @ts-ignore
import { Image } from "react-native-expo-image-cache";
// @ts-ignore
import styled from "styled-components/native";

export const ImageView = styled.View(
  (props: { viewSize: string }) => `
    height: ${props.viewSize};
    width: ${props.viewSize};
    overflow: hidden;
  `
);
ImageView.displayName = "ImageView";

export interface IProps {
  viewSize: number;
  url: string;
  nextUrl: string;
}

export interface IState {
  shouldSwitchImages: boolean;
}

export default class CachingImage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { shouldSwitchImages: false };
  }

  public shouldComponentUpdate = (nextProps: IProps) => {
    const { url, nextUrl } = this.props;
    const { shouldSwitchImages } = this.state;

    if (url !== nextProps.url && nextUrl !== nextProps.nextUrl) {
      this.setState({ shouldSwitchImages: !shouldSwitchImages });
      return false;
    }

    return true;
  };

  public render = () => {
    const { url, nextUrl, viewSize } = this.props;
    const { shouldSwitchImages } = this.state;

    const primaryUrl = shouldSwitchImages ? nextUrl : url;
    const secondaryUrl = !shouldSwitchImages ? nextUrl : url;

    const images = [
      <Image
        id="primary"
        key={0}
        uri={primaryUrl}
        style={{ height: viewSize, width: viewSize }}
      />,
      <Image
        id="secondary"
        key={1}
        uri={secondaryUrl}
        style={{ height: viewSize, width: viewSize }}
      />
    ];

    if (shouldSwitchImages) {
      images.reverse();
    }

    return <ImageView viewSize={viewSize}>{images}</ImageView>;
  };
}
