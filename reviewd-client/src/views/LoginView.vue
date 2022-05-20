<template>
  <div class="min-h-screen">Login</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "loginView",
  data() {
    return {};
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
