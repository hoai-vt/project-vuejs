<template>
  <router-link
    :to="{
      name: name,
      hash: hash,
    }"
  >
    <div class="btn-wrap" @click="selectUnit(index)">
      <div class="select-tab"></div>
      <div class="select-bg">
        <h1><span class="txt" v-html="text"></span></h1>
        <img class="img" src="@/assets/images/icon_arrow_side_menu.png" />
      </div>
    </div>
  </router-link>
</template>

<script>
import { onMounted, watch, inject } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { isContains } from "@/assets/scripts/utils/url";

export default {
  name: "SideMenuButton",
  props: {
    index: String,
    text: String,
    name: String,
    hash: String,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const learningUnitJson = inject("learningUnitJson");
    const bgClass = document.getElementsByClassName("btn-wrap"); //バックグラウンドClass変数
    const selectTabClass = document.getElementsByClassName("select-tab");
    const imgClass = document.getElementsByClassName("img");
    let lightImg = require("../assets/images/icon_arrow_side_menu.png");
    let darkImg = require("../assets/images/icon_arrow_side_menu_dark.png");

    onMounted(() => {
      changeImg();
      activateUnit();
    });

    store.subscribe((mutation) => {
      if (mutation.type === "toggleDarkMode") {
        //ダークモード切り替わり検知、表示切替
        changeImg();
        selectUnit();
      }
    });
    //ダークモード画像切り替え
    const changeImg = () => {
      if (store.state.isDarkMode == true) {
        //ダークモードオフ
        for (let i = 0; i < bgClass.length; i++) {
          bgClass[i].className = "btn-wrap";
          imgClass[i].setAttribute("src", darkImg);
        }
      } else if (store.state.isDarkMode == false) {
        //ダークモードオン
        for (let i = 0; i < bgClass.length; i++) {
          bgClass[i].className = "btn-wrap shadow";
          imgClass[i].setAttribute("src", lightImg);
        }
      }
    };
    const selectUnit = (index = 0) => {
      //console.log(index);
      if (store.state.isDarkMode == true) {
        //ダークモードオフ
        for (let i = 0; i < bgClass.length; i++) {
          if (index === i) {
            bgClass[i].className = "btn-wrap select";
            imgClass[i].style.display = "none"
            selectTabClass[i].style.display = "block"
          } else {
            bgClass[i].className = "btn-wrap";
            imgClass[i].style.display = "block"
            selectTabClass[i].style.display = "none"
          }
        }
      } else if (store.state.isDarkMode == false) {
        //ダークモードオン
        for (let i = 0; i < bgClass.length; i++) {
          if (index === i) {
            bgClass[i].className = "btn-wrap shadow select";
            imgClass[i].style.display = "none"
            selectTabClass[i].style.display = "block"
          } else {
            bgClass[i].className = "btn-wrap shadow";
            imgClass[i].style.display = "block"
            selectTabClass[i].style.display = "none"
          }
        }
      }
    };

    const activateUnit = () => {
      const keys = Object.keys(learningUnitJson.contents);
      let activateIndex = 0;
      keys.forEach((key, index) => {
        if (isContains(key, route.hash)) activateIndex = index - 1;
      });
      selectUnit(activateIndex);
    };

    watch(() => activateUnit());

    return {
      selectUnit,
    };
  },
};
</script>

<style scoped lang="stylus">
a
  text-decoration none

h1
  width 80%

.btn-wrap
  width 80%
  display: flex
  align-items: center
  filter drop-shadow(0px 0px 0px rgba(0,0,0,0))
  background-color var(--light-white)
  //padding 4% 15px
  line-height 26px
  border-radius 10px
  text-align left
  color var(--light-black)
  margin 0 auto 20px
  margin-left: 10%
  transition all .5s ease-out
  font-size: 10px
  &.select
    width 100%
    font-size: 15px
    border-radius 10px 0 0 10px
    padding 5% 0
    background-color var(--light-skyblue)
    transition all .5s ease-out

.dark-mode
  .btn-wrap
    color var(--dark-white)
    background-color var(--dark-deepblue)
    transition all .5s ease-out
    &.select
      background-color var(--dark-midnightblue)
      transition all .5s ease-out

.shadow
  filter drop-shadow(0px 3px 10px #F4BE45)

.select-bg
  display: flex
  align-items: center
  width 100%
  height 100%
  padding 4% 15px
  padding-left:10%
  border-radius 10px

  //padding-top: 10%
  //padding-bottom: 10%
  //background-color var(--light-skyblue)

.select-tab
  display: none
  position:absolute
  width 5%
  height 100%
  //border-radius 10px
  background-color var(--light-blue)
  border-bottom-left-radius: 10px
  border-top-left-radius: 10px
  transition all .5s ease-out

.dark-mode
  .select-tab
    background-color var(--dark-white)
    transition all .5s ease-out

.txt
  width 100%
  font-size 18px
  padding-top:10%

.img
  //float right
  margin-left:10%
  width 18px
  height 26px
  //margin-top:5%
  //margin-bottom:5%
</style>
