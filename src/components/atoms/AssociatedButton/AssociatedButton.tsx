import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const {
  activeOpacity,
  size,
  iconSize,
  iconName,
  backgroundColor,
  borderColor,
  borderWidth,
  borderIconOffset,
  borderIconName,
  borderIconSize
} = styles.associatedButton;

const ButtonContainer = styled.View`
  align-self: center;
  justify-content: center;
  overflow: visible;
`;

export const IconView = styled.View`
  width: ${size};
  height: ${size};
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
  border-color: rgba(0, 0, 0, 0);
  border-radius: 100;
  border-width: ${borderWidth};
  border-color: ${borderColor};
  overflow: hidden;
`;

export const BorderIconView = styled.View`
  position: absolute;
  right: ${borderIconOffset};
  top: ${borderIconOffset};
  elevation: 2;
`;

const AssociatedButton = () => {
  return (
    <ButtonContainer>
      <TouchableOpacity activeOpacity={activeOpacity}>
        <IconView>
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={borderColor}
          />
        </IconView>
      </TouchableOpacity>

      <BorderIconView>
        <MaterialCommunityIcons
          name={borderIconName}
          size={borderIconSize}
          color={borderColor}
        />
      </BorderIconView>
    </ButtonContainer>
  );
};

export default AssociatedButton;
