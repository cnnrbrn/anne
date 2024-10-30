/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/**.{html,js}', '!./node_modules/**/*'],
  theme: {
    extend: {
      colors: {
        purpleDark: '#150516',
        purpleLight: '#311C36',
        white: '#d9d9d9',
      },
      dropShadow: {
        white: '0 5px 10px rgba(217, 217, 217, 15)',
      },
    },
  },
  plugins: [],
};
