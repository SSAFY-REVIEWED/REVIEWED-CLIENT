<template>
  <div class="relative w-full my-5">
    <h2 class="text-h4 font-semibold my-5">공식 예고편</h2>
    <iframe
      :src="video"
      frameborder="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      width="1200"
      height="675"
      class="w-full h-96"
    ></iframe>
  </div>
</template>

<script>
// import MovieAPI from "@/api/movie";
import axios from "axios";

export default {
  name: "movieYoutube",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      youtubeList: [],
      video: `https://www.youtube.com/embed/qmth-PGDD0Q`,
    };
  },
  methods: {
    async onSearch(keyword) {
      const YOUTUBE_SEARCH_BASE_URL =
        "https://www.googleapis.com/youtube/v3/search";
      const YOUTUBE_API_KEY = "AIzaSyBMDbcXl4X8KFqb6l4CmJmgYjJabjWv0-0";
      const params = {
        key: YOUTUBE_API_KEY,
        part: "snippet",
        q: `${keyword} 메인 예고`,
      };
      try {
        const response = await axios.get(YOUTUBE_SEARCH_BASE_URL, {
          params,
        });
        const videos = response.data.items;
        this.youtubeList = videos;
        console.log(videos);
        const videoId = this.youtubeList[0].id.videoId;
        this.video = `https://www.youtube.com/embed/${videoId}`;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    videoUrl() {
      const videoId = this.youtubeList[0].id.videoId;
      console.log(`https://www.youtube.com/embed/${videoId}`);
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },

  created() {
    this.onSearch(this.title);
  },
};
</script>

<style></style>
