<template>
  <router-view />
</template>

<script>
import { onMounted } from "vue";
import { setVH } from "@/assets/scripts/utils/resize";

export default {
  name: "App",
  setup() {
    onMounted(() => {
      setVH();
    });
  },
};
</script>

<style lang="stylus">
@import './assets/styles/reset.css'
@import './assets/styles/font.css'
@import './assets/styles/common.styl'

body
  -webkit-text-size-adjust 100%
#app
  font-family 'ZenMaruGothic'
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  height 100vh
  height calc(var(--vh, 1vh) * 100)
ul
  list-style none
</style>
