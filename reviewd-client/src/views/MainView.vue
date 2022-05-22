<template>
  <section class="min-h-screen relative mt-10">
    <article class="mt-10">
      <MainHeader />
      <HotReviews />
    </article>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import MainHeader from "@/components/MainHeader";
import HotReviews from "@/components/HotReviews";

export default {
  name: "mainView",
  components: {
    MainHeader,
    HotReviews,
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),
  },
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
