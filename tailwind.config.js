/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg-red': '#ffdfdf',
        'point-red': '#ff7676',
      },
    },
  },
  plugins: [],
};
