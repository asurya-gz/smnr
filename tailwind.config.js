/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      colors: {
        linear: {
          start: "#062847",
          end: "#001123",
        },
        "lightblue-main": { DEFAULT: "#D8FCFF" },
        "yellow-button": { DEFAULT: "#F2CF4A" },
        "hover-nav": { DEFAULT: "#A1F1F8" },
        "bg-card-sponsor": { DEFAULT: "#4F7397" },
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-img": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".bg-tentang": {
          "background-img": "url(/bgtentanganforcom.png)",
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
        },
        ".bg-tentang-hape": {
          "background-img": "url(/bgtentanghape.png)",
          "background-size": "cover",
          "background-position": "center",
          "background-repeat": "no-repeat",
        },
        ".linear-main-bg": {
          "background-color":
            "linear-gradient(349.03deg, #062847 2.83%, #001123 86.7%)",
        },
        ".box-glowing-bercahaya": {
          background: "rgba(255, 255, 255, 0.25)",
          border: "2px solid #FFFFFF",
          "box-shadow": "0px 0px 25px rgba(255, 255, 255, 0.5)",
          "border-radius": "15px",
        },
      };

      addUtilities(utilities);
    }),
  ],
};