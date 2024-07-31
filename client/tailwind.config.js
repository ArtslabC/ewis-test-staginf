const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00603a",
        primarygray: "#00603A40",
        black: "#374151",
        blackFooter: "#222222",
        white: "#ffffff",
        gray50: "#F9FAFBAD",
        // background: "#fcfdfb",
        background: {
          primary: "#00603a",
          secondary: "#E9F5DE",
        },
        videobg: "#fffdff",
        contactbg: "#E9F5DE",
        primarysh: "#00603A54",
        purple: "#B7A1F338",
        red: {
          // accent: "#fe0808ff ",
          // accent: "#A43222",
          // accent: "#A6192E",
          DEFAULT: "#E01B22",
          accent: "#7F181B",
          100: "#FFF5E1",
        },
        redsh: "#FE080862 ",
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Rubik: ["Rubik"],
        Inter: ["Inter"],
      },
      backgroundImage: {
        eduPara: "url('./assets/background/educationParalex.webp')",
        aboutUs: "url('./assets/background/aboutus.webp')",
        tablet: "url('https://i.imgur.com/wVqrxDZ.png')",
        bankPara: "url('./assets/background/BankingParalex.webp')",
        healthPara: "url('./assets/background/healthpara.webp')",
        retail: "url('./assets/background/retail.webp')",
        publicBack: "url('./assets/background/publicBack.webp')",
        manuBack: "url('./assets/background/manuBack.webp')",
        Cree: "url('./assets/background/career_traing.webp')",
        topan: "url('./assets/background/toppan.webp')",
      },
      keyframes: {
        "m-header-nav-links-in": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "m-header-nav-links-out": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(20px)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        homeIconsAnim: {
          "0%": {
            width: "45px",
            height: "45px",
          },
          "50%": {
            width: "30px",
            height: "30px",
          },
          "100%": {
            width: "45px",
            height: "45px",
          },
        },
      },
      animation: {
        homeicon: "homeIconsAnim 0.3s ease forwards",
        "m-header-nav-links-in": "m-header-nav-links-in 300ms linear forwards ",
        "m-header-nav-links-out":
          "m-header-nav-links-out 300ms linear forwards ",
        "m-header-nav-bottom-fade-in": "fade-in 300ms linear forwards 900ms",
        "m-header-nav-bottom-fade-out": "fade-out 300ms linear forwards 700ms",
      },
    },
    plugins: [flowbite.plugin()],
  },
};
