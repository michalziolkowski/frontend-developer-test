import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";

const {
  iconName,
  iconSize,
  iconColor,
  opacity,
  iconOffset,
  borderWidth,
  borderColor,
  size
} = styles.coupleButton;

const ButtonContainer = styled.View`
  align-self: center;
  justify-content: center;
  overflow: visible;
`;

// TODO implement & test ios shadow
// shadowOpacity: 0.3,
// shadowRadius: 3,
// shadowOffset: {
//     height: 0,
//     width: 0
// },
export const ImageView = styled.View`
  elevation: 1;
  width: ${size};
  height: ${size};
  align-self: center;
  align-items: center;
  justify-content: center;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 100;
  background-color: transparent;
  overflow: hidden;
`;
ImageView.displayName = "ImageView";

// Extra -2 due to overlaying ImageView shadow
export const StyledImage = styled.Image`
  width: ${size - 2};
  height: ${size - 2};
  align-self: center;
  border-width: ${borderWidth};
  border-color: ${borderColor};
  border-radius: 100;
  overflow: hidden;
`;
StyledImage.displayName = "Image";

export const IconView = styled.View`
  position: absolute;
  right: ${iconOffset};
  top: ${iconOffset};
  elevation: 2;
`;

export interface IProps {
  uri: string;
  onClick?: () => void;
}

const CoupleButton = (props: IProps) => {
  const { onClick, uri } = props;

  return (
    <ButtonContainer>
      <TouchableOpacity onPress={onClick} activeOpacity={opacity}>
        <ImageView>
          <StyledImage source={{ uri }} />
        </ImageView>
      </TouchableOpacity>

      <IconView>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      </IconView>
    </ButtonContainer>
  );
};

export default CoupleButton;
