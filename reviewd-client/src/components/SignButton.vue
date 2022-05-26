<template>
  <div class="w-full">
    <button
      type="submit"
      class="mt-8 h-12 w-full bg-gradient-to-r from-primary-blue via-second-blue to-third-blue font-bold text-white rounded-lg transition-all duration-200 ease"
      :class="{ 'opacity-100': progress, 'opacity-50': !progress }"
      :disabled="!progress"
      ref="signupButton"
    >
      <span v-if="state === 'login'">REVIEWD 시작하기</span>
      <span v-if="state === 'edit'">수정하기</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "signButton",
  props: {
    progress: {
      type: Boolean,
    },
    state: {
      type: String,
    },
  },
  methods: {},
};
</script>

<style></style>
