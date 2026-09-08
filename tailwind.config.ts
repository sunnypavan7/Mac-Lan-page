import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parchment: "#F6F1E3",
        "parchment-deep": "#EDE4CC",
        ink: "#22281E",
        forest: {
          DEFAULT: "#1F3B2C",
          light: "#33553D",
          dark: "#152A1F",
        },
        kernel: {
          DEFAULT: "#C99A5B",
          light: "#E4C793",
          dark: "#A97C3E",
        },
        rust: "#8C4A2F",
        line: "#D8CCA9",
      },
      fontFamily: {
        display: ["Georgia", "Garamond", "serif"],
        body: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
