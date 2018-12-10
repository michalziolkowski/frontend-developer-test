import React from "react";
import { StyledText } from "./styled";

export type TextVariant = "default" | "h1" | "h2" | "h3";

export interface IProps {
  variant?: TextVariant;
  children: string;
  style?: string;
  id?: string;
  numberOfLines?: number;
}

/**
 * Displays text for given text *variant*.
 * Styles for specific variants are defined in styles resource
 * Provides props to pass custom style, id of Text component and numberOfLines property
 *
 * Props:
 *
 * variant: "default" | "h1" | "h2" | "h3" - optional (default: "default")
 * children: string
 * style: string - optional
 * id: string - optional
 * numberOfLines: number - optional
 */
const Text = ({
  variant = "default",
  children,
  id,
  style,
  numberOfLines
}: IProps) => (
  <StyledText
    id={id}
    numberOfLines={numberOfLines}
    variant={variant}
    children={children}
    style={style}
  />
);

export default Text;
