import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import theme from "../../../resources/theme";
import TestUtils from "../../../utils/TestUtils";
import CoupleButton, { ImageView, IProps, StyledImage } from "./CoupleButton";

const props: IProps = {
  uri: "test-uri"
};

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let touchable: ShallowWrapper;
let image: ShallowWrapper;
let icon: ShallowWrapper;

const updateWrappers = () => {
  touchable = wrapper.find("TouchableOpacity");
  image = wrapper.find("Image");
  icon = wrapper.find("Icon");
};

beforeEach(() => {
  wrapper = shallow<IProps>(<CoupleButton {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("Touchable", () => {
    it("renders", () => {
      expect(touchable.exists()).toBe(true);
    });

    it("has activeOpacity set to default button opacity", () => {
      expect(touchable.props()["activeOpacity"]).toEqual(styles.button.opacity);
    });
  });

  describe("Image", () => {
    it("renders", () => {
      expect(image.exists()).toBe(true);
    });

    it("has source set to *uri*", () => {
      expect(image.props()["source"]).toEqual({ uri: props.uri });
    });
  });

  describe("Icon", () => {
    it("renders", () => {
      expect(icon.exists()).toBe(true);
    });

    it("has name set to 'heart'", () => {
      expect(icon.props()["name"]).toEqual("heart");
    });

    it("has size set to small icon size", () => {
      expect(icon.props()["size"]).toEqual(styles.icon.size.small);
    });

    it("has color set to theme color 'primaryDark'", () => {
      expect(icon.props()["color"]).toEqual(theme.color.primaryDark);
    });
  });
});

describe("INTERACTION", () => {
  describe("Touchable", () => {
    it("on press calls *onClick*", () => {
      // given
      const onClick = jest.fn();
      wrapper.setProps({ onClick });
      wrapper.update();
      updateWrappers();

      // when
      touchable.props()["onPress"]();

      // then
      expect(onClick).toBeCalledTimes(1);
    });
  });
});

describe("STYLE", () => {
  describe("ImageView", () => {
    it("has big icon style height & width", () => {
      // given
      const touchableStyles = TestUtils.renderComponentStyles(<ImageView />);

      // then
      const expectedStyles = {
        height: styles.icon.size.big,
        width: styles.icon.size.big
      };
      expect(touchableStyles).toMatchObject(expectedStyles);
    });
  });

  describe("Image", () => {
    it("has big icon style height & width (minus shadow offset)", () => {
      // given
      const imageStyles = TestUtils.renderComponentStyles(<StyledImage />);

      // then
      const expectedStyles = {
        height: styles.icon.size.big - 2,
        width: styles.icon.size.big - 2
      };
      expect(imageStyles).toMatchObject(expectedStyles);
    });

    it("has border color set to theme color primaryDark", () => {
      // given
      const imageStyles = TestUtils.renderComponentStyles(<StyledImage />);

      // then
      const expectedStyles = {
        borderColor: theme.color.primaryDark
      };
      expect(imageStyles).toMatchObject(expectedStyles);
    });
  });
});