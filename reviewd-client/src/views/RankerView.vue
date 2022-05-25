<template>
  <section
    class="max-w-container mx-auto pt-0 px-9 min-h-screen mt-20 relative"
  >
    <div>
      <h1 class="text-h3 font-semibold">RANK</h1>
      <h2 class="text-h4 text-light-black">REVIEWD의 랭커들을 만나보세요.</h2>
    </div>
    <article class="w-full relative">
      <div class="w-full relative flex">
        <RankerUserCard
          class="mx-auto my-7 relative"
          :ranker="topRanker"
          :index="1"
        />
      </div>
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex-wrap mx-auto"
      >
        <RankerUserCard
          v-for="(ranker, index) in FourRankerList"
          :key="ranker.userId"
          :ranker="ranker"
          :index="index + 2"
          class="mx-auto my-7"
        />
      </div>
    </article>
    <article class="px-10 mb-10">
      <div
        class="w-full h-fit rounded-lg border-[1px] border-slate-100 shadow-2xl"
        v-if="tenRankerList.length"
      >
        <table class="w-full rounded-lg">
          <thead class="h-20 border-b-2 border-primary-blue">
            <th>랭킹</th>
            <th>이름</th>
            <th>레벨</th>
            <th>경험치</th>
          </thead>
          <tbody>
            <tr
              v-for="(ranker, index) in tenRankerList"
              :key="ranker.id"
              class="h-12 hover:scale-[1.02] transition-all duration-300"
            >
              <td class="text-center">{{ index + 6 }}</td>
              <td class="">
                <router-link
                  :to="{ name: 'history', params: { userId: ranker.userId } }"
                >
                  <div
                    class="flex justify-between items-center gap-x-6 w-36 mx-auto"
                  >
                    <img
                      :src="ranker.profileImg"
                      :alt="`${ranker.name} 프로필 이미지`"
                      width="30"
                      height="30"
                      loading="lazy"
                      class="rounded-full"
                    />
                    <div class="mr-auto">
                      <p>{{ ranker.name }}</p>
                    </div>
                  </div>
                </router-link>
              </td>
              <td class="">
                <div
                  class="flex justify-between items-center gap-x-6 w-20 mx-auto"
                >
                  <img
                    :src="ranker.levelImg"
                    alt="level Image"
                    width="30"
                    height="30"
                    loading="lazy"
                    class="rounded-full"
                  />
                  <div>
                    {{ ranker.level }}
                  </div>
                </div>
              </td>
              <td class="text-center">{{ ranker.exp }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  </section>
</template>

<script>
import RankerUserCard from "@/components/RankerUserCard";
import SearchAPI from "@/api/search";
import { getLevel } from "@/utils/utils.js";

export default {
  name: "RankView",
  components: {
    RankerUserCard,
  },
  data() {
    return {
      topRanker: {},
      FourRankerList: [],
      tenRankerList: [],
      rankerList: [],
    };
  },
  methods: {
    setRankerList(rankerList) {
      this.rankerList = rankerList;
      this.topRanker = rankerList[0];
      this.FourRankerList = rankerList.slice(1, 5);
      const arr = rankerList.slice(5, 15);
      if (arr.length) {
        this.setTenRankerList(arr);
      }
    },
    setTenRankerList(RankerList) {
      const arr = [];
      for (let ranker of RankerList) {
        ranker.level = getLevel(ranker);
        arr.push(ranker);
      }
      this.tenRankerList = arr;
    },
    async getRankerList() {
      try {
        const response = await SearchAPI.getRankerList();
        this.setRankerList(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getRankerList();
  },
};
</script>

<style></style>
