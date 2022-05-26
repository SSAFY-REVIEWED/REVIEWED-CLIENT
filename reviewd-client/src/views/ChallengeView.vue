<template>
  <div class="max-w-container mx-auto pt-0 px-9 min-h-screen mt-20">
    <h1 class="text-h3 font-bold">CHALLENGE</h1>
    <h2 class="text-h4 mb-9">영화 리뷰에 새로운 도전을 해보세요</h2>
    <EventChallenge />
    <div class="mt-10">
    <EventChallenge2 />
    </div>
    <div class="mt-10">
    <EventChallenge2 />
    </div>
  </div>
</template>

<script>
import EventChallenge from "@/components/EventChallenge";
import EventChallenge2 from "@/components/EventChallenge2";

export default {
  name: "challengeView",
  components: {
    EventChallenge,
    EventChallenge2
    
  },
};
</script>

<style></style>
