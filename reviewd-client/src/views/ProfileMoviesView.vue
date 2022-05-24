<template>
  <section class="w-full relative">
    <h1>{{ userProfile.name }}님이 평가한 영화 목록</h1>
    <article v-if="movieList.length" class="grid grid-cols-4 gap-4">
      <MainPosterCard
        v-for="movie in movieList"
        :key="movie.movieId"
        :movie="movie"
      />
    </article>
  </section>
</template>

<script>
import MainPosterCard from "@/components/MainPosterCard";
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";

export default {
  name: "profileMoviesView",
  components: {
    MainPosterCard,
  },
  data() {
    return {
      targetUserId: null,
      // TODO: 데이터 실제 데이터로 대체
      movieList: [
        {
          movieId: 2,
          movieTitle: "혼돈",
          posterUrl: "../assets/images/posters/닥터스트레인지.jpeg",
          rate: 7.7,
        },
        {
          movieId: 3,
          movieTitle: "혼돈",
          posterUrl: "../assets/images/posters/닥터스트레인지.jpeg",
          rate: 7.7,
        },
        {
          movieId: 4,
          movieTitle: "혼돈",
          posterUrl: "../assets/images/posters/닥터스트레인지.jpeg",
          rate: 7.7,
        },
        {
          movieId: 5,
          movieTitle: "혼돈",
          posterUrl: "../assets/images/posters/닥터스트레인지.jpeg",
          rate: 7.7,
        },
        {
          movieId: 6,
          movieTitle: "혼돈",
          posterUrl: "../assets/images/posters/닥터스트레인지.jpeg",
          rate: 7.7,
        },
        {
          movieId: 7,
          movieTitle: "혼돈",
          posterUrl: "../assets/images/posters/닥터스트레인지.jpeg",
          rate: 7.7,
        },
      ],
    };
  },
  methods: {
    setTargetUserId() {
      this.targetUserId = this.$route.params.userId;
    },
    setMovieList(movieList) {
      this.movieList = movieList;
    },
    async getTargetUserMovieList() {
      try {
        const response = await ProfileAPI.getMovieList(this.targetUserId);
        const { movies } = response.data;
        this.setMovieList(movies);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: { ...mapGetters(["userProfile"]) },
  created() {
    this.setTargetUserId();
    // this.getTargetUserMovieList()
  },
};
</script>

<style></style>
