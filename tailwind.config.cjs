const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(258, 48%, 23%)",
        muted: "hsl(258, 48%, 55%)",
      },
      spacing: {
        lg: "2.5rem",
        md: "1.5rem",
        sm: "1rem",
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({
        h2: {
          "@apply text-7xl font-bold text-primary": {},
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
          "@apply bg-black text-white font-semibold py-3 px-6 rounded-full w-fit":
            {},
        },
      });
    }),
  ],
};
