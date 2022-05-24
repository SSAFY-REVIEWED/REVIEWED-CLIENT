<template>
  <div class="w-full bg-red-300 min-h-screen py-3">
    <ReviewDetail
      :review="review"
      @edit-user-review="editUserReview"
      @toggle-likes="toggleLikes"
    />
    <ReviewComment @create-comment="createComment" />
  </div>
</template>

<script>
import MovieAPI from "@/api/movie";
import ReviewDetail from "@/components/ReviewDetail";
import ReviewComment from '@/components/ReviewComment'

export default {
  name: "reviewView",
  components: {
    ReviewDetail,
    ReviewComment
  },
  data() {
    return {
      reviewId: null,
      review: {
        reviewId: 1,
        userId: 1,
        name: "Chunsik",
        userProfileImg:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        rate: 8.7,
        posterUrl:
          "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
        likes: 76,
        like: true,
        title: "마더테레사",
        replyCount: 72,
        viewCount: 7777,
        createdAt: "2020-01-05",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam fuga rem mollitia optio, libero officia accusamus? Magnam, aliquam architecto blanditiis alias suscipit, delectus nisi sequi ipsam recusandae quod distinctio odio.",
        spoiler: true,
      },
    };
  },
  methods: {
    setReviewId() {
      const reviewId = this.$route.params.reviewId;
      this.reviewId = reviewId;
      console.log(this.reviewId);
    },
    async getTheReview() {
      try {
        const response = await MovieAPI.getReview(this.reviewId);
        this.review = { ...this.review, ...response.data.review };
      } catch (err) {
        console.log(err);
      }
    },
    async editUserReview(body) {
      try {
        const response = await MovieAPI.editReview(this.review.reviewId, body);
        this.review = response.data.review;
      } catch (err) {
        console.log(err);
      }
    },
    async toggleLikes() {
      try {
        await MovieAPI.likeReview(this.review.reviewId, {
          like: !this.review.like,
        });
        if (this.review.like) {
          this.review.likes++;
          return;
        }
        this.review.likes--;
      } catch (err) {
        console.log(err);
      }
    },
    async createComment(content) {
      console.log(content)
      try {
        await MovieAPI.createReviewComment(this.reviewId, {content})
      } catch(err) {console.log(err)}
    }
  },
  created() {
    this.setReviewId();
    // this.getTheReview()
  },
};
</script>

<style></style>
