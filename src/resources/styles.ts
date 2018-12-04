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
  }
};

export default styles;
