<template>
  <a
    v-if="isInternalLink(termsPath)"
    class="list-term-btn display-option"
    :href="termsPath"
    target="_blank"
  >
    <h1 class="list-term-txt">利用規約・著作権について</h1>
    <img
      src="../assets/images/list_term_arrow_img.png"
      class="list-term-arrow-img"
      alt=" "
    />
  </a>

  <a
    v-else
    class="list-term-btn display-option"
    @click="transitionPage(termsPath)"
  >
    <h1 class="list-term-txt">利用規約・著作権について</h1>
    <img
      src="../assets/images/list_term_arrow_img.png"
      class="list-term-arrow-img"
      alt=" "
    />
  </a>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import pageTransition from "@/composables/pageTransition";
import { isInternalLink } from "@/assets/scripts/utils/url";

export default {
  name: "ListTermButton",
  props: {
    termsPath: String,
  },
  setup() {
    const store = useStore();
    const { transitionPage } = pageTransition();
    const bgClass = document.getElementsByClassName("list-term-btn"); //バックグラウンドClass変数
    const imgClass = document.getElementsByClassName("list-term-arrow-img");
    let lightImg = require("../assets/images/list_term_arrow_img.png")
    let darkImg = require("../assets/images/list_term_arrow_dark_img.png")

    onMounted(() => {
      changeImg();
      changeColor();
    });
    
    store.subscribe((mutation) => {
      if (mutation.type === 'toggleDarkMode') {
        //ダークモード切り替わり検知、表示切替
        changeImg();
        changeColor();
      }
    })
    //ダークモード画像切り替え
    const changeImg = () => {
      if (store.state.isDarkMode == true) {
        //ダークモードオフ
        for (let i = 0; i < imgClass.length; i++) {
          imgClass[0].setAttribute('src', darkImg);
        }
      } else if (store.state.isDarkMode == false) {
        //ダークモードオン
        for (let i = 0; i < imgClass.length; i++) {
          imgClass[0].setAttribute('src', lightImg);
        }
      }
    }
    //ダークモードStyle切り替え
    const changeColor = () =>{
      for (let i = 0; i < bgClass.length; i++) {
        if (store.state.isDarkMode) {
          bgClass[0].className = "list-term-btn display-option shadow dark-mode";
        } else {
          bgClass[0].className = "list-term-btn display-option";
        }
      }
    }
    return {
      transitionPage,
      isInternalLink,
    };
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'

a
  text-decoration: none
  cursor pointer

.list-term-btn
  width: 40vw
  height: auto
  color: black
  background-color: var(--light-yellow)
  display: flex
  border-radius: 21px
  font-size: 10px
  filter:drop-shadow(0px 3px 10px rgba(0, 149, 220, 0.5))
  text-align: center
  align-items:center
  justify-content: center
  margin-left:50%
  transform: translateX(-50%)
  margin-top: 80px
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    color: var(--dark-white)
    background-color: var(--dark-blue)
  
.shadow
  filter:drop-shadow(0px 3px 10px rgba(0, 149, 220, 0))

.list-term-arrow-img
  width: elemWidthSize(50,420)
  height: 100%
  margin-left: 0%
.list-term-txt
  width: 90%
  padding-left: 7%
  padding-top: 4%
  padding-bottom: 4%
</style>
