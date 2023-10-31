/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-01": "#151515",
        "dark-02": "#444",
        "dark-03": "#737373",
        "primary-orange": "#FF3811",
      },
    },
  },
  plugins: [],
};
