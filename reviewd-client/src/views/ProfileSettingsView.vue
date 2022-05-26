<template>
  <section class="min-h-[40vh] max-w-650 mx-auto mt-10">
    <div
      class="h-full flex flex-col items-center justify-center max-w-480 mx-auto"
    >
      <form @submit.prevent="onSubmitFormData" class="w-full">
        <div class="w-44 h-44 overflow-hidden rounded-full shadow-3xl mx-auto">
          <img
            :src="userProfile.profileImg"
            loading="lazy"
            :alt="`${userProfile.name}이미지`"
            width="250"
            height="250"
            class="hover:scale-110 transition-all duration-500 bg-slate-400 cursor-pointer object-cover"
            @click="changeProfileImg"
            ref="imageLoader"
          />
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            ref="image"
            id="image"
            name="image"
            class="hidden bg-black"
            @change="handleFiles()"
          />
        </div>

        <div
          class="mt-10 bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
        >
          <label for="한줄 소개">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
              /></svg
          ></label>
          <input
            type="text"
            id="한줄 소개"
            name="한줄 소개"
            class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText bg-white"
          />
        </div>
        <div
          class="mt-10 bg-white w-full shadow-sign-input h-15 rounded-lg flex px-4 items-center relative"
        >
          <label for="이름">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
              /></svg
          ></label>
          <input
            type="text"
            id="이름"
            name="이름"
            class="w-full px-3 h-3/4 py-0 items-baseline leading-7 focus:outline-none inputText bg-white"
          />
        </div>
        <SignButton :state="state" :progress="isCompleted" />
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";
import SignButton from "@/components/SignButton";

export default {
  name: "profileSettingsView",
  components: {
    SignButton,
  },
  data() {
    return {
      state: "edit",
      isCompleted: false,
      targetUserId: null,
      inputData: {
        profileImg: "",
        bio: "",
        name: "",
      },
    };
  },
  methods: {
    changeProfileImg() {
      this.$refs.image.click();
    },
    handleFiles() {
      const image = this.$refs.image.files[0];
      if (image.size > 2097152) {
        this.$toast.error("2mb 이하의 크기의 사진을 넣어주세요.");
        return;
      }
      this.$refs.imageLoader.src = window.URL.createObjectURL(image);
      this.$refs.imageLoader.onload = () => {
        window.URL.revokeObjectURL(this.src);
      };
      this.inputData.profileImg = image;
    },
    async setInputData() {
      this.inputData.bio = this.userProfile.bio;
      this.inputData.name = this.userProfile.name;
    },
    async onSubmitFormData() {
      const formData = new FormData();
      formData.append("bio", this.inputData.bio);
      formData.append("name", this.inputData.name);
      formData.append("profileImg", this.inputData.profileImg);
      const response = await ProfileAPI.updateProfile(
        this.targetUserId,
        formData
      );
      console.log(response);
    },
    setTargetUserId() {
      this.targetUserId = this.$route.params.userId;
    },
    setInputBio() {},
    setInputName() {},
  },
  computed: {
    ...mapGetters(["userProfile"]),
  },
  watch: {
    userProfile() {
      this.setInputData();
    },
  },
  async created() {
    this.setTargetUserId();
    await this.setInputData();
  },
};
</script>

<style></style>
