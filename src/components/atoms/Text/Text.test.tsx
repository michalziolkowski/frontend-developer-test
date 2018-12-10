import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import TestUtils from "../../../utils/TestUtils";
import { StyledText } from "./styled";
import Text, { IProps } from "./Text";

const testText = "test-text";

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let text: ShallowWrapper;

const updateWrappers = () => {
  text = wrapper.find("Text");
};

beforeEach(() => {
  wrapper = shallow<IProps>(<Text>{testText}</Text>);
  updateWrappers();
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

    it("has number of lines set to *numberOfLines*", () => {
      // given
      const numberOfLines = 3;
      wrapper.setProps({ numberOfLines });
      wrapper.update();
      updateWrappers();

      // then
      expect(text.props()["numberOfLines"]).toEqual(numberOfLines);
    });

    it("has id set to *id*", () => {
      // given
      const id = "id";
      wrapper.setProps({ id });
      wrapper.update();
      updateWrappers();

      // then
      expect(text.props()["id"]).toEqual(id);
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
      const textStyles = TestUtils.renderComponentStyles(
        <StyledText variant="default" />
      );

      // then
      const expectedStyles = {
        fontWeight: styles.text.fontWeight.default,
        fontSize: styles.text.fontSize.default,
        color: styles.text.color.default
      };
      expect(textStyles).toMatchObject(expectedStyles);
    });

    it("if *variant* is 'h1' has h1 text style", () => {
      // given
      const textStyles = TestUtils.renderComponentStyles(
        <StyledText variant="h1" />
      );

      // then
      const expectedStyles = {
        fontWeight: styles.text.fontWeight.h1,
        fontSize: styles.text.fontSize.h1,
        color: styles.text.color.h1
      };
      expect(textStyles).toMatchObject(expectedStyles);
    });

    it("if *variant* is 'h2' has h2 text style", () => {
      // given
      const textStyles = TestUtils.renderComponentStyles(
        <StyledText variant="h2" />
      );

      // then
      const expectedStyles = {
        fontWeight: styles.text.fontWeight.h2,
        fontSize: styles.text.fontSize.h2,
        color: styles.text.color.h2
      };
      expect(textStyles).toMatchObject(expectedStyles);
    });

    it("if *variant* is 'h3' has h3 text style", () => {
      // given
      const textStyles = TestUtils.renderComponentStyles(
        <StyledText variant="h3" />
      );

      // then
      const expectedStyles = {
        fontWeight: styles.text.fontWeight.h3,
        fontSize: styles.text.fontSize.h3,
        color: styles.text.color.h3
      };
      expect(textStyles).toMatchObject(expectedStyles);
    });
  });
});
