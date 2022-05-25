<template>
  <div class="relative mt-60px">
    <div
      class="relative w-full m-0 mx-auto h-0 pb-[59%] overflow-hidden bg-cover bg-center"
    >
      <div
        class="absolute top-0 bottom-0 w-full h-full bg-no-repeat bg-cover bg-gradient-to-b from-transparent to-black"
        :style="{
          backgroundImage: 'url(' + movieData.posterUrl + ')',
        }"
      >
        <div
          class="w-full h-3/5 bg-gradient-to-b from-transparent to-black relative"
        ></div>
        <div class="w-full h-2/5 bg-black relative"></div>
      </div>
      <div
        class="absolute bottom-10 left-0 right-0 mx-auto text-white flex justify-center gap-x-8"
      >
        <div class="w-[20%]">
          <SoloPosterCard :posterUrl="movieData.posterUrl" class="top-0" />
        </div>
        <article class="self-end">
          <h1 class="text-h2 font-semibold my-5">{{ movieData.title }}</h1>
          <h2 class="text-h4 my-5">
            {{ movieData.releaseDate }} · {{ movieData.country[0].name }}
          </h2>
          <div class="flex items-center gap-6">
            <div class="text-star-yellow text-h4 flex my-2">
              <span class="">평점</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-star-yellow w-6 h6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              {{ movieData.voteAverage }}
            </div>
            <div class="flex">
              <p
                v-for="genre in movieData.genres"
                :key="genre.name"
                class="bg-white text-light-black rounded-xl px-2 mr-2"
              >
                {{ genre.name }}
              </p>
            </div>
          </div>
          <div>
            <div class="w-fit mt-2">
              <h3 class="text-h4 text-center">평가하기</h3>
              <star-rating
                @rating-selected="evaluateMovie"
                :show-rating="false"
                :rating="movieData.rate / 2"
                :increment="0.05"
                :fixed-points="1"
              ></star-rating>
            </div>
          </div>
        </article>
        <article class="self-end flex gap-x-3">
          <button
            @click="toggleLikeMovie"
            class="transition-all duration-500 flex button"
            :class="{
              'text-red-600': movieData.like,
              'text-white': !movieData.like,
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transition-transform duration-500 button--icon hover:scale-110"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="{
                'rotate-180': !movieData.like,
                'rotate-0 ': movieData.like,
              }"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            <span>보고싶어요</span>
          </button>
          <button
            class="transition-all duration-100 flex button"
            @click="isModalViewed = true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 button--icon transition-all duration-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </svg>
            <span>리뷰 작성</span>
          </button>
        </article>
      </div>
    </div>
    <ModalView
      v-if="isModalViewed"
      @close-modal="isModalViewed = false"
      :review="myReview"
    >
    </ModalView>
  </div>
</template>

<script>
import SoloPosterCard from "@/components/SoloPosterCard";
import ModalView from "@/components/ModalView";
import StarRating from "vue-star-rating";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "movieHeader",
  components: {
    SoloPosterCard,
    StarRating,
    ModalView,
  },
  data() {
    return {
      isModalViewed: true,
    };
  },
  methods: {
    ...mapActions(["rateMovie", "likeMovie"]),
    async evaluateMovie(rating) {
      await this.rateMovie({ rate: rating * 2 });
    },
    async toggleLikeMovie() {
      await this.likeMovie();
    },
  },
  computed: {
    ...mapGetters(["movieData", "myReview"]),
  },
};
</script>

<style lang="scss" scoped></style>
