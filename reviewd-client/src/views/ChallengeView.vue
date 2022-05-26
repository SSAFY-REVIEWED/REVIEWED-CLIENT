<template>
  <div class="max-w-container mx-auto pt-0 px-9 min-h-screen mt-20">
    <h1 class="text-h3 font-bold">CHALLENGE</h1>
    <h2 class="text-h4 mb-9">영화 리뷰에 새로운 도전을 해보세요</h2>
    <EventChallenge :challengeMovieList="challengeList[1]" />
    <div class="mt-10">
      <NormalChallenge :challengeMovieList="challengeList[0]" />
    </div>
    <div class="mt-10">
      <NormalChallenge :challengeMovieList="challengeList[2]" />
    </div>
  </div>
</template>

<script>
import EventChallenge from "@/components/EventChallenge";
import NormalChallenge from "@/components/NormalChallenge";
import MovieAPI from "@/api/movie";

export default {
  name: "challengeView",
  components: {
    EventChallenge,
    NormalChallenge,
  },
  data() {
    return {
      challengeList: [],
      ready: false,
    };
  },
  methods: {
    setChallengeList(response) {
      this.challengeList = response.data.challenges;
      console.log(this.challengeList);
    },

    async getChallengeList() {
      try {
        const response = await MovieAPI.getChallenges();
        this.setChallengeList(response);
      } catch (err) {
        console.log(err);
      }
    },
    isReadyData() {
      this.ready = true;
    },
  },
  async mounted() {
    await this.getChallengeList();
    this.isReadyData();
  },
};
</script>

<style></style>
