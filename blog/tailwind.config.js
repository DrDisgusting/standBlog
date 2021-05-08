module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({

        'home-01': "url('./Images/Home-item-01.jpg')",

        'home-02': "url('./Images/Home-item-02.jpg')",

        'home-03': "url('./Images/Home-item-03.jpg')",

        'downloadBackgroundImage':"url('./Images/Sec-2-bg.jpg')",

        'homePostImgaeOne':"url('./Images/HomePost-1.jpg')",

        'aboutUsBg':"url('./Images/aboutUs-bg.jpg')",
      })

    },
    fontFamily:{
        sans:['inherit'],
        another:['Roboto', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
