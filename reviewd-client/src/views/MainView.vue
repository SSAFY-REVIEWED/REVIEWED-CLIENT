<template>
  <section class="min-h-screen bg-red-200">
    <article>
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
