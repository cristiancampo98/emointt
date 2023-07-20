/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    // `${srcDir}/components/**/*.{vue,js,ts}`,
    // `${srcDir}/layouts/**/*.vue`,
    // `${srcDir}/pages/**/*.vue`,
    // `${srcDir}/composables/**/*.{js,ts}`,
    // `${srcDir}/plugins/**/*.{js,ts}`,
    // `${srcDir}/utils/**/*.{js,ts}`,
    // `${srcDir}/App.{js,ts,vue}`,
    // `${srcDir}/app.{js,ts,vue}`,
    // `${srcDir}/Error.{js,ts,vue}`,
    // `${srcDir}/error.{js,ts,vue}`,
    // `${srcDir}/app.config.{js,ts}`
  ],
  theme: {
    extend: {
      screens: {
        '3xs': '280px',
        '2xs': '320px',
        'xs': '420px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [],
  prefix: 'tw-',
}

