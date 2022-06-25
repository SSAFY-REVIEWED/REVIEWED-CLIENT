<template>
  <article class="w-full">
    <div class="w-3/4 mt-3 mx-auto">
      <form class="w-full relative" @submit.prevent="onSubmit" method="post">
        <div
          class="bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
          :class="{ 'outline outline-2 outline-primary-blue': isValidEmail }"
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
            class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText bg-white placeholder:text-transparent"
            required
            placeholder="이메일을 입력해주세요."
            @input="onValidateDebounce"
          />
          <span class="floating-label text-primary-gray"
            >이메일을 입력해주세요.</span
          >
        </div>
        <button
          class="absolute right-0 top-0 m-1 h-[52px] bg-primary-blue text-white font-bold w-55 rounded-lg"
          v-if="isValidEmail"
          @click="wasEmailValidated"
        >
          계속
        </button>
      </form>
      <GoogleLogin />
    </div>
  </article>
</template>

<script src="https://accounts.google.com/gsi/client" async></script>

<script>
import { EMAIL_VALIDATION_MESSAGE } from "@/utils/const.js";
import _ from "lodash";
import { postData } from "@/api/index";
import GoogleLogin from "@/components/GoogleLogin";

export default {
  name: "signupEmail",

  props: {
    email: {
      type: String,
    },
    isValidEmail: {
      type: Boolean,
    },
  },
  components: {
    GoogleLogin,
  },
  data() {
    return {};
  },
  methods: {
    onSubmit() {
      return;
    },
    onValidate(event) {
      const keyword = event.target.value;
      this.validateEmail(keyword);
    },
    onValidateDebounce: _.debounce(function (e) {
      this.onValidate(e);
    }, 500),
    validateEmail(email) {
      if (!email) {
        this.$toast.error(EMAIL_VALIDATION_MESSAGE["EMPTY_WARNING"]);
        return;
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(email)) {
        this.$toast.error(EMAIL_VALIDATION_MESSAGE["INVALID_EMAIL"]);
        this.$emit("check_valid_email", false);
        return;
      }
      this.fetchReduplicatedEmailCheck(email);
    },
    async fetchReduplicatedEmailCheck(email) {
      try {
        const response = await postData("EMAIL_CHECK", { email });
        const { message } = response.data;
        this.checkValidEmailAndAlert(true, message);
        this.setEmail(email);
      } catch (err) {
        const { message } = err.response.data;
        this.checkValidEmailAndAlert(false, message);
      }
    },
    checkValidEmailAndAlert(valid, message) {
      this.$emit("check_valid_email", valid);
      if (valid) {
        this.$toast.success(message);
        return;
      }
      this.$toast.error(message);
    },
    setEmail(email) {
      this.$emit("set_email", email);
    },
    wasEmailValidated() {
      this.$emit("was_email_validated");
    },
  },
};
</script>

<style lang="scss" scoped></style>
