<template>
  <section class="max-w-container mx-auto pt-0 px-9 my-36">
    <div>
      <div>
        <ProfileHeader :userId="targetUserId" />
      </div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader";
import { mapActions, mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["userProfile"]),
  },
  watch: {},
  created() {
    this.getTargetUserId();
  },
  async mounted() {
    await this.getUserProfile(this.targetUserId);
  },
};
</script>

<style></style>
