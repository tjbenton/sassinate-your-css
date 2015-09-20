const colors = {
  primary: "#6b717f",
  secondary: "#c69",
  tertiary: "#699"
};

const fonts = {
  primary: "Source Sans Pro",
  secondary: "Source Serif Pro",
  tertiary: "Source Code Pro"
};

module.exports = {
  colors: colors,
  fonts: fonts,
  components: {
    content: {
      margin: "auto",
      textAlign: "center"
    },
    image: {
      display: "block",
      margin: "0.5em auto"
    },
    s: {
      strikethrough: {}
    },
    text: {
      color: "black",
      fontSize: "2.66em",
      fontFamily: fonts.primary,
      margin: "0.25em auto"
    }
  }
};
