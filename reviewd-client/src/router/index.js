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
import RankerView from "@/views/RankerView";
import MovieView from "@/views/MovieView";
import MovieReviewListView from "@/views/MovieReviewListView";
import ReviewView from "@/views/ReviewView";
import ProfileView from "@/views/ProfileView";
import ProfileHistoryView from "@/views/ProfileHistoryView";
import ProfileLikesView from "@/views/ProfileLikesView";
import ProfileMoviesView from "@/views/ProfileMoviesView";
import ProfileReviewsView from "@/views/ProfileReviewsView";
import ProfileSettingsView from "@/views/ProfileSettingsView";

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
    component: RankerView,
    meta: {
      title: "Rank",
      authorized: false,
    },
  },
  {
    path: "/movies/:movieId",
    name: "movie",
    component: MovieView,
    meta: {
      title: "Movie",
      authorized: false,
    },
  },
  {
    path: "/movies/:movieId/reviews",
    name: "reviewList",
    component: MovieReviewListView,
    meta: {
      title: "Reviews",
      authorized: false,
    },
  },
  {
    path: "/reviews/:reviewId",
    name: "review",
    component: ReviewView,
    meta: {
      title: "Review",
      authorized: false,
    },
  },
  {
    path: "/profile/:userId",
    name: "profile",
    component: ProfileView,
    meta: {
      title: "Profile",
      authorized: false,
    },
    children: [
      {
        path: "history",
        name: "history",
        alias: [""],
        component: ProfileHistoryView,
      },
      {
        path: "likes",
        name: "likes",
        component: ProfileLikesView,
      },
      {
        path: "movies",
        name: "movies",
        component: ProfileMoviesView,
      },
      {
        path: "reviews",
        name: "reviews",
        component: ProfileReviewsView,
      },
      {
        path: "settings",
        name: "settings",
        component: ProfileSettingsView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
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
