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
        primary: "hsl(258, 48%, 23%)",
        muted: "hsl(258, 48%, 55%)",
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
      fontSize: {
        "scale-large": "clamp(3rem, 6vw, 4rem)",
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
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        h2: {
          "@apply text-scale-large font-bold text-primary": {},
        },
      });
      addComponents({
        ".section": {
          display: "flex",
          flexDirection: "column",
          gap: theme("spacing.md"),
          alignItems: "center",
        },
        ".center": {
          "@apply text-center place-items-center": {},
        },
        ".btn-base": {
          "@apply bg-black text-white font-semibold py-3 px-6 rounded-full w-fit flex items-center gap-2 text-lg drop-shadow-lg hover:drop-shadow-xl transition-all duration-300":
            {},
        },
      });
    }),
  ],
};
