<template>
  <div class="relative">
    <div
      class="relative w-[1440px] -left-10 m-0 mx-auto bg-red-300 h-[850px] overflow-hidden bg-gradient-to-b from-transparent to-black bg-cover bg-center"
      :style="{
        backgroundImage: 'url(' + movieData.posterUrl + ')',
      }"
    >
      <div
        class="max-w-container h-full bg-gradient-to-b from-transparent to-black bg-cover bg-center"
      ></div>
    </div>
    <SoloPosterCard :posterUrl="movieData.posterUrl" class="top-0" />
    <div>
      <h1>{{movieData.title}}</h1>
      <h2>{{movieData.date}} · {{movieData.country}}</h2>
      
    </div>
  </div>
</template>

<script>
import SoloPosterCard from "@/components/SoloPosterCard";

export default {
  name: "movieHeader",
  props: {
    movieData: {
      type: Object,
    },
  },
  components: {
    SoloPosterCard,
  },
  methods: {
    getMovieDetail() {},
  },
};
</script>

<style></style>
