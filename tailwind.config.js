/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '300px',
      md: '640px',
      lg: '1250px',
      xl: '1540px',

    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#FFBF00',
      },
      fontFamily: {
        opensans: [`var(--open-sans)`, 'sans-serif'],
        // sora: [`var(--font-sora)`, 'sans-serif'],
      },
      keyframes: {
        'rotate-clockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-counter-clockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'rotate-clockwise': 'rotate-clockwise 3s linear infinite',
        'rotate-counter-clockwise': 'rotate-counter-clockwise 3s linear infinite',
        'rotate-slow': 'rotate-counter-clockwise 6s linear infinite',
      },
    },
  },
  plugins: [],
};
