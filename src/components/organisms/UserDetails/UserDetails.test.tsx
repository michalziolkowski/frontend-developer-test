import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import MockUtils from "../../../utils/MockUtils";
import TestUtils from "../../../utils/TestUtils";
import { CoupleView, HeaderView, StyledScrollView } from "./styled";
import UserDetails, { IProps } from "./UserDetails";

const props: IProps = {
  user: MockUtils.mockUser
};

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let scrollView: ShallowWrapper;
let imageSlider: ShallowWrapper;
let userInfoHeader: ShallowWrapper;
let userInfoDetails: ShallowWrapper;
let associatedButton: ShallowWrapper;

const updateWrappers = () => {
  scrollView = wrapper.find("ScrollViewMock");
  imageSlider = wrapper.find("ImageSlider");
  userInfoHeader = wrapper.find("UserInfoHeader");
  userInfoDetails = wrapper.find("UserInfoDetails");
  associatedButton = wrapper.find("AssociatedButton");
};

beforeEach(() => {
  wrapper = shallow<IProps>(<UserDetails {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("ScrollView", () => {
    it("renders", () => {
      expect(scrollView.exists()).toBe(true);
    });
  });

  describe("ImageSlider", () => {
    it("renders", () => {
      expect(imageSlider.exists()).toBe(true);
    });

    it("has images set to *user.photos*", () => {
      expect(imageSlider.props()["images"]).toEqual(props.user.photos);
    });

    it("has viewSize set to style sliderSize", () => {
      const { sliderSize } = styles.userDetails;

      expect(imageSlider.props()["viewSize"]).toEqual(sliderSize);
    });
  });

  describe("UserInfoHeader", () => {
    it("renders", () => {
      expect(userInfoHeader.exists()).toBe(true);
    });

    it("has user set to *user*", () => {
      expect(userInfoHeader.props()["user"]).toEqual(props.user);
    });
  });

  describe("UserInfoDetails", () => {
    it("renders", () => {
      expect(userInfoDetails.exists()).toBe(true);
    });

    it("has userInfo set to *user.info*", () => {
      expect(userInfoDetails.props()["userInfo"]).toEqual(props.user.info);
    });
  });

  describe("AssociatedButton", () => {
    it("doesn't render if *user.associated* undefined", () => {
      // given
      const user = JSON.parse(JSON.stringify(MockUtils.mockUser));
      user.associated = undefined;
      wrapper = shallow<IProps>(<UserDetails user={user} />);
      updateWrappers();

      // then
      expect(associatedButton.exists()).toBe(false);
    });

    it("renders if *user.associated* defined", () => {
      // given
      wrapper = shallow<IProps>(<UserDetails user={MockUtils.mockUser} />);
      updateWrappers();

      // then
      expect(associatedButton.exists()).toBe(true);
    });
  });
});

describe("STYLE", () => {
  describe("StyledScrollView", () => {
    it("has style padding", () => {
      // given
      const { padding } = styles.userDetails;
      const componentStyles = TestUtils.renderComponentStyles(
        <StyledScrollView />
      );

      // then
      const expectedStyles = {
        paddingHorizontal: padding,
        paddingVertical: padding
      };
      expect(componentStyles).toMatchObject(expectedStyles);
    });
  });

  describe("HeaderView", () => {
    it("has style headerHeight ", () => {
      // given
      const { headerHeight } = styles.userDetails;
      const headerStyles = TestUtils.renderComponentStyles(<HeaderView />);

      // then
      const expectedStyles = {
        height: headerHeight
      };
      expect(headerStyles).toMatchObject(expectedStyles);
    });

    describe("CoupleView", () => {
      it("has left, top offset set from style ", () => {
        // given
        const { associatedButtonOffset } = styles.userDetails;
        const componentStyles = TestUtils.renderComponentStyles(<CoupleView />);

        // then
        const expectedStyles = {
          left: associatedButtonOffset,
          top: associatedButtonOffset
        };
        expect(componentStyles).toMatchObject(expectedStyles);
      });
    });
  });
});
