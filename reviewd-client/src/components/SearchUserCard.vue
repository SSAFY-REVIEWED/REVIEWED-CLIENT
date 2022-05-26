<template>
  <article>
    <div class="w-full relative flex" v-if="ready">
      <router-link
        :to="{ name: 'history', params: { userId: user.userId } }"
        class="flex w-full"
      >
        <div class="w-[20%]">
          <div class="w-28 h-28 rounded-full overflow-hidden">
            <img
              :src="user.profileImg"
              alt=""
              width="200"
              height="200"
              class="w-full h-full"
            />
          </div>
        </div>
        <div
          class="flex justify-between w-full pl-10 border-b-2 border-primary-red"
        >
          <div class="flex flex-col justify-evenly">
            <p class="text-h5 font-semibold">{{ user.userName }}</p>
            <p class="text-h5 text-light-black">리뷰 {{ user.reviewCount }}</p>
          </div>
        </div>
      </router-link>
      <div class="flex items-center">
        <FollowButton :follow="follow" @toggle-follow="toggleFollow" />
      </div>
    </div>
  </article>
</template>

<script>
import FollowButton from "@/components/FollowButton";
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";

export default {
  name: "searchUserCard",
  props: {
    user: {
      type: Object,
    },
  },
  components: {
    FollowButton,
  },
  data() {
    return {
      ready: false,
      follow: false,
    };
  },
  methods: {
    isReadyData() {
      this.ready = true;
    },
    setFollow() {
      this.follow = this.user.follow;
    },
    async toggleFollow() {
      try {
        await ProfileAPI.toggleFollow(this.profile.userId, this.user.userId, {
          follow: !this.follow,
        });
        this.follow = !this.follow;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  mounted() {
    this.isReadyData();
    this.setFollow();
  },
};
</script>

<style></style>
