<template>
  <div class="list-header">
    <h1 class="title-txt">{{ title }}</h1>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "ListHeader",
  props: {
    title: String,
  },
  setup() {
    const store = useStore();
    const bgClass = document.getElementsByClassName("list-header");
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
          bgClass[0].className = "list-header dark-mode";
        } else {
          bgClass[0].className = "list-header";
        }
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'
.list-header
  height: 100px
  color: white
  background-color: var(--light-blue)
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  transition: all 0.5s ease
  &.dark-mode
    //transition: all 2s ease-out
    background-color: var(--dark-deepblue)

.title-txt
  width: 100%
  position: absolute
  left: elemLeft(0,0,1024)
</style>
