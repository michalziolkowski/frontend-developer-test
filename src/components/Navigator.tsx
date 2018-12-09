import { createStackNavigator } from "react-navigation";
import routes from "../resources/routes";
import Storybook from "../storybook";
import DetailsPage from "./pages/DetailsPage";
import MainPage from "./pages/MainPage";

const AppNavigator = createStackNavigator({
  [routes.main]: {
    screen: MainPage,
    navigationOptions: {
      title: "Home",
      headerStyle: { height: 40, backgroundColor: "#fc4600" },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        alignSelf: "center",
        fontWeight: "100"
      }
    }
  },
  [routes.userDetails]: {
    screen: DetailsPage,
    navigationOptions: {
      title: "User details",
      headerStyle: { height: 40, backgroundColor: "#fc4600" },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        alignSelf: "center",
        fontWeight: "100"
      }
    }
  },
  [routes.storybook]: {
    screen: Storybook,
    navigationOptions: {
      headerStyle: { height: 40, backgroundColor: "#fc4600" },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        alignSelf: "center",
        fontWeight: "100"
      }
    }
  }
});

export default AppNavigator;
