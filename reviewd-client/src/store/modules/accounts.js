import VueCookies from "vue-cookies";
import { getData } from "@/api/index";
import router from "@/router";

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
        profile: (state) => state.profile,
    },
    mutations: {
        updateProfile: (state, profile) => {
            state.profile = {...state.profile, ...profile };
            VueCookies.set("profile", state.profile);
        },
        setLoggingIn: (state, $route) => {
            const name = $route.path;
            if (name === "/signup" || name === "/login" || name === "/survey") {
                state.isLoggingIn = true;
                return;
            }
            state.isLoggingIn = false;
        },
        setProfile: (state, data) => {
            console.log(data);
            const profile = {
                name: data.name,
                profileImg: data.profileImg,
                userId: data.userId,
                survey: data.survey,
            };
            state.profile = {
                ...state.profile,
                ...profile,
            };
            if (!profile.survey) {
                router.push({ name: "survey" });
            } else {
                router.push({ name: "main" });
            }
            VueCookies.set("profile", profile);
        },
        setLoggedIn: (state) => {
            state.isLoggedIn = true;
        },
        initializeProfile: (state) => {
            state.profile = {};
        },
        logout: (state) => {
            state.isLoggedIn = false;
            VueCookies.remove("profile");
            VueCookies.remove("accessToken");
            VueCookies.remove("refreshToken");
        },
    },
    actions: {
        async getUser({ commit }) {
            commit("setLoggedIn");
            try {
                const response = await getData("USER_INFO");
                commit("setProfile", response.data);
            } catch (err) {
                console.log(err);
            }
        },
    },
};