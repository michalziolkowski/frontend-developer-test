import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import TestUtils from "../../../utils/TestUtils";
import AssociatedButton, { BorderIconView, IconView } from "./AssociatedButton";

/* Setup */
let wrapper: ShallowWrapper;
let touchable: ShallowWrapper;
let borderIcon: ShallowWrapper;
let icon: ShallowWrapper;

const updateWrappers = () => {
  touchable = wrapper.find("TouchableOpacity");
  icon = wrapper.find("Icon").at(0);
  borderIcon = wrapper.find("Icon").at(1);
};

beforeEach(() => {
  wrapper = shallow(<AssociatedButton />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("Touchable", () => {
    it("renders", () => {
      expect(touchable.exists()).toBe(true);
    });

    it("has activeOpacity set to CoupleButton style opacity", () => {
      const { activeOpacity } = styles.associatedButton;
      expect(touchable.props()["activeOpacity"]).toEqual(activeOpacity);
    });
  });

  describe("Icon", () => {
    it("renders", () => {
      expect(icon.exists()).toBe(true);
    });

    it("has name set to style iconName", () => {
      const { iconName } = styles.associatedButton;
      expect(icon.props()["name"]).toEqual(iconName);
    });

    it("has size set to style iconSize", () => {
      const { iconSize } = styles.associatedButton;
      expect(icon.props()["size"]).toEqual(iconSize);
    });

    it("has color set to style borderColor", () => {
      const { borderColor } = styles.associatedButton;
      expect(icon.props()["color"]).toEqual(borderColor);
    });
  });

  describe("Border Icon", () => {
    it("renders", () => {
      expect(borderIcon.exists()).toBe(true);
    });

    it("has name set to style borderIconName", () => {
      const { borderIconName } = styles.associatedButton;
      expect(borderIcon.props()["name"]).toEqual(borderIconName);
    });

    it("has size set to style borderIconSize", () => {
      const { borderIconSize } = styles.associatedButton;
      expect(borderIcon.props()["size"]).toEqual(borderIconSize);
    });

    it("has color set to style iconColor", () => {
      const { borderColor } = styles.associatedButton;
      expect(borderIcon.props()["color"]).toEqual(borderColor);
    });
  });
});

describe("STYLE", () => {
  describe("IconView", () => {
    it("has styles size, backgroundColor, borderWidth & borderColor", () => {
      // given
      const {
        size,
        backgroundColor,
        borderColor,
        borderWidth
      } = styles.associatedButton;
      const componentStyles = TestUtils.renderComponentStyles(<IconView />);

      // then
      const expectedStyles = {
        backgroundColor,
        borderWidth,
        borderColor,
        height: size,
        width: size
      };
      expect(componentStyles).toMatchObject(expectedStyles);
    });
  });

  describe("BorderIconView", () => {
    it("has style borderIconOffset", () => {
      // given
      const { borderIconOffset } = styles.associatedButton;
      const componentStyles = TestUtils.renderComponentStyles(
        <BorderIconView />
      );

      // then
      const expectedStyles = {
        right: borderIconOffset,
        top: borderIconOffset
      };
      expect(componentStyles).toMatchObject(expectedStyles);
    });
  });
});
