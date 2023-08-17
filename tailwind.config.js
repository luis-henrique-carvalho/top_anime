import tailwindScrolblar from "tailwind-scrollbar";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "anime-blue": "#00A3FF",
        "anime-white": "#F9F9F9",
        "anime-gray": "#BFBFBF",
        "anime-dark": "#06090F",
        "anime-dark-200": "#151B26",
      },
      scrollbar: {
        width: "0.3rem",
        height: "0.4rem",
        track: "151B26",
        thumb: "#00A3FF",
      },
    },
  },
  variants: {
    scrollbar: ["dark"], // Adicione a variante 'dark' para lidar com o tema escuro (opcional)
  },
  darkMode: "class",
  plugins: [
    tailwindScrolblar, // Importe o plugin do tailwind-
    nextui(),
  ],
};
