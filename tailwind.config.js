/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,css,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'ssm': '360px',
      //  => @mdia (min-width: 360px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: { "space": ['Space Grotesk', 'serif'], "pixel": ['Pixelify Sans', 'serif'] }
    },
    colors: {
      'darkViolet': '#260273',
      'softBlue': '#4f46e5',
      'limeGreen': '#00ff9c',
      'softCyan': '#52E2F2',
      'pear': '#DEF244',
      'night':'#0D0D0D'
    }
  },
  plugins: [],
}

