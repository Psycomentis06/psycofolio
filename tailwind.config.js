/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        otomanopee: ["Otomanopee One", "sans-serif"],
        fuggles: ["Fuggles", "cursive"],
        opensans: ["Open Sans Condensed", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["acid", "night", "synthwave", "forest", "business", "emerald"],
    darkTheme: "dark",
  },
};
