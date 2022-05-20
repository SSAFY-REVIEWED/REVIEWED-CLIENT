<template>
  <div class="">
    <Navigation />
    <main class="container max-w-container bg-red-400 mx-auto">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from "@/components/TheNavigation.vue";
import Footer from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
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
