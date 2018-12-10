// @ts-ignore
import styled from "styled-components/native";

export const ImageView = styled.View(
  (props: { viewSize: string }) => `
    height: ${props.viewSize};
    width: ${props.viewSize};
    overflow: hidden;
  `
);
ImageView.displayName = "ImageView";
