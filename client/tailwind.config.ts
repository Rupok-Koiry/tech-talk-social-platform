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
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        "primary-green": "var(--primary-green)",
        "primary-red": "var(--primary-red)",
        "primary-blue": "var(--primary-blue)",
      },
      boxShadow: {
        "primary-shadow": "var(--primary-shadow)",
      },
    },
  },
  plugins: [],
};

export default config;
