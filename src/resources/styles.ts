import theme from "./theme";

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
  icon: {
    color: theme.color.gray,
    size: {
      default: 38,
      small: 22,
      big: 50
    }
  },
  button: {
    opacity: 0.6
  },
  sliderIndicator: {
    opacity: 0.6,
    padding: 3,
    point: {
      margin: 3,
      size: {
        active: 8,
        inactive: 6
      },
      color: {
        active: "#fff",
        inactive: "#303030"
      }
    }
  },
  userInfo: {
    backgroundColor: "#fff",
    header: {
      paddingVertical: 10
    },
    details: {
      header: {
        margin: 20
      }
    }
  }
};

export default styles;
