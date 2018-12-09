import React from "react";
import { ScrollView } from "react-native";
import { IUser } from "../../../resources/model";
import styles from "../../../resources/styles";
import AssociatedButton from "../../atoms/AssociatedButton";
import ImageSlider from "../../molecules/ImageSlider";
import UserInfoDetails from "../../molecules/UserInfoDetails";
import UserInfoHeader from "../../molecules/UserInfoHeader";
import {
  CoupleView,
  DetailsView,
  HeaderView,
  StyledScrollView
} from "./styled";

const { sliderSize } = styles.userDetails;

export interface IProps {
  user: IUser;
}

class UserDetails extends React.PureComponent<IProps> {
  public render = () => {
    const { user } = this.props;
    const { photos, info } = this.props.user;

    return (
      <ScrollView>
        <StyledScrollView>
          <ImageSlider images={photos} viewSize={sliderSize} />

          <HeaderView>
            <UserInfoHeader user={user} />
          </HeaderView>

          <DetailsView>
            <UserInfoDetails userInfo={info} />
          </DetailsView>

          {this.renderAssociatedButton()}
        </StyledScrollView>
      </ScrollView>
    );
  };

  private renderAssociatedButton = () => {
    const { associated } = this.props.user;

    return associated ? (
      <CoupleView>
        <AssociatedButton />
      </CoupleView>
    ) : null;
  };
}

export default UserDetails;
