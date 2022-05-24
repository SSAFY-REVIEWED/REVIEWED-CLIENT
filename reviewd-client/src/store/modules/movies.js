import MovieAPI from "@/api/movie";

export default {
  state: {
    dataReady: false,
    movieId: 335787,
    movieData: {
      movieId: 335787,
      title: "언차티드",
      releaseDate: "2020-05-23",
      posterUrl:
        "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
      genres: [
        {
          id: 28,
          name: "액션",
        },
        {
          id: 12,
          name: "모험",
        },
      ],
      country: [{ iso_3166_1: "US", name: "United States of America" }],
      actors: [
        {
          name: "Tom Holland",
          profile_path: "/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg",
        },
        {
          name: "Mark Wahlberg",
          profile_path: "/bTEFpaWd7A6AZVWOqKKBWzKEUe8.jpg",
        },
        {
          name: "Sophia Ali",
          profile_path: "/uqXn3Gp0FlsV5kDLwJ6FbeuJvx2.jpg",
        },
        {
          name: "Tati Gabrielle",
          profile_path: "/txZTL1HkPVxliTilbjlwR51VIt6.jpg",
        },
        {
          name: "Antonio Banderas",
          profile_path: "/iWIUEwgn2KW50MssR7tdPeFoRGW.jpg",
        },
        {
          name: "Steven Waddington",
          profile_path: "/gmlX5NNJI5HoNrK3RUPwBUmUgBW.jpg",
        },
        {
          name: "Rudy Pankow",
          profile_path: "/drnXgJZ6BJUlBGUzGtpVHNXZLbL.jpg",
        },
        {
          name: "Tiernan Jones",
          profile_path: "/2F3XY7pxQ963YyBtTp6PLXg6bi6.jpg",
        },
        {
          name: "Pingi Moli",
          profile_path: "/r6ODWBrRMz68zdU96JFXksYrxFs.jpg",
        },
        {
          name: "Jesús Evita",
          profile_path: null,
        },
      ],
      directors: [
        {
          name: "Art Marcum",
          profile_path: null,
        },
        {
          name: "Matt Holloway",
          profile_path: "/m8R4mMuKCfG60ITXtLrw8TT7zCf.jpg",
        },
        {
          name: "Ruben Fleischer",
          profile_path: "/3JLxOPFTLigSy8FjFjDyMwD9GIp.jpg",
        },
      ],
      screenTime: 116,
      overview:
        "평범한 삶을 살던 네이선은 인생을 바꿀 뜻밖의 제안을 받는다. 그의 미션은 크루와 함께 사라진 형과 500년 전 잃어버린 천문학적인 가치를 지닌 트레져를 찾아내는 것. 그러나 몬카다의 위협 속, 누구보다 빠르게 미지의 세계에 닿기 위해 결단을 내려야만 하는데…",
      voteAverage: 7.2,
      rate: 7.7,
      like: false,
    },
    reviewCount: 10,
    reviewList: [
      {
        reviewId: 1,
        userId: 1,
        userName: "Chunsik",
        userProfileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        rate: 8.7,
        likes: 76,
        like: true,
        movieTitle: "마더테레사",
        reviewTitle: "",
        replyCount: "72",
        createdAt: "2020-01-05",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
        spoiler: true,
      },
      {
        reviewId: 1,
        userId: 2,
        userName: "Chunsik",
        userProfileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        rate: 8.7,
        likes: 76,
        like: true,
        movieTitle: "마더테레사",
        reviewTitle: "",
        replyCount: "72",
        createdAt: "2020-01-05",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
        spoiler: false,
      },
      {
        reviewId: 1,
        userId: 3,
        userName: "Chunsik",
        userProfileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        rate: 8.7,
        likes: 76,
        like: true,
        movieTitle: "마더테레사",
        reviewTitle: "",
        replyCount: "72",
        createdAt: "2020-01-05",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
        spoiler: true,
      },
      {
        reviewId: 1,
        userId: 4,
        userName: "Chunsik",
        userProfileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        rate: 8.7,
        likes: 76,
        like: true,
        movieTitle: "마더테레사",
        reviewTitle: "",
        replyCount: "72",
        createdAt: "2020-01-05",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
        spoiler: false,
      },
      {
        reviewId: 1,
        userId: 1,
        userName: "Chunsik",
        userProfileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        rate: 8.7,
        likes: 76,
        like: true,
        movieTitle: "마더테레사",
        reviewTitle: "",
        replyCount: "72",
        createdAt: "2020-01-05",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
        spoiler: true,
      },
      {
        reviewId: 1,
        userId: 1,
        userName: "Chunsik",
        userProfileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        rate: 8.7,
        likes: 76,
        like: true,
        movieTitle: "마더테레사",
        reviewTitle: "",
        replyCount: "72",
        createdAt: "2020-01-05",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
        spoiler: true,
      },
    ],
    myReview: {
      reviewId: 1,
      userId: 1,
      userName: "Chunsik",
      userProfileImg:
        "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
      rate: 8.7,
      likes: 76,
      like: true,
      movieTitle: "마더테레사",
      reviewTitle: "",
      replyCount: "72",
      createdAt: "2020-01-05",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
      spoiler: true,
    },
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
      console.log(Object.keys(state.myReview));
    },
    setReviewList(state, reviewList) {
      state.reviewList = [reviewList];
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
    async createMovieReview({ commit, state }, { body }) {
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
