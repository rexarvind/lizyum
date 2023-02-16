/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        container: {
            center: true,
        },
        colors: {
            blue: {
                500: '#137296',
            }
        },
        borderRadius: {
            DEFAULT: '5px',
        },
    },
  },
  plugins: [],
}
