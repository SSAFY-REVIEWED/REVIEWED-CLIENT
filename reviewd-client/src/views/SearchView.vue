<template>
  <section class="min-h-screen">
    <h1>"{{ searchKeyword }}"의 검색 결과</h1>
    <div class="w-full border-b-4">
      <button class="px-3">
        <router-link :to="{ name: 'search', query: { query, type: 'movies' } }"
          >콘텐츠</router-link
        >
      </button>
      <button class="px-3">
        <router-link :to="{ name: 'search', query: { query, type: 'users' } }"
          >유저</router-link
        >
      </button>
    </div>
    <article class="flex flex-col h-[80vh] justify-center items-center">
      <LoadingSpinner v-if="isLoading" />
      <div
        v-if="searchData.length === 0 && !isLoading"
        class="flex flex-col justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-20 w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
        <p class="text-h5 mt-5">
          검색 결과가 없어요. 다른 검색어를 입력해주세요.
        </p>
      </div>
    </article>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SearchAPI from "@/api/search";
import LoadingSpinner from "@/components/LoadingSpinner";
export default {
  name: "searchView",
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      query: "",
      type: "movies",
      searchData: [],
      isLoading: false,
    };
  },
  methods: {
    ...mapMutations(["setKeyword"]),
    getQuery() {
      this.query = this.$route.query.query;
      if (this.$route.query.type) {
        this.type = this.$route.query.type;
        return;
      }
    },
    setSearchData(searchData) {
      this.searchData = searchData;
    },
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
    async getSearchKeywordData() {
      this.toggleLoading();
      try {
        const response = await SearchAPI.getSearchData(this.query, this.type);
        const { searchData } = response.data;
        this.setSearchData(searchData);
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        this.toggleLoading();
      }, 1000);
    },
  },
  computed: {
    ...mapGetters(["searchKeyword"]),
  },
  watch: {
    $route() {
      this.getQuery();
      this.getSearchKeywordData();
    },
  },
  created() {
    this.getQuery();
    this.isLoading = false;
    this.setKeyword(this.query);
    this.getSearchKeywordData();
  },
  // mounted() {
  //
  // },
};
</script>

<style></style>
