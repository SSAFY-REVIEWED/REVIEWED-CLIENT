import ProfileAPI from "@/api/profile";

export default {
  state: {
    userProfile: {
      // name: "JAEHO",
      // profileImg:
      //   "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
      // reviewCount: 177,
      // followingCount: 10,
      // followedCount: 12,
      // bio: "뿌슝빠슝뿌야뿡아뺭빵",
      // level: "Gold",
      // experience: 1768,
      // follow: false,
      // levelPercentage: 56,
      // levelImg: "../assets/images/levels/webp/gold.webp",
    },
  },
  getters: {
    userProfile: (state) => state.userProfile,
  },
  mutations: {
    setUserProfile(state, userProfileInfo) {
      state.userProfile = { ...state.userProfile, ...userProfileInfo };
    },
    setUserFollow(state) {
      state.userProfile.follow = !state.userProfile.follow;
      if (state.userProfile.follow) {
        state.userProfile.followedCount++;
      } else state.userProfile.followedCount--;
    },
  },
  actions: {
    async getUserProfile({ commit }, userId) {
      try {
        const response = await ProfileAPI.getProfile(userId);
        console.log(response.data, "유저 데이터");
        commit("setUserProfile", response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async toggleUserFollow({ commit }, { myUserId, targetUserId }) {
      try {
        await ProfileAPI.toggleFollow(myUserId, targetUserId);
        commit("setUserFollow");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
