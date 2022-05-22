import VueCookies from "vue-cookies";
import { getData } from "@/api/index";

export default {
  state: {
    isLoggingIn: false,
    isLoggedIn: VueCookies.get("accessToken") ? true : false,
    profile: VueCookies.get("profile") || {},
  },
  getters: {
    isLoggingIn: (state) => {
      return state.isLoggingIn;
    },
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
  },
  mutations: {
    setLoggingIn: (state, $route) => {
      const name = $route.path;
      if (name === "/signup" || name === "/login" || name === "/survey") {
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
      VueCookies.set("profile", profile);
    },
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
  },
  actions: {
    async getUser({ commit }) {
      commit("setLoggedIn");
      try {
        const response = await getData("USER_INFO");
        commit("serUserProfile", response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
