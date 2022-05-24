<template>
  <section>
    <ReviewCommentInput @create-comment="createComment" />
    <ReviewCommentCard
      v-for="(comment, index) in commentList"
      :key="index"
      :index="index"
      :comment="comment"
      @edit-comment="editComment"
    />
  </section>
</template>

<script>
import ReviewCommentInput from "@/components/ReviewCommentInput";
import ReviewCommentCard from "@/components/ReviewCommentCard";

export default {
  name: "reviewComment",
  props: {
    commentList: {
      type: Array,
    },
  },
  components: {
    ReviewCommentInput,
    ReviewCommentCard,
  },
  methods: {
    async createComment(content) {
      await this.$emit("create-comment", content);
    },
    async editComment(body) {
      await this.$emit("edit-comment", body);
    },
  },
};
</script>

<style></style>
