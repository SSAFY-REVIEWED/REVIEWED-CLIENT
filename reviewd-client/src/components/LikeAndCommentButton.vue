<template>
  <div class="flex">
    <button class="px-4" @click="toggleLikes">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
        v-if="this.review.like"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {{ review.likes }}
    </button>
    <div class="px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
        />
        <path
          d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
        /></svg
      >{{ review.replyCount }}
    </div>
  </div>
</template>

<script>
export default {
  name: "likeAndCommentButton",
  props: {
    review: {
      type: Object,
    },
  },
  methods: {
    toggleLikes() {
      this.$emit("toggle-likes");
    },
  },
};
</script>

<style></style>
