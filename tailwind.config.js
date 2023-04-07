/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{}
  },
  daisyui: {
    themes: [
      "light",
      {
        mytheme: {
          primary: "#bae06d",

          secondary: "#bf0763",

          accent: "#fc53ad",

          neutral: "#18202A",

          info: "#99D0F4",

          success: "#2CCEA3",

          warning: "#ECC836",

          error: "#EE1717",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
