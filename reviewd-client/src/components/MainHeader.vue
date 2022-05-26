<template>
  <div class="w-full relative mb-6">
    <h2 class="text-h4 text-light-black">{{ movieList.name }}</h2>
    <div class="relative mt-6">
      <swiper class="swiper px-16 bg-white shadow-none" :options="swiperOption">
        <swiper-slide
          v-for="movie in movieList.movieList"
          :key="movie.title"
          class="py-1"
          ><MainPosterCard :movie="movie"
        /></swiper-slide>
      </swiper>
      <div
        class="swiper-button-prev bg-white shadow-3xl rounded-full h-9 w-9 after:text-xs p-0 -left-4 swiper-button absolute top-1/2 header__button--prev"
        slot="button-prev"
      >
        <div
          class="border-t-2 w-3 h-3 border-l-2 -rotate-45 transition-all duration-200 swiper-button__div"
        ></div>
      </div>
      <div
        class="swiper-button-next bg-white shadow-3xl rounded-full h-9 w-9 after:text-xs p-0 -right-4 swiper-button absolute top-1/2 header__button--next"
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
import MainPosterCard from "@/components/MainPosterCard";
import MovieAPI from "@/api/movie";
import "swiper/css/swiper.css";
import { mapGetters } from "vuex";

export default {
  name: "ListItem",
  components: {
    Swiper,
    SwiperSlide,
    MainPosterCard,
  },
  props: {
    movieList: {
      type: Object,
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
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        },
        navigation: {
          nextEl: ".header__button--next",
          prevEl: ".header__button--prev",
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
      },
    };
  },
  methods: {
    slideChangeTransitionStart() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    },
    async getMovieList() {
      try {
        const response = await MovieAPI.getMainMovieList();
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },

  computed: {
    ...mapGetters(["profile"]),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  mounted() {
    console.log(this.movieList);
  },
};
</script>

<style lang="scss">
.swiper-button:hover .swiper-button__div {
  border-color: #000000;
}
</style>
