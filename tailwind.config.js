/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Use these as default font classes
        heading: ["Young Serif", "serif"],
        body: ["Averia Serif Libre", "serif"],
      },
      fontSize: {
        // Optional: Define some default sizes for headings
        "heading-1": ["2.5rem", "1.2"],
        "heading-2": ["2rem", "1.2"],
        "heading-3": ["1.75rem", "1.2"],
      },
      colors: {
        "accent-red": "#B50036",
        "dark-blue": "#010527",
        "grey-1": "#F0F0F0",
        "grey-2": "#BABABA",
        "grey-3": "#999999",
      },
    },
  },
  plugins: [],
};
