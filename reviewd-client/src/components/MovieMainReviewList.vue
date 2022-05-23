<template>
  <div class="w-full relative">
    <h1>모든 리뷰</h1>
    <div v-if="!reviewList.length">첫 리뷰를 남겨보세요 ☺️</div>
    <div v-else>
      <ReviewCard
        v-for="(review, index) in reviewList"
        :key="index"
        :review="review"
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
    ...mapGetters(["reviewList", "reviewCount"]),
  },
  methods: {
    goReviewPage() {
      this.$router.push({
        name: "reviewList",
        params: { movieId: 355 },
        query: { query: "like" },
      });
    },
  },
};
</script>

<style></style>
