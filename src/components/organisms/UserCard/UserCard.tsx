import React from "react";
import { Animated, Dimensions, Easing } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import { IUser } from "../../../resources/model";
import styles from "../../../resources/styles";
import CoupleButton from "../../atoms/CoupleButton";
import ImageSlider from "../../molecules/ImageSlider";
import UserInfoDetails from "../../molecules/UserInfoDetails";
import UserInfoHeader from "../../molecules/UserInfoHeader";

const {
  widthRatio,
  padding,
  backgroundColor,
  borderRadius,
  arrowIcon,
  infoIcon,
  springAnimationFriction,
  linearAnimationDuration,
  coupleButtonOffset,
  headerHeight
} = styles.userCard;

const componentWidth = Dimensions.get("window").width * widthRatio;

export interface IProps {
  user: IUser;
}

export interface IState {
  isShowingDetails: boolean;
}

export const StyledCard = styled.View`
  padding-horizontal: ${padding};
  padding-vertical: ${padding};
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${backgroundColor};
  border-radius: ${borderRadius};
  overflow: hidden;
`;

export const StyledScrollView = styled.ScrollView`
  margin-vertical: ${padding};
`;
StyledScrollView.displayName = "ScrollView";

export const SliderView = styled.View(
  (props: { size: number }) => `
  margin-bottom: ${headerHeight};
  height: ${props.size};
`
);

export const HeaderView = styled.View`
  height: ${headerHeight};
  padding-vertical: ${padding};
`;

class UserCard extends React.PureComponent<IProps, IState> {
  private yTranslate: Animated.Value;

  constructor(props: IProps) {
    super(props);

    this.yTranslate = new Animated.Value(0);

    this.state = { isShowingDetails: false };
  }

  public render = () => {
    const { info, photos } = this.props.user;
    const { isShowingDetails } = this.state;

    return (
      <StyledCard>
        <SliderView size={componentWidth}>
          <ImageSlider images={photos} viewSize={componentWidth} />
        </SliderView>

        {this.renderCoupleButton()}

        <Animated.View
          id="userInfoAnim"
          style={{
            ...this.userInfoAnimTranslateStyles(),
            backgroundColor,
            position: "absolute",
            height: componentWidth + headerHeight + padding,
            width: componentWidth,
            bottom: -componentWidth
          }}
        >
          <HeaderView>
            <UserInfoHeader
              userInfo={info}
              icon={isShowingDetails ? arrowIcon : infoIcon}
              onIconClick={this.onDetailsClick}
              onHeaderClick={this.onHeaderClick}
            />
          </HeaderView>

          <StyledScrollView>
            <UserInfoDetails userInfo={info} />
          </StyledScrollView>
        </Animated.View>
      </StyledCard>
    );
  };

  private userInfoAnimTranslateStyles = () => {
    const negativeHeight = -componentWidth - padding;

    const detailsMoveY = this.yTranslate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, negativeHeight]
    });

    return { transform: [{ translateY: detailsMoveY }] };
  };

  private coupleButtonAnimTranslateStyles = () => {
    const { size } = styles.coupleButton;

    const moveY = this.yTranslate.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, -size - padding * 2]
    });

    return { transform: [{ translateY: moveY }] };
  };

  private onDetailsClick = () => {
    const { isShowingDetails } = this.state;

    if (!isShowingDetails) {
      this.yTranslate.setValue(0);
      Animated.spring(this.yTranslate, {
        toValue: 1,
        friction: springAnimationFriction
      }).start();
    } else {
      Animated.timing(this.yTranslate, {
        toValue: 0,
        duration: linearAnimationDuration,
        easing: Easing.linear
      }).start();
    }

    this.setState({ isShowingDetails: !isShowingDetails });
  };

  private onHeaderClick = () => {
    // TODO open User Details
  };

  private renderCoupleButton = () => {
    const { associated } = this.props.user;

    if (!associated || associated.photos.length < 1) return null;

    return (
      <Animated.View
        id="coupleButtonAnim"
        style={{
          ...this.coupleButtonAnimTranslateStyles(),
          position: "absolute",
          top: coupleButtonOffset,
          left: coupleButtonOffset
        }}
      >
        <CoupleButton uri={associated.photos[0].url} />
      </Animated.View>
    );
  };
}

export default UserCard;
