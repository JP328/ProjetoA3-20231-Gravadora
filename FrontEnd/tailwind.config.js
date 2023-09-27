/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('../public/img/PlanoDeFundo.jpg')",
        wallpaperMobile: "url('../public/img/mobileBackground.jpg')",
        waves: "url('../public/img/layered-waves-haikei.svg')",
        loginWallpaper: "url('../public/img/login-background.svg')"
      },
      aspectRatio: {
        '900/250': '900/250',
        '2500/1800': '2500/1800'
      }
    }
  },
  plugins: []
}
