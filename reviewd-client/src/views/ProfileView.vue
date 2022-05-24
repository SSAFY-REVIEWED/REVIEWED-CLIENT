<template>
  <div>
    <div class="w-full bg-slate-200">
      <ProfileHeader :userId="targetUserId" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader";
import { mapActions } from "vuex";
export default {
  name: "profileView",
  components: {
    ProfileHeader,
  },
  data() {
    return {
      targetUserId: null,
    };
  },
  methods: {
    ...mapActions(["getUserProfile"]),
    getParams() {
      const params = this.$route.params.userId;
      this.targetUserId = +params;
    },
  },
  computed: {},
  created() {
    this.getParams();
    this.getUserProfile(this.targetUserId);
  },
};
</script>

<style></style>
