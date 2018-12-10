import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationScreenProp, withNavigation } from "react-navigation";
import { IUser } from "../../../resources/model";
import routes from "../../../resources/routes";
import styles from "../../../resources/styles";
import IconButton from "../../atoms/IconButton";
import Text from "../../atoms/Text";
import { HeaderView, IconView, StyledHeader } from "./styled";

const { headerLinkOpacity } = styles.userInfoHeader;

export interface IProps {
  user: IUser;
  icon?: string;
  onIconClick?: () => void;
  navigation?: NavigationScreenProp<any, any>;
}

/**
 * Renders header for given *user*.
 * Header text contains userInfo's name, age, sexuality, gender & type
 * Header text is clickable and navigates to DetailsPage.
 * If *icon* is specified clickable icon renders to the side and triggers *onIconClick* if pressed.
 */
export const PureUserInfoHeader = (props: IProps) => {
  const { icon, onIconClick, user } = props;

  /**
   * Displays clickable icon if *icon* defined
   */
  const renderDetailsIcon = () =>
    icon && (
      <IconView>
        <IconButton iconName={icon} onClick={onIconClick} />
      </IconView>
    );

  /**
   * Navigates to DetailsPage with id parameter from *user* id
   */
  const onHeaderClick = () => {
    if (props.navigation) {
      props.navigation.push(routes.userDetails, { id: user.localId });
    }
  };

  const { name, age, type, gender, sexuality } = user.info;

  return (
    <StyledHeader>
      <TouchableOpacity
        activeOpacity={headerLinkOpacity}
        onPress={onHeaderClick}
      >
        <HeaderView>
          <Text variant="h1">{`${name}, ${age}`}</Text>

          <Text variant="h3">{`${sexuality} ${gender}, ${type}`}</Text>
        </HeaderView>
      </TouchableOpacity>

      {renderDetailsIcon()}
    </StyledHeader>
  );
};

const UserInfoHeader = withNavigation(PureUserInfoHeader);
UserInfoHeader.displayName = "UserInfoHeader";
export default UserInfoHeader;
