<template>
  <section
    class="max-w-container mx-auto pt-0 px-9 min-h-screen relative mt-20"
  >
    <article class="mt-10">
      <h1 class="text-h3 font-semibold" >MOVIE</h1>
      <MainHeader :movieList="SF" :order="1" />
      <HotReviews v-if="false" />
      <MainHeader :movieList="top10" :order="2" />
      <MainHeader :movieList="액션" :order="3" />
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
      SF:{} ,
      lately: {},
      top10: {},
      action: {}
    };
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),

    slideChangeTransitionStart() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    },
    setMovieList(response) {
      console.log(response)
      this.SF = response.data.SF
      this.lately = response.data.lately
      this.top10 = response.data.top10
      this.액션 = response.data.액션
    console.log(this.SF, this.lately, this.top10, this.액션)
    },
    async getMovieList() {
      try {
        const response = await MovieAPI.getMainMovieList();
        this.setMovieList(response);
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
