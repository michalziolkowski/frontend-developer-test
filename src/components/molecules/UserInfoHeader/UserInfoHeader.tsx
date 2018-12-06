import React from "react";
import { TouchableOpacity } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import { IUserInfo } from "../../../resources/model";
import styles from "../../../resources/styles";
import IconButton from "../../atoms/IconButton";
import Text from "../../atoms/Text";

const { height, paddingVertical, iconButtonSize } = styles.userInfoHeader;

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  align-items: center;
  height: ${height};
  padding-vertical: ${paddingVertical};
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
  userInfo: IUserInfo;
  icon?: string;
  onIconClick?: () => void;
  onHeaderClick?: () => void;
}

const UserInfoHeader = (props: IProps) => {
  const { icon, onIconClick, userInfo, onHeaderClick } = props;
  const renderDetailsIcon = () =>
    icon && (
      <IconView>
        <IconButton iconName={icon} onClick={onIconClick} />
      </IconView>
    );

  const { name, age, type, gender, sexuality } = userInfo;

  return (
    <StyledHeader>
      <TouchableOpacity onPress={onHeaderClick}>
        <HeaderView>
          <Text variant="h1">{`${name}, ${age}`}</Text>

          <Text variant="h3">{`${sexuality} ${gender}, ${type}`}</Text>
        </HeaderView>
      </TouchableOpacity>

      {renderDetailsIcon()}
    </StyledHeader>
  );
};

export default UserInfoHeader;
