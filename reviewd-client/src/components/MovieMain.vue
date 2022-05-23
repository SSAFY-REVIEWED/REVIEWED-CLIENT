<template>
  <div class="w-full bg-red-400">
    <ReviewCard v-if="Object.keys(myReview)" :review="myReview" :index="-1" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ReviewCard from "@/components/ReviewCard";
export default {
  name: "movieMain",
  components: {
    ReviewCard,
  },
  methods: {
    ...mapActions([]),
  },
  computed: {
    ...mapGetters(["myReview", "reviewList"]),
  },
};
</script>

<style lang="scss" scoped></style>
