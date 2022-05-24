<template>
  <div class="tooltip w-20">
    <button
      type="button"
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
</template>

<script>
export default {
  name: "spoilerTooltipButton",
  props: {
    spoiler: {
      type: Boolean,
    },
  },
  methods: {
    toggleSpoiler() {
      this.$emit("toggle-spoiler");
    },
  },
};
</script>

<style></style>
