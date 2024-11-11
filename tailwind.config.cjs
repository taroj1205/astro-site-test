const plugin = require("tailwindcss/plugin");

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xs: "0.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // secondary: "hsl(258, 48%, 23%)",
        secondary: "hsl(0, 0%, 20%)",
        // primary: "hsl(6, 96%, 70%)",
        primary: "var(--primary)",
        muted: "hsl(0, 0%, 30%)",
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
        "3xl": "5rem",
        "4xl": "6rem",
        "5xl": "7rem",
        "6xl": "8rem",
        "7xl": "9rem",
        "8xl": "10rem",
        "9xl": "11rem",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        dm: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "scale-sm": "clamp(1rem, 2vw, 1.5rem)",
        "scale-md": "clamp(1.5rem, 3vw, 2rem)",
        "scale-lg": "clamp(3rem, 6vw, 4rem)",
        "scale-xl": "clamp(4rem, 8vw, 5rem)",
        "scale-2xl": "clamp(5rem, 10vw, 6rem)",
        "scale-3xl": "clamp(6rem, 12vw, 7rem)",
      },
      screens: {
        "-sm": { max: "639px" },
        "-md": { max: "767px" },
        "-lg": { max: "1023px" },
        "-xl": { max: "1279px" },
        "-2xl": { max: "1535px" },
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        h2: {
          fontSize: `clamp(${theme("fontSize.6xl")}, 10vw, calc(${theme("fontSize.6xl")} + 1rem))`,
          "@apply font-bold text-secondary leading-none font-dm": {},
        },
        h3: {
          fontSize: `clamp(${theme("fontSize.4xl")}, 10vw, calc(${theme("fontSize.4xl")} + 1rem))`,
          "@apply font-bold text-secondary leading-none": {},
        },
        p: {
          "@apply text-secondary": {},
        },
      });
      addComponents({
        ".section": {
          display: "flex",
          flexDirection: "column",
          gap: theme("spacing.md"),
          alignItems: "center",
          textAlign: "center",
        },
        ".highlight": {
          color: theme("colors.primary"),
        },
        ".center": {
          "@apply text-center place-items-center": {},
        },
        ".btn-base": {
          "@apply text-white py-3 px-6 rounded-full w-fit flex items-center gap-2 text-lg drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 bg-primary":
            {},
        },
        ".description": {
          "@apply max-w-prose text-xl text-muted drop-shadow-sm md:text-center":
            {},
        },
      });
    }),
  ],
};
