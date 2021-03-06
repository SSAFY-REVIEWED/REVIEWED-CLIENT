export default {
  state: {
    searchKeyword: "",
  },
  getters: {
    searchKeyword: (state) => state.searchKeyword,
  },
  mutations: {
    setKeyword(state, keyword) {
      state.searchKeyword = keyword;
    },
  },
  actions: {},
};
