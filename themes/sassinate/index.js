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
    heading: {
      h1: {
        color: colors.primary,
        fontSize: "7.05em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0,
        zoom: 1
      },
      h2: {
        color: colors.secondary,
        fontSize: "5.88em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0
      },
      h3: {
        color: colors.primary,
        fontSize: "4.9em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h4: {
        color: colors.primary,
        fontSize: "3.82em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h5: {
        color: colors.secondary,
        fontSize: "3.19em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h6: {
        color: colors.secondary,
        fontSize: "2.66em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      }
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
