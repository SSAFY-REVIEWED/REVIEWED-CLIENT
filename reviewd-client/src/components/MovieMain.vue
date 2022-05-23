<template>
  <div class="w-full">
    <ReviewCard
      v-if="Object.keys(myReview).length"
      :review="myReview"
      :index="-1"
    />
    <MovieDescription />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ReviewCard from "@/components/ReviewCard";
import MovieDescription from "@/components/MovieDescription";

export default {
  name: "movieMain",
  components: {
    ReviewCard,
    MovieDescription,
  },
  methods: {
    ...mapActions([]),
  },
  computed: {
    ...mapGetters(["myReview", "reviewList"]),
  },
  watch: {
    myReview() {
      console.log(Object.keys(this.myReview));
    },
  },
};
</script>

<style lang="scss" scoped></style>
