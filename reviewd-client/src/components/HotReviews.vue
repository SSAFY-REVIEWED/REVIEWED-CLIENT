<template>
  <div class="w-full relative">
    <h1 class="text-h4 font-semibold">지금 HOT한 영화 리뷰</h1>
    <div class="mt-6 relative">
      <swiper class="swiper bg-white shadow-none px-1" :options="swiperOption">
        <swiper-slide v-for="num in 10" :key="num" class="py-1"
          ><PosterReviewCard
        /></swiper-slide>
      </swiper>
      <div
        class="swiper-button-prev bg-white shadow-3xl rounded-full h-9 w-9 after:text-xs p-0 -left-4 swiper-button swiper__button--prev absolute top-1/2"
        slot="button-prev"
      >
        <div
          class="border-t-2 w-3 h-3 border-l-2 -rotate-45 transition-all duration-200 swiper-button__div"
        ></div>
      </div>
      <div
        class="swiper-button-next bg-white shadow-3xl rounded-full h-9 w-9 after:text-xs p-0 -right-4 swiper-button swiper__button--next absolute top-1/2"
        slot="button-next"
      >
        <div
          class="border-t-2 w-3 h-3 border-l-2 rotate-[135deg] transition-all duration-200 swiper-button__div"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import PosterReviewCard from "@/components/PosterReviewCard";
import "swiper/css/swiper.css";
import { getData } from "@/api/index.js";

export default {
  name: "ListItem",
  components: {
    Swiper,
    SwiperSlide,
    PosterReviewCard,
  },

  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
          1028: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
        navigation: {
          nextEl: ".swiper__button--next",
          prevEl: ".swiper__button--prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
      moviesList: [],
      page: 1,
      hasMoreMovieList: true,
    };
  },
  methods: {
    async getMovieList() {
      try {
        const response = await getData("MAIN_MOVIES", this.page);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    setHasMoreMovieList() {
      this.hasMoreMovieList = false;
    },
    increasePage() {
      this.page++;
    },
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.getMovieList();
  },
};
</script>

<style></style>
