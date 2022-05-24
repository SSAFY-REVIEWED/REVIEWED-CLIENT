<template>
  <section>
    <ReviewCommentInput @create-comment="createComment" />
    <ReviewCommentCard  />
  </section>
</template>

<script>
import ReviewCommentInput from "@/components/ReviewCommentInput";
import ReviewCommentCard from "@/components/ReviewCommentCard";

export default {
  name: "reviewComment",
  components: {
    ReviewCommentInput,
    ReviewCommentCard,
  },
  methods: {
    createComment(content) {
      this.$emit("create-comment", content);
    },
  },
};
</script>

<style></style>
