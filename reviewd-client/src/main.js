import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./input.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueCookies from "vue-cookies";

Vue.config.productionTip = false;
Vue.use(Toast);
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
