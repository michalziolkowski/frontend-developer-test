import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import styles from "../../../resources/styles";
import theme from "../../../resources/theme";

export interface IProps {
  uri: string;
  onClick?: () => void;
}

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
  width: ${styles.icon.size.big};
  height: ${styles.icon.size.big};
  align-self: center;
  align-items: center;
  justify-content: center;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 100;
  background-color: transparent;
  overflow: hidden;
`;
ImageView.displayName = "ImageView";

export const StyledImage = styled.Image`
  width: ${styles.icon.size.big - 2};
  height: ${styles.icon.size.big - 2};
  align-self: center;
  border-width: 2;
  border-color: ${theme.color.primaryDark};
  border-radius: 100;
  overflow: hidden;
`;
StyledImage.displayName = "Image";

const IconView = styled.View`
  position: absolute;
  right: -3;
  top: -3;
  elevation: 2;
`;

const CoupleButton = (props: IProps) => {
  const { onClick, uri } = props;

  return (
    <ButtonContainer>
      <TouchableOpacity onPress={onClick} activeOpacity={styles.button.opacity}>
        <ImageView>
          <StyledImage source={{ uri }} />
        </ImageView>
      </TouchableOpacity>

      <IconView>
        <MaterialCommunityIcons
          name={"heart"}
          size={styles.icon.size.small}
          color={theme.color.primaryDark}
        />
      </IconView>
    </ButtonContainer>
  );
};

export default CoupleButton;
