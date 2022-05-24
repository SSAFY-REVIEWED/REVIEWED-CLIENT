<template>
  <div class="w-full">
    <form class="mt-5" @submit.prevent="createComment">
      <textarea
        class="w-full h-full rounded-xl shadow-inner-input p-5 focus:outline-none resize-none"
        name="review"
        id=""
        cols="30"
        rows="6"
        v-model="content"
        required
        autofocus
        placeholder="댓글을 입력하세요."
      >
      </textarea>
      <button
        class="relative float-right ml-auto right-0 bg-third-blue"
        type="submit"
      >
        댓글 등록
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "reviewCommentInput",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    createComment() {
      this.$emit("create-comment", this.content);
    },
  },
};
</script>

<style lang="scss" scoped></style>
