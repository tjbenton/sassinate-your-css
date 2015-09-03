const colors = {
  // primary: "#f9c300",
  primary: "blue",
  secondary: "black",
  tertiary: "white"
};

const fonts = {
  primary: "Open Sans Condensed",
  secondary: "Lobster Two",
  tertiary: "monospace"
};

module.exports = {
  colors: colors,
  fonts: fonts,
  components: {
    content: {
      margin: "auto",
      textAlign: "center"
    },
    code: {
      color: "black",
      fontSize: "2.66em",
      fontFamily: fonts.tertiary,
      margin: "0.25em auto",
      backgroundColor: "rgba(0,0,0,0.15)",
      padding: "0 10px",
      borderRadius: 3
    },
    heading: {
      h1: {
        color: colors.tertiary,
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
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: 0
      },
      h3: {
        color: "black",
        fontSize: "4.9em",
        fontFamily: fonts.secondary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h4: {
        color: "black",
        fontSize: "3.82em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h5: {
        color: "black",
        fontSize: "3.19em",
        fontFamily: fonts.primary,
        lineHeight: 1,
        fontWeight: "bold",
        margin: "0.5em auto"
      },
      h6: {
        color: "black",
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
    link: {
      textDecoration: "none"
    },
    listItem: {
      fontSize: "2.66em"
    },
    list: {
      textAlign: "left",
      listStylePosition: "inside",
      padding: 0
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
