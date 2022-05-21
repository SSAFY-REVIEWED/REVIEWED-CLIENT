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
    </article>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import _ from "lodash";
import { EMAIL_VALIDATE_MESSAGE } from "../utils/const";
import SignupEmail from "@/components/SignupEmail.vue";
import SignupPassword from "@/components/SignupPassword.vue";

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
    onSearch(event) {
      const keyword = event.target.value;
      this.validateEmail(keyword);
    },
    onSearchDebounce: _.debounce(function (e) {
      this.onSearch(e);
    }, 500),
    validateEmail(value) {
      if (!value) {
        return EMAIL_VALIDATE_MESSAGE["EMPTY_WARNING"];
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return EMAIL_VALIDATE_MESSAGE["INVALID_EMAIL"];
      }
      console.log(EMAIL_VALIDATE_MESSAGE["SUCCESS"]);
      return true;
    },
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
    onSubmit() {
      console.log(this.email, this.password, this.name);
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
