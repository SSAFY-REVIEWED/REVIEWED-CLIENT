<template>
  <div>
    <ReviewCommentInput @create-comment="createComment" />
  </div>
</template>

<script>
import ReviewCommentInput from "@/components/ReviewCommentInput";

export default {
  name: "reviewComment",
  components: {
    ReviewCommentInput,
  },
  methods: {
    createComment(content) {
      this.$emit('create-comment', content)
    }
  }
};
</script>

<style></style>
