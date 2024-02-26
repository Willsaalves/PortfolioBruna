/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        // Grays
        gray: "#F5F9FD",
        
        // Background Colors
        dark_primary: "#b6afa8",
        dark_secondary: "#050505",
        bg_light_primary: "#e8e1e2",
        bg_ligth_third: '#efe6e7',
        bg_ligth_second:"#e6dacb",
        bg_pink_primary:'#edd5ed',
        bg_pink_secondary:'#ffeeff',
        bg_pink_third:'#ccb6cc',
        bg_pink_quart:'#e2c8cc',
        bg_purple_primary:'#200022',

        // Text Colors
        first_color:"#ffff",
        second_color:'#a1959c',
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #f0ebe5 0.48%, #f6f0f0 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(237, 213, 237, 0.9)",
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
      visibility: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
