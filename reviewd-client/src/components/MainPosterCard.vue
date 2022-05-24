<template>
  <div class="w-full">
    <router-link :to="{ name: 'movie', params: { movieId: 335787 } }">
      <div
        class="bg-white relative w-full h-0 overflow-hidden pb-183% rounded-lg shadow-md"
      >
        <div class="absolute top-0 left-0 w-full h-full pb-150%">
          <picture class="relative w-full h-0 overflow-hidden">
            <img
              loading="lazy"
              src="../assets/images/posters/닥터스트레인지.jpeg"
              alt="닥터스트레인지"
              width="300"
              height="450"
              class="w-full"
            />
          </picture>
          <div
            class="flex flex-col items-start w-full relative h-0 pb-[100%] text-[1.5vw] md:text-[1vw] font-bold flex-auto"
          >
            <div class="absolute top-0 left-0 w-full h-full p-1.5">
              <p
                class="text-ellipsis overflow-hidden whitespace-nowrap text-left w-full"
              >
                닥터스트레인지: 대혼돈의 멀티버스
              </p>
              <p>2022</p>
              <div class="flex w-full justify-between justify-self-end">
                <p class="text-star-yellow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-star-yellow w-5 h-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span>7.7</span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="!like"
                  class="h-5 w-5 text-primary-red"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="like"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "mainPosterCard",
  props: {
    movie: {
      type: Object,
    },
  },
  data() {
    return {
      like: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
