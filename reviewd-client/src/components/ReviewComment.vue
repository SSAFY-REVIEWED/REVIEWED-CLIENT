<template>
  <section>
    <ReviewCommentInput @create-comment="createComment" />
    <article class="mt-5">
      <ReviewCommentCard
        v-for="(comment, index) in commentList"
        :key="index"
        :index="index"
        :comment="comment"
        @edit-comment="editComment"
        @delete-comment="deleteComment"
      />
    </article>
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
    async deleteComment(id) {
      await this.$emit("delete-comment", id);
    },
  },
};
</script>

<style></style>
