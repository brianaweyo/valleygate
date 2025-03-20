const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {

      fontFamily: {
        poppins: ["Poppins", ...fontFamily.sans],
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
      },

    },
  },

  variants: {
    extend: {
      // Enable Animation and Animation Delay Variants
      animation: ["responsive", "motion-safe", "motion-reduce"],
      animationDelay: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  
  plugins: [],
};
