<template>
  <router-link
    :to="{
      name: name,
    }"
  >
    <div class="unit-title-btn">
      <h1 class="unit-title-txt" v-html="title"></h1>
      <img
        src="../assets/images/unit_title_btn_img.png"
        class="title-arrow-img"
        alt=" "
      />
    </div>
  </router-link>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "UnitTitleButton",
  props: {
    title: String,
    name: String,
    //hash: String,
  },
  setup() {
    const store = useStore();
    const bgClass = document.getElementsByClassName("unit-title-btn"); //バックグラウンドClass変数
    const imgClass = document.getElementsByClassName("title-arrow-img");
    let lightImg = require("../assets/images/unit_title_btn_img.png")
    let darkImg = require("../assets/images/unit_title_btn_dark_img.png")

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
      for (let i = 0; i < imgClass.length; i++) {
        if (store.state.isDarkMode == true) {
          //ダークモードオフ
          imgClass[i].setAttribute('src', darkImg);
        } else if (store.state.isDarkMode == false) {
        //ダークモードオン
          imgClass[i].setAttribute('src', lightImg);
        }
      }
    }
    //ダークモードStyle切り替え
    const changeColor = () =>{
      for(let i = 0; i < bgClass.length; i++ ){
        if (store.state.isDarkMode) {
          bgClass[i].className = "unit-title-btn shadow dark-mode";
        } else {
          bgClass[i].className = "unit-title-btn";
        }
      }
    }

  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'

a
  text-decoration none
  & > div
    opacity 1
    transition: all 0.2s ease-out
    &:hover
      opacity 0.7
      transition: all 0.2s ease-out

.unit-title-btn
  width: 50vw
  height: auto
  color: var(--light-black)
  background-color: var(--light-white)
  border-radius: 21px
  display: flex
  font-size: 12px
  filter:drop-shadow(0px 3px 10px rgba(0, 149, 220, 0.5))
  text-align: left
  align-items: center
  margin-bottom: 40px
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    color: var(--dark-white)
    background-color: var(--dark-deepblue)

.shadow
  filter:drop-shadow(0px 0px 0px rgba(0, 149, 220, 0.0))
  
.title-arrow-img
  width: elemWidthSize(50,540)
  height: 100%
  margin-left: 7%
.unit-title-txt
  padding-left: 5%
  width: 85%
  padding-top: 3%
  padding-bottom: 3%
  //left: elemLeft(269,242,540)
</style>
