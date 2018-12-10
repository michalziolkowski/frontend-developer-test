// @ts-ignore
import styled from "styled-components/native";

export const StyledTouchable = styled.TouchableOpacity(
  (props: { padding: number }) => `
  align-items: center;
  align-self: stretch;
  flex: 1;
  justify-content: center;
  padding-vertical: ${props.padding};
  padding-horizontal: ${props.padding};
`
);
StyledTouchable.displayName = "Touchable";
