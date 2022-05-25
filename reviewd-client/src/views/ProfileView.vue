<template>
  <div>
    <div class="max-w-container mx-auto pt-0 px-9 ">
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
    getTargetUserId() {
      const params = this.$route.params.userId;
      this.targetUserId = +params;
    },
  },
  computed: {},
  created() {
    this.getTargetUserId();
  },
  async mounted() {
    await this.getUserProfile(this.targetUserId);
  },
};
</script>

<style></style>
