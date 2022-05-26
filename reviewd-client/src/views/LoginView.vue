<template>
  <div class="h-screen max-w-650 mx-auto">
    <div
      class="h-full flex flex-col items-center justify-center max-w-480 mx-auto relative"
    >
      <h1
        class="mt-10 flex flex-wrap text-center leading-normal text-h3 bg-gradient-to-r from-primary-blue via-second-blue to-third-blue bg-clip-text transparent text-transparent font-bold"
      >
        새로운 리뷰의 시작
      </h1>
      <h1
        class="items-center bg-gradient-to-r from-primary-red to-second-red bg-clip-text transparent text-transparent font-bold text-h2 tracking-tighter"
      >
        REVIEWD
      </h1>
      <div class="text-h5 ml-auto">
        <router-link :to="{ name: 'signup' }">
          <button
            class="bg-primary-blue mt-3 px-6 py-3 rounded-xl text-white font-bold opacity-80 hover:opacity-100 transition-all duration-300"
          >
            회원가입 이동
          </button>
        </router-link>
      </div>
      <form class="w-full" @submit.prevent="login">
        <SignInput
          :type="emailComponent"
          :value="email"
          @set-sign-value="setSignValue"
        />
        <SignInput
          :type="passwordComponent"
          :value="password"
          @set-sign-value="setSignValue"
        />
        <SignButton :progress="isCompleted" :state="state" />
        <GoogleLogin />
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import SignInput from "@/components/SignInput.vue";
import SignButton from "@/components/SignButton.vue";
import GoogleLogin from "@/components/GoogleLogin.vue";
import { postData } from "@/api/index";
import VueCookies from "vue-cookies";

export default {
  name: "loginView",
  components: {
    SignInput,
    SignButton,
    GoogleLogin,
  },
  data() {
    return {
      emailComponent: "email",
      passwordComponent: "password",
      email: "",
      password: "",
      isCompleted: false,
      state: "login",
    };
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),
    ...mapActions(["getUser"]),
    setSignValue({ value, type }) {
      if (type === "email") {
        this.email = value;
      } else this.password = value;
      this.setCompleted(!!(this.email && this.password));
    },
    setCompleted(bool) {
      this.isCompleted = bool;
    },
    async login() {
      if (!this.isCompleted) return;
      const body = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await postData("LOGIN", body);
        this.setToken(response.data);
        try {
          await this.getUser();
          this.$toast.success(
            `리뷰쓰기 좋은 날 이에요 ${this.profile.name}님😀`
          );
          this.$router.push({ name: "main" });
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        const { message } = err.response.data;
        this.$toast.error(message);
        this.setCompleted(false);
      }
    },
    setToken(token) {
      VueCookies.set("accessToken", token.access, "2h");
      VueCookies.set("refreshToken", token.refresh, "7d");
    },
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
