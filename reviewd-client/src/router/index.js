import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";
import SignUpView from "@/views/SignUpView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/signup",
    name: "signUp",
    component: SignUpView,
    meta: {
      title: "SingUp",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | REVIEWD`;
  next();
});

export default router;
