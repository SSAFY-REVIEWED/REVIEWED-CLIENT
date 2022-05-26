<template>
  <article
    class="w-full min-h-[384px] relative flex flex-col md:flex-row p-10 bg-light-gray rounded-t-xl"
    v-if="userProfile"
  >
    <div class="w-full md:w-1/3 flex justify-center items-center">
      <div class="w-44 h-44 overflow-hidden rounded-full shadow-3xl">
        <img
          :src="userProfile.profileImg"
          loading="lazy"
          :alt="`${userProfile.name}이미지`"
          width="250"
          height="250"
          draggable="false"
          class="hover:scale-110 transition-all duration-500 bg-slate-400 object-cover"
        />
      </div>
    </div>
    <div
      class="w-full md:w-2/3 h-full self-start pt-10 flex flex-col gap-y-6 justify-between"
    >
      <div>
        <div
          class="flex flex-col md:flex-row items-center w-full md:w-2/3 justify-between"
        >
          <h1 class="text-h3 font-semibold">{{ userProfile.name }}</h1>
          <FollowButton v-if="profile.userId === userId" />
        </div>
        <div class="flex gap-x-6 items-start mt-5">
          <p class="w-fit min-x-[100px]">{{ userProfile.reviewCount }} 리뷰</p>
          <button class="w-20">
            {{ userProfile.followedCount }} <span>팔로워</span>
          </button>
          <button class="w-20">
            {{ userProfile.followingCount }} <span>팔로우</span>
          </button>
        </div>
        <p class="text-h4 mt-3">
          {{
            userProfile.bio ? userProfile.bio : "지구 최강 개발자 입니다."
          }}&nbsp;
        </p>
        <div class="flex items-center mt-5">
          <p
            class="text-h4"
            :style="{
              color: color,
            }"
          >
            {{ userProfile.level }} &nbsp;
          </p>
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <img
              :src="userProfile.levelImg"
              :alt="`${userProfile.level} 레벨 이미지`"
              width="50"
              height="50"
              class="w-full h-full bg-transparent"
            />
          </div>
        </div>
        <div class="relative mt-3">
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
    </div>
    <div class="absolute bottom-0 mx-8">
      <nav class="flex gap-x-2 text-p font-bold h-9">
        <router-link
          :to="{ name: 'history', params: { userId } }"
          :class="{
            'border-b-4 border-primary-red text-primary-red':
              pageName === 'history',
          }"
          ><button class="font-bold px-3">
            <span v-if="profile.userId === userId">My </span> History
          </button></router-link
        >
        <router-link
          :to="{ name: 'movies', params: { userId } }"
          :class="{
            'border-b-4 border-primary-red text-primary-red':
              pageName === 'movies',
          }"
          ><button class="font-bold px-3">
            <span v-if="profile.userId === userId">My </span>Movies
          </button></router-link
        >
        <router-link
          :to="{ name: 'reviews', params: { userId } }"
          :class="{
            'border-b-4 border-primary-red text-primary-red':
              pageName === 'reviews',
          }"
        >
          <button class="font-bold px-3">
            <span v-if="profile.userId === userId">My </span>Reviews
          </button></router-link
        >
        <router-link
          :to="{ name: 'likes', params: { userId } }"
          :class="{
            'border-b-4 border-primary-red text-primary-red':
              pageName === 'likes',
          }"
          ><button class="font-bold px-3">
            <span v-if="profile.userId === userId">My </span>Likes
          </button></router-link
        >
        <router-link
          :to="{ name: 'settings', params: { userId } }"
          :class="{
            'border-b-4 border-primary-red text-primary-red':
              pageName === 'settings',
          }"
          v-if="profile.userId === userId"
          ><button class="font-bold px-3">Settings</button></router-link
        >
      </nav>
    </div>
  </article>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FollowButton from "@/components/FollowButton";

export default {
  name: "profileHeader",
  components: {
    FollowButton,
  },
  props: {
    userId: {
      type: Number,
    },
  },
  data() {
    return {
      show: false,
      like: false,
      pageName: "",
    };
  },
  methods: {
    ...mapActions(["toggleUserFollow"]),
    toggleShow() {
      this.show = true;
    },
    async toggleFollow() {
      await this.toggleUserFollow({
        myUserId: this.profile.userId,
        targetUserId: this.userId,
      });
    },
    getPageNum() {
      this.pageName = this.$route.name;
    },
  },
  computed: {
    ...mapGetters(["profile", "userProfile"]),
    color() {
      switch (this.userProfile.level) {
        case "Iron":
          return "#939393";
        case "Bronze":
          return "#BF805C";
        case "Silver":
          return "#DBDBDB";
        case "Gold":
          return "#F4BC2D";
        case "Platinum":
          return "#08D2DF";
        case "Diamond":
          return "#39B8FF";
        case "Master":
          return "#C54AFF";
        case "Grandmaster":
          return "#FF1A0C";
        case "Challenger":
          return "#A90000";
        default:
          return "#939393";
      }
    },
  },
  watch: {
    $route() {
      this.getPageNum();
      console.log(this.userProfile);
    },
  },
  mounted() {
    this.toggleShow();
    this.getPageNum();
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
