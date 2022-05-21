import VueCookies from "vue-cookies";

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
      VueCookies.set("profile", profile);
    },
  },
  actions: {},
};
