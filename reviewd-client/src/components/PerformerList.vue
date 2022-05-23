<template>
  <div>
    <h1>감독 / 출연</h1>
    <div class="flex">
      <div v-for="director in directors" :key="director.name">
        <div class="overflow-hidden rounded-full w-15 h-15">
          <img
            :src="tmdbAPI + director.profile_path"
            alt=""
            width="200"
            height="200"
            class="w-full"
          />
        </div>
        <p>{{ director.name }}</p>
      </div>
      <div v-for="actor in actors" :key="actor.name">
        <div class="overflow-hidden rounded-full w-15 h-15">
          <img
            :src="tmdbAPI + actor.profile_path"
            alt=""
            width="200"
            height="200"
            class="w-full h-full"
          />
        </div>
        <p>{{ actor.name }}</p>
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
