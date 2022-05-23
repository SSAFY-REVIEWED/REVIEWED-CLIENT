import MovieAPI from "@/api/movie";

export default {
  state: {
    dataReady: false,
    movieId: "",
    movieData: {
      title: "범죄도시2",
      date: "2022-05-03",
      posterUrl:
        "https://w.namu.la/s/d0295ada5124aa37f7d06c7455dcfebcb28ca0716b6b98f214c6e176bd953ffcda3596b8a074216d23f4e4fcd2fa9e0f8588b49eedb8d775e320e4d92bfa005f778667994bc8846d22209b8ef96f4cca5d0169b0d5ee5e040fe6e1b6cb544417726260de0bdece40fc625ea4feb8576e",
      genres: ["액션", "범죄"],
      actors: ["샘 해밍턴", "손석구", "마동석", "공유"],
      country: "대한민국",
      directors: ["나영석", "무한도전"],
      screenTime: 186,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit tempore aut? Quod quas mollitia quaerat facere corrupti eveniet, omnis adipisci inventore iure aut, odit nobis molestiae in ipsam. Sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem, unde, aspernatur blanditiis ab necessitatibus minima, asperiores at eaque maiores saepe ducimus voluptate officia fuga reprehenderit provident. Recusandae, aperiam voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto minus deserunt dolor autem. Quod magni fugiat facilis repellat inventore perspiciatis illo error itaque! Voluptatum expedita laudantium id repellat, magnam alias!",
      rates: 8.7,
      rate: 0,
      like: false,
    },
    reviewList: [],
    myReview: {},
  },
  getters: {
    movieData: (state) => state.movieData,
    dataReady: (state) => state.dataReady,
    reviewList: (state) => state.reviewList,
    myReview: (state) => state.myReview,
    movieId: (state) => state.movieId,
  },
  mutations: {
    setMovieData(state, movieData) {
      state.movieData = { ...state.movieData, ...movieData };
    },
    setMyReview(state, review) {
      state.myReview = review;
    },
    setReviewList(state, reviewList) {
      state.reviewList = [reviewList];
    },
    changeReviewListLike(state, index) {
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
    async likeMovie({ commit }, movieId) {
      try {
        await MovieAPI.likeMovie(movieId);
        commit("setMovieData", { like: !this.movieData.like });
      } catch (err) {
        console.log(err);
      }
    },
    async rateMovie({ commit }, { movieId, body }) {
      try {
        const response = await MovieAPI.rateMovie(movieId, body);
        const { rates } = response.data;
        commit("setMovieData", { rates, body });
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
        }
        if (response.data.reviews) {
          const { reviews } = response.data;
          commit("setReviewList", { reviews });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async createMovieReview({ commit }, { movieId, body }) {
      try {
        const response = await MovieAPI.createMovieReview(movieId, body);
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
    async likeReview({ commit }, { reviewId, body, index }) {
      try {
        await MovieAPI.likeReview(reviewId, body);
        commit("changeReviewListLike", index);
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
