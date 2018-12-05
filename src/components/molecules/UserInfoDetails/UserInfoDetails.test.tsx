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
let aboutText: ShallowWrapper;
let desiresHeaderText: ShallowWrapper;
let desiresText: ShallowWrapper;
let interestsHeaderText: ShallowWrapper;
let interestsText: ShallowWrapper;

const updateWrappers = () => {
  aboutText = wrapper.find("Text").at(0);
  desiresHeaderText = wrapper.find("Text").at(1);
  desiresText = wrapper.find("Text").at(2);
  interestsHeaderText = wrapper.find("Text").at(3);
  interestsText = wrapper.find("Text").at(4);
};

beforeEach(() => {
  wrapper = shallow<IProps>(<UserInfoHeader {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("About Text", () => {
    it("renders", () => {
      expect(aboutText.exists()).toBe(true);
    });

    it("contains *userInfo.about* text ", () => {
      expect(aboutText.contains(info.about)).toBe(true);
    });
  });

  describe("Desires Header Text", () => {
    it("renders", () => {
      expect(desiresHeaderText.exists()).toBe(true);
    });

    it("contains string for desires header", () => {
      expect(desiresHeaderText.contains(strings.headerDesires)).toBe(true);
    });

    it("has user info details header style top margin", () => {
      expect(interestsHeaderText.props()["style"]).toEqual(
        `margin-top: ${styles.userInfo.details.header.margin};`
      );
    });
  });

  describe("Desires Text", () => {
    it("renders", () => {
      expect(desiresText.exists()).toBe(true);
    });

    it("contains formatted text for *userInfo.desires* list ", () => {
      const formattedText = TextUtils.getFormattedStringList(info.desires);
      expect(desiresText.contains(formattedText)).toBe(true);
    });
  });

  describe("Interests Header Text", () => {
    it("renders", () => {
      expect(interestsHeaderText.exists()).toBe(true);
    });

    it("contains string for interests header", () => {
      expect(interestsHeaderText.contains(strings.headerInterests)).toBe(true);
    });

    it("has user info details header style top margin", () => {
      expect(interestsHeaderText.props()["style"]).toEqual(
        `margin-top: ${styles.userInfo.details.header.margin};`
      );
    });
  });

  describe("Interests Text", () => {
    it("renders", () => {
      expect(interestsText.exists()).toBe(true);
    });

    it("contains formatted text for *userInfo.interests* list ", () => {
      const formattedText = TextUtils.getFormattedStringList(info.interests);
      expect(interestsText.contains(formattedText)).toBe(true);
    });
  });
});
