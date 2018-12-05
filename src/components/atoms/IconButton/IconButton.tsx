import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const StyledTouchable = styled.TouchableOpacity`
  align-items: center;
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
  iconColor = styles.icon.color
}: IProps) => (
  <StyledTouchable onPress={onClick} activeOpacity={styles.button.opacity}>
    <MaterialCommunityIcons
      name={iconName}
      size={styles.icon.size.default}
      color={iconColor}
    />
  </StyledTouchable>
);

export default IconButton;
