import React from "react";
// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";

type TextVariant = "default" | "h1" | "h2" | "h3";

export interface IProps {
  variant?: TextVariant;
  children: string;
}

export const StyledText = styled.Text((props: { variant: TextVariant }) => {
  const { fontSize, fontWeight, color } = styles.text[props.variant];

  return `
    font-weight: ${fontWeight};
    font-size: ${fontSize};
    color: ${color};
  `;
});

const Text = ({ variant = "default", children }: IProps) => (
  <StyledText variant={variant} children={children} />
);

export default Text;
