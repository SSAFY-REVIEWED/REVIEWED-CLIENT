<template>
  <div class="my-5">
    <h2 class="text-h4 font-semibold my-5">감독 / 출연</h2>
    <div class="flex flex-col">
      <div class="flex my-2 flex-wrap">
        <div v-for="director in directors" :key="director.name">
          <div
            v-if="director.profile_path !== null"
            class="w-20 text-center gap-3"
          >
            <div class="overflow-hidden rounded-full w-20 h-20">
              <img
                loading="lazy"
                :src="tmdbAPI + director.profile_path"
                alt=""
                width="200"
                height="200"
                class="w-full"
              />
            </div>
            <p class="font-semibold">{{ director.name }}</p>
          </div>
        </div>
      </div>
      <div class="flex my-2 flex-wrap">
        <div v-for="actor in actors" :key="actor.name">
          <div v-if="actor.profile_path !== null" class="w-20 text-center mr-5">
            <div class="overflow-hidden rounded-full w-20 h-20">
              <img
                loading="lazy"
                :src="tmdbAPI + actor.profile_path"
                alt=""
                width="200"
                height="200"
                class="w-full h-full"
              />
            </div>
            <p class="font-semibold">{{ actor.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "performerList",
  props: {
    actors: {
      type: Array,
    },
    directors: {
      type: Array,
    },
  },
  data() {
    return {
      tmdbAPI: "https://image.tmdb.org/t/p/w500/",
    };
  },
  computed: {},
};
</script>

<style></style>
