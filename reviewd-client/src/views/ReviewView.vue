<template>
  <section
    class="max-w-container mx-auto pt-0 px-9 min-h-screen relative mt-20"
  >
    <ReviewDetail
      :review="review"
      @edit-user-review="editUserReview"
      @toggle-likes="toggleLikes"
      @delete-review="deleteUserReview"
    />
    <ReviewComment
      :commentList="commentList"
      @create-comment="createComment"
      @edit-comment="editComment"
      @delete-comment="deleteComment"
    />
  </section>
</template>

<script>
import MovieAPI from "@/api/movie";
import ReviewDetail from "@/components/ReviewDetail";
import ReviewComment from "@/components/ReviewComment";

export default {
  name: "reviewView",
  components: {
    ReviewDetail,
    ReviewComment,
  },
  data() {
    return {
      reviewId: null,
      review: {},
      commentList: [
        {
          commentId: 1,
          userId: 1,
          userName: "춘식",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non at labore explicabo eligendi voluptatum, sapiente accusamus. Similique, sit rerum consectetur cupiditate amet fuga quisquam ullam. Saepe obcaecati dolore ipsum!",
          createdAt: "2020-10-12",
        },
        {
          commentId: 2,
          userId: 2,
          userName: "춘식",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non at labore explicabo eligendi voluptatum, sapiente accusamus. Similique, sit rerum consectetur cupiditate amet fuga quisquam ullam. Saepe obcaecati dolore ipsum!",
          createdAt: "2020-10-12",
        },
        {
          commentId: 3,
          userId: 3,
          userName: "춘식",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non at labore explicabo eligendi voluptatum, sapiente accusamus. Similique, sit rerum consectetur cupiditate amet fuga quisquam ullam. Saepe obcaecati dolore ipsum!",
          createdAt: "2020-10-12",
        },
        {
          commentId: 4,
          userId: 4,
          userName: "춘식",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non at labore explicabo eligendi voluptatum, sapiente accusamus. Similique, sit rerum consectetur cupiditate amet fuga quisquam ullam. Saepe obcaecati dolore ipsum!",
          createdAt: "2020-10-12",
        },
        {
          commentId: 5,
          userId: 5,
          userName: "춘식",
          userProfileImg:
            "https://image.tmdb.org/t/p/w500/2R8smeSDkPx6TKIRveKPXi0JVI6.jpg",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non at labore explicabo eligendi voluptatum, sapiente accusamus. Similique, sit rerum consectetur cupiditate amet fuga quisquam ullam. Saepe obcaecati dolore ipsum!",
          createdAt: "2020-10-12",
        },
      ],
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
    async getTheCommentList() {
      try {
        const response = await MovieAPI.getReviewCommentList(this.reviewId);
        this.commentList = response.data.comments;
        this.review.replyCount = response.data.replyCount;
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
    setCommentList(data) {
      this.commentList = data.comments;
      this.review.replyCount = data.replyCount;
    },
    async createComment(content) {
      console.log(content);
      try {
        const response = await MovieAPI.createReviewComment(this.reviewId, {
          content,
        });
        this.setCommentList(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteUserReview(reviewId) {
      console.log(reviewId);
      await this.$emit("delete-content", reviewId);
      if (confirm("리뷰를 정말로 삭제하실건가요?")) {
        console.log(reviewId);
        try {
          await MovieAPI.deleteReview(reviewId);
          this.$router.go(-1);
        } catch (err) {
          console.log(err);
        }
      }
    },
    async editComment({ commentId, content }) {
      try {
        const response = await MovieAPI.editReviewComment(
          this.review.reviewId,
          commentId,
          { content }
        );
        this.setCommentList(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteComment(id) {
      try {
        if (confirm("댓글을 삭제하시겠어요?")) {
          const response = await MovieAPI.deleteReviewComment(
            this.review.reviewId,
            { commentId: id }
          );
          this.setCommentList(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.setReviewId();
    this.getTheReview()
    this.getTheCommentList()
  },
};
</script>

<style></style>
