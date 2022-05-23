<template>
  <div class="min-h-screen bg-red-200 relative">
    <MovieHeader :movieData="movieData" />
  </div>
</template>

<script>
import MovieHeader from "@/components/MovieHeader";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "movieView",
  data() {
    return {};
  },
  components: {
    MovieHeader,
  },
  methods: {
    ...mapActions(["getMovieDetail"]),
    ...mapMutations(["setMovieId", "isDataReady"]),
  },
  computed: {
    ...mapGetters([
      "movieData",
      "reviewList",
      "myReview",
      "movieId",
      "dataReady",
    ]),
  },
  created() {
    this.setMovieId(this.$route.params);
  },
  //TODO: api 동기화 시 해제
  // async mounted() {
  //   await this.getMovieDetail(this.movieId);
  //   this.isDataReady();
  // },
};
</script>

<style lang="scss" scoped></style>
