<template>
  <section class="min-h-screen mx-auto">
    <article
      class="min-h-screen flex flex-col justify-center items-center"
      v-if="isLoading"
    >
      <p class="text-h1 font-bold">
        {{ name }}JAEHO 님의 취향을 분석하고 있습니다.
      </p>
      <div
        class="mt-14 w-20 h-20 border-8 border-t-transparent animate-spin rounded-full"
      ></div>
    </article>
    <section
      class="min-h-screen flex flex-col justify-center items-center"
      v-if="!isLoading"
    >
      <article class="flex flex-col items-center">
        <div
          class="items-center bg-gradient-to-r from-primary-red to-second-red bg-clip-text transparent text-transparent font-bold text-h1 tracking-tighter"
        >
          REVIEWD
        </div>
        <div
          class="mt-10 flex flex-wrap text-center leading-normal text-h3 md:text-h2 font-bold"
        >
          선호하는 컨텐츠의 장르를 선택해주세요.
        </div>
      </article>
      <article
        class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-4/6 gap-y-8 gap-x-10 place-items-center mt-10 relative grid-container"
      >
        <button
          class="bg-fourth-blue w-28 md:w-32 h-14 text-white text-h5 rounded-lg font-bold shadow-3xl active:top-1 relative transition-all duration-200 ease-in item"
          v-for="genre in movieCategory"
          :key="genre"
          :value="genre"
          @click="onClick"
        >
          {{ genre }}
        </button>
      </article>
      <div class="tooltip relative">
        <button
          class="md:w-96 w-56 bg-gradient-to-r from-primary-blue via-second-blue to-third-blue h-20 mt-10 rounded-lg text-h3 text-white font-bold transition-all duration-200"
          :class="{
            'opacity-100': preferenceGenreList.length,
            'opacity-50': !preferenceGenreList.length,
          }"
          :disabled="!preferenceGenreList.length"
          @click="onSubmitSurvey"
        >
          분석하기
        </button>
        <span
          role="tooltip"
          class="tooltiptext absolute left-0 right-0 mx-auto -top-4 bg-light-black text-white w-fit p-2 h-fit rounded-md font-bold"
          v-show="!preferenceGenreList.length"
          >하나 이상의 장르를 선택해 주세요.</span
        >
      </div>
    </section>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import { postData } from "@/api/index";
import VueCookies from "vue-cookies";

export default {
  name: "surveyView",
  data() {
    return {
      movieCategory: [
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
      preferenceGenreList: [],
      isLoading: false,
      name: VueCookies.get("name"),
    };
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),
    onClick(e) {
      e.target.classList.toggle("bg-primary-blue");
      e.target.classList.toggle("bg-fourth-blue");
      const idx = this.preferenceGenreList.indexOf(e.target.value);
      if (idx > -1) {
        this.preferenceGenreList.splice(idx, 1);
        return;
      }
      this.preferenceGenreList.push(e.target.value);
    },
    setLoading() {
      this.isLoading = !this.isLoading;
    },
    async onSubmitSurvey() {
      try {
        this.setLoading();
        const response = await postData("SURVEY", this.preferenceGenreList);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style lang="scss" scoped>
.item {
  &:nth-last-child(2):nth-child(4n + 1) {
    grid-column-end: 3;
  }
  @media (max-width: 1024px) {
    &:nth-last-child(2):nth-child(4n + 1) {
      grid-column-end: -2;
    }
  }
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
</style>
