import renderer from 'react-test-renderer';
import { ReactElement } from 'react';

const renderComponentStyles = (element: ReactElement<any>) => {
  const styledComponent = renderer.create(element).toJSON();

  if(!styledComponent) {
    throw("Couldn't render component");
  }

  return styledComponent.props.style[0];
}

export default { renderComponentStyles };
