import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
import getNewAccessToken from "@/api/refresh";
import HomeView from "@/views/HomeView";
import SignUpView from "@/views/SignUpView";
import LoginView from "@/views/LoginView";
import SurveyView from "@/views/SurveyView";
import MainView from "@/views/MainView";
import ChallengeView from "@/views/ChallengeView";
import RankView from "@/views/RankView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      authorized: false,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
    meta: {
      title: "SignUp",
      authorized: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "Login",
      authorized: false,
    },
  },
  {
    path: "/survey",
    name: "survey",
    component: SurveyView,
    meta: {
      title: "Survey",
      authorized: false,
    },
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
    meta: {
      title: "Home",
      authorized: false,
    },
  },
  {
    path: "/challenge",
    name: "challenge",
    component: ChallengeView,
    meta: {
      title: "Challenge",
      authorized: false,
    },
  },
  {
    path: "/rank",
    name: "rank",
    component: RankView,
    meta: {
      title: "Rank",
      authorized: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} | REVIEWD`;
  if (
    to.meta.authorized &&
    VueCookies.get("accessToken") === null &&
    VueCookies.get("refreshToken") !== null
  ) {
    await getNewAccessToken();
  }
  if (
    to.matched.some((record) => !record.meta.authorized) ||
    VueCookies.get("accessToken")
  ) {
    return next();
  }

  return next("/login");
});

export default router;
