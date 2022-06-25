<template>
  <div class="w-full relative my-5">
    <h1 class="text-h4 font-semibold">모든 리뷰</h1>
    <div class="my-5 text-h5 font-semibold" v-if="reviewList.length === 0">
      아직 다른 사람들이 남긴 리뷰가 없어요. ☺️
    </div>
    <div v-else>
      <ReviewCard
        v-for="(review, index) in reviewList"
        :key="index"
        :review="review"
        :index="index"
      />
    </div>
    <div v-if="reviewCount > 4" class="mx-auto w-full relative flex">
      <button class="mx-auto relative" @click="goReviewPage">
        모든 리뷰 보러가기 >
      </button>
    </div>
  </div>
</template>

<script>
import ReviewCard from "@/components/ReviewCard";
import { mapGetters } from "vuex";

export default {
  name: "movieMainReviewList",
  components: {
    ReviewCard,
  },
  computed: {
    ...mapGetters(["reviewList", "reviewCount", "movieData"]),
  },
  methods: {
    goReviewPage() {
      this.$router.push({
        name: "reviewList",
        params: { movieId: this.movieData.movieId },
        query: { query: "like" },
      });
    },
  },
};
</script>

<style></style>
