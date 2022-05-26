<template>
  <article class="max-w-container mx-auto border-t-2 py-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="overflow-hidden w-11 h-11 rounded-full mr-4">
          <img
            :src="comment.userProfileImg"
            :alt="comment.userName"
            width="40"
            height="40"
            class="w-full h-full"
          />
        </div>
        <p class="font-semibold">{{ comment.userName }}</p>
        <!-- <p>{{ comment.createdAt }}</p> -->
      </div>
      <UpdateButton
        v-if="!isEditing"
        :id="comment.commentId"
        :userId="comment.userId"
        @delete-content="deleteComment"
        @toggle-editing="toggleEditing"
      />
    </div>
    <div class="mt-5">
      <p v-if="!isEditing" class="break-words">{{ comment.content }}</p>
      <form @submit.prevent="editComment" v-if="isEditing">
        <textarea
          class="w-full rounded-xl shadow-inner-input p-5 focus:outline-none resize-none"
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          v-model="content"
        ></textarea>
        <div class="flex gap-x-5">
          <div class="right-0 relative w-20 ml-auto">
            <button
              @click="cancelEditing"
              class="bg-second-blue h-10 rounded-xl shadow-xl w-full text-white font-semibold"
            >
              수정 취소
            </button>
          </div>
          <div class="right-0 relative w-20">
            <button
              type="submit"
              class="bg-second-green h-10 rounded-xl shadow-xl w-full text-white font-semibold"
            >
            
              수정 완료
            </button>
          </div>
        </div>
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
      await this.$emit("delete-comment", this.comment.commentId);
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
      console.log(body);
      try {
        await this.$emit("edit-comment", body);
        this.cancelEditing();
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.setContent();
  },
};
</script>

<style></style>
