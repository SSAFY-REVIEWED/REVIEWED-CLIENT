<template>
  <div class="h-screen max-w-650 mx-auto">
    <div
      class="h-full flex flex-col items-center justify-center max-w-480 mx-auto"
    >
      <h1>새로운 리뷰의 시작 <span> REVIEWD</span></h1>
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
        <SignButton :progress="isCompleted" />
        <GoogleLogin />
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
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
        const { message } = response.data;
        this.$toast.success(message);
        this.setToken(response.data);
        try {
          await this.getUser();
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
  created() {
    this.setLoggingIn(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
