/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px"
      },
      colors: {
        "light-gray" : "#e1e3e7",
        "dark-gray" : "#d7dbe1",
      },
      gridTemplateRows: {
        'layout': "auto min-content 16px"
      },
      fontFamily: {
        'Teko': "Teko",
        'Playfair': 'Playfair Display'
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../src/assets/hero.jpg')",
        'bike': "url('../src/assets/blob-haikei.svg')",
        'box': "url('../src/assets/box-background.jpg')",
        "layered-haikei": "url('../src/assets/layered-peaks-haikei.svg')",
        "blurry-haikei": "url('../src/assets/blurry-gradient-haikei.svg')",
        "blurry-haikei-2": "url('../src/assets/blurry-gradient-haikei-2.svg')"
      },
      backgroundSize: {
        "100%": "100%",
      },
      screens: {
        "sssm": "430px",
        "ssm": "500px",
        "mmd": "700px",
        "xmd": "900px",
        "llg": "1100px",
        "xxxl": "1660px"
      }
    },
  },
  plugins: [],
}