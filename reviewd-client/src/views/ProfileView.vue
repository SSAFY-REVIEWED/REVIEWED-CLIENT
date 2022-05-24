<template>
  <div>
    <div class="w-full bg-slate-200">ProfileView black</div>
    <nav>
      <router-link :to="{ name: 'history', params: { userId } }"
        >history</router-link
      >
      <router-link :to="{ name: 'likes', params: { userId } }">likes</router-link>
      <router-link :to="{ name: 'movies', params: { userId } }"
        >movies</router-link
      >
      <router-link :to="{ name: 'settings', params: { userId } }"
        >settings</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "profileView",
  computed: {
    ...mapGetters(["profile"]),
    userId() {
      return this.profile.userId;
    },
  },
  created() {},
};
</script>

<style></style>
