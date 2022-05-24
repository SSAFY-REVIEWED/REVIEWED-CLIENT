<template>
  <section class="w-full relative min-h-[50vh]">
    <div class="flex flex-col items-center justify-center">
      <form @submit.prevent="onSubmitFormData">
        <div>
          <div class="w-44 h-44 overflow-hidden rounded-full shadow-3xl">
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
        </div>
        <label for="text"></label>
        <input type="text" :value="inputData.bio" class="bg-blue-400" />
        <br />
        <input type="text" class="bg-blue-400" :value="inputData.name" />
        <button type="submit">제출하기</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileAPI from "@/api/profile";
export default {
  name: "profileSettingsView",
  data() {
    return {
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
      console.log(image);
      if (image.size > 2097152) {
        this.$toast.error("2mb 이하의 크기의 사진을 넣어주세요.");
        return;
      }
      this.$refs.imageLoader.src = window.URL.createObjectURL(image);
      this.$refs.imageLoader.onload = () => {
        window.URL.revokeObjectURL(this.src);
      };
      this.inputData.profileImg = this.$refs.image.files[0];
    },
    setInputData() {
      this.inputData.bio = this.userProfile.bio;
      this.inputData.name = this.userProfile.name;
    },
    async onSubmitFormData() {
      const formData = new FormData();
      formData.append("bio", this.inputData.bio);
      formData.append("name", this.inputData.name);
      formData.append("profileImg", this.inputData.profileImg);
      console.log(formData);
      const response = await ProfileAPI.updateProfile(
        this.targetUserId,
        formData
      );
      console.log(response);
    },
    setTargetUserId() {
      this.targetUserId = this.$route.params.userId;
      console.log(this.targetUserId);
    },
  },
  computed: {
    ...mapGetters(["userProfile"]),
  },
  created() {
    this.setTargetUserId();
    this.setInputData();
  },
};
</script>

<style></style>
