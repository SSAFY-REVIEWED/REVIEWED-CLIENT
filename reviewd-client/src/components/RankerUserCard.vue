<template>
  <router-link :to="{ name: 'profile', params: { userId: ranker.userId } }">
    <article
      class="w-64 h-64 bg-second-blue flex flex-col justify-center rounded-lg shadow-3xl gap-y-4 relative text-white font-bold"
    >
      <p class="absolute top-0 left-0 ml-5 my-5">{{ index }}</p>
      <div class="mx-auto flex items-center">
        <div
          class="w-[100px] h-[100px] overflow-hidden rounded-full shadow-3xl"
        >
          <img
            :src="ranker.profileImg"
            :alt="`${ranker.name}이미지`"
            width="100"
            height="100"
          />
        </div>
      </div>
      <div class="flex flex-col items-center w-full justify-between">
        <p class="text-h4">{{ ranker.name }}</p>
        <div class="flex flex-row justify-between w-full items-center mt-5">
          <div class="w-1/3">
            <img
              class="mx-auto"
              :src="ranker.levelImg"
              alt="rankerLevelImage"
              width="25"
              height="25"
            />
          </div>
          <div class="w-1/3 relative align-middle flex justify-center">
            <p class="mx-auto">{{ level }}</p>
          </div>
          <div class="w-1/3 relative align-middle flex justify-center">
            <p class="mx-auto">{{ ranker.exp }}</p>
          </div>
        </div>
      </div>
    </article>
  </router-link>
</template>

<script>
import { getLevel } from "@/utils/utils.js";

export default {
  name: "rankerUserCard",
  props: {
    ranker: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      level: "",
    };
  },
  methods: {},
  mounted() {
    this.level = getLevel(this.ranker);
  },
};
</script>

<style></style>
