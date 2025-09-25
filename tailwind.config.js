/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        marquee2: "marquee 18s linear infinite 9s", // offset for seamless loop
      },
      fontFamily: {
        europa: ['EuropaGrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
