module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'darker': '#050F1E',
      'dark': '#06152A',
      'light': '#FFFFFF',
      'orange': '#AA5110',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
