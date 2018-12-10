import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";
import { StyledTouchable } from "./styled";

const { size, opacity } = styles.iconButton;

export interface IProps {
  iconName: string;
  iconColor?: string;
  padding?: number;
  onClick?: () => void;
}

/**
 * Displays clickable icon form MatterialCommunityIcons set.
 * Provides props to set name, color & padding of the icon.
 * Triggers *onClick* when icon is pressed
 *
 * Props:
 * iconName: string
 * iconColor: string - optional
 * padding: number - optional
 * onClick: function - optional
 */
const IconButton = ({
  iconName,
  onClick,
  padding,
  iconColor = styles.iconButton.color
}: IProps) => (
  <StyledTouchable
    padding={padding ? padding : 0}
    onPress={onClick}
    activeOpacity={opacity}
  >
    <MaterialCommunityIcons name={iconName} size={size} color={iconColor} />
  </StyledTouchable>
);

export default IconButton;
