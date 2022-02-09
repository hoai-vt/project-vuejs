<template>
  <a
    v-if="isInternalLink(terms)"
    class="each-term-btn"
    :href="terms"
    target="_blank"
  >
    <h1 class="each-term-txt">利用規約・著作権について</h1>
    <img
      src="../assets/images/each_term_arrow_img.png"
      class="each-term-arrow-img"
    />
  </a>
  <a v-else class="each-term-btn" @click="transitionPage(terms)">
    <h1 class="each-term-txt">利用規約・著作権について</h1>
    <img
      src="../assets/images/each_term_arrow_img.png"
      class="each-term-arrow-img"
    />
  </a>
</template>

<script>
import { terms } from "@/assets/json/path.json";
import pageTransition from "@/composables/pageTransition";
import { isInternalLink } from "@/assets/scripts/utils/url";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "EachHeaderTermButton",
  setup() {
    const store = useStore();
    const { transitionPage } = pageTransition();
    const bgClass = document.getElementsByClassName("each-term-btn"); //バックグラウンドClass変数
    const imgClass = document.getElementsByClassName("each-term-arrow-img");
    let lightImg = require("../assets/images/each_term_arrow_img.png")
    let darkImg = require("../assets/images/each_term_arrow_dark_img.png")

    onMounted(() => {
      changeImg();
    });
    
    store.subscribe((mutation) => {
      if (mutation.type === 'toggleDarkMode') {
        //ダークモード切り替わり検知、表示切替
        changeImg();
      }
    })
    //ダークモード画像切り替え
    const changeImg = () => {
      if (store.state.isDarkMode == true) {
        //ダークモードオフ
        for (let i = 0; i < imgClass.length; i++) {
          bgClass[0].className = "each-term-btn border";
          imgClass[0].setAttribute('src', darkImg);
        }
      } else if (store.state.isDarkMode == false) {
        //ダークモードオン
        for (let i = 0; i < imgClass.length; i++) {
          bgClass[0].className = "each-term-btn";
          imgClass[0].setAttribute('src', lightImg);
        }
      }
    }
    return {
      terms,
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
.each-term-btn
  display: flex
  align-items: center
  width: 200px
  height: 36px
  color: black
  background-color: var(--light-yellow)
  border-radius: 21px
  font-size: 6px
  text-align: center;
  justify-content:center
  border: 4px solid var(--light-yellow);
  box-sizing: border-box;
  transition all .5s ease-out
  margin-right 1%
.dark-mode
  .each-term-btn
    color: var(--dark-white)
    background-color: var(--dark-deepblue)
    border: 4px solid var(--dark-white);
    transition all .5s ease-out
.border
  border: 4px solid var(--light-white);
  box-sizing: border-box;
.each-term-arrow-img
  width: 10px
  height: auto
  top: 25%
  margin-right:5%
  //left: elemLeft(986.82,814,200)
.each-term-txt
  width: 180px
  padding-left: 3%
  margin-bottom:1%
</style>
