module.exports = {
  content: [
    "./app/**/*.{html,ejs,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
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
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}