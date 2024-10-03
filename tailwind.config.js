/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter var", 'sans-serif'],
      cursive : ['Pacifico','cursive'],
      merienda : ["Merienda", 'cursive'],
    },
    colors :{
      primary:'#28231C',
      secondary:'#070707',
      brandDark:"#191102",
      text:'#FCFCFC',
    },
    // container:{
    //   center:true,
    //   padding:{
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //   }
    // }
  },
  plugins: [],
}

// #181a1b -->background black