/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minWidth: {
        200: "300px",
      },
    },
  },
  plugins: [],
};
