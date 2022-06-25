<template>
  <div class="w-full">
    <button
      id="buttonDiv"
      ref="buttonDiv"
      class="bg-white w-full mt-10 shadow-sign-input h-15 rounded-lg flex px-4 items-center relative text-primary-gray hover:bg-slate-50 transition-all duration-200 ease"
    >
      <!-- <img
        loading="lazy"
        src="../assets/images/google.png"
        width="25"
        height="25"
      />
      <span class="ml-4">Google 로그인</span> -->
    </button>
  </div>
</template>

<script src="https://accounts.google.com/gsi/client" async></script>
<script>
import { postData } from "@/api/index";
import VueCookies from "vue-cookies";
import { mapActions } from "vuex";

export default {
  name: "googleLogin",
  methods: {
    ...mapActions(["getUser"]),
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
    async handleCredentialResponse(response) {
      try {
        const res = await postData("GOOGLE_LOGIN", {
          credential: response.credential,
        });
        this.getUserInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    await google.accounts.id.initialize({
      client_id:
        "132131584079-0kes0ifpft82ms5mthj4g7ihar4emvo1.apps.googleusercontent.com",
      callback: this.handleCredentialResponse,
    });
    await google.accounts.id.renderButton(this.$refs.buttonDiv, {
      theme: "none",
      size: "large",
      text: "signup_with",
      width: "100%",
      height: "300px",
    });
  },
};
</script>

<style lang="scss" scoped></style>
