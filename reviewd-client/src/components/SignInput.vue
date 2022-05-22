<template>
  <div
    class="mt-10 bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
    :class="{ 'outline outline-2 outline-primary-blue': '' }"
  >
    <label :for="type"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-8 text-primary-gray"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="type === 'email'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-8 text-primary-gray"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        v-if="type === 'password'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        /></svg
    ></label>
    <input
      :type="type"
      :id="type"
      :name="type"
      class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText bg-white"
      placeholder=" "
      @input="setSignValueDebounce"
      required
    />
    <span class="floating-label text-primary-gray" v-if="type === 'email'"
      >이메일을 입력해주세요.</span
    >
    <span class="floating-label text-primary-gray" v-if="type === 'password'"
      >비밀번호를 입력해주세요.</span
    >
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "signInput",
  props: {
    type: {
      type: String,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    setSignValue(e) {
      const { value } = e.target;
      this.$emit("set-sign-value", { value, type: this.type });
    },
    setSignValueDebounce: _.debounce(function (e) {
      this.setSignValue(e);
    }, 100),
  },
};
</script>

<style lang="scss" scoped></style>
