import React from "react";
import { Animated, Easing } from "react-native";
import { IUser } from "../../../resources/model";
import styles from "../../../resources/styles";
import AssociatedButton from "../../atoms/AssociatedButton";
import ImageSlider from "../../molecules/ImageSlider";
import UserInfoDetails from "../../molecules/UserInfoDetails";
import UserInfoHeader from "../../molecules/UserInfoHeader";
import {
  AssociatedButtonAnimStyles,
  HeaderView,
  SliderView,
  StyledCard,
  StyledUserInfoDetails,
  UserInfoAnimStyles
} from "./styled";

const {
  width,
  padding,
  arrowIcon,
  infoIcon,
  springAnimationFriction,
  linearAnimationDuration,
  headerOffset
} = styles.userCard;

export const ASSOCIATED_BTN_ANIM_ID = "associated-btn-anim";
export const USER_INFO_ANIM_ID = "user-info-anim";

export interface IProps {
  user: IUser;
}

export interface IState {
  isShowingDetails: boolean;
  userInfoAnimValue: Animated.Value;
}

class UserCard extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      isShowingDetails: false,
      userInfoAnimValue: new Animated.Value(0)
    };
  }

  public render = () => {
    const { user } = this.props;
    const { info, photos } = user;
    const { isShowingDetails } = this.state;

    const headerIcon = isShowingDetails ? arrowIcon : infoIcon;

    return (
      <StyledCard>
        <SliderView>
          <ImageSlider images={photos} viewSize={width} />
        </SliderView>

        {this.renderAssociatedButton()}

        <Animated.View
          id={USER_INFO_ANIM_ID}
          style={{
            ...this.userInfoAnimTranslateStyles(),
            ...UserInfoAnimStyles
          }}
        >
          <HeaderView>
            <UserInfoHeader
              user={user}
              icon={headerIcon}
              onIconClick={this.onDetailsClick}
            />
          </HeaderView>

          <StyledUserInfoDetails>
            <UserInfoDetails userInfo={info} showPartialAbout />
          </StyledUserInfoDetails>
        </Animated.View>
      </StyledCard>
    );
  };

  private userInfoAnimTranslateStyles = () => {
    const { userInfoAnimValue } = this.state;

    const negativeHeight = -width + headerOffset;

    const detailsMoveY = userInfoAnimValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, negativeHeight]
    });

    return { transform: [{ translateY: detailsMoveY }] };
  };

  private associatedButtonAnimTranslateStyles = () => {
    const { userInfoAnimValue } = this.state;
    const { size } = styles.associatedButton;

    const moveY = userInfoAnimValue.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: [0, 0, -size - padding * 2]
    });

    return { transform: [{ translateY: moveY }] };
  };

  private onDetailsClick = () => {
    const { isShowingDetails, userInfoAnimValue } = this.state;

    if (!isShowingDetails) {
      userInfoAnimValue.setValue(0);

      Animated.spring(userInfoAnimValue, {
        toValue: 1,
        friction: springAnimationFriction
      }).start();
    } else {
      Animated.timing(userInfoAnimValue, {
        toValue: 0,
        duration: linearAnimationDuration,
        easing: Easing.linear
      }).start();
    }

    this.setState({ isShowingDetails: !isShowingDetails });
  };

  private renderAssociatedButton = () => {
    const { associated } = this.props.user;

    return associated ? (
      <Animated.View
        id={ASSOCIATED_BTN_ANIM_ID}
        style={{
          ...this.associatedButtonAnimTranslateStyles(),
          ...AssociatedButtonAnimStyles
        }}
      >
        <AssociatedButton />
      </Animated.View>
    ) : null;
  };
}

export default UserCard;
