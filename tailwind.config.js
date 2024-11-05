/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, and TSX files in `src` folder
  ],
  theme: {
    extend: {
      colors:
      {
        pinkSoft: '#EDC7B7',
        wheat: '#EEE2DC',
        gray: '#BAB2B5',
        blueCustom2: '#BADFE7',
        blueCustom: '#1D65C2;',
        pink: '#D8CFD0',
        bg: '#B1A6A4',
        bgDark: '#413F3D',
      },
    },
  },
  plugins: [],
}

