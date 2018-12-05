import React from "react";
// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";

type TextVariant = "default" | "h1" | "h2" | "h3";

export const StyledText = styled.Text(
  (props: { variant: TextVariant }) => `
    font-weight: ${styles.text.fontWeight[props.variant]};
    font-size: ${styles.text.fontSize[props.variant]};
    color: ${styles.text.color[props.variant]};
  `
);
StyledText.displayName = "Text";

export interface IProps {
  variant?: TextVariant;
  children: string;
}

const Text = ({ variant = "default", children }: IProps) => (
  <StyledText variant={variant} children={children} />
);

export default Text;
