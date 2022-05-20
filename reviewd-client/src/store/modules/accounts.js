// import axios from "axios";
// import { signup } from "@/api/index.js";

export default {
  state: {
    isLoggingIn: false,
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
  },
  actions: {},
};
