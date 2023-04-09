/** @type {import('tailwindcss').Config} */

const colors = {
  navyBlue: '#0D5ADC',
  charcoal: '#3B4157',
  metallic: '#A4A9B9',
  oldSilver: '#828286',
  lightGray: '#c1c1c1',
  quickSilver: '#A6A5A9',
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors },
  },
  plugins: [],
};
