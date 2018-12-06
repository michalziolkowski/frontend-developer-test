import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import IconButton, { IProps } from "./IconButton";

const props: IProps = {
  iconName: "heart"
};

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let touchable: ShallowWrapper;
let icon: ShallowWrapper;

const updateWrappers = () => {
  touchable = wrapper.find("Touchable");
  icon = wrapper.find("Icon");
};

beforeEach(() => {
  wrapper = shallow<IProps>(<IconButton {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("PROPS", () => {
  // TODO untestable due to enzyme bug on obtaining
  // default props for functional components
  // it("*iconColor* is IconButton style color by default", () => {});
});

describe("RENDER", () => {
  describe("Touchable", () => {
    it("renders", () => {
      expect(touchable.exists()).toBe(true);
    });

    it("has activeOpacity set to IconButton style opacity", () => {
      const { opacity } = styles.iconButton;
      expect(touchable.props()["activeOpacity"]).toEqual(opacity);
    });
  });

  describe("Icon", () => {
    it("renders", () => {
      expect(icon.exists()).toBe(true);
    });

    it("has name set to *iconName*", () => {
      expect(icon.props()["name"]).toEqual(props.iconName);
    });

    it("has size set to IconButton style size", () => {
      const { size } = styles.iconButton;
      expect(icon.props()["size"]).toEqual(size);
    });

    it("has color set to *iconColor*", () => {
      // given
      const iconColor = "#fff";
      wrapper.setProps({ iconColor });
      wrapper.update();
      updateWrappers();

      // then
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
