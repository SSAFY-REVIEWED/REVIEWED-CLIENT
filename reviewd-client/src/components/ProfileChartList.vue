<template>
  <section class="w-full relative mt-5">
    <h1 class="text-h4 font-bold">오늘도 리뷰를 작성해볼까요?</h1>
    <calendar-heatmap
      class="mt-5"
      :values="reviewDateCountList"
      :end-date="today"
      :range-color="[
        '#ebedf0',
        '#dae2ef',
        '#c0ddf9',
        '#73b3f3',
        '#3886e1',
        '#17459e',
      ]"
      :max="10"
      tooltip-unit="stars"
    />
    <article class="relative flex justify-between mt-5 sm:flex-row flex-col">
      <div class="sm:w-1/3 w-full">
        <h1 class="text-h4 font-bold">장르 분포</h1>
        <RadarChart
          :genreList="genreList"
          :reviewCountList="reviewCountList"
          :reviewGenreCountList="reviewGenreCountList"
        />
      </div>
      <div class="sm:w-1/2 w-full mt-10 sm:mt-0">
        <ul>
          <dl class="flex border-b-[1px] border-slate-200 py-3">
            <dt class="w-1/2">장르</dt>
            <dd>리뷰</dd>
          </dl>
          <dl
            class="flex border-slate-200 py-3"
            v-for="pair in reviewGenreCountList"
            :key="pair.genre"
          >
            <dt class="w-1/2">#{{ pair.genre }}</dt>
            <dd>{{ pair.count }}</dd>
          </dl>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
import "vue-calendar-heatmap/dist/vue-calendar-heatmap.css";
import { CalendarHeatmap } from "vue-calendar-heatmap";
import RadarChart from "@/components/RadarChart";

import Vue from "vue";
Vue.component("calendarHeatmap", CalendarHeatmap);

export default {
  name: "profileHistoryView",
  components: {
    CalendarHeatmap,
    RadarChart,
  },
  props: {
    reviewDateCountList: {
      type: Array,
    },
    reviewGenreCountList: {
      type: Array,
    },
    reviewCountList: {
      type: Array,
    },
    genreList: {
      type: Array,
    },
    movieGenreList: {
      type: Array,
    },
  },
  data() {
    return {
      endDate: null,
    };
  },
  computed: {
    today() {
      const day = new Date();
      const date = day.toLocaleDateString();
      return date;
    },
  },
  created() {},
};
</script>

<style></style>
