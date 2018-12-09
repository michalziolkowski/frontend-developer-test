import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { strings } from "../../../resources/strings";
import styles from "../../../resources/styles";
import MockUtils from "../../../utils/MockUtils";
import TextUtils from "../../../utils/TextUtils";
import UserInfoHeader, { IProps } from "./UserInfoDetails";

const { info } = MockUtils.mockUser;

const props: IProps = {
  userInfo: info
};

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let aboutHeaderText: ShallowWrapper;
let aboutText: ShallowWrapper;
let desiresHeaderText: ShallowWrapper;
let desiresText: ShallowWrapper;
let interestsHeaderText: ShallowWrapper;
let interestsText: ShallowWrapper;

const updateWrappers = () => {
  aboutHeaderText = wrapper.find('[id="aboutHeader"]');
  aboutText = wrapper.find('[id="about"]');
  desiresHeaderText = wrapper.find('[id="desiresHeader"]');
  desiresText = wrapper.find('[id="desires"]');
  interestsHeaderText = wrapper.find('[id="interestsHeader"]');
  interestsText = wrapper.find('[id="interests"]');
};

beforeEach(() => {
  wrapper = shallow<IProps>(<UserInfoHeader {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("About Header Text", () => {
    it("renders", () => {
      expect(aboutHeaderText.exists()).toBe(true);
    });

    it("contains string for about header", () => {
      expect(aboutHeaderText.contains(strings.headerAbout)).toBe(true);
    });
  });

  describe("About Text", () => {
    it("renders", () => {
      expect(aboutText.exists()).toBe(true);
    });

    it("contains *userInfo.about* text ", () => {
      expect(aboutText.contains(info.about)).toBe(true);
    });

    it("if *showPartialAbout* - has number of lines set to 7", () => {
      // given
      wrapper.setProps({ showPartialAbout: true });
      wrapper.update();
      updateWrappers();

      // then
      expect(aboutText.props()["numberOfLines"]).toEqual(7);
    });
  });

  describe("Desires Header Text", () => {
    it("if undefined *userInfo.desires* - doesn't render", () => {
      // given
      const userInfo = {
        age: 40,
        type: "Single",
        gender: "Male",
        sexuality: "Straight",
        name: "Nickey",
        about: `Lorem ipsum dolor sit amet`,
        interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
      };
      wrapper = shallow<IProps>(<UserInfoHeader userInfo={userInfo} />);
      updateWrappers();

      // then
      expect(desiresHeaderText.exists()).toBe(false);
    });

    it("renders", () => {
      expect(desiresHeaderText.exists()).toBe(true);
    });

    it("contains string for desires header", () => {
      expect(desiresHeaderText.contains(strings.headerDesires)).toBe(true);
    });

    it("has user info details header style top margin", () => {
      expect(desiresHeaderText.props()["style"]).toEqual(
        `margin-top: ${styles.userInfoDetails.headerMargin};`
      );
    });
  });

  describe("Desires Text", () => {
    it("if undefined *userInfo.desires* - doesn't render", () => {
      // given
      const userInfo = {
        age: 40,
        type: "Single",
        gender: "Male",
        sexuality: "Straight",
        name: "Nickey",
        about: `Lorem ipsum dolor sit amet`,
        interests: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Conse"]
      };
      wrapper = shallow<IProps>(<UserInfoHeader userInfo={userInfo} />);
      updateWrappers();

      // then
      expect(desiresText.exists()).toBe(false);
    });

    it("renders", () => {
      expect(desiresText.exists()).toBe(true);
    });

    it("contains formatted text for *userInfo.desires* list ", () => {
      const formattedText = TextUtils.getFormattedStringList(info.desires);
      expect(desiresText.contains(formattedText)).toBe(true);
    });
  });

  describe("Interests Header Text", () => {
    it("if undefined *userInfo.interests* - doesn't render", () => {
      // given
      const userInfo = {
        age: 40,
        type: "Single",
        gender: "Male",
        sexuality: "Straight",
        name: "Nickey",
        about: `Lorem ipsum dolor sit amet`
      };
      wrapper = shallow<IProps>(<UserInfoHeader userInfo={userInfo} />);
      updateWrappers();

      // then
      expect(interestsHeaderText.exists()).toBe(false);
    });

    it("renders", () => {
      expect(interestsHeaderText.exists()).toBe(true);
    });

    it("contains string for interests header", () => {
      expect(interestsHeaderText.contains(strings.headerInterests)).toBe(true);
    });

    it("has user info details header style top margin", () => {
      expect(interestsHeaderText.props()["style"]).toEqual(
        `margin-top: ${styles.userInfoDetails.headerMargin};`
      );
    });
  });

  describe("Interests Text", () => {
    it("if undefined *userInfo.interests* - doesn't render", () => {
      // given
      const userInfo = {
        age: 40,
        type: "Single",
        gender: "Male",
        sexuality: "Straight",
        name: "Nickey",
        about: `Lorem ipsum dolor sit amet`
      };
      wrapper = shallow<IProps>(<UserInfoHeader userInfo={userInfo} />);
      updateWrappers();

      // then
      expect(interestsText.exists()).toBe(false);
    });

    it("renders", () => {
      expect(interestsText.exists()).toBe(true);
    });

    it("contains formatted text for *userInfo.interests* list ", () => {
      const formattedText = TextUtils.getFormattedStringList(info.interests);
      expect(interestsText.contains(formattedText)).toBe(true);
    });
  });
});
