<template>
  <div class="relative">
    <Navigation class="top-0" v-if="!isLoggingIn" />
    <main
      class="container max-w-container pt-0 px-9 mt-20 mx-auto relative"
      :class="{ 'mt-0': isLoggingIn }"
    >
      <router-view />
    </main>
    <Footer v-if="!isLoggingIn" />
  </div>
</template>

<script>
import Navigation from "@/components/TheNavigation.vue";
import Footer from "@/components/TheFooter.vue";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["isLoggingIn"]),
  },
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style lang="scss">
* {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
}

.ally-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
}

.tooltip {
  .tooltiptext {
    visibility: hidden;
    opacity: 0;
    transition: all 300ms;
  }
  &:hover {
    .tooltiptext {
      visibility: visible;
      opacity: 1;
      transition: all 300ms;
    }
  }
}

input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label,
input:not(:focus):not(:placeholder-shown) ~ .floating-label {
  top: 6px;
  bottom: 10px;
  left: 60px;
  font-size: 10px;
  opacity: 1;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 60px;
  top: 20px;
  transition: 0.2s ease all;
}
</style>
