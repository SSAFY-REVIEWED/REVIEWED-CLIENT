<template>
  <div class="relative">
    <div
      class="relative w-[1440px] -left-10 m-0 mx-auto bg-red-300 h-[850px] overflow-hidden bg-gradient-to-b from-transparent to-black bg-cover bg-center"
      style="
        background-image: url('https://w.namu.la/s/d0295ada5124aa37f7d06c7455dcfebcb28ca0716b6b98f214c6e176bd953ffcda3596b8a074216d23f4e4fcd2fa9e0f8588b49eedb8d775e320e4d92bfa005f778667994bc8846d22209b8ef96f4ccaaec04a5529ddddfad354b5a27a7191083753fcf43be61c467b619c536c01a727');
      "
    >
      <div
        class="max-w-container h-full bg-gradient-to-b from-transparent to-black bg-cover bg-center"
      ></div>
    </div>
    <SoloPosterCard class="top-0" />
  </div>
</template>

<script>
import SoloPosterCard from "@/components/SoloPosterCard";

export default {
  name: "movieHeader",
  props: {
    
  },
  components: {
    SoloPosterCard,
  },
  methods: {
    getMovieDetail() {},
  },
};
</script>

<style></style>
