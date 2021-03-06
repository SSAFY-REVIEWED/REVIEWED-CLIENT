module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        480: "480px",
        650: "650px",
      },
      colors: {
        "primary-red": "#F96A19",
        "second-red": "#FB60BD",
        "primary-blue": "#405ECE",
        "second-blue": "#5F79D6",
        "third-blue": "#7F6CF4",
        "fourth-blue": "#D2E9FF",
        "primary-green": "#337C16",
        "second-green": "#91BB67",
        "third-green": "#E4FAB7",
        "signup-green": "#04CC00",
        "login-green": "#11C2CD",
        "light-black": "#404040",
        "primary-gray": "#8B8B8B",
        "light-gray": "#F4F4F4",
        "star-yellow": "#FFD84D",
        disabled: "#efefef",
      },
      fontSize: {
        h1: ["60px", "48px"],
        h2: ["50px", "34px"],
        h3: "38px",
        h4: ["22px", "22px"],
        h5: ["20px", "18px"],
        p: ["16px", "16px"],
        small: ["10px", "14px"],
        logo: "40px",
        xsm: "13px",
      },
      height: {
        15: "60px",
        footer: "440px",
        profile: "142px",
        "130%": "130%",
      },
      width: {
        profile: "162px",
        55: "55px",
      },
      boxShadow: {
        "inner-input": "inset 0px 2px 4px rgba(0, 0, 0, 0.25);",
        "3xl":
          "rgb(0 0 0 / 20%) 0px 4px 20px, rgb(255 255 255 / 20%) 0px 0px 0px 1px inset",
        "sign-input": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        "3%": "3%",
        "60px": "60px",
        "150%": "150%",
        "183%": "183.33%",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        rotate: {
          from: { rotate: 0 },
          to: { rotate: 90 },
        },
      },

      animation: {
        fadeIn: "fadeIn 300ms ease-in-out",
        fadeOut: "fadeOut 300ms ease-in-out",
        rotate: "rotate 1000ms linear",
      },
      
      screens: {
        phone: "390px",
      },
    },
  },
  plugins: [],
};
