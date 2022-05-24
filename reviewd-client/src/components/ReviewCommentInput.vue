<template>
  <div class="w-full flex flex-col">
    <form class="mt-5 w-full" @submit.prevent="createComment">
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
      <button class="relative w-52 ml-auto bg-third-blue block" type="submit">
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
