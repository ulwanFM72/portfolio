/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        base: 'rgb(var(--base) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        blue: '#2B4EFF',
        pink: '#FF5C8A',
        lime: '#C1F73A',
      },
      fontFamily: {
        display: ["'Space Grotesk'", 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ["'Inter'", 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        brut: '6px 6px 0px 0px rgba(15,15,15,1)',
        'brut-sm': '4px 4px 0px 0px rgba(15,15,15,1)',
      },
    },
  },
  plugins: [],
};
