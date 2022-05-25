<template>
  <router-link :to="{ name: 'profile', name: userId }">
    <div class="w-full relative flex">
      <div class="w-[20%]">
        <div class="w-28 h-28 rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygFETBST-aveH1EGUgLo7Pyq8U0ytDTpW3Q&usqp=CAU"
            alt=""
            width="200"
            height="200"
            class="w-full h-full"
          />
        </div>
      </div>
      <div
        class="flex justify-between w-full pl-10 border-b-2 border-primary-red"
      >
        <div class="flex flex-col justify-evenly">
          <p class="text-h5 font-semibold">원재호</p>
          <p class="text-h5 text-light-black">리뷰 100</p>
        </div>
        <div class="flex items-center">
          <button>Follow</button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style></style>
