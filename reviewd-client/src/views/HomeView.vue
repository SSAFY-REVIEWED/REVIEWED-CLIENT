<template>
  <div class="min-h-screen">Home View</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "homeView",
  methods: {
    ...mapMutations(["setLoggingIn"]),
  },
  computed: {
    ...mapGetters(["isLoggingIn"]),
  },
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style></style>
