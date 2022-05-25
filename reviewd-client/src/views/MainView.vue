<template>
  <section
    class="max-w-container mx-auto pt-0 px-9 min-h-screen relative mt-20"
  >
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
