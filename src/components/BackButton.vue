<template>
  <router-link :to="backPath">
    <div class="back-btn">
      <img
        src="../assets/images/back_button_light_img.png"
        class="back-arrow-img"
        alt=" "
      />
      <h1 class="back-txt">{{ text }}</h1>
    </div>
  </router-link>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "BackButton",
  props: {
    text: String,
    shadow: Boolean,
    backPath: String,
  },
  setup() {
    const store = useStore();
    const bgClass = document.getElementsByClassName("back-btn"); //バックグラウンドClass変数
    const imgClass = document.getElementsByClassName("back-arrow-img");
    let lightImg = require("../assets/images/back_button_light_img.png")
    let darkImg = require("../assets/images/back_button_dark_img.png")

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
          bgClass[0].className = "back-btn border";
          imgClass[0].setAttribute('src', darkImg);
        }
      } else if (store.state.isDarkMode == false) {
        //ダークモードオン
        for (let i = 0; i < imgClass.length; i++) {
          bgClass[0].className = "back-btn display-option";
          imgClass[0].setAttribute('src', lightImg);
        }
      }
    }
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'
a
  text-decoration: none

.back-btn
  width: 140px
  height: 36px
  color: black
  background-color: white
  font-size:8px
  display: flex
  align-items: center
  border-radius: 21px
  filter:drop-shadow(0px 3px 10px rgba(0, 149, 220, 0.5))
  text-align: left;
  border: 4px solid var(--light-white);
  box-sizing: border-box;
  transition all .5s ease-out;

.dark-mode
  .back-btn
    color: var(--dark-white)
    background-color: var(--dark-deepblue)
    transition all .5s ease-out;
    filter drop-shadow(0px 0px 0px rgba(0, 149, 220, 0.0))

.border
  border: 4px solid var(--light-white);
  box-sizing: border-box;

.back-arrow-img
  width: elemWidthSize(49,140)
  height: auto
  left: elemLeft(24.11,10,160)
  margin-left: 5%

.back-txt
  margin-left: 10%
  width: 80px
  left: elemLeft(62,10,160)
</style>
