<template>
  <div class="w-full animate-fadeIn transition-all duration-200 ease">
    <div class="w-3/4 mt-3 mx-auto">
      <form class="w-full relative" @submit.prevent="onSubmit">
        <div
          class="bg-disabled w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
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
            :value="email"
            disabled
          />
          <span class="absolute top-2 left-60px text-small text-primary-gray"
            >이메일 주소</span
          >
        </div>
        <div
          class="mt-8 bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
          :class="{
            'border border-2 border-primary-red rounded-lg': !isValidPassword,
          }"
        >
          <label for="password"
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              /></svg
          ></label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText"
            @input="validatePassword"
            required
          />
          <span class="floating-label text-primary-gray">비밀번호</span>
          <p
            class="absolute text-sm left-0 top-16 text-primary-blue validate-info opacity-0"
            :class="{ 'text-primary-red': !isValidPassword }"
          >
            {{ passwordValidationMessage }}
          </p>
        </div>
        <div
          class="mt-8 bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
          :class="{
            'border border-2 border-primary-red rounded-lg': !isMatchedPassword,
          }"
        >
          <label for="password-check"
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
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              /></svg
          ></label>
          <input
            type="password"
            id="password-check"
            name="password-check"
            class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText"
            required
            @input="validatePasswordCheck"
          />
          <span class="floating-label text-primary-gray">비밀번호 확인</span>
          <p
            class="absolute text-sm left-0 top-16 text-primary-red validate-info opacity-0"
            :class="{ 'text-primary-red': !isValidPassword }"
          >
            {{ passwordCheckValidationMessage }}
          </p>
        </div>
        <div
          class="mt-8 bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
        >
          <label for="username"
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              /></svg
          ></label>
          <input
            type="text"
            id="username"
            name="username"
            class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText"
            required
          />
          <span class="floating-label text-primary-gray">이름</span>
        </div>
        <button
          class="mt-5 h-12 w-full bg-gradient-to-r from-primary-blue via-second-blue to-third-blue font-bold text-white rounded-lg opacity-30"
          disabled
        >
          REVIEWD 시작하기
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { PASSWORD_VALIDATION_MESSAGE } from "@/utils/const.js";
export default {
  name: "signupPassword",
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      passwordValidationMessage: PASSWORD_VALIDATION_MESSAGE["PASSWORD_RULE"],
      passwordCheckValidationMessage: "",
      isValidPassword: true,
      isMatchedPassword: true,
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    validatePassword(e) {
      const regex = /(?=.*\d)(?=.*[a-z]).{8,}/;
      if (this.passwordCheck.length) {
        this.isMatchedPassword = false;
        this.passwordCheckValidationMessage =
          PASSWORD_VALIDATION_MESSAGE["NOT_MATCHED_PASSWORD"];
      }
      if (!regex.test(e.target.value) || !e.target.value) {
        this.passwordValidationMessage =
          PASSWORD_VALIDATION_MESSAGE["PASSWORD_RULE"];
        this.isValidPassword = false;
        return;
      }

      this.passwordValidationMessage = "";
      this.isValidPassword = true;
      this.password = e.target.value;
    },
    validatePasswordCheck(e) {
      if (e.target.value === this.password) {
        this.isMatchedPassword = true;
        this.passwordCheckValidationMessage = "";
        this.passwordCheck = e.target.value;
        return;
      }
      this.isMatchedPassword = false;
      this.passwordCheckValidationMessage =
        PASSWORD_VALIDATION_MESSAGE["NOT_MATCHED_PASSWORD"];
    },
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

input:focus ~ .validate-info {
  display: block;
  opacity: 1;
  transition: 1s ease all;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 60px;
  top: 20px;
  transition: 0.2s ease all;
}
</style>
