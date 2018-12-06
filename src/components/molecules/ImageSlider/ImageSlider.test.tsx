import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import MockUtils from "../../../utils/MockUtils";
import TestUtils from "../../../utils/TestUtils";
import ImageSlider, {
  IndicatorView,
  IProps,
  IState,
  StyledTouchable
} from "./ImageSlider";
import styles from "../../../resources/styles";

const props: IProps = {
  viewSize: 50,
  images: MockUtils.mockUser.photos
};

/* Setup */
let wrapper: ShallowWrapper<IProps, IState>;
let touchable: ShallowWrapper;
let cachingImage: ShallowWrapper;
let sliderIndicator: ShallowWrapper;

const updateWrappers = () => {
  touchable = wrapper.find("TouchableWithoutFeedback");
  cachingImage = wrapper.find("CachingImage");
  sliderIndicator = wrapper.find("SliderIndicator");
};

beforeEach(() => {
  wrapper = shallow<IProps, IState>(<ImageSlider {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("STATE", () => {
  it("*count* state is prop *images.length* at init", () => {
    expect(wrapper.state()["count"]).toBe(props.images.length);
  });

  it("*index* state is 0 at init", () => {
    expect(wrapper.state()["index"]).toBe(0);
  });
});

describe("RENDER", () => {
  describe("Touchable", () => {
    it("renders", () => {
      expect(touchable.exists()).toBe(true);
    });
  });

  describe("CachingImage", () => {
    it("renders", () => {
      expect(cachingImage.exists()).toBe(true);
    });

    it("has url set to *images.url* at index state *index*", () => {
      const index = wrapper.state()["index"];
      expect(cachingImage.props()["url"]).toEqual(props.images[index].url);
    });

    it("has nextUrl set to *images.url* at next index", () => {
      const index = wrapper.state()["index"];
      const count = wrapper.state()["count"];
      const nextIndex = (index + 1) % count;

      expect(cachingImage.props()["nextUrl"]).toEqual(
        props.images[nextIndex].url
      );
    });

    it("has viewSize set to *viewSize*", () => {
      expect(cachingImage.props()["viewSize"]).toEqual(props.viewSize);
    });
  });

  describe("SliderIndicator", () => {
    it("renders", () => {
      expect(sliderIndicator.exists()).toBe(true);
    });

    it("has index set to state *index*", () => {
      const index = wrapper.state()["index"];
      expect(sliderIndicator.props()["index"]).toEqual(index);
    });

    it("has count set to state *count*", () => {
      const count = wrapper.state()["count"];
      expect(sliderIndicator.props()["count"]).toEqual(count);
    });
  });
});

describe("INTERACTION", () => {
  describe("Touchable", () => {
    it("on press increases state *index*", () => {
      // given
      const index = wrapper.state()["index"];
      const count = wrapper.state()["count"];
      const nextIndex = (index + 1) % count;

      // when
      touchable.props()["onPress"]();
      wrapper.update();

      // then
      expect(wrapper.state()["index"]).toEqual(nextIndex);
    });
  });
});

describe("STYLE", () => {
  describe("StyledTouchable", () => {
    it("has ImageSlider style borderRadius & backgroundColor", () => {
      // given
      const { borderRadius, backgroundColor } = styles.imageSlider;
      const touchableStyles = TestUtils.renderComponentStyles(
        <StyledTouchable />
      );

      // then
      const expectedStyles = { borderRadius, backgroundColor };
      expect(touchableStyles).toMatchObject(expectedStyles);
    });
  });

  describe("IndicatorView", () => {
    it("has ImageSlider style indicatorOffset", () => {
      // given
      const { indicatorOffset } = styles.imageSlider;
      const indicatorStyles = TestUtils.renderComponentStyles(
        <IndicatorView />
      );

      // then
      const expectedStyles = { right: indicatorOffset, top: indicatorOffset };
      expect(indicatorStyles).toMatchObject(expectedStyles);
    });
  });
});
