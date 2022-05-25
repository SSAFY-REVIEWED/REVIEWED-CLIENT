<template>
  <div class="flex relative items-end">
    <div class="tooltip w-fit">
      <button type="button" @click="toggleSpoiler">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-14 w-14 bottom-0 left-0"
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
        class="tooltiptext absolute bottom-14 left-0 bg-primary-blue text-white w-64 p-2 h-fit rounded-md font-bold"
        >스포일러가 있는 리뷰를 가려보세요.</span
      >
    </div>
    <p v-if="spoiler" class="text-sm font-bold">스포일러가 포함되어있아요.</p>
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
