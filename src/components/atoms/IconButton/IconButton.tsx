import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const { size, opacity } = styles.iconButton;

const StyledTouchable = styled.TouchableOpacity`
  align-items: center;
  align-self: stretch;
  flex: 1;
  justify-content: center;
`;
StyledTouchable.displayName = "Touchable";

export interface IProps {
  iconName: string;
  iconColor?: string;
  onClick?: () => void;
}

const IconButton = ({
  iconName,
  onClick,
  iconColor = styles.iconButton.color
}: IProps) => (
  <StyledTouchable onPress={onClick} activeOpacity={opacity}>
    <MaterialCommunityIcons name={iconName} size={size} color={iconColor} />
  </StyledTouchable>
);

export default IconButton;
