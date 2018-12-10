import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = {
  text: {
    color: {
      default: "#777",
      h1: "#000",
      h2: "#000",
      h3: "#696969"
    },
    fontSize: {
      default: 16,
      h1: 20,
      h2: 16,
      h3: 12
    },
    fontWeight: {
      default: "100",
      h1: "bold",
      h2: "bold",
      h3: "normal"
    }
  },
  associatedButton: {
    activeOpacity: 0.6,
    size: 40,
    iconSize: 28,
    iconName: "information-variant",
    backgroundColor: "#888",
    borderColor: "#ef4200",
    borderWidth: 2,
    borderIconOffset: -5,
    borderIconName: "heart",
    borderIconSize: 22
  },
  iconButton: {
    opacity: 0.6,
    size: 34,
    color: "#696969"
  },
  sliderIndicator: {
    backgroundColor: "#000",
    opacity: 0.6,
    padding: 3,
    borderRadius: 2,
    pointMargin: 3,
    pointSize: {
      active: 8,
      inactive: 6
    },
    pointColor: {
      active: "#fff",
      inactive: "#303030"
    }
  },
  userDetails: {
    sliderSize: screenWidth - 20,
    headerHeight: 80,
    padding: 10,
    associatedButtonOffset: 25
  },
  userList: {
    itemHeight: screenWidth + screenWidth * 0.95 * 0.2,
    viewPosition: 0.5,
    headerElement: {
      iconSize: 60,
      iconName: {
        left: "chevron-double-left",
        right: "chevron-double-right",
        down: "chevron-double-down",
        like: "heart",
        reject: "close"
      },
      iconColor: {
        like: "#fc4600",
        reject: "#bc3e3e",
        direction: "#888"
      }
    }
  },
  userListItem: {
    itemOpacity: {
      default: 1,
      withStatus: 0.3
    },
    iconName: {
      like: "heart",
      reject: "close"
    },
    iconColor: {
      like: "#fc4600",
      reject: "#bc3e3e"
    },
    iconSize: 260,
    iconBottomPadding: (screenWidth * 0.95 * 0.2) / 2
  },
  userCard: {
    width: screenWidth * 0.95,
    backgroundColor: "#eee",
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
    headerOffset: 5,
    widthRatio: 0.95,
    associatedButtonOffset: 15,
    padding: 10,
    arrowIcon: "chevron-down",
    infoIcon: "information",
    springAnimationFriction: 6,
    linearAnimationDuration: 200,
    headerHeight: screenWidth * 0.95 * 0.2
  },
  userInfoHeader: {
    headerLinkOpacity: 0.6,
    iconButtonSize: 50
  },
  userInfoDetails: {
    headerMargin: 20
  },
  imageSlider: {
    indicatorOffset: 10,
    backgroundColor: "#666"
  },
  mainPage: {
    iconPadding: 10,
    backgroundColor: "#eee",
    iconColor: "#fff",
    storybookIcon: "book-open-page-variant"
  },
  detailPage: {
    backgroundColor: "#eee",
    backIcon: "arrow-left",
    iconColor: "#fff",
    iconPadding: 10
  },
  header: {
    height: 20,
    backgroundColor: "#fc4600",
    tintColor: "#fff",
    fontWeight: "100"
  }
};

export default styles;
