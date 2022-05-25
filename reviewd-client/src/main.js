import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./input.css";
import Toast, { TYPE, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;

const options = {
  icon: true,
  position: POSITION.TOP_CENTER,
  toastDefaults: {
    [TYPE.ERROR]: {
      timeout: 3000,
    },
    [TYPE.SUCCESS]: {
      timeout: 3000,
      hideProgressBar: true,
    },
  },
};
Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);
Vue.use(Toast, options);
Vue.use(VueCookies);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.mixin({
  methods: {
    globalHelper: function () {
      alert("Hello world");
    },
  },
});
