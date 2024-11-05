/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        muted: "#94a3b8",
        // muted: "#737373",
        buttons: "#67e8f9",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
