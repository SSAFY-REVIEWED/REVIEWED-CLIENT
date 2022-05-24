<template>
  <section class="w-full min-h-[50vh]">
    <h1>{{userProfile.name}}님이 작성한 리뷰 목록</h1>
    <article v-if="reviewList.length">
      <ReviewCard
        v-for="review in reviewList"
        :key="review.reviewId"
        :review="review"
      />
    </article>
    <TheTrigger :hasMore="hasMore" @triggerIntersected="getReviewList" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";
import TheTrigger from "@/components/TheTrigger";
import ReviewCard from "@/components/ReviewCard";
export default {
  name: "profileReviewsView",
  components: {
    TheTrigger,
    ReviewCard,
  },
  data() {
    return {
      targetUserId: null,
      reviewList: [
        {
          reviewId: 1,
          userId: 1,
          userName: "Chunsik",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          rate: 8.7,
          likes: 76,
          like: true,
          movieTitle: "마더테레사",
          reviewTitle: "",
          replyCount: "72",
          createdAt: "2020-01-05",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
          spoiler: true,
        },
        {
          reviewId: 2,
          userId: 1,
          userName: "Chunsik",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          rate: 8.7,
          likes: 76,
          like: true,
          movieTitle: "마더테레사",
          reviewTitle: "",
          replyCount: "72",
          createdAt: "2020-01-05",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
          spoiler: false,
        },
        {
          reviewId: 3333,
          userId: 1,
          userName: "Chunsik",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          rate: 8.7,
          likes: 76,
          like: true,
          movieTitle: "마더테레사",
          reviewTitle: "",
          replyCount: "72",
          createdAt: "2020-01-05",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
          spoiler: true,
        },
        {
          reviewId: 4444,
          userId: 1,
          userName: "Chunsik",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          rate: 8.7,
          likes: 76,
          like: true,
          movieTitle: "마더테레사",
          reviewTitle: "",
          replyCount: "72",
          createdAt: "2020-01-05",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
          spoiler: false,
        },
        {
          reviewId: 555,
          userId: 1,
          userName: "Chunsik",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          rate: 8.7,
          likes: 76,
          like: true,
          movieTitle: "마더테레사",
          reviewTitle: "",
          replyCount: "72",
          createdAt: "2020-01-05",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
          spoiler: true,
        },
        {
          reviewId: 666,
          userId: 1,
          userName: "Chunsik",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          rate: 8.7,
          likes: 76,
          like: true,
          movieTitle: "마더테레사",
          reviewTitle: "",
          replyCount: "72",
          createdAt: "2020-01-05",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
          spoiler: true,
        },
      ],
      page: 1,
      hasMore: true,
    };
  },
  methods: {
    setTargetUserId() {
      this.targetUserId = this.$route.params.userId;
    },
    setReviewList(response) {
      this.reviewList = response.data.reviews;
      this.page++;
      this.hasMore = response.data.hasMore;
    },
    async getReviewList() {
      if (!this.hasMore) return;
      try {
        const response = await ProfileAPI.getReviewList(
          this.targetUserId,
          this.page
        );
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
    // this.getReviewList();
  },
};
</script>

<style></style>
