<template>
  <div>
    <button
      class="border-r-2 border-light-black px-4"
      v-if="profile.userId === userId"
      @click="toggleEditing"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
        /></svg
      >수정
    </button>
    <button
      class="px-4"
      v-if="profile.userId === userId"
      @click="deleteContent"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        /></svg
      >삭제
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "updateButton",
  props: {
    id: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async deleteContent() {
      if (this.profile.userId !== this.userId) return;
      await this.$emit("delete-content", this.id);
    },
    toggleEditing() {
      this.$emit("toggle-editing");
    },
  },
  computed: {
    ...mapGetters(["profile"]),
  },
};
</script>

<style lang="scss" scoped></style>
