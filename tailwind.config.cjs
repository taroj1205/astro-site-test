const plugin = require("tailwindcss/plugin");

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
        // primary: "hsl(258, 48%, 23%)",
        primary: "hsl(0 0% 20%)",
        secondary: "hsl(22, 100%, 50%)",
        muted: "hsl(0 0% 30%)",
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
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        dm: ["DM Sans"],
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
          "@apply font-bold text-primary leading-none": {},
        },
        h3: {
          fontSize: `clamp(${theme("fontSize.4xl")}, 10vw, calc(${theme("fontSize.4xl")} + 1rem))`,
          "@apply font-bold text-primary leading-none": {},
        },
        p: {
          "@apply text-primary": {},
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
          color: theme("colors.secondary"),
        },
        ".center": {
          "@apply text-center place-items-center": {},
        },
        ".btn-base": {
          "@apply bg-black text-primary font-semibold py-3 px-6 rounded-full w-fit flex items-center gap-2 text-lg drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 dark:bg-white":
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
