<template>
  <div>
    <div class="w-full bg-slate-200">
      <ProfileHeader :userId="userId" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader";

export default {
  name: "profileView",
  components: {
    ProfileHeader,
  },
  data() {
    return {
      userId: null,
    };
  },
  methods: {
    getParams() {
      const params = this.$route.params.userId;
      this.userId = +params;
    },
  },
  created() {
    this.getParams();
  },
};
</script>

<style></style>
