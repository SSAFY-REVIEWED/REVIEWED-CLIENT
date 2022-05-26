<template>
  <div class="w-full relative">
    <router-link :to="{ name: 'home' }">
      <div
      v-if="!done2"
        class="w-full h-full absolute bg-light-black opacity-70 z-10 rounded-xl flex justify-center items-center text-white font-extrabold"
      >리뷰 완료</div>
      <div
        class="relative w-full h-0 overflow-hidden pb-[50%] bg-white rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
      >
        <div class="absolute top-0 bottom-0 w-full h-full flex">
          <div class="w-1/2 overflow-hidden h-full relative">
            <img
              src="http://economychosun.com/query/upload/302/20190601212700_pqolspec.jpg"
              alt=""
              width="200"
              height="200"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="relative w-1/2">
            <h4 class="text-sm ellipsis-2 p-1">어벤져스 인피니티워 원오원</h4>
            <div class="text-star-yellow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="text-sm">7.7</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "challengePosterCard",
  props: {
    done2: {
      type: Boolean
    }
  },
  data() {
    return {
      done: true,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_mixins.scss";
.ellipsis-2 {
  @include ellipsis(2, 1.3em);
}
</style>
