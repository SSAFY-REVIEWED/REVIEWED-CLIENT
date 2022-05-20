<template>
  <div class="relative">
    <Navigation class="top-0" v-if="!isLoggingIn" />
    <main
      class="container max-w-container bg-red-400 pt-0 px-9 mt-60px"
      :class="{ 'mt-0': isLoggingIn }"
    >
      <router-view />
    </main>
    <Footer v-if="!isLoggingIn" />
  </div>
</template>

<script>
import Navigation from "@/components/TheNavigation.vue";
import Footer from "@/components/TheFooter.vue";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["isLoggingIn"]),
  },
  watch: {
    isLoggingIn() {
      console.log(this.isLoggingIn);
    },
  },
  create() {},
  mounted() {},
};
</script>

<style lang="scss">
* {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
}
</style>
