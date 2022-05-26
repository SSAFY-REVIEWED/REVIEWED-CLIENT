<template>
  <section class="max-w-container mx-auto pt-0 px-9 relative min-h-[30vh]">
    <h1 class="text-h4 font-bold my-5 relative">
      {{ userProfile.name }}님이 보고싶어하는 영화 목록
    </h1>
    <article
      v-if="!likesList.length && !hasMore"
      class="w-full h-[20vh] flex flex-col justify-center items-center relative"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
          clip-rule="evenodd"
        />
      </svg>
      <p class="text-h5">아직 보고싶은 영화가 없어요.</p>
    </article>

    <article v-if="likesList.length" class="grid grid-cols-4 gap-4">
      <MainPosterCard
        v-for="movie in likesList"
        :key="movie.movieId"
        :movie="movie"
        :myLikes="true"
      />
    </article>
    <div
      v-if="isLoading && hasMore"
      class="w-full h-full flex justify-center items-center"
    >
      <LoadingSpinner />
    </div>
    <Trigger
      :hasMore="hasMore"
      @triggerIntersected="getTargetUserLikedMovieList"
    />
  </section>
</template>

<script>
import MainPosterCard from "@/components/MainPosterCard";
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";
import Trigger from "@/components/TheTrigger";
import LoadingSpinner from "@/components/LoadingSpinner";

export default {
  name: "profileLikesView",
  components: {
    MainPosterCard,
    Trigger,
    LoadingSpinner,
  },
  data() {
    return {
      targetUserId: null,
      likesList: [],
      hasMore: true,
      page: 1,
      isLoading: true,
    };
  },
  methods: {
    setTargetUserId() {
      this.targetUserId = this.$route.params.userId;
    },
    setMovieList(response) {
      this.likesList = [...this.likesList, ...response.data.movies];
      this.page++;
      this.hasMore = response.data.hasMore;
    },
    toggleLoading() {
      this.isLoading = !this.isLoading;
    },
    async getTargetUserLikedMovieList() {
      if (!this.hasMore) return;
      this.toggleLoading();
      try {
        const response = await ProfileAPI.getMovieList(
          this.targetUserId,
          this.page
        );
        this.setMovieList(response);
      } catch (err) {
        console.log(err);
      } finally {
        this.toggleLoading();
      }
    },
  },
  computed: { ...mapGetters(["userProfile"]) },
  created() {
    this.setTargetUserId();
  },
};
</script>

<style></style>
