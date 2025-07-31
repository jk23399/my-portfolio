/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "Roboto Mono"에 띄어쓰기가 있으므로 따옴표로 감싸줍니다.
        sans: ['"Roboto Mono"', 'monospace'], 
      },
    },
  },
  plugins: [],
}