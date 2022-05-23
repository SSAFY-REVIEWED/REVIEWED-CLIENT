<template>
  <div class="w-full">
    <router-link :to="{ name: 'movie', params: { movieId: 1 } }">
      <div
        class="bg-white relative w-full h-0 overflow-hidden pb-[50%] rounded-lg shadow-lg"
      >
        <div class="absolute top-0 left-0 w-full h-full flex">
          <div
            class="relative h-full w-0 overflow-hidden pr-[35%] rounded-lg shadow-xl"
          >
            <picture class="absolute top-0 left-0 w-full h-full">
              <img
                src="../assets/images/posters/범죄도시2.jpeg"
                alt="범죄도시2"
                width="300"
                height="450"
                class="w-full h-full"
              />
            </picture>
          </div>
          <div class="px-5 py-3 relative h-full w-0 overflow-hidden pr-[60%]">
            <div
              class="absolute top-0 left-0 w-full h-full py-2 px-3 text-sm ext-ellipsis overflow-hidden"
            >
              <h2 class="text-h5 font-semibold">범죄 도시 2</h2>
              <div class="mt-2 flex">
                <p class="text-star-yellow mt-1 self-baseline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-star-yellow w-6 h-6 inline"
                    viewBox="0 2 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="text-h5 self-baseline">7.7</span>
                </p>
                <div
                  class="flex ml-3 leading-loose text-xs text-light-black bg-slate-300 rounded-2xl px-2 py-0 h-fit justify-start"
                  v-for="num in 3"
                  :key="num"
                >
                  <p>#액션</p>
                </div>
              </div>
              <div class="flex gap-4 text-light-black">
                <p class="font-bold justify-start">JAEHO</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    v-if="!like"
                    class="h-5 w-5 text-primary-red inline"
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
                    class="h-5 w-5 inline"
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
                  <span>99 개</span>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 inline"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                    />
                    <path
                      d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                    />
                  </svg>
                  <span>10 개</span>
                </div>
                <p>5 분 전</p>
              </div>
              <hr class="mt-1" />
              <p
                class="text-sm text-ellipsis overflow-hidden whitespace-pre-line content--container"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus blanditiis sequi ad ullam harum, excepturi expedita
                modi ut fuga esse obcaecati a numquam eligendi pariatur
                voluptatem consequuntur ea eos quos. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Voluptatibus veritatis rerum nemo
                molestiae aperiam voluptatum, veniam, autem nesciunt tempore
                totam iusto, commodi porro odio sit? Nulla magnam repellendus
                eaque minima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "reviewCard",
  props: {
    review: Object,
  },
  data() {
    return {
      like: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.content--container {
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
