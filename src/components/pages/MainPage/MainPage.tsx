import React from "react";
import {
  NavigationInjectedProps,
  NavigationScreenProp
} from "react-navigation";
import { connect } from "react-redux";
// @ts-ignore
import styled from "styled-components/native";
import { IUser } from "../../../resources/model";
import routes from "../../../resources/routes";
import styles from "../../../resources/styles";
import * as actions from "../../../store/actions";
import LogUtils from "../../../utils/LogUtils";
import IconButton from "../../atoms/IconButton";
import UserList from "../../organisms/UserList";

const {
  iconColor,
  storybookIcon,
  themeColor,
  backgroundColor
} = styles.mainPage;

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  background-color: ${backgroundColor};
`;

export interface IProps {
  users?: IUser[];
  fetchUsers?: () => void;
  switchTheme?: () => void;
}

class MainPage extends React.PureComponent<IProps> {
  public static navigateTo = (
    navigation: NavigationScreenProp<any, any>,
    route: string
  ) => () => {
    navigation.navigate(route);
  };

  public static navigationOptions = (props: NavigationInjectedProps) => ({
    headerRight: (
      <>
        <IconButton
          onClick={MainPage.navigateTo(props.navigation, routes.storybook)}
          iconColor={iconColor}
          iconName={storybookIcon}
        />
        <IconButton
          onClick={
            props.navigation.state.params
              ? props.navigation.state.params.switchTheme
              : undefined
          }
          iconColor={iconColor}
          iconName={themeColor}
        />
      </>
    )
  });

  public componentDidMount = () => {
    const { fetchUsers } = this.props;

    // @ts-ignore
    this.props.navigation.setParams({ switchTheme: this.switchTheme });

    if (fetchUsers) {
      fetchUsers();
    }
  };

  public render = () => (
    <StyledContainer>
      <UserList users={this.props.users} />
    </StyledContainer>
  );

  private switchTheme = () => {
    const { switchTheme } = this.props;

    if (switchTheme) {
      switchTheme();
    }
  };
}

const mapStateToProps = (state: any) => ({
  // @ts-ignore
  users: Array.from(state.api.users.values())
});

export default connect(
  mapStateToProps,
  actions
  // @ts-ignore
)(MainPage);
