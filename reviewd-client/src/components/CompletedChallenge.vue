<template>
  <section class="w-full bg-light-gray rounded-xl p-10 mt-5">
    <h2 class="text-h4 font-bold">COMPLETED CHALLENGE</h2>
    <article class="flex flex-wrap gap-5 mt-5">
      <div
        v-for="(challenge, index) in challengeList"
        :key="index"
        class="bg-second-green text-white rounded-xl px-3"
      >
        <p>
          #{{ challenge }}
        </p>
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
