import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../../../resources/styles";
import { BorderIconView, ButtonContainer, IconView } from "./styled";

const {
  activeOpacity,
  iconSize,
  iconName,
  borderColor,
  borderIconName,
  borderIconSize
} = styles.associatedButton;

/**
 * Displays circular icon button with associated icon placed on the border
 */
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
