<template>
  <article class="w-full border-t-2 p-3">
    <div class="flex justify-between">
      <div class="flex">
        <div class="overflow-hidden w-10 h-10 rounded-full">
          <img :src="comment.userProfileImg" :alt="comment.userName" />
        </div>
        <p>{{ comment.userName }}</p>
        <p>{{ comment.createdAt }}</p>
      </div>
      <UpdateButton
        v-if="!isEditing"
        :id="comment.commentId"
        :userId="comment.userId"
        @delete-content="deleteComment"
        @toggle-editing="toggleEditing"
      />
    </div>
    <div>
      <p v-if="!isEditing">{{ comment.content }}</p>
      <form @submit.prevent="editComment" v-if="isEditing">
        <textarea
          class="w-full rounded-xl shadow-inner-input p-5 focus:outline-none resize-none"
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          v-model="content"
        ></textarea>
        <button @click="cancelEditing" class="bg-red-800">수정 취소</button>
        <button type="submit" class="bg-blue-300">수정 완료</button>
      </form>
    </div>
  </article>
</template>

<script>
import UpdateButton from "@/components/UpdateButton";
export default {
  name: "reviewCommentCard",
  components: {
    UpdateButton,
  },
  props: {
    comment: {
      type: Object,
    },
  },
  data() {
    return {
      isEditing: false,
      content: "",
    };
  },
  methods: {
    async deleteComment() {
      await this.$emit("delete-comment");
    },
    toggleEditing() {
      this.isEditing = !this.isEditing;
      console.log("isEditing");
    },
    setContent() {
      this.content = this.comment.content;
    },
    cancelEditing() {
      this.toggleEditing();
      this.setContent();
    },
    async editComment() {
      const body = {
        content: this.content,
        commentId: this.comment.commentId,
      };
      await this.$emit("edit-comment", body);
    },
  },
  mounted() {
    this.setContent();
  },
};
</script>

<style></style>
