import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Disable Tailwind's color/font/spacing opinions — we use CSS custom properties exclusively
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
