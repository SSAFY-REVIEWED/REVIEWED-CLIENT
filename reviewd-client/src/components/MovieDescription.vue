<template>
  <div class="relative w-full my-5">
    <h1 class="text-h4 font-semibold py-3">기본 정보</h1>
    <hr />
    <div class="w-full mx-auto">
      <ul>
        <dl class="flex border-b-[1px] border-slate-200 py-3">
          <dt class="w-32">원제</dt>
          <dd>{{ movieData.title }}</dd>
        </dl>
        <dl class="flex border-b-[1px] border-slate-200 py-3">
          <dt class="w-32">제작 연도</dt>
          <dd>{{ movieData.releaseDate }}</dd>
        </dl>
        <dl class="flex border-b-[1px] border-slate-200 py-3">
          <dt class="w-32">장르</dt>
          <dd v-for="genre in movieData.genres" :key="genre.name">
            {{ genre.name }}
          </dd>
        </dl>
        <dl class="flex border-b-[1px] border-slate-200 py-3">
          <dt class="w-32">상영 시간</dt>
          <dd>{{ movieData.screenTime }} 분</dd>
        </dl>
        <dl class="border-b-[1px] border-slate-200 py-3">
          <dt class="py-3">내용</dt>
          <dd>{{ movieData.overview }}</dd>
        </dl>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "movieDescription",
  computed: {
    ...mapGetters(["movieData"]),
  },
};
</script>

<style></style>
