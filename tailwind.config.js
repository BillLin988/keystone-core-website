/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ["Inter", "Noto Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        noto: ["Noto Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        schibsted: ["Schibsted Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        fustat: ["Fustat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
