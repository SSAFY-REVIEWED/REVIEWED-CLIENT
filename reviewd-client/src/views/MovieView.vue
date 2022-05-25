<template>
  <div class="max-w-container mx-auto">
    <MovieHeader />
    <div class="min-h-screen relative max-w-container mx-auto pt-0 px-9">
      <MovieMain />
    </div>
  </div>
</template>

<script>
import MovieHeader from "@/components/MovieHeader";
import MovieMain from "@/components/MovieMain";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "movieView",
  data() {
    return {};
  },
  components: {
    MovieHeader,
    MovieMain,
  },
  methods: {
    ...mapActions(["getMovieDetail"]),
    ...mapMutations(["setMovieId", "isDataReady"]),
  },
  computed: {
    ...mapGetters(["reviewList", "myReview", "movieId", "dataReady"]),
  },
  created() {
    this.setMovieId(this.$route.params);
  },
  // TODO: api 동기화 시 해제
  // async mounted() {
  //   await this.getMovieDetail(this.movieId);
  //   this.isDataReady();
  // },
};
</script>

<style lang="scss" scoped></style>
