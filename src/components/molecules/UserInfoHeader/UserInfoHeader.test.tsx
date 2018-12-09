import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import routes from "../../../resources/routes";
import styles from "../../../resources/styles";
import MockUtils from "../../../utils/MockUtils";
import TestUtils from "../../../utils/TestUtils";
import { IconView, IProps, PureUserInfoHeader } from "./UserInfoHeader";

const props: IProps = {
  user: MockUtils.mockUser
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
  wrapper = shallow<IProps>(<PureUserInfoHeader {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("Header Touchable", () => {
    it("renders", () => {
      expect(headerTouchable.exists()).toBe(true);
    });

    it("has opacity set to style headerLinkOpacity", () => {
      const { headerLinkOpacity } = styles.userInfoHeader;
      expect(headerTouchable.props()["activeOpacity"]).toEqual(
        headerLinkOpacity
      );
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
      const { name, age } = props.user.info;
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
      const { sexuality, gender, type } = props.user.info;
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
    it("on press calls *navigation* to user details route with user.localId as param", () => {
      // given
      const navigation = { navigate: jest.fn() };
      // @ts-ignore
      wrapper.setProps({ navigation });
      wrapper.update();
      updateWrappers();

      // when
      headerTouchable.props()["onPress"]();

      // then
      expect(navigation.navigate).toBeCalledWith(routes.userDetails, {
        id: props.user.localId
      });
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
