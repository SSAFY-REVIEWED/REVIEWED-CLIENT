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
    <article>
      <div class="w-full h-fit" v-if="tenRankerList.length">
        <table>
          <th>랭킹</th>
          <th>이름</th>
          <th>레벨</th>
          <th>경험치</th>
          <tr v-for="(ranker, index) in tenRankerList" :key="ranker.id">
            <td>{{index + 6}}</td>
            <td>{{ranker.name}}</td>
            <td>{{ranker}}</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </article>
  </section>
</template>

<script>
import RankerUserCard from "@/components/RankerUserCard";
import SearchAPI from "@/api/search";

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
      this.tenRankerList = rankerList.slice(5, 15);
      console.log(this.FourRankerList, this.tenRankerList);
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
