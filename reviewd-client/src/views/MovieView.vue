<template>
  <div class="min-h-screen bg-red-200 relative">
    <MovieHeader />
  </div>
</template>

<script>
import MovieHeader from "@/components/MovieHeader";
import MovieApi from "@/api/movie";
export default {
  name: "movieView",
  data() {
    return {
      dataReady: false,
      movieId: "",
      movieData: {
        title: "범죄도시2",
        date: "2022-05-03",
        posterUrl: "../assets/images/posters/범죄도시2.jpeg",
        genres: ["액션", "범죄"],
        actors: ["샘 해밍턴", "손석구", "마동석", "공유"],
        country: "대한민국",
        directors: ["나영석", "무한도전"],
        screenTime: 186,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci odit tempore aut? Quod quas mollitia quaerat facere corrupti eveniet, omnis adipisci inventore iure aut, odit nobis molestiae in ipsam. Sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore rem, unde, aspernatur blanditiis ab necessitatibus minima, asperiores at eaque maiores saepe ducimus voluptate officia fuga reprehenderit provident. Recusandae, aperiam voluptates. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto minus deserunt dolor autem. Quod magni fugiat facilis repellat inventore perspiciatis illo error itaque! Voluptatum expedita laudantium id repellat, magnam alias!",
        rates: 8.7,
        like: false,
      },
    };
  },
  components: {
    MovieHeader,
  },
  methods: {
    async getMovieDetail(movieId) {
      try {
        const response = await MovieApi.getMovieData(movieId);
        const { movieData } = response.data;
        this.movieData = { ...this.movieData, ...movieData };
      } catch (err) {
        console.log(err);
      }
    },
    isDataReady() {
      this.dataReady = true;
    },
    setMovieId() {
      this.movieId = this.$route.params.movieId;
      console.log(this.movieId);
    },
  },
  created() {
    this.setMovieId();
  },
  //TODO: api 동기화 시 해제
  // async mounted() {
  //   await this.getMovieDetail(this.movieId);
  //   this.isDataReady();
  // },
};
</script>

<style lang="scss" scoped></style>
