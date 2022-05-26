<template>
  <div>
    <button
      class="w-[115px] h-[38px] bg-gradient-to-r from-primary-red to-second-red rounded-lg font-bold text-white"
      v-if="false"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
          /></svg
        >팔로우
      </div>
    </button>
    <button
      class="w-[115px] h-[38px] bg-gradient-to-r from-slate-400 to-slate-300 rounded-lg font-bold text-white"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"
          />
        </svg>
        언팔로우
      </div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
