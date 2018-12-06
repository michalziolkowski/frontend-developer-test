import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import styles from "../../../resources/styles";
import TestUtils from "../../../utils/TestUtils";
import SliderIndicator, {
  IProps,
  StyledIndicator,
  StyledPoint
} from "./SliderIndicator";

const props: IProps = {
  index: 0,
  count: 2
};

/* Setup */
let wrapper: ShallowWrapper<IProps>;
let indicator: ShallowWrapper;
let points: ShallowWrapper;

const updateWrappers = () => {
  indicator = wrapper.find("Indicator");
  points = wrapper.find("Point");
};

beforeEach(() => {
  wrapper = shallow<IProps>(<SliderIndicator {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("RENDER", () => {
  describe("Indicator", () => {
    it("renders", () => {
      expect(indicator.exists()).toBe(true);
    });
  });

  describe("Points", () => {
    it("renders *count* number of points", () => {
      expect(points.length).toEqual(props.count);
    });

    it("point at index *index* is active", () => {
      const activePoint = points.at(props.index);
      expect(activePoint.props()["isActive"]).toBe(true);
    });

    it("point not at index *index* is inactive", () => {
      const inactivePoint = points.at(props.index + 1);
      expect(inactivePoint.props()["isActive"]).toBe(false);
    });
  });
});

describe("STYLE", () => {
  describe("Indicator", () => {
    it("has SliderIndicator style padding, opacity, backgroundColor & borderRadius ", () => {
      // given
      const {
        padding,
        borderRadius,
        opacity,
        backgroundColor
      } = styles.sliderIndicator;
      const indicatorStyles = TestUtils.renderComponentStyles(
        <StyledIndicator />
      );

      // then
      const expectedStyles = {
        borderRadius,
        opacity,
        backgroundColor,
        paddingVertical: padding,
        paddingHorizontal: padding
      };
      expect(indicatorStyles).toMatchObject(expectedStyles);
    });
  });

  describe("Point", () => {
    describe("Active", () => {
      it("has SliderIndicator style pointSize, pointMargin & pointColor for active point", () => {
        // given
        const { pointSize, pointColor, pointMargin } = styles.sliderIndicator;
        const activePointStyles = TestUtils.renderComponentStyles(
          <StyledPoint isActive />
        );

        // then
        const expectedStyles = {
          backgroundColor: pointColor.active,
          marginHorizontal: pointMargin,
          height: pointSize.active,
          width: pointSize.active
        };
        expect(activePointStyles).toMatchObject(expectedStyles);
      });
    });

    describe("Inctive", () => {
      it("has SliderIndicator style pointSize, pointMargin & pointColor for inactive point", () => {
        // given
        const { pointSize, pointColor, pointMargin } = styles.sliderIndicator;
        const inactivePointStyles = TestUtils.renderComponentStyles(
          <StyledPoint isActive={false} />
        );

        // then
        const expectedStyles = {
          backgroundColor: pointColor.inactive,
          marginHorizontal: pointMargin,
          height: pointSize.inactive,
          width: pointSize.inactive
        };
        expect(inactivePointStyles).toMatchObject(expectedStyles);
      });
    });
  });
});
