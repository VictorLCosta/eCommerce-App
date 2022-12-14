/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1200px",
      },
      colors: {
        white: "hsl(0, 100%, 100%)",
        cultured: "hsl(225, 20%, 96%)",
        cultured2: "hsl(0, 0%, 93%)",
        "sonic-silver": "hsl(0, 0%, 47%)",
        onyx: "hsl(0, 0%, 27%)",
        "salmon-pink": "hsl(353, 100%, 78%)",
        "eerie-black": "hsl(214, 10%, 13%)",
        "black-08": "hsla(0, 0%, 0%, 0.06)",
        "black-12": "hsl(0, 0%, 12%)",
      },
      borderRadius: {
        sm: "5px",
        md: "10px"
      }
    },
  },
  plugins: [],
};
