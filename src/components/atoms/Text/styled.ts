// @ts-ignore SC native imports bug
import styled from "styled-components/native";
import styles from "../../../resources/styles";
import { TextVariant } from "./Text";

export const StyledText = styled.Text(
  (props: { variant: TextVariant; style: string }) => `
    font-weight: ${styles.text.fontWeight[props.variant]};
    font-size: ${styles.text.fontSize[props.variant]};
    color: ${styles.text.color[props.variant]};
    ${props.style}
  `
);
StyledText.displayName = "Text";
