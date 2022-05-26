<template>
  <section class="w-full relative">
    <article class="w-full flex justify-between">
      <div>
        <div>
          <div class="flex items-center">
            <div class="overflow-hidden rounded-full w-11 h-11 mr-4">
              <img
                loading="lazy"
                :src="review.userProfileImg"
                :alt="`${review.userName}프로필`"
                width="40"
                height="40"
                class="w-full h-full"
              />
            </div>
            <div class="flex flex-col items-center">
              <p class="text-h5 font-bold">{{ review.userName }}</p>
              <p class="text-star-yellow self-start">
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

            <!-- <p>{{ review.createdAt }}</p> -->
          </div>
          <div class="relative w-16 my-3">
            <router-link
              :to="{ name: 'movie', params: { movieId: this.review.movieId } }"
            >
              <SoloPosterCard :posterUrl="review.posterUrl" />
            </router-link>
          </div>
        </div>
      </div>
      <h1 class="text-h4 font-semibold">{{ review.movieTitle }} 리뷰</h1>
      <div class="text-right">
        <p class="text-gray-400 mb-3">{{ review.viewCount }} 읽음</p>
        <UpdateButton
          class="my-3"
          :userId="review.userId"
          :id="review.reviewId"
          @toggle-editing="toggleEditing"
          @delete-content="deleteReview"
          v-if="!isEditing"
        />
      </div>
    </article>
    <article>
      <div v-if="!isEditing">
        {{ review.content }}
      </div>
      <form v-if="isEditing" @submit.prevent="editUserReview">
        <label for="review"></label>
        <textarea
          class="w-full h-full rounded-xl shadow-inner-input p-5 focus:outline-none resize-none block"
          name="review"
          id="review"
          cols="30"
          rows="30"
          v-model="content"
        ></textarea>
        <SpoilerTooltipButton
          @toggle-spoiler="toggleSpoiler"
          :spoiler="spoiler"
        />
        <div class="flex gap-x-5">
          <div class="right-0 relative w-20 ml-auto">
            <button
              @click="cancelEdit"
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
    </article>
    <div class="mt-10">
      <LikeAndCommentButton :review="review" @toggle-likes="toggleLikes" />
    </div>
    <hr />
  </section>
</template>

<script>
import UpdateButton from "@/components/UpdateButton";
import SoloPosterCard from "@/components/SoloPosterCard";
import SpoilerTooltipButton from "@/components/SpoilerTooltipButton";
import LikeAndCommentButton from "@/components/LikeAndCommentButton";

export default {
  props: {
    review: {
      type: Object,
    },
  },
  components: {
    UpdateButton,
    SoloPosterCard,
    SpoilerTooltipButton,
    LikeAndCommentButton,
  },
  data() {
    return {
      isEditing: false,
      content: "",
      spoiler: false,
    };
  },
  methods: {
    async editUserReview() {
      const body = {
        title: this.review.movieId,
        spoiler: this.spoiler,
        content: this.content,
      };
      try {
        await this.$emit("edit-user-review", body);
        this.toggleEditing();
      } catch (err) {
        console.log(err);
      }
    },
    toggleEditing() {
      this.isEditing = !this.isEditing;
    },
    setReviewData() {
      this.content = this.review.content;
      this.spoiler = this.review.spoiler;
    },
    cancelEdit() {
      this.toggleEditing();
      this.content = this.review.content;
    },
    toggleSpoiler() {
      this.spoiler = !this.spoiler;
    },
    async toggleLikes() {
      await this.$emit("toggle-likes");
    },
    async deleteReview(id) {
      console.log(id);
      await this.$emit("delete-review", id);
    },
  },
  computed: {},
  mounted() {
    this.setReviewData();
  },
};
</script>

<style></style>
