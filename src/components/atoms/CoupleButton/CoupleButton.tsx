import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
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

export const StyledTouchable = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
`;

export const StyledImage = styled.Image`
  width: ${styles.icon.size.big};
  height: ${styles.icon.size.big};
  border-color: rgba(0, 0, 0, 0);
  background-color: transparent;
  border-radius: 100;
`;
StyledImage.displayName = "Image";

const IconView = styled.View`
  position: absolute;
  right: -5;
  top: -5;
`;

const CoupleButton = (props: IProps) => {
  const { onClick, uri } = props;

  return (
    <ButtonContainer>
      <StyledTouchable onPress={onClick} activeOpacity={styles.button.opacity}>
        <StyledImage source={{ uri }} />
      </StyledTouchable>

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
