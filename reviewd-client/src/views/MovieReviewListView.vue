<template>
  <div>MovieReviews</div>
</template>

<script>
export default {
  name: "movieReviewListView",
  methods: {
    getQuery() {
      const params = this.$route.params.movieId;
      const query = this.$route.query;
      console.log(params, query);
    },
  },
  created() {
    this.getQuery();
  },
};
</script>

<style></style>
