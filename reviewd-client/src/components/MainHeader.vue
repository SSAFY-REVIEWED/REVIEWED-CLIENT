<template>
  <div class="">
    <h1 class="text-h4 font-semibold">JAEHO님을 위한 강력 추천 영화</h1>
    <swiper
      class="swiper mt-6 px-16 bg-white shadow-none"
      :options="swiperOption"
    >
      <swiper-slide v-for="num in 10" :key="num" class="py-1"
        ><MainPosterCard
      /></swiper-slide>
      <div
        class="swiper-button-prev bg-white shadow-3xl rounded-full h-9 w-9 after:text-xs p-0 left-0 swiper-button"
        slot="button-prev"
      >
        <div
          class="border-t-2 w-3 h-3 border-l-2 -rotate-45 transition-all duration-200 swiper-button__div"
        ></div>
      </div>
      <div
        class="swiper-button-next bg-white shadow-3xl rounded-full h-9 w-9 after:text-xs p-0 right-0 swiper-button"
        slot="button-next"
      >
        <div
          class="border-t-2 w-3 h-3 border-l-2 rotate-[135deg] transition-all duration-200 swiper-button__div"
        ></div>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import MainPosterCard from "@/components/MainPosterCard";
import "swiper/css/swiper.css";

export default {
  name: "ListItem",
  components: {
    Swiper,
    SwiperSlide,
    MainPosterCard,
  },
  methods: {
    slideChangeTransitionStart() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    },
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
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false,
        // },
      },
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.swiper-button:hover .swiper-button__div {
  border-color: #000000;
}
</style>
