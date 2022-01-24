module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        stolzl: "'Stolzl'"
      },
      colors: {
        'black-main': '#101010',
        'black-btn': '#222',
        'black-secondary': '#424242',
        'blue-main': '#1F83F8',
        'blue-dark': '#2484F3',
        'gray-main': '#878787'
      },
      dropShadow: {
        'lg': '0px 10px 30px rgba(0, 0, 0, 0.15)'
      },
      lineHeight: {
        'main': '1.125rem'
      }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
}
