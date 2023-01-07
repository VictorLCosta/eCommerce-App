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
      },
      boxShadow: {
        "1": "0 12px 20px hsla(210, 10%, 23%, 0.07)",
        "2": "0 2px 10px hsla(0, 0%, 0%, 0.04)",
        "3": "0 2px 20px var(--black_08)"
      }
    },
  },
  plugins: [],
};
