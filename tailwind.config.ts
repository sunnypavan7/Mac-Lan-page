import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2fcf5",
          100: "#e1f8e8",
          200: "#c3efd2",
          300: "#94e0b3",
          400: "#5cc58c",
          500: "#39a96e",
          600: "#2b8c59",
          700: "#26714d",
          800: "#225b40",
          900: "#1e4a37",
        },
      },
    },
  },
  plugins: [],
};

export default config;
