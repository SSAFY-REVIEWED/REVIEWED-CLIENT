<template>
  <div class="modal">
    <div class="overlay"></div>
    <div class="modal-card rounded-xl">
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
          <form class="mt-5" @submit.prevent="updateMovieReview">
            <textarea
              class="w-full h-full rounded-xl shadow-inner-input p-5 focus:outline-none resize-none"
              name="review"
              id=""
              cols="30"
              rows="13"
              v-model="content"
              autofocus
              required
            >
            </textarea>
            <button
              class="relative float-right top-10 ml-auto right-0 bg-third-blue"
              type="submit"
              @click="updateMovieReview"
            >
              작성
            </button>
          </form>
        </article>
        <div class="relative w-1/2">
          <div class="tooltip w-20">
            <button
              class="w-20 bg-gradient-to-r from-primary-blue via-second-blue to-third-blue h-20 mt-10 rounded-lg text-white font-bold transition-all duration-200"
              @click="toggleSpoiler"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                :class="{ 'text-red-500': spoiler }"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <span
              role="tooltip"
              class="tooltiptext absolute left-0 bg-light-black text-white w-fit p-2 h-fit rounded-md font-bold"
              >스포일러가 있는 리뷰를 가려보세요.</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "modalView",
  computed: {
    ...mapGetters(["myReview", "movieData", "movieId"]),
  },
  data() {
    return {
      title: "",
      content: "",
      spoiler: false,
    };
  },
  methods: {
    ...mapActions(["createMovieReview", "editReview", "getMovieReviewList"]),
    async updateMovieReview() {
      const body = {
        title: this.title,
        content: this.content,
        spoiler: this.spoiler,
        reviewId: null,
      };
      if (Object.keys(this.myReview).length) {
        console.log(this.reviewId);
        try {
          await this.editReview({ reviewId: this.reviewId, body });
          await this.getMovieReviewList(this.movieId);
          this.$emit("close-modal");
        } catch (err) {
          console.log(err);
        }
        return;
      }
      try {
        await this.createMovieReview(body);
      } catch (err) {
        console.log(err);
      }
    },
    toggleSpoiler() {
      this.spoiler = !this.spoiler;
    },
    setReviewData() {
      if (Object.keys(this.myReview).length) {
        this.title = this.myReview.title;
        this.content = this.myReview.content;
        this.spoiler = this.myReview.spoiler;
        this.reviewId = this.myReview.reviewId;
        return;
      }
    },
  },
  mounted() {
    this.setReviewData();
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
</style>
