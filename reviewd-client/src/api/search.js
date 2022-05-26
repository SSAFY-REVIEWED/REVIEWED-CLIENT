import axios from "axios";

const Search_API = {
  async getSearchData(query, type) {
    return axios.get(SEARCH_URL.SEARCH(query, type));
  },
  async getRankerList() {
    return axios.get(SEARCH_URL.RANKING());
  },
};

const SEARCH_URL = {
  SEARCH: (query, type) => `/search?query=${query}&type=${type}`,
  RANKING: () => "/ranking/",
};

export default Search_API;
