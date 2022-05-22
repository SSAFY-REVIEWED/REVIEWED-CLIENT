<template>
  <section class="min-h-screen relative mt-10">
    <article class="mt-10">
      <MainHeader />
    </article>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import MainHeader from "@/components/MainHeader";

export default {
  name: "mainView",
  components: {
    MainHeader,
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
