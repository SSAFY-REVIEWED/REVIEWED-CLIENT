<template>
  <section class="w-full bg-blue-400">
    <h1>COMPLETED CHALLENGE</h1>
    <article class="flex flex-wrap gap-x-7">
      <div v-for="(challenge, index) in challengeList" :key="index" class="bg-red-500">
        {{ challenge }}
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    challengeList: {
      type: Array,
    },
  },
};
</script>

<style></style>
