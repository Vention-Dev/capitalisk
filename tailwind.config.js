/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode:'jit',
  // purge:["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'neutral-50': "#F7F7F7",
        'button-grey': '#EDEEF3',
        'card': '#E1E3EA',
        'card-selected': '#636363',
        'description':'#A7ABC2'
      },
      backgroundImage: {
        'dashboard': "url('./assests/dashboard.png')",
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Plus Jakarta Sans', 'sans-serif']
    }
  },
  plugins: [],
};
