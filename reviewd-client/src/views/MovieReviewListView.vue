<template>
  <section class="min-h-screen max-w-container mx-auto pt-0 px-9 mt-36">
    <div>
      <h1>범죄 도시의 모든 리뷰</h1>
      <div @click="changeQuery" class="flex gap-x-7">
        <button class="border-4" value="like">좋아요</button>
        <button class="border-4" value="late">최근 작성</button>
        <button class="border-4" value="rate-high">평가 높은 순</button>
        <button class="border-4" value="rate-low">평가 낮은 순</button>
      </div>
    </div>
    <div v-if="reviewList.length">
      <ReviewCard
        v-for="(review, index) in dataList"
        :key="index"
        :review="review"
      />
    </div>
    <Trigger @triggerIntersected="fetchData" :hasMore="hasMore" />
    <div v-show="isFetching">
      <div
        class="animate-pulse bg-gradient-to-r from-violet-100 to-violet-300 flex mb-2 rounded-md p-2"
        v-for="index in 10"
        :key="index"
      >
        <div class="w-16 h-16 bg-slate-400 mr-3 rounded-md"></div>
        <div class="w-full flex flex-col justify-between">
          <p class="w-4/6 h-3 bg-slate-400 rounded-md"></p>
          <p class="w-3/12 h-3 bg-slate-400 rounded-md"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MovieAPI from "@/api/movie";
import ReviewCard from "@/components/ReviewCard";
import Trigger from "@/components/TheTrigger";
import { mapGetters } from "vuex";

export default {
  name: "movieReviewListView",
  components: {
    ReviewCard,
    Trigger,
  },
  data() {
    return {
      query: "like",
      params: null,
      page: 1,
      hasMore: true,
      dataList: [],
      isFetching: true,
    };
  },
  methods: {
    setParams() {
      const params = this.$route.params.movieId;
      this.params = params;
    },
    setQuery() {
      const { query } = this.$route.query;
      this.query = query;
    },
    initializePage() {
      this.page = 1;
    },
    changeQuery(e) {
      const { value } = e.target;
      if (!value) return;
      if (value === this.query) return;
      this.$router.push({
        name: "reviewList",
        params: { movieId: this.params },
        query: { query: value },
      });
      this.dataList = [];
      this.setQuery();
    },
    async getMovieAllReviewListByQuery() {
      const response = await MovieAPI.getMovieAllReviewList(
        this.params,
        this.query,
        this.page
      );
      console.log(response);
    },
    increasePageNumber() {
      this.page += 1;
    },
    fetchData() {
      this.isFetching = true;
      setTimeout(() => {
        this.dataList = [...this.dataList, ...this.reviewList];
        this.isFetching = false;
      }, 1000);
    },
    setDataList() {},
  },
  computed: {
    ...mapGetters(["reviewList"]),
  },
  // watch: {
  //   $route() {
  //     console.log(this.$route.query);
  //     this.setQuery();
  //     this.getMovieAllReviewListByQuery();
  //     this.initializePage();
  //   },
  // },
  created() {
    this.setParams();
    this.setQuery();
    this.dataList = this.reviewList;
    console.log(this.dataList);
  },
  watch: {
    dataList() {
      if (this.dataList.length > 50) {
        this.hasMoreData = false;
      }
      console.log(this.hasMoreData);
    },
  },
  // mounted() {
  //   this.getMovieAllReviewListByQuery();
  // },
};
</script>

<style></style>
