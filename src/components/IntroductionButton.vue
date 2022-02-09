<template>
  <a v-if="isInternalLink(path)" :href="path" target="_blank">
    <div class="introduction-btn">
      <div class="introduction-up">
        <h1 class="introduction-txt">{{ text }}</h1>
        <img
          src="../assets/images/how_to_use_arrow_img.png"
          class="introduction-arrow"
          alt=" "
        />
      </div>
      <img
        src="../assets/images/how_to_use_underline_img.png"
        class="introduction-underline"
        alt=" "
      />
    </div>
  </a>

  <a v-else @click="transitionPage(path)">
    <div class="introduction-btn">
      <div class="introduction-up">
        <h1 class="introduction-txt">{{ text }}</h1>
        <img
          src="../assets/images/how_to_use_arrow_img.png"
          class="introduction-arrow"
          alt=" "
        />
      </div>
      <img
        src="../assets/images/how_to_use_underline_img.png"
        class="introduction-underline"
        alt=" "
      />
    </div>
  </a>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { isInternalLink } from "@/assets/scripts/utils/url";
import pageTransition from "@/composables/pageTransition";

export default {
  name: "IntroductionButton",
  props: {
    text: String,
    path: String,
  },
  setup() {
    const store = useStore();
    const { transitionPage } = pageTransition();
    const bgClass = document.getElementsByClassName("introduction-btn");
    const imgClassLine = document.getElementsByClassName("introduction-underline");
    const imgClassArrow = document.getElementsByClassName("introduction-arrow");
    let lightArrowImg = require("../assets/images/how_to_use_arrow_img.png");
    let darkArrowImg = require("../assets/images/how_to_use_arrow_dark_img.png");
    let lightLineImg = require("../assets/images/how_to_use_underline_img.png");
    let darkLineImg = require("../assets/images/how_to_use_underline_dark_img.png");

    onMounted(() => {
      changeImg();
      changeColor();
    });
    
    store.subscribe((mutation) => {
      if (mutation.type === "toggleDarkMode") {
        //ダークモード切り替わり検知、表示切替
        changeImg();
        changeColor();
      }
    });
    //ダークモード画像切り替え
    const changeImg = () => {
      if (store.state.isDarkMode == true) {
        //ダークモードオフ
        for (let i = 0; i < imgClassArrow.length; i++) {
          imgClassArrow[i].setAttribute("src", darkArrowImg);
          imgClassLine[i].setAttribute("src", darkLineImg);
        }
      } else if (store.state.isDarkMode == false) {
        //ダークモードオン
        for (let i = 0; i < imgClassArrow.length; i++) {
          imgClassArrow[i].setAttribute("src", lightArrowImg);
          imgClassLine[i].setAttribute("src", lightLineImg);
        }
      }
    };
    //ダークモードStyle切り替え
    const changeColor = () =>{
      for(let i = 0; i < bgClass.length; i++ ){
        if (store.state.isDarkMode) {
          bgClass[i].className = "introduction-btn dark-mode";
        } else {
          bgClass[i].className = "introduction-btn";
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
  display: block
  cursor: pointer

.introduction-btn
  width: 15vw
  height: auto
  color: var(--light-blue)
  background-color: rgba(0,0,0,0)
  font-size: 16px
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    color: var(--dark-white)

.introduction-up
  width: 100%
  height: auto
  display: flex
  text-align: center
  align-items: center

.introduction-txt
  width: 100%
  padding-left: 15%
  padding-top: 5%
  padding-bottom: 5%
  font-size:15px
  
.introduction-arrow
  width: elemWidthSize(35,160.17)
  height: auto
  margin-left: 10%
.introduction-underline
  width: elemWidthSize(417,160.17)
  height: auto
  top 90%
</style>
