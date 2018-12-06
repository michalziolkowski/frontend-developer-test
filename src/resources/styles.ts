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
  coupleButton: {
    opacity: 0.6,
    size: 60,
    borderColor: "#ef4200",
    borderWidth: 2,
    iconOffset: -3,
    iconName: "heart",
    iconSize: 22,
    iconColor: "#ef4200"
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
  userCard: {
    backgroundColor: "#fff",
    borderRadius: 2,
    widthRatio: 0.85,
    coupleButtonOffset: 15,
    padding: 10,
    arrowIcon: "chevron-down",
    infoIcon: "information",
    springAnimationFriction: 6,
    linearAnimationDuration: 200
  },
  userInfoHeader: {
    iconButtonSize: 50,
    height: 60,
    paddingVertical: 10
  },
  userInfoDetails: {
    headerMargin: 20
  },
  imageSlider: {
    borderRadius: 2,
    indicatorOffset: 10,
    backgroundColor: "#666"
  }
};

export default styles;
