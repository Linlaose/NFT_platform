module.exports = {
  content: [
    "./app/**/*.{html,ejs,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1320px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: { // 空格記得要兩種引號
        'noto': ['"Noto Sans TC"',
          '"-apple - system"',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Microsoft JhengHei"',
          '"Helvetica Neue"',
          'monospace',
          'Arial',
          'cursive',
          'sans-serif'],
        'paytone': ['"Paytone One"',
          '"-apple - system"',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Microsoft JhengHei"',
          '"Helvetica Neue"',
          'monospace',
          'Arial',
          'cursive',
          'sans-serif'],
      },
      borderWidth: {
        '1': '1px',
        '16': '16px',
      },
      fontSize: {
        '32px': '2rem',
      },
      colors: {
        projectWhite: {
          100: "#fcfcfc",
          200: "#f9f9f9",
          300: "#f6f6f6",
          400: "#f3f3f3",
          500: "#f0f0f0", // 背景色
          600: "#c0c0c0",
          700: "#909090",
          800: "#606060",
          900: "#303030"
        },
        projectRed: {
          100: "#faddd8",
          200: "#f5bbb1",
          300: "#f09989",
          400: "#eb7762",
          500: "#e6553b",
          600: "#b8442f",
          700: "#8a3323",
          800: "#5c2218",
          900: "#2e110c"
        },
      },
      lineHeight: {
        '19': '19px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
    })
  ],
}