<template>
  <div class="each-header">
    <BackButton class="each-header-back-btn" text="ホームへ" backPath="../" />
    <h1 class="title-txt">{{ title }}</h1>
    <EachHeaderTermButton class="each-header-term-btn display-option" />
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import EachHeaderTermButton from "@/components/EachHeaderTermButton.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "EachHeader",
  components: {
    BackButton,
    EachHeaderTermButton,
  },
  props: {
    title: String,
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      
    });
    
    store.subscribe((mutation) => {
      if (mutation.type === 'toggleDarkMode') {
        //ダークモード切り替わり検知、表示切替
      }
    })
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'
.each-header
  height: 60px
  color: white
  background-color: var(--light-blue)
  display: flex
  position: relative
  z-index: 10
  align-items: center
  text-align: center
  transition all .5s ease-out

.dark-mode
  .each-header
    transition all .5s ease-out
    background-color: var(--dark-deepblue)

.each-header-back-btn
  margin-left: 1%
  left: 1%
.title-txt
  width: 100%
  text-align: center
  padding 0 5% 0 10%
.each-header-term-btn
  //margin-right: 1%
</style>
