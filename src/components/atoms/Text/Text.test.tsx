import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import TestUtils from "../../../utils/TestUtils";
import Text, { IProps, StyledText } from "./Text";

const testText = "test-text";

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let text: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow<IProps>(<Text>{testText}</Text>);
  text = wrapper.find(`${StyledText.displayName}`);
});

/* Test Cases */
describe("PROPS", () => {
  it('*variant* is "default" by default', () => {
    expect(wrapper.props().variant).toEqual("default");
  });
});

describe("RENDER", () => {
  describe("Text", () => {
    it("renders", () => {
      expect(text.exists()).toBe(true);
    });

    it("contains *children* text", () => {
      expect(text.contains(testText)).toBe(true);
    });
  });
});

describe("STYLE", () => {
  describe("Text", () => {
    it("if *variant* is 'default' has default text style", () => {
      // given
      const styledText = TestUtils.renderComponentStyles(
        <StyledText variant="default" />
      );
      const { fontWeight, fontSize, color } = styles.text.default;

      // then
      expect(styledText).toMatchObject({ fontWeight, fontSize, color });
    });

    it("if *variant* is 'h1' has h1 text style", () => {
      // given
      const styledText = TestUtils.renderComponentStyles(
        <StyledText variant="h1" />
      );
      const { fontWeight, fontSize, color } = styles.text.h1;

      // then
      expect(styledText).toMatchObject({ fontWeight, fontSize, color });
    });

    it("if *variant* is 'h2' has h2 text style", () => {
      // given
      const styledText = TestUtils.renderComponentStyles(
        <StyledText variant="h2" />
      );
      const { fontWeight, fontSize, color } = styles.text.h2;

      // then
      expect(styledText).toMatchObject({ fontWeight, fontSize, color });
    });

    it("if *variant* is 'h3' has h3 text style", () => {
      // given
      const styledText = TestUtils.renderComponentStyles(
        <StyledText variant="h3" />
      );
      const { fontWeight, fontSize, color } = styles.text.h3;

      // then
      expect(styledText).toMatchObject({ fontWeight, fontSize, color });
    });
  });
});
