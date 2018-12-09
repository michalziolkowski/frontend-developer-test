import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationScreenProp, withNavigation } from "react-navigation";
// @ts-ignore
import styled from "styled-components/native";
import { IUser } from "../../../resources/model";
import routes from "../../../resources/routes";
import styles from "../../../resources/styles";
import IconButton from "../../atoms/IconButton";
import Text from "../../atoms/Text";

const { iconButtonSize, headerLinkOpacity } = styles.userInfoHeader;

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  flex: 1;
  align-items: center;
`;
StyledHeader.displayName = "Header";

const HeaderView = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const IconView = styled.View`
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  height: ${iconButtonSize};
  width: ${iconButtonSize};
`;

export interface IProps {
  user: IUser;
  icon?: string;
  onIconClick?: () => void;
  navigation?: NavigationScreenProp<any, any>;
}

export const PureUserInfoHeader = (props: IProps) => {
  const { icon, onIconClick, user } = props;

  const renderDetailsIcon = () =>
    icon && (
      <IconView>
        <IconButton iconName={icon} onClick={onIconClick} />
      </IconView>
    );

  const onHeaderClick = () => {
    if (props.navigation) {
      props.navigation.navigate(routes.userDetails, { id: user.localId });
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

export default withNavigation(PureUserInfoHeader);
