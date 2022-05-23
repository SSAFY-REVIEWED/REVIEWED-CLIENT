<template>
  <div class="w-full">
    <ReviewCard
      v-if="Object.keys(myReview).length"
      :review="myReview"
      :index="-1"
    />
    <MovieDescription />
    <MovieYoutube :title="movieData.title" />
    <PerformerList
      :actors="movieData.actors"
      :directors="movieData.directors"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ReviewCard from "@/components/ReviewCard";
import MovieDescription from "@/components/MovieDescription";
import MovieYoutube from "@/components/MovieYoutube";
import PerformerList from "@/components/PerformerList";

export default {
  name: "movieMain",
  components: {
    ReviewCard,
    MovieDescription,
    MovieYoutube,
    PerformerList,
  },
  methods: {
    ...mapActions([]),
  },
  computed: {
    ...mapGetters(["myReview", "reviewList", "movieData"]),
  },
  watch: {
    myReview() {
      console.log(Object.keys(this.myReview));
    },
  },
};
</script>

<style lang="scss" scoped></style>
