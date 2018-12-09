import { MaterialCommunityIcons } from "@expo/vector-icons";
// @ts-ignore
import { BoxShadow } from "expo-react-native-shadow";
import React from "react";
import {
  Animated,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance
} from "react-native";
import { IUser } from "../../../resources/model";
import styles from "../../../resources/styles";
import UserCard from "../UserCard";
import {
  CardShadowOptions,
  IconStyles,
  StyledCard,
  StyledListItem
} from "./styled";

const { iconSize, iconColor, iconName } = styles.userListItem;

interface IProps {
  user: IUser;
}

type Status = "rejected" | "liked";
type SwipingStatus = "left" | "right" | "idle";

interface IState {
  cardSize: {
    width: number;
    height: number;
  };
  status?: Status;
  swipingStatus: SwipingStatus;
  positionAnimValue: Animated.ValueXY;
  panResponder: PanResponderInstance;
}

export default class UserListItem extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const panResponder = PanResponder.create({
      onPanResponderTerminationRequest: () => false,
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) =>
        this.shouldRespondToGesture(gestureState),
      onPanResponderMove: (_, gestureState) =>
        this.respondToGesture(gestureState),

      onPanResponderRelease: (_, gestureState) =>
        this.onGestureEnd(gestureState)
    });

    this.state = {
      panResponder,
      positionAnimValue: new Animated.ValueXY(),
      swipingStatus: "idle",
      cardSize: { width: 0, height: 0 }
    };
  }

  public render = () => {
    const {
      swipingStatus,
      status,
      panResponder,
      positionAnimValue
    } = this.state;

    const renderBackgroundIcon = swipingStatus !== "idle";
    const backgroundIconStatus =
      swipingStatus === "right" ? "liked" : "rejected";

    return (
      <StyledListItem>
        {renderBackgroundIcon && this.renderStatusIcon(backgroundIconStatus)}

        <Animated.View
          style={positionAnimValue.getLayout()}
          {...panResponder.panHandlers}
        >
          {this.renderUserCard()}
        </Animated.View>

        {status && this.renderStatusIcon(status)}
      </StyledListItem>
    );
  };

  private renderUserCard = () => {
    const { user } = this.props;
    const { cardSize, status } = this.state;

    const isCardSizeCalculated = cardSize.height !== 0 && cardSize.width !== 0;

    const userCard = (
      <StyledCard
        pointerEvents={status ? "none" : "auto"}
        onLayout={this.onCardLayoutChange}
        gotStatus={status}
      >
        <UserCard user={user} />
      </StyledCard>
    );

    if (isCardSizeCalculated) {
      const shadowOpt = {
        ...CardShadowOptions,
        width: cardSize.width,
        height: cardSize.height
      };

      return <BoxShadow setting={shadowOpt}>{userCard}</BoxShadow>;
    }

    return userCard;
  };

  private renderStatusIcon = (status: Status) => {
    const name = status === "liked" ? iconName.like : iconName.reject;
    const color = status === "liked" ? iconColor.like : iconColor.reject;

    return (
      <MaterialCommunityIcons
        name={name}
        size={iconSize}
        color={color}
        style={IconStyles}
      />
    );
  };

  private onCardLayoutChange = (event: LayoutChangeEvent) => {
    const { cardSize } = this.state;
    const isCardSizeCalculated = cardSize.height !== 0 && cardSize.width !== 0;

    if (!isCardSizeCalculated) {
      const { width, height } = event.nativeEvent.layout;
      this.setState({ cardSize: { width, height } });
    }
  };

  /** Gesture respond */

  private respondToGesture = (gestureState: PanResponderGestureState) => {
    const { swipingStatus, positionAnimValue } = this.state;

    if (swipingStatus === "idle") {
      const newswipingStatus = gestureState.dx > 0 ? "right" : "left";
      this.setState({ swipingStatus: newswipingStatus });
    }

    const newX = gestureState.dx + 1;
    positionAnimValue.setValue({ x: newX, y: 0 });
  };

  private shouldRespondToGesture = (gestureState: PanResponderGestureState) => {
    const { status } = this.state;

    const willConsumeGesture =
      !status &&
      !(Math.abs(gestureState.dy) > 7) &&
      !(Math.abs(gestureState.dx) < 1);

    if (!willConsumeGesture) {
      this.onGestureEnd(gestureState);
    }

    return willConsumeGesture;
  };

  private onGestureEnd = (gestureState: PanResponderGestureState) => {
    const { swipingStatus } = this.state;

    if (swipingStatus === "idle") return;

    if (Math.abs(gestureState.dx) < 150) {
      this.animItemBackToCenter();
    } else {
      this.animItemOutOfScreen(gestureState.dx > 0 ? "right" : "left");
    }
  };

  /** Animation */

  private animItemBackToCenter = () => {
    Animated.timing(this.state.positionAnimValue, {
      toValue: { x: 0, y: 0 },
      duration: 100
    }).start(() => {
      this.setState({ swipingStatus: "idle" });
    });
  };

  private animItemOutOfScreen = (swipingStatus: "right" | "left") => {
    const { cardSize, positionAnimValue } = this.state;
    const { width } = cardSize;

    Animated.timing(positionAnimValue, {
      toValue: {
        x: swipingStatus === "right" ? width + 15 : -width - 15,
        y: 0
      },
      duration: 100
    }).start(() => {
      this.setState({ swipingStatus: "idle" }, () => {
        swipingStatus === "right" ? this.onItemLiked() : this.onItemRejected();
      });
    });
  };

  private onItemRejected = () => {
    const { positionAnimValue } = this.state;

    this.setState({ status: "rejected" });

    Animated.spring(positionAnimValue, {
      toValue: { x: 0, y: 0 }
    }).start(() => {
      this.setState({ swipingStatus: "idle" });
    });
  };

  private onItemLiked = () => {
    const { positionAnimValue } = this.state;

    this.setState({ status: "liked" });

    Animated.spring(positionAnimValue, {
      toValue: { x: 0, y: 0 }
    }).start(() => {
      this.setState({ swipingStatus: "idle" });
    });
  };
}
