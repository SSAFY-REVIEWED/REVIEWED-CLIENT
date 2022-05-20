<template>
  <section class="min-h-screen max-w-650 mx-auto">
    <article class="h-screen flex flex-col justify-center items-center">
      <div
        class="items-center bg-gradient-to-r from-primary-red to-second-red bg-clip-text transparent text-transparent font-bold text-h1 tracking-tighter"
      >
        REVIEWD
      </div>
      <div
        class="mt-10 flex flex-wrap text-center leading-normal text-h3 bg-gradient-to-r from-primary-blue via-second-blue to-third-blue bg-clip-text transparent text-transparent font-bold"
      >
        환상적인 리뷰의 세계로 들어가 볼까요?
      </div>
      <p class="text-p mt-5">REVIEWD를 실제로 경험해보세요.</p>
      <div class="w-3/4 mt-3">
        <form class="w-full">
          <div
            class="bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
          >
            <label for="email"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-8 text-primary-gray"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                /></svg
            ></label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText"
              required
              v-model="email"
            />
            <span class="floating-label text-primary-gray"
              >이메일을 입력해주세요.</span
            >
          </div>
          <button class="hidden">계속</button>
        </form>
      </div>
      <button
        class="bg-white w-3/4 mt-10 shadow-sign-input h-15 rounded-lg flex px-4 items-center relative text-primary-gray"
      >
        <img src="../assets/images/google.png" width="25" height="25" />
        <span class="ml-4">Google 계정으로 회원가입 하기</span>
      </button>
    </article>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "singUpView",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),
  },
  computed: {},
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style lang="scss" scoped>
input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label {
  top: 6px;
  bottom: 10px;
  left: 60px;
  font-size: 10px;
  opacity: 1;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 60px;
  top: 20px;
  transition: 0.2s ease all;
}
</style>
