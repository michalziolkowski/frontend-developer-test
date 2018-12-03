import { KeepAwake, registerRootComponent } from 'expo';
import App from './src/App';
import Storybook from './storybook';

if (process.env.NODE_ENV === 'development') KeepAwake.activate();

registerRootComponent(process.env["REACT_APP_MODE"] === "STORYBOOK" ? Storybook : App);
