/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind"
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [

    flowbite.plugin(),
    require("@tailwindcss/line-clamp"),
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display:"none"
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none"
        },
      };
      addUtilities(newUtilities)

    }
  ],

}

