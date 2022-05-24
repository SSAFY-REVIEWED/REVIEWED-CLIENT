<template>
  <article class="w-full h-96 bg-red-400 relative flex p-10 mt-10">
    <div class="w-1/3 flex justify-center items-center">
      <div class="w-44 h-44 overflow-hidden rounded-full shadow-3xl">
        <img
          :src="userProfile.profileImg"
          loading="lazy"
          :alt="`${userProfile.name}이미지`"
          width="250"
          height="250"
          draggable="false"
          class="hover:scale-110 transition-all duration-500 bg-slate-400"
        />
      </div>
    </div>
    <div class="w-2/3">
      <div class="flex">
        <h1>{{ userProfile.name }}</h1>
        <button
          @click="toggleFollow"
          v-if="profile.userId !== userId"
          class="p-4"
          :class="{
            'bg-red-900': userProfile.follow,
            'bg-blue-600': !userProfile.follow,
          }"
        >
          <div v-if="!userProfile.follow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
            <span>Follow</span>
          </div>
          <div v-if="userProfile.follow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
              />
            </svg>
            <span>UnFollow</span>
          </div>
        </button>
      </div>
      <div class="flex">
        <p>{{ userProfile.reviewCount }} <span>리뷰</span></p>
        <p>{{ userProfile.followedCount }} <span>팔로워</span></p>
        <p>{{ userProfile.followingCount }} <span>팔로우</span></p>
      </div>
      <p>{{ userProfile.bio }}</p>
      <div class="flex">
        <h2>{{ userProfile.level }}</h2>
        <img
          src="../assets/images/levels/webp/gold.webp"
          :alt="`${userProfile.level} 레벨 이미지`"
          width="40"
          height="40"
        />
      </div>
      <div class="relative">
        <div class="w-full h-5 bg-light-black rounded-lg relative"></div>
        <transition name="show">
          <div
            v-if="show"
            ref="target"
            class="h-5 absolute top-0 left-0 w-70 overflow-hidden transition-all duration-1000 rounded-lg shadow-3xl"
            :style="{
              backgroundColor: color,
              width: `${this.userProfile.levelPercentage}%`,
            }"
          ></div>
        </transition>
      </div>
    </div>
    <div class="absolute bottom-0">
      <nav class="flex gap-x-8">
        <router-link :to="{ name: 'history', params: { userId } }"
          ><span v-if="profile.userId === userId">My </span> History</router-link
        >
        <router-link :to="{ name: 'movies', params: { userId } }"
          ><span v-if="profile.userId === userId">My </span>Movies</router-link
        >
        <router-link :to="{ name: 'reviews', params: { userId } }"
          ><span v-if="profile.userId === userId">My </span>Reviews</router-link
        >
        <router-link :to="{ name: 'likes', params: { userId } }"
          ><span v-if="profile.userId === userId">My </span>Likes</router-link
        >
        <router-link
          :to="{ name: 'settings', params: { userId } }"
          v-if="profile.userId === userId"
          >Settings</router-link
        >
      </nav>
    </div>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "profileHeader",
  props: {
    userId: {
      type: Number,
    },
    userProfile: {
      type: Object,
    },
  },
  data() {
    return {
      show: false,
      like: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = true;
    },
    async toggleFollow() {
      await this.$emit("toggle-follow");
    },
  },
  computed: {
    ...mapGetters(["profile"]),
    color() {
      switch (this.userProfile.level) {
        default:
          return "#939393";
        case "아이언":
          return "#BF805C";
        case "실버":
          return "#DBDBDB";
        case "골드":
          return "#F4BC2D";
        case "플래티넘":
          return "08D2DF";
        case "다이아몬트":
          return "#39B8FF";
        case "마스터":
          return "#C54AFF";
        case "그랜드 마스터":
          return "#FF1A0C";
        case "챌린저":
          return "#A90000";
      }
    },
  },
  watch: {
    color() {
      console.log(this.color);
    },
  },
  mounted() {
    this.toggleShow();
  },
};
</script>

<style lang="scss" scoped>
.show-enter-active {
  animation: show-in 3s;
}
@keyframes show-in {
  0% {
    width: 0;
  }
  100% {
  }
}
</style>
