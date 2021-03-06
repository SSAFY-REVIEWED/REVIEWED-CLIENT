import Vue from "vue";
import Vuex from "vuex";
import accounts from "./modules/accounts";
import movies from "./modules/movies";
import profile from "./modules/profile";
import search from "./modules/search";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { accounts, movies, profile, search },
});
