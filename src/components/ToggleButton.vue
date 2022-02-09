<template>
  <div class="toggle-background" @click="changeMode">
    <img :src="toggleImg" class="toggle-img" alt=" " />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
//import { store } from "../router/index.js";

export default {
  name: "ToggleButton",
  setup() {
    const store = useStore();
    const bgClass = document.getElementsByClassName("toggle-background");
    const toggleImgClass = document.getElementsByClassName("toggle-img"); //トグルボタン画像Class変数
    let lightImg = require("../assets/images/toggle_light_img.png");
    let darkImg = require("../assets/images/toggle_dark_img.png");

    onMounted(() => {
      setToggleImage();
      //store.commit('toggleDarkMode', localStorage.getItem('darkModeFrag'))
    });

    store.subscribe((mutation) => {
      if (mutation.type === "toggleDarkMode") {
        //ダークモード切り替わり検知、表示切替
      }
    });

    const setToggleImage = () => {
      if (store.state.isDarkMode) {
        bgClass[0].className = "toggle-background toggle-button dark-mode"
        toggleImgClass[0].className = "toggle-img dark-mode"
        toggleImgClass[0].setAttribute("src", darkImg);
      } else {
        bgClass[0].className = "toggle-background toggle-button"
        toggleImgClass[0].className = "toggle-img"
        toggleImgClass[0].setAttribute("src", lightImg);
      }
    };

    //ダークモード切り替え
    const changeMode = () => {
      if (store.state.isDarkMode) {
        //ダークモードオフ
        store.commit("toggleDarkMode", false);
        localStorage.setItem("darkModeFrag", store.state.isDarkMode);
      } else {
        //ダークモードオン
        store.commit("toggleDarkMode", true);
        localStorage.setItem("darkModeFrag", store.state.isDarkMode);
      }
      setToggleImage();
    };

    return {
      changeMode,
    };
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'
//共通スタイル関数
.toggle-background
  cursor pointer
  position: relative
  width: 90px
  height: 36px
  border-radius: 50px
  background-color: var(--light-blue)
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    background-color: var(--dark-deepblue)

.toggle-img
  position: absolute
  top: 6%
  width: elemWidthSize(64,90)
  user-select: none
  left: 62.22222222222222%
  transition: all 0.5s ease-out
  &.dark-mode
    left: 2.488888888888899%
</style>
