<template>
  <section class="min-h-screen max-w-650 mx-auto">
    <section class="h-screen flex flex-col justify-center items-center">
      <article class="flex flex-col items-center">
        <div
          class="items-center bg-gradient-to-r from-primary-red to-second-red bg-clip-text transparent text-transparent font-bold text-h1 tracking-tighter"
        >
          REVIEWD
        </div>
        <h1
          class="mt-10 flex flex-wrap text-center leading-normal text-h3 bg-gradient-to-r from-primary-blue via-second-blue to-third-blue bg-clip-text transparent text-transparent font-bold"
        >
          환상적인 리뷰의 세계로 들어가 볼까요?
        </h1>
        <div class="flex items-center text-p my-5">
          <p class="mr-5 font-semibold">REVIEWD를 실제로 경험해보세요.</p>
          <router-link :to="{ name: 'login' }">
            <button
              class="bg-primary-blue px-10 py-3 rounded-xl text-white font-bold opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <p>로그인 하기</p>
            </button>
          </router-link>
        </div>
      </article>
      <SignupEmail
        @check_valid_email="checkValidEmail"
        @set_email="setEmail"
        @was_email_validated="checkCheckingEmail"
        v-if="isCheckingEmail"
        :email="email"
        :isValidEmail="isValidEmail"
      />
      <SignupPassword
        v-if="!isCheckingEmail"
        :email="email"
        :password="password"
        :passwordCheck="passwordCheck"
        :name="name"
        @set_password="setPassword"
        @set_password_check="setPasswordCheck"
        @set_name="setName"
        @on_submit="onSubmit"
      />
    </section>
  </section>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import VueCookies from "vue-cookies";
import SignupEmail from "@/components/SignupEmail.vue";
import SignupPassword from "@/components/SignupPassword.vue";
import { postData } from "@/api/index";

export default {
  name: "singUpView",
  components: {
    SignupEmail,
    SignupPassword,
  },
  data() {
    return {
      email: "",
      password: "",
      passwordCheck: "",
      name: "",
      isValidEmail: false,
      isCheckingEmail: true,
    };
  },
  methods: {
    ...mapMutations(["setLoggingIn"]),
    ...mapActions(["getUser"]),

    setEmail(email) {
      this.email = email;
    },
    checkValidEmail(valid) {
      this.isValidEmail = valid;
    },
    checkCheckingEmail() {
      if (this.isValidEmail) {
        this.isCheckingEmail = false;
      }
    },
    setPassword(password) {
      this.password = password;
    },
    setPasswordCheck(passwordCheck) {
      this.passwordCheck = passwordCheck;
    },
    setName(name) {
      this.name = name;
    },
    setToken(data) {
      VueCookies.set("accessToken", data.access, "2h");
      VueCookies.set("refreshToken", data.refresh, "7d");
    },
    async getUserInfo(data) {
      this.setToken(data);
      try {
        await this.getUser();
      } catch (err) {
        console.log(err);
      }
    },
    async signUp(url, body) {
      try {
        const response = await postData(url, body);
        await this.getUserInfo(response.data);
      } catch (err) {
        console.log(err);
      }
    },

    async onSubmit() {
      const body = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      try {
        await this.signUp("SIGNUP", body);
      } catch (err) {
        console.log(err);
      }
    },
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
