<template>
  <article
    class="w-full bg-fourth-blue px-6 py-5 min-h-[420px] rounded-2xl relative"
  >
    <div v-if="ready">
      <div
        v-if="challengeMovieList.progress === 100"
        class="absolute w-full h-full bg-light-black opacity-50 right-0 bottom-0 top-0 left-0 rounded-2xl flex justify-start items-center z-20"
      >
        <p class="mx-auto text-white text-h3 font-semibold">미션 클리어</p>
      </div>
      <h3 class="text-h3 text-primary-blue font-semibold">
        {{ challengeMovieList.name }}
      </h3>

      <div class="mt-3 flex flex-row">
        <p class="text-h5 text-primary-blue font-bold w-32">미션 달성률</p>
        <div class="relative w-full">
          <div class="w-full h-5 bg-gray-500 rounded-lg relative"></div>
          <transition name="show">
            <div
              v-if="show"
              ref="target"
              class="h-5 absolute top-0 left-0 w-70 overflow-hidden transition-all duration-1000 rounded-lg shadow-3xl bg-primary-blue"
              :style="{
                width: `${challengeMovieList.progress}%`,
              }"
            ></div>
          </transition>
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 flex-wrap relative"
      >
        <ChallengePosterCard
          v-for="movie in challengeMovieList.movie_list"
          :key="movie.movieTitle"
          :movie="movie"
        />
      </div>
    </div>
  </article>
</template>

<script>
import ChallengePosterCard from "@/components/ChallengePosterCard";
export default {
  name: "normalChallenge",
  components: {
    ChallengePosterCard,
  },
  props: {
    challengeMovieList: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      level: 78,
      show: false,
      ready: false,
    };
  },
  methods: {
    toggleShow() {
      this.show = true;
    },
    isReadyData() {
      this.ready = true;
    },
  },

  mounted() {
    this.isReadyData();
    setTimeout(() => {
      this.toggleShow();
    }, 500 * this.index);
  },
};
</script>

<style>
.show-enter-active {
  animation: show-in 3s;
}
@keyframes show-in {
  0% {
    width: 0;
  }
  100% {
  }
}
</style>
