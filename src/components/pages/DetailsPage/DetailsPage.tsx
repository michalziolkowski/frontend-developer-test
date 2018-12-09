import React from "react";
import { connect } from "react-redux";
// @ts-ignore
import styled from "styled-components/native";
import { IUser } from "../../../resources/model";
import styles from "../../../resources/styles";
import UserDetails from "../../organisms/UserDetails";

const { backgroundColor } = styles.detailPage;

const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-self: stretch;
  align-items: center;
  background-color: ${backgroundColor};
`;

export interface IProps {
  user?: IUser;
  getRandomUsers?: () => void;
}

class DetailsPage extends React.PureComponent<IProps> {
  public render = () => {
    const { user } = this.props;

    return user ? (
      <StyledContainer>
        <UserDetails user={user} />
      </StyledContainer>
    ) : null;
  };
}

const mapStateToProps = (state: any, ownProps: IProps) => {
  // @ts-ignore
  const userId = ownProps.navigation.getParam("id", "NO-ID");

  return {
    // @ts-ignore
    user: state.api.users.get(userId)
  };
};

export default connect(mapStateToProps)(DetailsPage);
