/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
import { myTailwindConfig } from './my.tailwind.config';

export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [myTailwindConfig],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans- serif'],
        'heavitas': 'Heavitas, sans- serif',
        'tomatoes': 'Tomatoes, sans- serif',
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        gray: {
          lighter: 'var(--gray-lighter)',
          light: 'var(--gray-light)',
          DEFAULT: 'var(--gray-default)',
          dark: 'var(--gray-dark)',
        },
        primary: {
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        yellow: {
          lighter: 'var(--yellow-lighter)',
          light: 'var(--yellow-light)',
          DEFAULT: 'var(--yellow-default)',
        },
        green: {
          lighter: 'var(--green-lighter)',
          DEFAULT: 'var(--green-default)',
          dark: 'var(--green-dark)',
        },
        orange: {
          DEFAULT: 'var(--orange-default)',
        },
        brown: {
          DEFAULT: 'var(--brown-default)',
        }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

