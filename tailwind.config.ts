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
        'primary': "#12305B",
        'secondary': "#FC5959",
        'text': "#213842",
        'reviews': "#4D533C",
        'card': "#FBF9F2",
        'footer': "#ABABAB",
        'white': "#FFFFFF"
      }
    },
  },
  plugins: [],
};
export default config;
