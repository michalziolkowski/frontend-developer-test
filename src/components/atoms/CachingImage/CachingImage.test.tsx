import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import sinon from "sinon";
import TestUtils from "../../../utils/TestUtils";
import CachingImage, { ImageView, IProps, IState } from "./CachingImage";

const props: IProps = {
  viewSize: 50,
  url: "test-url",
  nextUrl: "test-next-url"
};

const setStateSpy = sinon.spy(React.Component.prototype, "setState");
// const renderSpy = sinon.spy(React.Component.prototype, "render");

/* Setup */
let wrapper: ShallowWrapper<IProps, IState>;
let imagePrimary: ShallowWrapper;
let imageSecondary: ShallowWrapper;
let imageArray: ShallowWrapper;
let imageView: ShallowWrapper;

const updateWrappers = () => {
  imageView = wrapper.find("ImageView");
  imageArray = wrapper.find("Image");
  imagePrimary = wrapper.find('[id="primary"]');
  imageSecondary = wrapper.find('[id="secondary"]');
};

beforeEach(() => {
  wrapper = shallow<IProps, IState>(<CachingImage {...props} />);
  updateWrappers();
});

/* Test Cases */
describe("STATE", () => {
  it("*shouldSwitchImages* state is false at init", () => {
    expect(wrapper.state()["shouldSwitchImages"]).toBe(false);
  });
});

describe("RENDER", () => {
  describe("ImageView", () => {
    it("renders", () => {
      expect(imageView.exists()).toBe(true);
    });
  });

  describe("images array", () => {
    it("renders 2 Images", () => {
      expect(imageArray.length).toEqual(2);
    });

    it("renders in order: primary, secondary", () => {
      const firstImage = imageArray.at(0);
      const secondImage = imageArray.at(1);

      expect(firstImage.props()["id"]).toEqual("primary");
      expect(secondImage.props()["id"]).toEqual("secondary");
    });

    describe("if state *shouldSwitchImages*", () => {
      it("renders in order: secondary, primary", () => {
        // given
        wrapper.setState({ shouldSwitchImages: true });
        wrapper.update();
        updateWrappers();

        // then
        const firstImage = imageArray.at(0);
        const secondImage = imageArray.at(1);

        expect(firstImage.props()["id"]).toEqual("secondary");
        expect(secondImage.props()["id"]).toEqual("primary");
      });
    });
  });

  describe("primary Image", () => {
    it("renders", () => {
      expect(imagePrimary.exists()).toBe(true);
    });

    it("has style height & width set to *viewSize*", () => {
      expect(imagePrimary.props()["style"]).toEqual({
        height: props.viewSize,
        width: props.viewSize
      });
    });

    it("has uri set to *url*", () => {
      expect(imagePrimary.props()["uri"]).toEqual(props.url);
    });

    describe("if state *shouldSwitchImages*", () => {
      it("has uri set to *nextUrl*", () => {
        // given
        wrapper.setState({ shouldSwitchImages: true });
        wrapper.update();
        updateWrappers();

        // then
        expect(imagePrimary.props()["uri"]).toEqual(props.nextUrl);
      });
    });
  });

  describe("secondary Image", () => {
    it("renders", () => {
      expect(imageSecondary.exists()).toBe(true);
    });

    it("has uri set to *nextUrl*", () => {
      expect(imageSecondary.props()["uri"]).toEqual(props.nextUrl);
    });

    it("has style height & width set to *viewSize*", () => {
      expect(imageSecondary.props()["style"]).toEqual({
        height: props.viewSize,
        width: props.viewSize
      });
    });

    describe("if state *shouldSwitchImages*", () => {
      it("has uri set to *url*", () => {
        // given
        wrapper.setState({ shouldSwitchImages: true });
        wrapper.update();
        updateWrappers();

        // then
        expect(imageSecondary.props()["uri"]).toEqual(props.url);
      });
    });
  });
});

describe("INTERACTION", () => {
  describe("on *url* & *nextUrl* update", () => {
    // TODO cannot test due to spying on render method issue for enzyme
    // https://github.com/airbnb/enzyme/issues/305
    /*it("doesn't re-render", () => {
      // given
      wrapper.setProps({ url: props.nextUrl, nextUrl: "new-url" });
      wrapper.update();

      // then
      expect(renderSpy.calledOnce).toBe(true);
    });*/

    it("toggles *shouldSwitchImages* state", () => {
      // given
      wrapper.setProps({ url: props.nextUrl, nextUrl: "new-url" });
      wrapper.update();

      // then
      expect(setStateSpy.calledWith({ shouldSwitchImages: true })).toBe(true);
    });
  });
});

describe("STYLE", () => {
  describe("ImageView", () => {
    it("has height & width set to *viewSize*", () => {
      // given
      const viewSize = 50;
      const imageStyles = TestUtils.renderComponentStyles(
        <ImageView viewSize={viewSize} />
      );

      // then
      const expectedStyles = {
        height: viewSize,
        width: viewSize
      };
      expect(imageStyles).toMatchObject(expectedStyles);
    });
  });
});
