/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary" : "#272727",
        "secondary" : "#FED766",
        "tertiary" : "#009FB7",
        "tertiary-light": '#009fb767',
        "white" : "#EFF1F3"
      }
    },
    screens: {

      'lg': '1024px',
      // => @media (min-width: 2024px) { ... }

      'sm': '600px',
      // => @media (min-width: 640px) { ... }



    }
  },
  plugins: [],
}

