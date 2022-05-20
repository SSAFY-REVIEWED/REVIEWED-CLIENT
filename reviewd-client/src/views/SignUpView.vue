<template>
  <div class="min-h-screen">SignUpView</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "singUpView",
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),
  },
  computed: {},
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
