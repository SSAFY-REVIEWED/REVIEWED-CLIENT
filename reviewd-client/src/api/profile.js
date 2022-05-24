import axios from "axios";

const ProfileAPI = {
  async getProfile(userId) {
    return axios.get(PROFILE_URL.PROFILE(userId));
  },
  async getHistory(userId) {
    return axios.get(PROFILE_URL.HISTORY(userId));
  },
  async getMovieList(userId) {
    return axios.get(PROFILE_URL.MOVIE_LIST(userId));
  },
  async getReviewList(userId, page) {
    return axios.get(PROFILE_URL.REVIEW_LIST(userId, page));
  },
  async updateProfile(userId) {
    return axios.patch(PROFILE_URL.PROFILE(userId));
  },
  async getFollowings(userId) {
    return axios.get(PROFILE_URL.FOLLOWINGS(userId));
  },
  async getFollowers(userId) {
    return axios.get(PROFILE_URL.FOLLOWERS(userId));
  },
  async deleteFollowers(userId, targetId) {
    return axios.delete(PROFILE_URL.DELETE_FOLLOWER(userId, targetId));
  },
  async toggleFollow(userId, target, body) {
    return axios.post(PROFILE_URL.FOLLOW(userId, target), body);
  },
};

export const PROFILE_URL = {
  PROFILE: (userId) => `/profile/${userId}/`,
  HISTORY: (userId) => `/profile/${userId}/history/`,
  MOVIE_LIST: (userId) => `/profile/${userId}/movies/`,
  REVIEW_LIST: (userId, page) => `/profile/${userId}/reviews?page=${page}/`,
  FOLLOWINGS: (userId) => `/profile/${userId}/following/`,
  FOLLOWERS: (userId) => `/profile/${userId}/followed/`,
  DELETE_FOLLOWER: (userId, targetId) =>
    `/profile/${userId}/followed/${targetId}/`,
  FOLLOW: (userId, targetId) => `profile/${userId}/following/${targetId}/`,
};

export default ProfileAPI;
