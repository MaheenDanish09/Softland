/** @type {import('tailwindcss').Config} */

// Helpers: the original template mixes its CSS variables with transparency
// (color-mix). "accent-20" = accent colour at 20% visible, "body-60" = text
// colour at 60% visible, and so on.
const mix = (v, visible) =>
  `color-mix(in srgb, var(${v}), transparent ${100 - visible}%)`;

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    // Same breakpoints as the Bootstrap 5 grid the original template uses,
    // so the layout switches at exactly the same widths.
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        heading: 'var(--heading-color)',
        surface: 'var(--surface-color)',
        contrast: 'var(--contrast-color)',
        page: {
          DEFAULT: 'var(--background-color)',
          50: mix('--background-color', 50),
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          3: mix('--accent-color', 3),
          5: mix('--accent-color', 5),
          8: mix('--accent-color', 8),
          10: mix('--accent-color', 10),
          20: mix('--accent-color', 20),
          50: mix('--accent-color', 50),
          75: mix('--accent-color', 75),
          80: mix('--accent-color', 80),
          soft: 'color-mix(in srgb, var(--accent-color) 10%, white 100%)',
        },
        body: {
          DEFAULT: 'var(--default-color)',
          3: mix('--default-color', 3),
          10: mix('--default-color', 10),
          15: mix('--default-color', 15),
          20: mix('--default-color', 20),
          30: mix('--default-color', 30),
          50: mix('--default-color', 50),
          60: mix('--default-color', 60),
          70: mix('--default-color', 70),
          80: mix('--default-color', 80),
        },
        ok: '#059652',
        star: '#ffc107',
      },
      fontFamily: {
        sans: [
          'Roboto',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          '"Liberation Sans"',
          'sans-serif',
        ],
        heading: ['Raleway', 'sans-serif'],
        nav: ['Poppins', 'sans-serif'],
      },
      // The original template uses the CSS default "ease" for its transitions.
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
