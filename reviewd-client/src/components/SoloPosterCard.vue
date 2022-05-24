<template>
  <div class="w-full" :class="{ absolute: absolute }">
    <div
      class="bg-blue-300 relative w-full h-0 pb-150% rounded-md shadow-md overflow-hidden"
    >
      <picture class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <img
          loading="lazy"
          draggable="false"
          :src="posterUrl"
          alt="닥터스트레인지 포스터"
          width="200"
          height="300"
          class="w-full h-full"
        />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: "soloPosterCard",
  props: {
    posterUrl: {
      type: String,
    },
    absolute: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
