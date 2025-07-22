/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{html,js}",
    // "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-gray-800",
    "bg-gray-900",
    "text-green-400",
    "text-gray-300",
    "text-white",
    "hover:bg-green-400",
    "hover:text-gray-900",
    "border-green-400",
    "text-gray-400",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.6s ease-out",
        fadeUp: "fadeUp 0.8s ease-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      utilities: {
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      },
      colors: {
        "black-faint": "rgba(2, 0, 3, 0.18)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
