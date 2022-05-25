<template>
  <article class="w-full bg-third-green px-6 py-5 rounded-2xl relative">
    <div
      class="absolute w-full h-full bg-light-black opacity-50 right-0 bottom-0 top-0 left-0 rounded-2xl flex justify-start items-center z-20"
    >
      <p class="mx-auto text-white text-h3 font-semibold">미션 클리어</p>
    </div>
    <h3 class="text-h3 text-primary-green font-semibold">Event</h3>
    <p class="text-h5 text-second-green">2주마다 주어지는 새로운 CHALLENGE</p>
    <p class="text-h5 text-second-green mt-2">
      EVENT CHALLENGE는 보상이
      <span class="text-primary-green font-bold">2배!</span>
    </p>
    <div class="mt-3 flex flex-row">
      <p class="text-h5 text-primary-green font-bold w-32">미션 달성률</p>
      <div class="relative w-full">
        <div class="w-full h-5 bg-gray-500 rounded-lg relative"></div>
        <transition name="show">
          <div
            v-if="show"
            ref="target"
            class="h-5 absolute top-0 left-0 w-70 overflow-hidden transition-all duration-1000 rounded-lg shadow-3xl bg-primary-green"
            :style="{
              width: `${level}%`,
            }"
          ></div>
        </transition>
      </div>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 flex-wrap relative"
    >
      <ChallengePosterCard v-for="num in 5" :key="num" />
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5 flex-wrap relative"
    >
      <ChallengePosterCard v-for="num in 5" :key="num" />
    </div>
  </article>
</template>

<script>
import ChallengePosterCard from "@/components/ChallengePosterCard";
export default {
  name: "eventChallenge",
  components: {
    ChallengePosterCard,
  },
  props: {},
  data() {
    return {
      level: 100,
      show: false,
      color: "white",
    };
  },
  methods: {
    toggleShow() {
      this.show = true;
    },
  },
  mounted() {
    this.toggleShow();
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
