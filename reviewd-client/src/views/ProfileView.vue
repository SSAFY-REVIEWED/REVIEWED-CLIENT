<template>
  <div>
    <div class="w-full bg-slate-200">
      <ProfileHeader
        :userId="userId"
        :userProfile="userProfile"
        @toggle-follow="toggleUserFollow"
      />
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader";
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";
export default {
  name: "profileView",
  components: {
    ProfileHeader,
  },
  data() {
    return {
      userId: null,
      userProfile: {
        name: "JAEHO",
        profileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        reviewCount: 177,
        followingCount: 10,
        followedCount: 12,
        bio: "뿌슝빠슝뿌야뿡아뺭빵",
        level: "골드",
        experience: 1768,
        follow: false,
        levelPercentage: 56,
        levelImg: "../assets/images/posters/범죄도시2.jpeg",
      },
    };
  },
  methods: {
    async getUserProfile(userId) {
      await ProfileAPI.getProfile(userId);
    },
    getParams() {
      const params = this.$route.params.userId;
      this.userId = +params;
    },
    setFollow() {
      this.follow = !this.follow;
      if (this.follow) this.followedCount++;
      else this.followingCount--;
    },
    async toggleUserFollow() {
      await ProfileAPI.toggleFollow(this.profile.userId, this.userId, {
        follow: !this.userProfile.follow,
      });
    },
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  created() {
    this.getParams();
    // this.getUserProfile(this.userId);
  },
};
</script>

<style></style>
