import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        transparente: "#FFF",
      },
      boxShadow: {
        "inner-lg": "inset 0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra interna mais forte
      },
    },
  },
  plugins: [],
};
export default config;
