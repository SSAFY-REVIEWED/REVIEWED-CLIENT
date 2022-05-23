<template>
  <article
    class="w-full h-fit p-8 relative shadow-xl rounded-2xl bg-light-gray"
  >
    <div class="flex justify-between items-center">
      <div class="flex">
        <div class="overflow-hidden rounded-full w-8 h-8">
          <img
            :src="review.userProfileImg"
            alt="userProfileImage"
            width="40"
            height="40"
            class="w-full h-full overflow-hidden"
          />
        </div>
        <div>
          <p>{{ review.name }}</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 inline"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span>{{ review.rate }}</span>
          </p>
        </div>
      </div>
      <div class="flex relative">
        <button
          class="border-r-2 border-light-black px-4"
          v-if="profile.userId === review.userId"
          @click="isModalViewed = true"
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
          v-if="profile.userId === review.userId"
          @click="deleteMyReview"
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
        <p class="pl-4">{{ review.created_at }}</p>
      </div>
    </div>
    <div class="mt-5 relative">
      <button
        class="absolute w-full h-full font-bold z-40"
        @click="toggleSpoiler"
        v-if="spoiler"
      >
        <p>스포일러가 포함된 리뷰입니다.</p>
        <p>리뷰 보기</p>
      </button>
      <p :class="{ 'blur-sm': spoiler }" class="ellipsis-3">
        {{ review.content }}
      </p>
    </div>
    <ModalView
      v-if="isModalViewed"
      @close-modal="isModalViewed = false"
      :review="review"
    >
    </ModalView>
  </article>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModalView from "@/components/ModalView";
export default {
  name: "reviewCard",
  components: {
    ModalView,
  },
  props: {
    review: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      spoiler: null,
      isModalViewed: false,
    };
  },
  methods: {
    ...mapActions(["likeReview", "deleteReview"]),
    setSpoiler() {
      this.spoiler = this.review.spoiler;
    },
    toggleSpoiler() {
      this.spoiler = !this.spoiler;
    },
    async toggleLikes() {
      await this.likeReview({
        reviewId: this.review.reviewId,
        like: !this.review.like,
        index: this.index,
      });
    },
    async deleteMyReview() {
      if (confirm("정말로 삭제하실건가요?")) {
        await this.deleteReview(this.review.reviewId);
      }
    },
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  mounted() {
    this.setSpoiler();
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins.scss";
.ellipsis-3 {
  @include ellipsis(3, 1.3em);
}
</style>
