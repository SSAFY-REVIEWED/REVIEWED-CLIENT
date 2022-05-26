<template>
  <div class="h-[70vh] w-full max-w-container mx-auto pt-0 px-9">
    <div class="h-full flex justify-center items-center">
      <article class="flex flex-col items-center">
        <p class="text-h3">잘못된 접근입니다.</p>
        <router-link :to="{ name: 'main' }">
          <button class="bg-primary-blue px-10 py-3 rounded-xl">
            <div
              class="items-center bg-gradient-to-r from-primary-red to-second-red bg-clip-text transparent text-transparent font-bold text-h1 tracking-tighter"
            >
              REVIEWD
            </div>
          </button>
        </router-link>
        <p class="text-h3 mt-5 font-bold">홈으로 이동하기</p>
      </article>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "notFound",
  methods: {
    ...mapMutations(["setLoggingIn"]),
  },
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style></style>
