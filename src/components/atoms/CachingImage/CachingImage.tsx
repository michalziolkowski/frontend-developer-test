import React from "react";
// @ts-ignore
import { Image } from "react-native-expo-image-cache";
import { ImageView } from "./styled";

export const PRIMARY_ID = "primary";
export const SECONDARY_ID = "secondary";

export interface IProps {
  viewSize: number;
  url: string;
  nextUrl: string;
}

export interface IState {
  shouldSwitchImages: boolean;
}

/**
 * Displays image with URI for given *url*, size of the image is determined by *viewSize*.
 * Additional url - *nextUrl* is displayed in hidden mode so it is actually loaded but not visible to the user
 * On props change images are switched.
 * This action allows next image to render more smoothly and avoids android-specific image flickering on load
 */
export default class CachingImage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { shouldSwitchImages: false };
  }

  /**
   * If *url* & *nextUrl* has changed component doesn't instantly re-render
   * It sets *shouldSwitchImages* state to use precached image for display
   */
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
        id={PRIMARY_ID}
        key={0}
        uri={primaryUrl}
        style={{ height: viewSize, width: viewSize }}
      />,
      <Image
        id={SECONDARY_ID}
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
