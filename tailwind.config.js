export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primero: {
          DEFAULT: '#4E69AF',
          claro: '#4257A3',
          oscuro: '#111152',
        },
        segundo: {
          DEFAULT: '#D8980C',
          claro: '#F0ECC0',
          oscuro: '#B1892E',
        },
        tercero: {
          claro: '#ffffff',
          oscuro: '#F0F1F5',
        },
      }
    }
  },
  plugins: []
};
