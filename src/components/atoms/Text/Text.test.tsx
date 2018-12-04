import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import Text, { IProps, StyledText } from "./Text";
import styles from "../../../resources/styles";
import TestUtils from "../../../utils/TestUtils";

const testText = "test-text";

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let styledText: ShallowWrapper;

beforeEach(() => {
  wrapper = shallow<IProps>(<Text>{testText}</Text>);
  styledText = wrapper.find(`${StyledText.displayName}`);
});

/* Test Cases */
describe("PROPS", () => {
  it('*variant* is "default" by default', () => {
    expect(wrapper.props().variant).toEqual("default");
  });
});

describe("RENDER", () => {
  describe("StyledText", () => {
    it("renders", () => {
      expect(styledText.exists()).toBe(true);
    });

    it("contains *children* text", () => {
      expect(styledText.contains(testText)).toBe(true);
    });
  });
});

describe("STYLE", () => {
  describe("StyledText", () => {
    it("if *variant* is 'default' has default text style", () => {
      //given
      const componentStyle = TestUtils.renderComponentStyles(<StyledText variant="default" />);
      const { fontWeight, fontSize, color } = styles.text.default;

      //then
      expect(componentStyle).toMatchObject({fontWeight, fontSize, color})
    });

    it("if *variant* is 'h1' has h1 text style", () => {
      //given
      const componentStyle = TestUtils.renderComponentStyles(<StyledText variant="h1" />);
      const { fontWeight, fontSize, color } = styles.text.h1;

      //then
      expect(componentStyle).toMatchObject({fontWeight, fontSize, color})
    });

    it("if *variant* is 'h2' has h2 text style", () => {
      //given
      const componentStyle = TestUtils.renderComponentStyles(<StyledText variant="h2" />);
      const { fontWeight, fontSize, color } = styles.text.h2;

      //then
      expect(componentStyle).toMatchObject({fontWeight, fontSize, color})
    });

    it("if *variant* is 'h3' has h3 text style", () => {
      //given
      const componentStyle = TestUtils.renderComponentStyles(<StyledText variant="h3" />);
      const { fontWeight, fontSize, color } = styles.text.h3;

      //then
      expect(componentStyle).toMatchObject({fontWeight, fontSize, color})
    });
  });
});
