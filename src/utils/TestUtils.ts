import { ReactElement } from "react";
import renderer from "react-test-renderer";

const renderComponentStyles = (element: ReactElement<any>) => {
  const styledComponent = renderer.create(element).toJSON();

  if (!styledComponent) {
    throw new Error("Couldn't render component");
  }

  return styledComponent.props.style[0];
};

export default { renderComponentStyles };
