import { config } from "process";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        light: "#f8fafc",
        dark: "#262626",
        text_light: "#737373",
        text_dark: "#A3A3A3",
        buttons: "#67e8f9",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;