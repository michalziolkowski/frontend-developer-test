import React from "react";
// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";

type TextVariant = "default" | "h1" | "h2" | "h3";

export const StyledText = styled.Text(
  (props: { variant: TextVariant; style: string }) => `
    font-weight: ${styles.text.fontWeight[props.variant]};
    font-size: ${styles.text.fontSize[props.variant]};
    color: ${styles.text.color[props.variant]};
    ${props.style}
  `
);
StyledText.displayName = "Text";

export interface IProps {
  variant?: TextVariant;
  children: string;
  style?: string;
  numberOfLines?: number;
}

const Text = ({
  variant = "default",
  children,
  style,
  numberOfLines
}: IProps) => (
  <StyledText
    numberOfLines={numberOfLines}
    variant={variant}
    children={children}
    style={style}
  />
);

export default Text;
