import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Moshaf/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        highlight:"var(--highlight)",
        shadow:"var(--shadow)", 
        text:"var(--text)",
        text_alt:"var(--text-alt)",
        text_alt_2:"var(--text-alt-2)",
        text_alt_3:"var(--text-alt-3)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('tailwind-scrollbar-hide')
  ],
};
export default config;
