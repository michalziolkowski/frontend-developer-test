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

    it("has activeOpacity set to slider indicator opacity", () => {
      expect(indicator.props()["activeOpacity"]).toEqual(
        styles.sliderIndicator.opacity
      );
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
    it("has slider indicator style padding", () => {
      // given
      const indicatorStyles = TestUtils.renderComponentStyles(
        <StyledIndicator />
      );

      // then
      const expectedStyles = {
        paddingVertical: styles.sliderIndicator.padding,
        paddingHorizontal: styles.sliderIndicator.padding
      };
      expect(indicatorStyles).toMatchObject(expectedStyles);
    });
  });

  describe("Point", () => {
    describe("Active", () => {
      it("has active slider indicator point style", () => {
        // given
        const activePointStyles = TestUtils.renderComponentStyles(
          <StyledPoint isActive />
        );

        // then
        const { size, color, margin } = styles.sliderIndicator.point;
        const expectedStyles = {
          backgroundColor: color.active,
          marginHorizontal: margin,
          height: size.active,
          width: size.active
        };
        expect(activePointStyles).toMatchObject(expectedStyles);
      });
    });

    describe("Inctive", () => {
      it("has inactive slider indicator point style", () => {
        // given
        const activePointStyles = TestUtils.renderComponentStyles(
          <StyledPoint isActive={false} />
        );

        // then
        const { size, color, margin } = styles.sliderIndicator.point;
        const expectedStyles = {
          backgroundColor: color.inactive,
          marginHorizontal: margin,
          height: size.inactive,
          width: size.inactive
        };
        expect(activePointStyles).toMatchObject(expectedStyles);
      });
    });
  });
});
