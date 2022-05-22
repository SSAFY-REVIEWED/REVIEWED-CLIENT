<template>
  <div class="min-h-screen bg-red-200">Main</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "mainView",
  methods: {
    ...mapMutations(["setLoggingIn"]),
  },
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
