<template>
  <div class="max-w-container mx-auto pt-0 px-9 min-h-screen my-20">
    <h1 class="text-h3 font-bold">CHALLENGE</h1>
    <h2 class="text-h4 mb-9">영화 리뷰에 새로운 도전을 해보세요</h2>
    <EventChallenge :challengeMovieList="eventChallengeList[0]" />
    <div class="mt-10" v-for="(challenge, index) in challengeList" :key="index">
      <NormalChallenge :challengeMovieList="challenge" :index="index + 1" />
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
      eventChallengeList: [],
      ready: false,
    };
  },
  methods: {
    setChallengeList(response) {
      this.challengeList = response.data.challenges;
      this.eventChallengeList = response.data.event;
    },

    async getChallengeList() {
      try {
        const response = await MovieAPI.getChallenges();
        this.setChallengeList(response);
        console.log(response);
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
