<template>
  <div class="w-full flex flex-col">
    <form class="mt-5 w-full" @submit.prevent="createComment">
      <textarea
        class="w-full h-full rounded-xl shadow-inner-input p-5 focus:outline-none resize-none"
        name="review"
        id=""
        cols="30"
        rows="4"
        v-model="content"
        autofocus
        placeholder="댓글을 입력하세요."
      >
      </textarea>
      <button
        class="relative w-40 ml-auto bg-gradient-to-r from-primary-red to-second-red h-10 block text-white font-semibold rounded-xl shadow-xl"
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
      if (this.content.trim().length < 1) {
        this.$toast.error("댓글은 한 글자 이상 입력해주세요.");
        return;
      }
      this.$emit("create-comment", this.content);
      this.content = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
