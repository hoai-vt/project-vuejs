<template>
  <a :href="path" target="_blank">
    <div class="contents-list-btn">
      <h1 class="contents-list-txt">コンテンツ一覧<br />（PDF）</h1>
    </div>
  </a>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "ContentsListButton",
  props: {
    path: String,
  },
  setup() {
    const store = useStore();
    const bgClass = document.getElementsByClassName("contents-list-btn");
    onMounted(() => {
      changeColor();
    });
    
    store.subscribe((mutation) => {
      if (mutation.type === 'toggleDarkMode') {
        //ダークモード切り替わり検知、表示切替
        changeColor();
      }
    })
    //ダークモードStyle切り替え
    const changeColor = () =>{
      for (let i = 0; i < bgClass.length; i++) {
        if (store.state.isDarkMode) {
          bgClass[0].className = "contents-list-btn dark-mode";
        } else {
          bgClass[0].className = "contents-list-btn";
        }
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'
.contents-list-btn
  width: 170px
  height: 80px
  color: white
  background-color: var(--light-blue)
  position: relative
  border-bottom-right-radius: 10px
  border-top-right-radius: 10px
  text-align: center;
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    background-color: var(--dark-deepblue)
.contents-list-txt
  position: absolute
  font-size: 15px
  width: elemWidthSize(280,170)
  top: 22%
  left: elemLeft(14,0,170)
</style>
