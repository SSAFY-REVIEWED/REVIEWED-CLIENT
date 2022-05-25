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
    <div>
      
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import SearchAPI from "@/api/search";
export default {
  name: "searchView",
  data() {
    return {
      query: "",
      type: "movies",
      searchData: [],
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
    async getSearchKeywordData() {
      try {
        const response = await SearchAPI.getSearchData(this.query, this.type);
        const { searchData } = response.data;
        this.setSearchData(searchData);
      } catch (err) {
        console.log(err);
      }
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
    this.setKeyword(this.query);
    this.getSearchKeywordData();
  },
  // mounted() {
  //
  // },
};
</script>

<style></style>
