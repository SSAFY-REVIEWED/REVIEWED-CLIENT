<template>
  <div class="w-full h-fit max-w-container mx-auto pt-0 px-9">
    <ProfileChartList
      :reviewDateCountList="reviewDateCountList"
      :reviewGenreCountList="reviewGenreCountList"
      :movieGenreList="movieGenreList"
    />
    <CompletedChallenge :challengeList="challengeList" />
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
    HistoryQuestion
  },
  data() {
    return {
      endDate: null,
      userId: null,
      // TODO: 데이터 지우기 필수
      reviewDateCountList: [
        { date: "2021-9-24", count: 1 },
        { date: "2021-9-25", count: 2 },
        { date: "2021-9-26", count: 3 },
        { date: "2021-9-26", count: 4 },
        { date: "2021-9-27", count: 5 },
        { date: "2021-9-28", count: 6 },
        { date: "2021-9-29", count: 7 },
        { date: "2021-09-30", count: 8 },
        { date: "2021-10-01", count: 9 },
        { date: "2021-10-02", count: 10 },
        { date: "2021-10-03", count: 11 },
        { date: "2021-10-04", count: 12 },
        { date: "2021-10-05", count: 13 },
        { date: "2021-10-06", count: 8 },
        { date: "2022-05-24", count: 100 },
        { date: "2022-05-25", count: 40 },
      ],
      reviewGenreCountList: [
        { 음악: 10 },
        { 역사: 20 },
        { 코미디: 4 },
        { 모험: 1 },
        { 판타지: 12 },
        { 가족: 0 },
        { 공포: 0 },
        { 서부: 1 },
        { 전쟁: 2 },
        { "TV 영화": 0 },
        { 애니메이션: 0 },
        { 로맨스: 0 },
        { 액션: 22 },
        { 드라마: 9 },
        { 범죄: 23 },
        { 스릴러: 0 },
        { SF: 1 },
        { 미스터리: 12 },
      ],
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
      challengeList: [
        "#골든 글러브 2022 당선작 10선",
        "#바보 영화 완독",
        "#마블 모조리 씹어먹어쌈",
        "#마블 모조리 씹어먹어쌈",
        "#마블 모조리 씹어먹어쌈",
        "#마블 모조리 씹어먹어쌈",
        "#마블 모조리 씹어먹어쌈",
        "#마블 모조리 씹어먹어쌈",
        "#마블 모조리 씹어먹어쌈",
        "#마블 모조리 씹어먹어쌈",
      ],
    };
  },
  methods: {
    setUserId() {
      this.userId = this.$route.params.userId;
    },
    async getUserHistory() {
      try {
        const response = await ProfileAPI.getHistory();
        this.reviewDateCountList = response.data.reviewDateCountList;
        this.reviewGenreCountList = response.data.reviewGenreCountList;
        this.challengeList = response.data.challengeList;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {},
  created() {
    this.setUserId();
  },
};
</script>

<style></style>
