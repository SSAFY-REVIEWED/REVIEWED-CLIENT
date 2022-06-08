<template>
  <section class="min-h-screen w-full mt-60px">
    <div
      class="w-full h-12 align-middle flex items-center bg-slate-300 overflow-visible"
    >
      <div class="text-h5 max-w-container mx-auto w-full px-9">
        <div class="w-full">"{{ query }}"의 검색 결과</div>
      </div>
    </div>
    <div class="max-w-container mx-auto pt-0 px-9">
      <div class="w-full border-b-2">
        <button
          class="px-4 h-14"
          :class="{ 'border-b-2 border-black': type === 'movies' }"
        >
          <router-link
            :to="{ name: 'search', query: { query, type: 'movies' } }"
            >콘텐츠</router-link
          >
        </button>
        <button
          class="px-4 h-14"
          :class="{ 'border-b-2 border-black': type === 'users' }"
        >
          <router-link :to="{ name: 'search', query: { query, type: 'users' } }"
            >유저</router-link
          >
        </button>
      </div>
      <article
        v-if="type === 'movies' && searchData.length > 0"
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10"
      >
        <MainPosterCard
          v-for="movie in searchData"
          :key="movie.movieId"
          :movie="movie"
        />
      </article>
      <article
        v-if="type === 'users' && searchData.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 w-full gap-5 mt-10"
      >
        <SearchUserCard
          v-for="user in searchData"
          :key="user.userId"
          :user="user"
          class="w-full"
        />
      </article>
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
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SearchAPI from "@/api/search";
import LoadingSpinner from "@/components/LoadingSpinner";
import MainPosterCard from "@/components/MainPosterCard";
import SearchUserCard from "@/components/SearchUserCard";
export default {
  name: "searchView",
  components: {
    LoadingSpinner,
    MainPosterCard,
    SearchUserCard,
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
    initializeSearchData() {
      this.searchData = [];
    },
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
    async getSearchKeywordData() {
      this.initializeSearchData();
      this.toggleLoading();
      try {
        const response = await SearchAPI.getSearchData(this.query, this.type);
        this.setSearchData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        this.toggleLoading();
      }
    },
  },
  computed: {
    ...mapGetters(["searchKeyword"]),
  },
  watch: {
    $route() {
      console.log(this.$route);
      this.getQuery();
      this.getSearchKeywordData();
    },
  },
  created() {
    this.getQuery();
    this.setKeyword(this.query);
    this.getSearchKeywordData();
  },
  // mounted() {
  //
  // },
};
</script>

<style></style>
