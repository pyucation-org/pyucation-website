/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        primary: "#27B2DA",
        secondary: "#269AF2",
        accentLight: "#29D6B7",
        accentDark: "#032530",
        speechBubble: "#679CAD",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pyucation-1": "url('/background/pyu_background_1.webp')",
        "pyucation-2": "url('/background/4_edited.jpg')",
      },
      animation: {
        "fade-in-upwards": "fadein 0.3s 1",
        "fade-in-drop-shadow": "dropshadow 2s 1",
        gradient: "gradient 1.2s linear infinite",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: 0,
            transform: "translateY(10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },
        dropshadow: {
          "0%": {
            filter: "drop-shadow(0px 0px 0px #27B2DA)",
          },
          "50%": {
            filter: "drop-shadow(0px 0px 4px #27B2DA)",
          },
          "100%": {
            filter: "drop-shadow(0px 0px 0px #27B2DA)",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
