<template>
  <div class="relative">
    <transition-group name="modal" class="modal">
      <div class="overlay" key="modal"></div>
      <div class="modal-card rounded-xl" key="2">
        <div class="relative w-full h-full overflow-hidden">
          <button
            class="absolute right-0 w-7 h-7 m-3 bg-slate-100 rounded-full z-10"
            @click="$emit('close-modal')"
          >
            <div
              class="right-0 mx-auto w-5 h-0.5 bg-light-black rotate-45 before:content-[''] before:absolute before:w-5 before:h-0.5 rounded-lg before:rounded-lg before:bg-light-black before:rotate-90 before:-translate-x-2.5"
            ></div>
          </button>
          <div class="border-b-2 h-12 flex justify-center items-center">
            <h1 class="text-h5 font-normal">{{ state }}</h1>
          </div>
          <div class="overflow-auto h-full w-full">
            <div
              v-for="(user, index) in followList"
              :key="user.userId"
              class="flex items-center justify-between px-8 py-2 w-full"
            >
              <div class="flex items-center w-full">
                <router-link
                  :to="{ name: 'history', params: { userId: user.userId } }"
                  class="flex items-center w-full"
                >
                  <div class="w-11 h-11 rounded-full overflow-hidden mr-2">
                    <img
                      :src="user.profileImg"
                      :alt="`$user.name} 프로필 이미지`"
                      width="50"
                      height="50"
                      class="w-full h-full"
                    />
                  </div>
                  <div>
                    <p>{{ user.name }}</p>
                  </div>
                </router-link>
              </div>
              <div
                v-if="userId === targetId && state === '팔로워'"
                class="w-20"
              >
                <button
                  class="border-[2px] border-gray-200 rounded-md px-2 py-1 w-full"
                  @click="deleteFollower(user.userId, index)"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "modalFollow",
  props: {
    followList: {
      type: Array,
    },
    userId: {
      type: Number,
    },
    targetId: {
      type: Number,
    },
    state: {
      type: String,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    deleteFollower(userId, index) {
      if (confirm("해당 유저를 삭제하시겠습니까? ")) {
        this.$emit("delete-follow", userId, index);
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.modal,
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 51;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.modal-card {
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  height: 400px;
  overflow: scroll;
  z-index: 52;
  opacity: 1;
}

.modal-enter {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease-out;
}

.modal-leaver-to {
  opacity: 0;
}
</style>
