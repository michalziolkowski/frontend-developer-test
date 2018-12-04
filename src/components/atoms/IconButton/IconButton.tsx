import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";

export interface IProps {
  iconName: string;
  iconColor?: string;
  onClick?: () => void;
}

export const StyledTouchable = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

const IconButton = ({
  iconName,
  onClick,
  iconColor = styles.icon.default.color
}: IProps) => {
  const { size } = styles.icon.default;

  return (
    <StyledTouchable onPress={onClick} activeOpacity={0.6}>
      <MaterialCommunityIcons name={iconName} size={size} color={iconColor} />
    </StyledTouchable>
  );
};

export default IconButton;
