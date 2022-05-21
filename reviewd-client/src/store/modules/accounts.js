// import axios from "axios";
// import { signup } from "@/api/index.js";

export default {
  state: {
    isLoggingIn: false,
    isLoggedIn: JSON.parse(localStorage.getItem("profile")) ? true : false,
    profile: JSON.parse(localStorage.getItem("profile")) || {},
    access_token: localStorage.getItem("accessToken") || "",
    refresh_token: localStorage.getItem("refreshToken") || "",
  },
  getters: {
    isLoggingIn: (state) => {
      return state.isLoggingIn;
    },
  },
  mutations: {
    setLoggingIn: (state, $route) => {
      const name = $route?.path;
      if (name === "/signup" || name === "/login") {
        state.isLoggingIn = true;
        return;
      }
      state.isLoggingIn = false;
    },
    setUserProfile: (state, data) => {
      const profile = {
        name: data.name,
        profileImg: data.profile_img,
        user_id: data.user_id,
      };
      state.profile = {
        ...state.profile,
        ...profile,
      };
      localStorage.setItem("profile", JSON.stringify(profile));
      state.access_token = data.token.access;
      localStorage.setItem("accessToken", data.token.access);
      localStorage.setItem("refreshToken", data.token.refresh);
    },
  },
  actions: {},
};
