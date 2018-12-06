import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import TestUtils from "../../../utils/TestUtils";
import CoupleButton, {
  IconView,
  ImageView,
  IProps,
  StyledImage
} from "./CoupleButton";

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

    it("has activeOpacity set to CoupleButton style opacity", () => {
      const { opacity } = styles.coupleButton;
      expect(touchable.props()["activeOpacity"]).toEqual(opacity);
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

    it("has name set to CoupleButton style iconName", () => {
      const { iconName } = styles.coupleButton;
      expect(icon.props()["name"]).toEqual(iconName);
    });

    it("has size set to CoupleButton style iconSize", () => {
      const { iconSize } = styles.coupleButton;
      expect(icon.props()["size"]).toEqual(iconSize);
    });

    it("has color set to CoupleButton style iconColor", () => {
      const { iconColor } = styles.coupleButton;
      expect(icon.props()["color"]).toEqual(iconColor);
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
    it("has CoupleButton styles size", () => {
      // given
      const imageViewStyles = TestUtils.renderComponentStyles(<ImageView />);
      const { size } = styles.coupleButton;

      // then
      const expectedStyles = {
        height: size,
        width: size
      };
      expect(imageViewStyles).toMatchObject(expectedStyles);
    });
  });

  describe("Image", () => {
    it("has CoupleButton styles & width, borderColor, borderWidth", () => {
      // given
      const { size, borderWidth, borderColor } = styles.coupleButton;
      const imageStyles = TestUtils.renderComponentStyles(<StyledImage />);

      // then
      const expectedStyles = {
        borderWidth,
        borderColor,
        height: size - 2,
        width: size - 2
      };
      expect(imageStyles).toMatchObject(expectedStyles);
    });
  });

  describe("IconView", () => {
    it("has CoupleButton styles iconOffset", () => {
      // given
      const { iconOffset } = styles.coupleButton;
      const iconViewStyles = TestUtils.renderComponentStyles(<IconView />);

      // then
      const expectedStyles = {
        right: iconOffset,
        top: iconOffset
      };
      expect(iconViewStyles).toMatchObject(expectedStyles);
    });
  });
});
