import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          "soft-orange": "hsl(35, 77%, 62%)",
          "soft-red": "hsl(5, 85%, 63%)",
        },
        neutral: {
          "off-white": "hsl(36, 100%, 99%)",
          "grayish-blue": "hsl(233, 8%, 79%)",
          "dark-grayish-blue": "hsl(236, 13%, 42%)",
          "very-dark-blue": "hsl(240, 100%, 5%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
