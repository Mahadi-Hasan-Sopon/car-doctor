/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-02": "#444",
        "primary-orange": "#FF3811",
      },
    },
  },
  plugins: [],
};
