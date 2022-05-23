<template>
  <div class="w-48 absolute">
    <div
      class="bg-blue-300 relative w-full h-0  pb-150% rounded-lg shadow-md"
    >
      <picture class="absolute top-0 left-0 w-full h-full">
        <img
          draggable="false"
          src="../assets/images/posters/닥터스트레인지.jpeg"
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
  },
};
</script>

<style></style>
