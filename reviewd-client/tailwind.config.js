module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js,vue}"],
  theme: {
    maxWidth: {
      container: "1440px",
    },
    extend: {
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
      },
      fontSize: {
        h1: ["60px", "48px"],
        h2: ["50px", "34px"],
        h3: ["38px", "28px"],
        h4: ["22px", "22px"],
        h5: ["20px", "18px"],
        p: ["16px", "16px"],
        small: ["10px", "14px"],
        logo: "40px",
      },
      height: {
        15: "60px",
        footer: "440px",
      },
      boxShadow: {
        "inner-input": "inset 0px 2px 4px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
