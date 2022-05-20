<template>
<header class="max-w-screen h-15 bg-white fixed mx-auto right-0 left-0">
  <nav class="max-w-container mx-auto h-15 px-9 flex">
    <div>
      <router-link :to="{ name: 'home' }">
        <div
          class="items-center bg-gradient-to-r from-primary-red to-second-red bg-clip-text transparent text-transparent font-bold text-logo tracking-tighter"
        >
          REVIEWD
        </div>
      </router-link>
    </div>
    <ul class="flex items-center w-full py-2.5" v-if="true">
      <li class="ml-10 self-end text-h4 font-semibold">
        <router-link :to="{ name: 'home' }">MOVIE</router-link>
      </li>
      <li class="ml-10 self-end text-h4 font-semibold">
        <router-link :to="{ name: 'home' }">CHALLENGE</router-link>
      </li>
      <li class="ml-10 self-end text-h4 font-semibold">
        <router-link :to="{ name: 'home' }">RANK</router-link>
      </li>

      <li class="ml-auto">
        <form
          class="border-solid w-96 h-12 rounded-2xl shadow-inner-input flex items-center px-3"
        >
          <label for="search-input"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-slate-400 font-bold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>
          <input
            type="text"
            id="search-input"
            name="search-input "
            class="w-full p-0 ml-3 overflow-hidden text-ellipsis tracking-tight text-p font-normal h-8 focus:outline-none"
            placeholder="콘텐츠, 유저를 검색해 보세요."
          />
        </form>
      </li>
      <li class="ml-6 pt-1">
        <input class="toggle" type="checkbox" aria-label="dark-light-toggle" />
      </li>
      <li class="ml-6">
        <div class="h-11 w-11 bg-slate-500 rounded-full"></div>
      </li>
    </ul>
    <ul class="flex overflow-hidden items-center ml-auto" v-if="false">
      <li>
        <router-link :to="{ name: '#' }">
          <button
            class="bg-signup-green text-white w-fit p-3 h-11 text-h4 rounded-md font-bold"
          >
            회원가입
          </button>
        </router-link>
      </li>
      <li class="ml-6">
        <router-link :to="{ name: '#' }">
          <button
            class="bg-login-green text-white w-fit p-3 h-11 text-h4 rounded-md font-bold"
          >
            로그인
          </button>
        </router-link>
      </li>
    </ul>
  </nav>
  </header>
</template>

<script>
export default {
  name: "theNavigation",
  data() {
    return {
      isProfileMenuOn: false,
    };
  },
  methods: {
    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.isProfileMenuOn = !this.isProfileMenuOn;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background: #303030;
  outline: none;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &:checked {
    background: #fff;
  }
  &[type="checkbox"]:before {
    content: "\00A0 \2600";
    font-size: 20px;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transform: scale(1.1);
    transition: 750ms ease all;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  &:checked[type="checkbox"]:before {
    content: "\00A0 \00A0 \2768";
    color: white;
    background: #303030;
    left: 52px;
  }
}
</style>
