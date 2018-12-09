import React from "react";
import {
  Animated,
  FlatList,
  LayoutChangeEvent,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ViewabilityConfigCallbackPairs,
  ViewToken
} from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import { IUser } from "../../../resources/model";
import styles from "../../../resources/styles";
import LogUtils from "../../../utils/LogUtils";
import UserListItem from "../UserListItem";
import ListFooterComponent from "./ListFooterComponent";
import ListHeaderComponent from "./ListHeaderComponent";
import { StyledExtremeListItem, StyledListItem } from "./styled";

const { initialItemHeight, viewPosition } = styles.userList;

const BOTTOM_ITEM = { localId: "bottom-item-id" } as IUser;

interface IProps {
  users?: IUser[];
}

interface IState {
  itemHeight: number;
  initialHeightMeasured: boolean;
  index: number;
  currUsers: IUser[];
  scale: Animated.Value;
  nextVisibleIndex: number;
  prevVisibleIndex: number;
}

export default class UserList extends React.PureComponent<IProps, IState> {
  private listRef: FlatList<IUser> | null;
  private viewabilityCallbackConfig: ViewabilityConfigCallbackPairs;

  constructor(props: IProps) {
    super(props);

    const { users } = props;

    this.viewabilityCallbackConfig = [
      {
        viewabilityConfig: {
          itemVisiblePercentThreshold: 15
        },
        onViewableItemsChanged: this.handleVisibleItem
      }
    ];

    this.listRef = null;

    this.state = {
      nextVisibleIndex: 0,
      prevVisibleIndex: 0,
      scale: new Animated.Value(1),
      initialHeightMeasured: false,
      itemHeight: initialItemHeight,
      index: 0,
      currUsers: users ? users : []
    };
  }

  public componentDidUpdate = (prevProps: IProps) => {
    const { users } = this.props;

    if (prevProps.users !== users) {
      this.setState({ currUsers: users ? users : [] });
    }
  };

  public render = () => {
    const { currUsers } = this.state;

    const items = currUsers.length > 0 ? [...currUsers, BOTTOM_ITEM] : [];

    return (
      <FlatList
        ref={ref => {
          this.listRef = ref;
        }}
        style={{ alignSelf: "stretch" }}
        data={items}
        maxToRenderPerBatch={20}
        initialNumToRender={3}
        decelerationRate={this.getDecelerationRate()}
        bounces={false}
        removeClippedSubviews
        onMomentumScrollBegin={this.onMomentumScrollBegin}
        viewabilityConfigCallbackPairs={this.viewabilityCallbackConfig}
        getItemLayout={this.getItemLayout}
        ListHeaderComponent={this.getHeaderComponent()}
        onScrollToIndexFailed={this.onScrollToIndexFailed}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  private renderItem = ({ item, index }: ListRenderItemInfo<IUser>) => {
    const { currUsers, itemHeight } = this.state;

    return index === currUsers.length ? (
      <StyledExtremeListItem key={index} height={itemHeight}>
        <ListFooterComponent />
      </StyledExtremeListItem>
    ) : (
      <StyledListItem onLayout={this.onFirstItemLayout} key={index}>
        <UserListItem key={index} user={item} />
      </StyledListItem>
    );
  };

  private getHeaderComponent = () => (
    <ListHeaderComponent height={this.state.itemHeight} />
  );

  private getDecelerationRate = () => (Platform.OS === "android" ? 0.1 : 0.95);

  private getItemLayout = (_: any, index: number) => ({
    index,
    length: this.state.itemHeight,
    offset: this.state.itemHeight * index
  });

  private onMomentumScrollBegin = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const { prevVisibleIndex, nextVisibleIndex } = this.state;
    const { velocity } = event.nativeEvent;

    if (!this.listRef || !velocity) return;

    const nextIndex = velocity.y > 0 ? prevVisibleIndex : nextVisibleIndex;

    this.listRef.scrollToIndex({
      viewPosition,
      index: nextIndex,
      animated: true
    });

    this.setState({ index: nextIndex });
  };

  private handleVisibleItem = (info: {
    viewableItems: ViewToken[];
    changed: ViewToken[];
  }) => {
    const { nextVisibleIndex, prevVisibleIndex } = this.state;

    let prevItemSet = false;
    let newPrevVisibleIndex = prevVisibleIndex;
    let newNextVisibleIndex = nextVisibleIndex;

    info.viewableItems.forEach((item: ViewToken) => {
      if (item.isViewable && item.index && !prevItemSet) {
        newPrevVisibleIndex = item.index;
        prevItemSet = true;
      }

      if (item.isViewable && item.index) {
        newNextVisibleIndex = item.index;
      }
    });

    this.setState({
      nextVisibleIndex: newNextVisibleIndex,
      prevVisibleIndex: newPrevVisibleIndex
    });
  };

  private onScrollToIndexFailed = () => {
    LogUtils.log("UserList", "onScrollToIndexFailed");
  };

  private keyExtractor = (item: IUser) => item.localId;

  private onFirstItemLayout = (event: LayoutChangeEvent) => {
    if (this.state.initialHeightMeasured) return;

    const { height } = event.nativeEvent.layout;
    this.setState({ itemHeight: height, initialHeightMeasured: true });
  };
}
