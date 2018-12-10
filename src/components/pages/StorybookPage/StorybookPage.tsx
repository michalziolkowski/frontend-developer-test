import React from "react";
import {
  NavigationInjectedProps,
  NavigationScreenProp
} from "react-navigation";
// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";
import Storybook from "../../../storybook";
import IconButton from "../../atoms/IconButton";

const { iconColor, backIcon, iconPadding } = styles.detailPage;

class StorybookPage extends React.PureComponent {
  public static goBack = (navigation: NavigationScreenProp<any, any>) => () => {
    navigation.goBack();
  };

  public static navigationOptions = (props: NavigationInjectedProps) => ({
    headerLeft: (
      <>
        <IconButton
          padding={iconPadding}
          onClick={StorybookPage.goBack(props.navigation)}
          iconColor={iconColor}
          iconName={backIcon}
        />
      </>
    )
  });

  public render = () => <Storybook />;
}

export default StorybookPage;
