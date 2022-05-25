import axios from "axios";

const Search_API = {
  async getSearchData(query, type) {
    return axios.get(SEARCH_URL.SEARCH(query, type));
  },
};

const SEARCH_URL = {
  SEARCH: (query, type) => `/search?query=${query}&type=${type}/`,
};

export default Search_API;
