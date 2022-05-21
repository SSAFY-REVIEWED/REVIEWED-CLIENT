import Vue from "vue";
import VueRouter from "vue-router";
import getNewAccessToken from "@/api/refresh";
import HomeView from "@/views/HomeView";
import SignUpView from "@/views/SignUpView";
import LoginView from "@/views/LoginView";
import VueCookies from "vue-cookies";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      unauthorized: true,
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
    meta: {
      title: "SignUp",
      unauthorized: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "Login",
      unauthorized: true,
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
    VueCookies.get("accessToken") === null &&
    VueCookies.get("refreshToken") !== null
  ) {
    await getNewAccessToken();
  }
  if (
    to.matched.some((record) => record.meta.unauthorized) ||
    VueCookies.get("accessToken")
  ) {
    return next();
  }

  return next("/login");
});

export default router;
