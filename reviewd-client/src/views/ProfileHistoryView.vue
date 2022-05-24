<template>
  <div class="w-full h-96">
    <calendar-heatmap
      :values="value"
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
  </div>
</template>

<script>
import "vue-calendar-heatmap/dist/vue-calendar-heatmap.css";
import { CalendarHeatmap } from "vue-calendar-heatmap";
import Vue from "vue";
Vue.component("calendarHeatmap", CalendarHeatmap);

export default {
  name: "profileHistoryView",
  components: {
    CalendarHeatmap,
  },
  data() {
    return {
      endDate: null,
      value: [
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
