/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['-apple-system','BlinkMacSystemFont','Arial','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue','sans-serif'],
        },
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
        screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
        },
    },
  },
  plugins: [],
}
