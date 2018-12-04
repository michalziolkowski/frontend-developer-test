import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from "./generated-stories";
import './rn-addons';

configure(() => loadStories(), module);

export default getStorybookUI({});
