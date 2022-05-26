<template>
  <section class="max-w-container mx-auto pt-0 px-9 min-h-[30vh]">
    <h1 class="text-h4 font-bold my-5 relative">
      {{ userProfile.name }}님이 작성한 리뷰 목록
    </h1>
    <article
      v-if="!reviewList.length && !hasMore"
      class="w-full h-[20vh] flex flex-col justify-center items-center relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
          clip-rule="evenodd"
        />
      </svg>
      <p class="text-h5">아직 작성한 리뷰가 없어요.</p>
    </article>
    <article v-if="reviewList.length">
      <ReviewCard
        v-for="review in reviewList"
        :key="review.reviewId"
        :review="review"
      />
    </article>
    <div
      v-if="isLoading & hasMore"
      class="w-full h-full flex justify-center items-center"
    >
      <LoadingSpinner />
    </div>
    <TheTrigger :hasMore="hasMore" @triggerIntersected="getReviewList" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";
import TheTrigger from "@/components/TheTrigger";
import ReviewCard from "@/components/ReviewCard";
import LoadingSpinner from "@/components/LoadingSpinner";
export default {
  name: "profileReviewsView",
  components: {
    TheTrigger,
    ReviewCard,
    LoadingSpinner,
  },
  data() {
    return {
      targetUserId: null,

      reviewList: [],
      page: 1,
      hasMore: true,
      isLoading: true,
    };
  },
  methods: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
    setTargetUserId() {
      this.targetUserId = this.$route.params.userId;
    },
    setReviewList(response) {
      this.reviewList = [...this.reviewList, ...response.data.reviews];
      this.page++;
      this.hasMore = response.data.hasMore;
    },
    async getReviewList() {
      if (!this.hasMore) return;
      this.toggleLoading();
      try {
        const response = await ProfileAPI.getReviewList(
          this.targetUserId,
          this.page
        );
        console.log(response);
        this.setReviewList(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    ...mapGetters(["userProfile"]),
  },
  created() {
    this.setTargetUserId();
  },
};
</script>

<style></style>
