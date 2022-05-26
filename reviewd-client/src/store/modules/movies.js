import MovieAPI from "@/api/movie";

export default {
  state: {
    dataReady: false,
    movieId: 335787,
    movieData: {},
    reviewList: [],
    reviewCount: 0,
    myReview: {},
  },
  getters: {
    movieData: (state) => state.movieData,
    dataReady: (state) => state.dataReady,
    reviewList: (state) => state.reviewList,
    myReview: (state) => state.myReview,
    movieId: (state) => state.movieId,
    reviewCount: (state) => state.reviewCount,
  },
  mutations: {
    setMovieData(state, movieData) {
      state.movieData = { ...state.movieData, ...movieData };
    },
    setMyReview(state, review) {
      state.myReview = review;
    },
    setReviewList(state, reviewList) {
      state.reviewList = [...reviewList];
    },
    changeLikesOfReviewList(state, index) {
      if (index === -1) {
        state.myReview.like = !state.myReview.like;
        if (state.myReview.like) {
          state.myReview.likes++;
          return;
        }
        state.myReview.likes--;
        return;
      }
      state.reviewList[index].like = !state.reviewList[index].like;
      if (state.reviewList[index].like) {
        state.reviewList[index].likes++;
        return;
      }
      state.reviewList[index].likes--;
    },
    isDataReady(state) {
      state.dataReady = true;
    },
    setMovieId(state, params) {
      state.movieId = params.movieId;
    },
  },
  actions: {
    async getMovieDetail({ commit }, movieId) {
      try {
        const response = await MovieAPI.getMovieData(movieId);
        const { movieData } = response.data;
        commit("setMovieData", movieData);
      } catch (err) {
        console.log(err);
      }
    },
    async likeMovie({ commit, state }) {
      commit("setMovieData", { like: !state.movieData.like });
      try {
        await MovieAPI.likeMovie(state.movieId);
      } catch (err) {
        console.log(err);
      }
    },
    async rateMovie({ commit, state }, body) {
      try {
        const response = await MovieAPI.rateMovie(state.movieId, body);
        const { voteAverage } = response.data;
        commit("setMovieData", { voteAverage, body });
      } catch (err) {
        console.log(err);
      }
    },
    async getMovieReviewList({ commit }, movieId) {
      try {
        const response = await MovieAPI.getMovieReviewList(movieId);
        if (response.data.review) {
          const { review } = response.data;
          commit("setMyReview", review);
        } else commit("setMyReview", {});
        if (response.data.reviews) {
          const { reviews } = response.data;
          commit("setReviewList", reviews );
        } else commit("setReviewList", []);
      } catch (err) {
        console.log(err);
      }
    },
    async createMovieReview({ commit, state }, body) {
      try {
        const response = await MovieAPI.createMovieReview(state.movieId, body);
        const { review } = response.data;
        commit("setMyReview", review);
      } catch (err) {
        console.log(err);
      }
    },
    async editReview({ commit }, { reviewId, body }) {
      try {
        const response = await MovieAPI.editReview(reviewId, body);
        const { review } = response.data;
        commit("setMyReview", review);
      } catch (err) {
        console.log(err);
      }
    },
    async likeReview({ commit }, { reviewId, like, index }) {
      try {
        await MovieAPI.likeReview(reviewId, { like });
        commit("changeLikesOfReviewList", index);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteReview({ commit }, reviewId) {
      try {
        await MovieAPI.deleteReview(reviewId);
        commit("setMyReview", {});
      } catch (err) {
        console.log(err);
      }
    },
  },
};
