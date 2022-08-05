/** @type {import('tailwindcss').Config} */

purge: {
  safeList: [
    /^bg-/,
    /^to-/,
    /^from-/,
  ]
}

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
