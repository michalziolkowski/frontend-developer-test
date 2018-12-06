import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import MockUtils from "../../../utils/MockUtils";
import TestUtils from "../../../utils/TestUtils";
import UserInfoHeader, {
  IconView,
  IProps,
  StyledHeader
} from "./UserInfoHeader";

const { info } = MockUtils.mockUser;

const props: IProps = {
  userInfo: info
};

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let headerTouchable: ShallowWrapper;
let headerText: ShallowWrapper;
let subheaderText: ShallowWrapper;
let iconButton: ShallowWrapper;

const updateWrappers = () => {
  headerTouchable = wrapper.find("TouchableOpacity");
  headerText = wrapper.find("Text").at(0);
  subheaderText = wrapper.find("Text").at(1);
  iconButton = wrapper.find("IconButton");
};

beforeEach(() => {
  wrapper = shallow<IProps>(<UserInfoHeader {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("Header Touchable", () => {
    it("renders", () => {
      expect(headerTouchable.exists()).toBe(true);
    });
  });

  describe("Header Text", () => {
    it("renders", () => {
      expect(headerText.exists()).toBe(true);
    });

    it("has variant set to 'h1'", () => {
      expect(headerText.props()["variant"]).toEqual("h1");
    });

    it("contains user name & age text", () => {
      const { name, age } = info;
      expect(headerText.contains(`${name}, ${age}`)).toBe(true);
    });
  });

  describe("SubHeader Text", () => {
    it("renders", () => {
      expect(subheaderText.exists()).toBe(true);
    });

    it("has variant set to 'h3'", () => {
      expect(subheaderText.props()["variant"]).toEqual("h3");
    });

    it("contains user sexuality, gender & type text", () => {
      const { sexuality, gender, type } = info;
      expect(subheaderText.contains(`${sexuality} ${gender}, ${type}`)).toBe(
        true
      );
    });
  });

  describe("Icon Button", () => {
    it("renders if *icon* defined", () => {
      // given
      wrapper.setProps({ icon: "heart" });
      wrapper.update();
      updateWrappers();

      // then
      expect(iconButton.exists()).toBe(true);
    });

    it("doesn't render if *icon* undefined", () => {
      // given
      wrapper.setProps({ icon: undefined });
      wrapper.update();
      updateWrappers();

      // then
      expect(iconButton.exists()).toBe(false);
    });
  });
});

describe("INTERACTION", () => {
  describe("Header Touchable", () => {
    it("on press calls *onHeaderClick*", () => {
      // given
      const onHeaderClick = jest.fn();
      wrapper.setProps({ onHeaderClick });
      wrapper.update();
      updateWrappers();

      // when
      headerTouchable.props()["onPress"]();

      // then
      expect(onHeaderClick).toBeCalledTimes(1);
    });
  });

  describe("Icon Button", () => {
    it("on press calls *onIconClick*", () => {
      // given
      const onIconClick = jest.fn();
      // defines icon as icon button renders only then
      wrapper.setProps({ onIconClick, icon: "heart" });
      wrapper.update();
      updateWrappers();

      // when
      iconButton.props()["onClick"]();

      // then
      expect(onIconClick).toBeCalledTimes(1);
    });
  });
});

describe("STYLE", () => {
  describe("IconView", () => {
    it("has UserInfoHeader style iconButtonSize", () => {
      // given
      const { iconButtonSize } = styles.userInfoHeader;
      const iconViewStyles = TestUtils.renderComponentStyles(<IconView />);

      // then
      const expectedStyles = { height: iconButtonSize, width: iconButtonSize };
      expect(iconViewStyles).toMatchObject(expectedStyles);
    });
  });
});
