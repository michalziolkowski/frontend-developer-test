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
import IconButton from "../../atoms/IconButton";
import UserList from "../../organisms/UserList";
import Text from "../../atoms/Text";

const {
  iconColor,
  storybookIcon,
  backgroundColor,
  iconPadding
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
  isLoading: boolean;
  error?: string;
  fetchUsers?: () => void;
}

class MainPage extends React.PureComponent<IProps> {
  public static navigateTo = (
    navigation: NavigationScreenProp<any, any>,
    route: string
  ) => () => {
    navigation.push(route);
  };

  public static navigationOptions = (props: NavigationInjectedProps) => ({
    headerRight: (
      <IconButton
        padding={iconPadding}
        onClick={MainPage.navigateTo(props.navigation, routes.storybook)}
        iconColor={iconColor}
        iconName={storybookIcon}
      />
    )
  });

  public componentDidMount = () => {
    const { fetchUsers, users } = this.props;

    if ((!users || users.length === 0) && fetchUsers) {
      fetchUsers();
    }
  };

  public render = () => (
    <StyledContainer>{this.renderListOrStatus()}</StyledContainer>
  );

  private renderListOrStatus = () => {
    const { isLoading, error } = this.props;

    if (isLoading) {
      return <Text>Loading...</Text>;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    return <UserList users={this.props.users} />;
  };
}

const mapStateToProps = (state: any) => ({
  // @ts-ignore
  users: Array.from(state.api.users.values()),
  isLoading: state.api.isLoading,
  error: state.api.error
});

export default connect(
  mapStateToProps,
  actions
  // @ts-ignore
)(MainPage);
