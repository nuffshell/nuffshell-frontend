module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Yanone Kaffeesatz", "sans-serif"],
      },
    },
    colors: {
      white: {
        light: "#ffffff",
        DEFAULT: "#e9e7db",
      },
      yellow: {
        light: "#f5f0af",
        DEFAULT: "#eae100",
      },
      green: {
        light: "#b4b962",
        DEFAULT: "#6f7408",
        dark: "#2c2e10",
      },
      brown: {
        lightest: "#d5b968",
        light: "#cca05a",
        DEFAULT: "#977035",
        dark: "#362917",
      },
      black: {
        DEFAULT: "#000000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
