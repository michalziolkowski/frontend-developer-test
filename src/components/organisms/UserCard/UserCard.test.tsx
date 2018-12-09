import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Animated, Dimensions } from "react-native";
import sinon from "sinon";
import styles from "../../../resources/styles";
import MockUtils from "../../../utils/MockUtils";
import TestUtils from "../../../utils/TestUtils";
import {
  HeaderView,
  SliderView,
  StyledCard,
  StyledUserInfoDetails
} from "./styled";
import UserCard, {
  ASSOCIATED_BTN_ANIM_ID,
  IProps,
  IState,
  USER_INFO_ANIM_ID
} from "./UserCard";

const props: IProps = {
  user: MockUtils.mockUser
};

const springAnimationSpy = sinon.spy(Animated, "spring");
const timingAnimationSpy = sinon.spy(Animated, "timing");

/* Setup */
let wrapper: ShallowWrapper<IProps, IState>;
let imageSlider: ShallowWrapper;
let userInfoHeader: ShallowWrapper;
let userInfoDetails: ShallowWrapper;
let userInfoAnim: ShallowWrapper;
let associatedButtonAnim: ShallowWrapper;

const updateWrappers = () => {
  imageSlider = wrapper.find("ImageSlider");
  userInfoHeader = wrapper.find("UserInfoHeader");
  userInfoDetails = wrapper.find("UserInfoDetails");
  userInfoAnim = wrapper.find(`[id="${USER_INFO_ANIM_ID}"]`);
  associatedButtonAnim = wrapper.find(`[id="${ASSOCIATED_BTN_ANIM_ID}"]`);
};

beforeEach(() => {
  wrapper = shallow<IProps, IState>(<UserCard {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("STATE", () => {
  it("*isShowingDetails* state is false at init", () => {
    expect(wrapper.state()["isShowingDetails"]).toBe(false);
  });

  it("*userInfoAnimValue* state is 0 at init", () => {
    expect(wrapper.state()["userInfoAnimValue"]).toEqual(new Animated.Value(0));
  });
});

describe("RENDER", () => {
  describe("ImageSlider", () => {
    it("renders", () => {
      expect(imageSlider.exists()).toBe(true);
    });

    it("has images set to *user.photos*", () => {
      expect(imageSlider.props()["images"]).toEqual(props.user.photos);
    });

    it("has viewSize set to style width", () => {
      const { width } = styles.userCard;

      expect(imageSlider.props()["viewSize"]).toEqual(width);
    });
  });

  describe("UserInfoHeader", () => {
    it("renders", () => {
      expect(userInfoHeader.exists()).toBe(true);
    });

    it("has user set to *user*", () => {
      expect(userInfoHeader.props()["user"]).toEqual(props.user);
    });

    it("has icon set to style infoIcon", () => {
      expect(userInfoHeader.props()["icon"]).toEqual(styles.userCard.infoIcon);
    });

    it("if state *isShowingDetails* is true - has icon set to style arrowIcon", () => {
      // given
      wrapper.setState({ isShowingDetails: true });
      wrapper.update();
      updateWrappers();

      // then
      expect(userInfoHeader.props()["icon"]).toEqual(styles.userCard.arrowIcon);
    });
  });

  describe("UserInfoDetails", () => {
    it("renders", () => {
      expect(userInfoDetails.exists()).toBe(true);
    });

    it("has userInfo set to *user.info*", () => {
      expect(userInfoDetails.props()["userInfo"]).toEqual(props.user.info);
    });

    it("has showPartialAbout set to true", () => {
      expect(userInfoDetails.props()["showPartialAbout"]).toEqual(true);
    });
  });

  describe("UserInfoAnimatedView", () => {
    it("renders", () => {
      expect(userInfoAnim.exists()).toBe(true);
    });
  });

  describe("AssociatedButtonAnimatedView", () => {
    it("doesn't render if *user.associated* undefined", () => {
      // given
      const user = JSON.parse(JSON.stringify(MockUtils.mockUser));
      user.associated = undefined;
      wrapper = shallow<IProps, IState>(<UserCard user={user} />);
      updateWrappers();

      // then
      expect(associatedButtonAnim.exists()).toBe(false);
    });

    it("renders if *user.associated* defined", () => {
      // given
      wrapper = shallow<IProps, IState>(<UserCard user={MockUtils.mockUser} />);
      updateWrappers();

      // then
      expect(associatedButtonAnim.exists()).toBe(true);
    });
  });
});

describe("INTERACTION", () => {
  describe("UserInfoHeader onIconClick triggers animation", () => {
    it("if *isShowingDetails* state is true - timing animation", () => {
      // given
      wrapper.setState({ isShowingDetails: true });
      wrapper.update();
      updateWrappers();

      // when
      userInfoHeader.props()["onIconClick"]();

      // then
      expect(timingAnimationSpy.calledOnce).toBe(true);
    });
  });

  it("if *isShowingDetails* state is false - spring animation", () => {
    // given
    wrapper.setState({ isShowingDetails: false });
    wrapper.update();
    updateWrappers();

    // when
    userInfoHeader.props()["onIconClick"]();

    // then
    expect(springAnimationSpy.calledOnce).toBe(true);
  });

  it("toggles *isShowingDetails* state", () => {
    // given
    const isShowingDetails = wrapper.state()["isShowingDetails"];

    // when
    userInfoHeader.props()["onIconClick"]();
    wrapper.update();

    // then
    expect(wrapper.state()["isShowingDetails"]).toEqual(!isShowingDetails);
  });
});

describe("STYLE", () => {
  describe("StyledCard", () => {
    it("has style backgroundColor, borderRadius, borderColor, borderBottomWidth", () => {
      // given
      const {
        backgroundColor,
        borderRadius,
        borderColor,
        borderWidth
      } = styles.userCard;
      const componentStyles = TestUtils.renderComponentStyles(<StyledCard />);

      // then
      const expectedStyles = {
        backgroundColor,
        borderRadius,
        borderColor,
        borderBottomWidth: borderWidth
      };
      expect(componentStyles).toMatchObject(expectedStyles);
    });
  });

  describe("HeaderView", () => {
    it("has style headerHeight ", () => {
      // given
      const { headerHeight } = styles.userCard;
      const headerStyles = TestUtils.renderComponentStyles(<HeaderView />);

      // then
      const expectedStyles = {
        height: headerHeight
      };
      expect(headerStyles).toMatchObject(expectedStyles);
    });

    describe("UserInfoDetails", () => {
      it("has marginVertical as style padding ", () => {
        // given
        const { padding } = styles.userCard;
        const componentStyles = TestUtils.renderComponentStyles(
          <StyledUserInfoDetails />
        );

        // then
        const expectedStyles = {
          marginVertical: padding
        };
        expect(componentStyles).toMatchObject(expectedStyles);
      });
    });
  });

  // TODO cannot test Styled Component Scroll View style with react-test-renderer
  /*describe("StyledScrollView", () => {
    it("has UserCard style marginVertical", () => {
      // given
      const { padding } = styles.userCard;
      const scrollStyles = TestUtils.renderComponentStyles(
        <StyledScrollView />
      );

      // then
      const expectedStyles = {
        marginVertical: padding
      };
      expect(scrollStyles).toMatchObject(expectedStyles);
    });
  });*/

  // TODO might be good idea not to use header styles in user card - to refactor
  describe("SliderView", () => {
    it("has height as style width & marginBottom as style headerHeight - headerOffset", () => {
      // given
      const { headerHeight, headerOffset, width } = styles.userCard;
      const sliderStyles = TestUtils.renderComponentStyles(<SliderView />);

      // then
      const expectedStyles = {
        marginBottom: headerHeight - headerOffset,
        height: width
      };
      expect(sliderStyles).toMatchObject(expectedStyles);
    });
  });

  describe("UserInfoAnimatedView", () => {
    it("has width, borderColor, borderRadius, borderWidth, backgroundColor set from styles", () => {
      const {
        width,
        backgroundColor,
        borderRadius,
        borderColor,
        borderWidth
      } = styles.userCard;

      expect(userInfoAnim.props()["style"]).toMatchObject({
        width,
        backgroundColor,
        borderRadius,
        borderColor,
        borderWidth
      });
    });
    it("has paddingVertical & paddingBottom set from styles padding", () => {
      const { padding } = styles.userCard;

      expect(userInfoAnim.props()["style"]).toMatchObject({
        paddingHorizontal: padding,
        paddingBottom: padding
      });
    });

    it("has height set to style width + headerHeight", () => {
      const { headerHeight, width } = styles.userCard;
      const expectedHeight = headerHeight + width;

      expect(userInfoAnim.props()["style"]).toMatchObject({
        height: expectedHeight
      });
    });

    it("has bottom set to style negative width", () => {
      const { width } = styles.userCard;

      expect(userInfoAnim.props()["style"]).toMatchObject({
        bottom: -width
      });
    });
  });

  describe("AssociatedButtonAnimatedView", () => {
    it("has top, left offset set to style associatedButtonOffset", () => {
      const { associatedButtonOffset } = styles.userCard;

      expect(associatedButtonAnim.props()["style"]).toMatchObject({
        top: associatedButtonOffset,
        left: associatedButtonOffset
      });
    });
  });
});
