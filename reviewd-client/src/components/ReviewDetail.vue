<template>
  <section class="w-full relative">
    <article class="w-full flex justify-between">
      <div>
        <div>
          <div class="flex">
            <div class="overflow-hidden w-11 h-11 rounded-full">
              <img
                :src="review.userProfileImg"
                :alt="`${review.name}프로필`"
                width="40"
                height="40"
              />
            </div>
            <div>
              <p>{{ review.name }}</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-star-yellow w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                {{ review.rate }}
              </div>
            </div>
            <p>{{ review.createdAt }}</p>
          </div>
          <div class="relative w-16">
            <SoloPosterCard :posterUrl="review.posterUrl" />
          </div>
        </div>
      </div>
      <h1>{{ review.title }}</h1>
      <div>
        {{ review.viewCount }} 읽음
        <UpdateButton
          :userId="review.userId"
          :reviewId="review.reviewId"
          @toggle-editing="toggleEditing"
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
        <button type="submit" class="bg-blue-500" @click="editUserReview">
          수정하기
        </button>
        <button class="bg-red-500" @click="cancelEdit">수정취소</button>
      </form>
    </article>
    <article></article>
    <LikeAndCommentButton :review="review" @toggle-likes="toggleLikes" />
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
    toggleLikes() {
      this.$emit("toggle-likes")
    }
  },
  computed: {},
  mounted() {
    this.setReviewData();
  },
};
</script>

<style></style>
