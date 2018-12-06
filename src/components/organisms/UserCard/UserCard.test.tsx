import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Animated, Dimensions } from "react-native";
import sinon from "sinon";
import styles from "../../../resources/styles";
import MockUtils from "../../../utils/MockUtils";
import TestUtils from "../../../utils/TestUtils";
import UserCard, {
  HeaderView,
  IProps,
  IState,
  SliderView,
  StyledCard
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
let coupleButtonAnim: ShallowWrapper;

const updateWrappers = () => {
  imageSlider = wrapper.find("ImageSlider");
  userInfoHeader = wrapper.find("UserInfoHeader");
  userInfoDetails = wrapper.find("UserInfoDetails");
  userInfoAnim = wrapper.find('[id="userInfoAnim"]');
  coupleButtonAnim = wrapper.find('[id="coupleButtonAnim"]');
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
});

describe("RENDER", () => {
  describe("ImageSlider", () => {
    it("renders", () => {
      expect(imageSlider.exists()).toBe(true);
    });

    it("has images set to *user.photos*", () => {
      expect(imageSlider.props()["images"]).toEqual(props.user.photos);
    });

    it("has viewSize set to Dimensions.width * UserCard style widthRatio", () => {
      const { widthRatio } = styles.userCard;
      expect(imageSlider.props()["viewSize"]).toEqual(
        Dimensions.get("window").width * widthRatio
      );
    });
  });

  describe("UserInfoHeader", () => {
    it("renders", () => {
      expect(userInfoHeader.exists()).toBe(true);
    });

    it("has userInfo set to *user.info*", () => {
      expect(userInfoHeader.props()["userInfo"]).toEqual(props.user.info);
    });

    it("has icon set to UserCard style infoIcon", () => {
      expect(userInfoHeader.props()["icon"]).toEqual(styles.userCard.infoIcon);
    });

    it("if state *isShowingDetails* is true - has icon set to UserCard style arrowIcon", () => {
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
  });

  describe("UserInfoAnimatedView", () => {
    it("renders", () => {
      expect(userInfoAnim.exists()).toBe(true);
    });

    it("has height style set to componentWidth + UserCard style headerHeight + padding", () => {
      const { widthRatio, headerHeight, padding } = styles.userCard;

      const componentWidth = Dimensions.get("window").width * widthRatio;
      const expectedHeight = componentWidth + headerHeight + padding;

      expect(userInfoAnim.props()["style"]).toMatchObject({
        height: expectedHeight
      });
    });

    it("has width style set to componentWidth", () => {
      const componentWidth =
        Dimensions.get("window").width * styles.userCard.widthRatio;

      expect(userInfoAnim.props()["style"]).toMatchObject({
        width: componentWidth
      });
    });

    it("has bottom position style set to negative componentWidth", () => {
      const componentWidth =
        Dimensions.get("window").width * styles.userCard.widthRatio;

      expect(userInfoAnim.props()["style"]).toMatchObject({
        bottom: -componentWidth
      });
    });
  });

  describe("CoupleButtonAnimatedView", () => {
    it("doesn't render if *user.associated* undefined", () => {
      // given
      const user = JSON.parse(JSON.stringify(MockUtils.mockUser));
      user.associated = undefined;
      wrapper = shallow<IProps, IState>(<UserCard user={user} />);
      updateWrappers();

      // then
      expect(coupleButtonAnim.exists()).toBe(false);
    });

    it("doesn't render if *user.associated.photos* empty", () => {
      // given
      const user = JSON.parse(JSON.stringify(MockUtils.mockUser));
      if (!user.associated) throw new Error("Invalid test data");
      user.associated.photos = [];
      wrapper = shallow<IProps, IState>(<UserCard user={user} />);
      updateWrappers();

      // then
      expect(coupleButtonAnim.exists()).toBe(false);
    });

    it("renders if *user.associated* defined & *user.associated.photos* not empty", () => {
      // given
      wrapper = shallow<IProps, IState>(<UserCard user={MockUtils.mockUser} />);
      updateWrappers();

      // then
      expect(coupleButtonAnim.exists()).toBe(true);
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
    it("has UserCard style padding, backgroundColor & borderRadius", () => {
      // given
      const { padding, backgroundColor, borderRadius } = styles.userCard;
      const cardStyles = TestUtils.renderComponentStyles(<StyledCard />);

      // then
      const expectedStyles = {
        backgroundColor,
        borderRadius,
        paddingHorizontal: padding,
        paddingVertical: padding
      };
      expect(cardStyles).toMatchObject(expectedStyles);
    });
  });
  describe("HeaderView", () => {
    it("has UserCard headerHeight & verical padding", () => {
      // given
      const { padding, headerHeight } = styles.userCard;
      const headerStyles = TestUtils.renderComponentStyles(<HeaderView />);

      // then
      const expectedStyles = {
        height: headerHeight,
        paddingVertical: padding
      };
      expect(headerStyles).toMatchObject(expectedStyles);
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
    it("has UserCard headerHeight as bottom margin & props *size* as height", () => {
      // given
      const { headerHeight } = styles.userCard;
      const size = 20;
      const sliderStyles = TestUtils.renderComponentStyles(
        <SliderView size={size} />
      );

      // then
      const expectedStyles = {
        marginBottom: headerHeight,
        height: size
      };
      expect(sliderStyles).toMatchObject(expectedStyles);
    });
  });

  describe("UserInfoAnimatedView", () => {
    it("has backgroundColor style set to UserCard style backgroundColor", () => {
      const { backgroundColor } = styles.userCard;
      expect(userInfoAnim.props()["style"]).toMatchObject({ backgroundColor });
    });
  });
});
