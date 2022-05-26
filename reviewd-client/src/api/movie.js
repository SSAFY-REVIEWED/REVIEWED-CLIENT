import axios from "axios";

const MovieAPI = {
  async getMainMovieList() {
    return await axios.get(MOVIE_URL.MAIN_MOVIE_LIST());
  },
  async getMovieData(url) {
    return axios.get(MOVIE_URL.MOVIE(url));
  },
  async likeMovie(movieId, body) {
    return axios.post(MOVIE_URL.MOVIE_LIKE(movieId), body);
  },
  async rateMovie(movieId, body) {
    return axios.post(MOVIE_URL.MOVIE_RATE(movieId), body);
  },
  async getMovieReviewList(movieId) {
    return axios.get(MOVIE_URL.MOVIE_REVIEW_LIST(movieId));
  },
  async createMovieReview(movieId, body) {
    return axios.post(MOVIE_URL.MOVIE_REVIEW_LIST(movieId), body);
  },
  async getMovieAllReviewList(movieId, query, page) {
    return axios.get(MOVIE_URL.REVIEW_LIST(movieId, query, page));
  },
  async getReview(reviewId) {
    return axios.get(MOVIE_URL.REVIEW(reviewId));
  },
  async editReview(reviewId, body) {
    return axios.patch(MOVIE_URL.REVIEW(reviewId), body);
  },
  async deleteReview(reviewId) {
    return axios.delete(MOVIE_URL.REVIEW(reviewId));
  },
  async likeReview(reviewId, body) {
    return axios.post(MOVIE_URL.REVIEW_LIKE(reviewId), body);
  },
  async getReviewCommentList(reviewId) {
    return axios.get(MOVIE_URL.REVIEW_COMMENT_LIST(reviewId));
  },
  async createReviewComment(reviewId, body) {
    return axios.post(MOVIE_URL.REVIEW_COMMENT_LIST(reviewId), body);
  },
  async editReviewComment(reviewId, commentId, body) {
    return axios.patch(MOVIE_URL.REVIEW_COMMENT(reviewId, commentId), body);
  },
  async deleteReviewComment(reviewId, body) {
    return axios.delete(MOVIE_URL.REVIEW_COMMENT(reviewId, body));
  },
  async getYoutube(url, params) {
    return axios.get(url, { params });
  },
  async getChallenges() {
    return axios.get(MOVIE_URL.CHALLENGE());
  },
};

const MOVIE_URL = {
  MAIN_MOVIE_LIST: () => "/main/",
  MOVIE: (movieId) => `/movies/${movieId}/`,
  MOVIE_LIKE: (movieId) => `/movies/${movieId}/likes/`,
  MOVIE_RATE: (movieId) => `/movies/${movieId}/ratings/`,
  MOVIE_REVIEW_LIST: (movieId) => `/movies/${movieId}/reviews/`,
  REVIEW_LIST: (movieId, query, page) =>
    `/movies/${movieId}/reviews?query=${query}&page=${page}/`,
  REVIEW: (reviewId) => `/reviews/${reviewId}/`,
  REVIEW_LIKE: (reviewId) => `/reviews/${reviewId}/likes/`,
  REVIEW_COMMENT_LIST: (reviewId) => `/reviews/${reviewId}/comments/`,
  REVIEW_COMMENT: (reviewId, commentId) =>
    `/reviews/${reviewId}/comments/${commentId}/`,
  CHALLENGE: () => "/challenges/",
};

export default MovieAPI;

// 귀신 영화 5편: 250546 396422 521029 49018 1417

// 포켓몬: 350499 382190 436931 494407 571891 571265 756403 9502 49444 140300

// 영이 들어가는 영화 : 4247 4248 4256 4257 23483 82633 614409 1271 11674 14161
