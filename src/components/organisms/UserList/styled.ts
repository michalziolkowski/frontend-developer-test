// @ts-ignore
import styled from "styled-components/native";

export const StyledExtremeListItem = styled.View(
  (props: { height: number }) => `
  background-color: transparent;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  height: ${props.height};
  `
);

export const StyledListItem = styled.View`
  justify-content: center;
  align-items: center;
`;

export const HeaderInfoView = styled.View`
  flex-direction: row;
  align-self: stretch;
  padding-horizontal: 50;
  padding-vertical: 50;
  justify-content: space-between;
`;
