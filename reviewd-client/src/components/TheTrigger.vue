<template>
  <span ref="trigger" />
</template>

<script>
export default {
  name: "TheTrigger",
  props: {
    hasMoreData: {
      type: Boolean,
    },
  },
  data() {
    return {
      observer: null,
    };
  },
  mounted() {
    const options = {
      root: null,
      threshold: "0",
    };
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0]);
    }, options);
    if (!this.hasMoreData) {
      this.observer.unobserve();
      return;
    }
    this.observer.observe(this.$refs.trigger);
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    handleIntersect(entry) {
      if (entry.isIntersecting) {
        return this.$emit("triggerIntersected");
      }
    },
  },
  watch: {
    hasMoreData() {
      if (!this.hasMoreData) {
        console.log(this.hasMoreData);
        this.observer.disconnect();
      }
    },
  },
};
</script>

<style></style>
