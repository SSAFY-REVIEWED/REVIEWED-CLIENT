<template>
  <div>
    <div class="tip">→ Resize the browser window ←</div>
    <swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="10"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }"
    >
      <swiper-slide class="slide">Slide 1</swiper-slide>
      <swiper-slide class="slide">Slide 2</swiper-slide>
      <swiper-slide class="slide">Slide 3</swiper-slide>
      <swiper-slide class="slide">Slide 4</swiper-slide>
      <swiper-slide class="slide">Slide 5</swiper-slide>
      <swiper-slide class="slide">Slide 6</swiper-slide>
      <swiper-slide class="slide">Slide 7</swiper-slide>
      <swiper-slide class="slide">Slide 8</swiper-slide>
      <swiper-slide class="slide">Slide 9</swiper-slide>
      <swiper-slide class="slide">Slide 10</swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
Vue.use(VueAwesomeSwiper);

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "ListItem",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    slideChangeTransitionStart() {
      console.log(this.swiper.activeIndex); //현재 index값 얻기
    },
  },
  data() {
    return {
      swiperOptions: {
        //loop: true,
        // autoplay:{
        //   delay:1000
        // },
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  //참조하고 있는 값이 변경될 때마다 정의된 계산식에 따라 값을 출력
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  //el이 새로 생성된 vm.$el로 인스턴스가 마운트 된 직후
  mounted() {
    //console.log('Current Swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
}
</style>
