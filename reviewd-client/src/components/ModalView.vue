<template>
  <div>
    <transition-group name="modal" class="modal">
      <div class="overlay" key="modal"></div>
      <div class="modal-card rounded-xl" key="2">
        <div class="relative w-full">
          <button
            class="absolute right-0 w-7 h-7 bg-slate-100 rounded-full z-10"
            @click="$emit('close-modal')"
          >
            <div
              class="right-0 mx-auto w-5 h-0.5 bg-light-black rotate-45 before:content-[''] before:absolute before:w-5 before:h-0.5 rounded-lg before:rounded-lg before:bg-light-black before:rotate-90 before:-translate-x-2.5"
            ></div>
          </button>
          <article class="relative">
            <h1 class="h-5 w-3/4">{{ title }}</h1>
            <form
              class="mt-5 relative flex flex-col justify-between h-full"
              @submit.prevent="updateMovieReview"
            >
              <textarea
                class="w-full rounded-xl shadow-inner-input p-5 focus:outline-none resize-none"
                name="review"
                id=""
                cols="30"
                rows="13"
                v-model="content"
                required
                autofocus
              >
              </textarea>
              <button
                class="left-0 top-0 mt-5 ml-auto right-0 bg-third-blue w-24 h-10 rounded-lg text-white hover:bg-primary-blue w-fit"
                type="submit"
                @click="updateMovieReview"
              >
                작성
              </button>
            </form>
          </article>
          <div class="absolute left-0 -bottom-2 right-0 mt-5 w-fit">
            <SpoilerTooltipButton
              :spoiler="spoiler"
              @toggle-spoiler="toggleSpoiler"
            />
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SpoilerTooltipButton from "@/components/SpoilerTooltipButton";
export default {
  name: "modalView",
  props: {
    review: {
      type: Object,
    },
  },
  components: {
    SpoilerTooltipButton,
  },
  data() {
    return {
      title: "",
      content: "",
      reviewTitle: "",
      spoiler: false,
      reviewId: null,
    };
  },
  methods: {
    ...mapActions(["createMovieReview", "editReview", "getMovieReviewList"]),
    async updateMovieReview() {
      const body = {
        content: this.content,
        spoiler: this.spoiler,
        reviewTitle: "영화 짱짱",
      };
      if (Object.keys(this.review).length) {
        try {
          await this.editReview({ reviewId: this.reviewId, body });
          await this.getMovieReviewList(this.$route.params.movieId);
          this.$emit("close-modal");
        } catch (err) {
          console.log(err);
        }
        return;
      }
      try {
        await this.createMovieReview(body);
        this.$emit("close-modal");
      } catch (err) {
        console.log(err);
      }
    },

    toggleSpoiler() {
      this.spoiler = !this.spoiler;
    },
    
    setReviewData() {
      if (Object.keys(this.review).length) {
        this.title = this.review.movieTitle;
        this.content = this.review.content;
        this.spoiler = this.review.spoiler;
        this.reviewId = this.review.reviewId;
        return;
      }
    },
  },
  mounted() {
    this.setReviewData(this.reviewId);
  },
};
</script>

<style lang="scss" scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 51;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  min-height: 500px;
  z-index: 52;
  opacity: 1;
}

.modal-enter {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease-out;
}

.modal-leaver-to {
  opacity: 0;
}
</style>
