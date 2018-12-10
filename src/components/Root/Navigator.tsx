import { createStackNavigator } from "react-navigation";
import routes from "../../resources/routes";
import { strings } from "../../resources/strings";
import styles from "../../resources/styles";
import DetailsPage from "../pages/DetailsPage";
import MainPage from "../pages/MainPage";
import StorybookPage from "../pages/StorybookPage";

const {
  storybookHeaderTitle,
  mainHeaderTitle,
  userDetailsHeaderTitle
} = strings;

const { height, backgroundColor, tintColor, fontWeight } = styles.header;

const commonNavigationOptions = {
  headerStyle: {
    height,
    backgroundColor
  },
  headerTintColor: tintColor,
  headerTitleStyle: {
    fontWeight
  },
  headerTitleAllowFontScaling: true,
  headerForceInset: { vertical: "always" }
};

const AppNavigator = createStackNavigator({
  [routes.main]: {
    screen: MainPage,
    navigationOptions: {
      ...commonNavigationOptions,
      headerTitle: mainHeaderTitle
    }
  },
  [routes.userDetails]: {
    screen: DetailsPage,
    navigationOptions: {
      ...commonNavigationOptions,
      headerTitle: userDetailsHeaderTitle
    }
  },
  [routes.storybook]: {
    screen: StorybookPage,
    navigationOptions: {
      ...commonNavigationOptions,
      headerTitle: storybookHeaderTitle
    }
  }
});

export default AppNavigator;
