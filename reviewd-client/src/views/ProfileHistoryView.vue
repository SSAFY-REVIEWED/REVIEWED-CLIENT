<template>
  <div class="w-full min-h-screen max-w-container mx-auto pt-0 px-9">
    <div>
      <ProfileChartList
        v-if="reviewCountList.length"
        :reviewDateCountList="reviewDateCountList"
        :genreList="genreList"
        :reviewCountList="reviewCountList"
        :reviewGenreCountList="reviewGenreCountList"
        :movieGenreList="movieGenreList"
      />
    </div>
    <CompletedChallenge v-if="challengeList" :challengeList="challengeList" />
    <HistoryQuestion />
  </div>
</template>

<script>
import ProfileChartList from "@/components/ProfileChartList";
import ProfileAPI from "@/api/profile";
import CompletedChallenge from "@/components/CompletedChallenge";
import HistoryQuestion from "@/components/HistoryQuestion";

export default {
  name: "profileHistoryView",
  components: {
    ProfileChartList,
    CompletedChallenge,
    HistoryQuestion,
  },
  data() {
    return {
      endDate: null,
      targetUserId: null,
      reviewDateCountList: [],
      reviewGenreCountList: [],
      movieGenreList: [
        "음악",
        "역사",
        "코미디",
        "모험",
        "판타지",
        "가족",
        "공포",
        "서부",
        "전쟁",
        "TV 영화",
        "애니메이션",
        "로맨스",
        "액션",
        "드라마",
        "범죄",
        "스릴러",
        "SF",
        "미스터리",
      ],
      challengeList: [],
      genreList: [],
      reviewCountList: [],
    };
  },
  methods: {
    setUserId() {
      this.targetUserId = this.$route.params.userId;
    },
    async getUserHistory() {
      try {
        const response = await ProfileAPI.getHistory(this.targetUserId);
        this.reviewDateCountList = response.data.reviewDateCountList;
        this.reviewGenreCountList = response.data.reviewGenreCountList;
        // this.challengeList = response.data.Challenges;
        this.setReviewList();
      } catch (err) {
        console.log(err);
      }
    },
    setReviewList() {
      const genres = [];
      const reviews = [];
      for (const count of this.reviewGenreCountList) {
        reviews.push(count.count);
        genres.push(count.genre);
      }
      this.genreList = genres;
      this.reviewCountList = reviews;
    },
  },
  computed: {},
  created() {
    this.setUserId();
    this.getUserHistory();
  },
};
</script>

<style></style>
