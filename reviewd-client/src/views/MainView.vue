<template>
  <section
    class="max-w-container mx-auto pt-0 px-9 min-h-screen relative mt-20"
  >
    <article class="mt-10">
      <MainHeader v-if="movieList.length" :movieList="movieList" />
      <HotReviews v-if="false" />
    </article>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import MainHeader from "@/components/MainHeader";
import HotReviews from "@/components/HotReviews";
import MovieAPI from "@/api/movie";

export default {
  name: "mainView",
  components: {
    MainHeader,
    HotReviews,
  },
  data() {
    return {
      movieList: [],
    };
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),

    slideChangeTransitionStart() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    },
    setMovieList(movieList) {
      this.movieList = movieList;
    },
    async getMovieList() {
      try {
        const response = await MovieAPI.getMainMovieList();
        console.log(response)

        this.setMovieList(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.setLoggingIn(this.$route);
    this.getMovieList();
  },
};
</script>

<style lang="scss" scoped></style>
