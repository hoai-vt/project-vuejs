<template>
  <div class="unit-list">
    <div class="background"></div>
    
    <div class="fixed-wrap">
      <ListHeader class="list-header" :title="$store.state.subject" />
      <ContentsListButton
        class="contents-list-button"
        :path="Path.contents_list"
      />
      <ToggleButton class="toggle-button" />
    </div>
    
    <div class="scroll-wrap">
      <div class="header-padding"></div>
      <h1 class="introduction-title introduction display-option" v-html=unitTitlesJson.introductionTitle ></h1>
      <h1 class="introduction-txt introduction display-option" v-html=unitTitlesJson.introductionText></h1>
      <ListTermButton class="unit-list-term-button display-option" :termsPath="Path.terms" />
      <div class="introduction-button-wrap">
        <IntroductionButton
          class="introduction-button"
          text="端末の使い方"
          :path="Path.usage"
        />
        <IntroductionButton
          class="introduction-button"
          text="感染症対策"
          :path="Path.infection"
        />
        <IntroductionButton
          class="introduction-button"
          text="SDGs"
          :path="Path.sdgs"
        />
      </div>

      <ul class="unit-title-button-wrap">
        <li
          v-for="(unitTitle, index) in unitTitlesJson.unit_titles"
          :key="unitTitle.Id"
        >
          <UnitTitleButton
            class="unit-title-button"
            :title="unitTitlesJson.unit_titles[index].title"
            :name="unitTitlesJson.unit_titles[index].link_name"
          />
        </li>
        <Copyright class="copyright display-option" />
      </ul>
    </div>
  </div>
</template>

<script>
import { provide } from "vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Path from "@/assets/json/path.json";
import ListHeader from "@/components/ListHeader.vue";
import ContentsListButton from "@/components/ContentsListButton.vue";
import ToggleButton from "@/components/ToggleButton.vue";
import ListTermButton from "@/components/ListTermButton.vue";
import IntroductionButton from "@/components/IntroductionButton.vue";
import UnitTitleButton from "@/components/UnitTitleButton.vue";
import Copyright from "@/components/common/Copyright.vue";

export default {
  name: "UnitList",
  components: {
    ListHeader,
    ContentsListButton,
    ToggleButton,
    ListTermButton,
    IntroductionButton,
    UnitTitleButton,
    Copyright,
  },
  props: {
    unitTitlesJson: { type: Object, default: () => ({}) },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const bgClass = document.getElementsByClassName("background");
    const textTitleClass = document.getElementsByClassName("introduction-title");
    const textClass = document.getElementsByClassName("introduction-txt");
    provide("unitTitlesJson", props.unitTitlesJson);

    onMounted(() => {
      changeColor();
      console.log(props.unitTitlesJson);
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
          bgClass[0].className = "background dark-mode";
          textTitleClass[0].className = "introduction-title introduction display-option dark-mode";
          textClass[0].className = "introduction-txt introduction display-option dark-mode";
        } else {
          bgClass[0].className = "background";
          textTitleClass[0].className = "introduction-title introduction display-option";
          textClass[0].className = "introduction-txt introduction display-option";
        }
      }
    }
      

    return {
      store,
      route,
      Path,
    };
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl'
::-webkit-scrollbar
  width: 10px

/*スクロールバーの軌道*/
::-webkit-scrollbar-track
  border-radius: 50px
  //background-color: white

/*スクロールバーの動く部分*/
::-webkit-scrollbar-thumb
  //background-color: var(--light-blue)
  border-radius: 50px
  box-shadow:0 0 0 1px rgba(255, 255, 255, .3)
</style>

<style scoped lang="stylus">
.unit-list
  position: relative
  width 100%
  height 100%
  //overflow: hidden

.background
  position: fixed
  width 100%
  height 100%
  background-color var(--light-skyblue)
  z-index: 0
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    background-color: var(--dark-midnightblue)

//固定表示箇所
.fixed-wrap
  position: fixed
  width: 100%
  height: 0%
  z-index: 100
  z-index: 2
  

.list-header
  position: absolute
  width 100%

.toggle-button
  position: absolute
  top: 115px
  right: 1%

.contents-list-button
  position: absolute
  top: 130px
  left: elemLeft(0,0,1024)

//スクロール表示箇所
.scroll-wrap
  width: 100%
  display: flex;
  flex-flow: column;
  justify-content: center;
  z-index: 1
  text-align: center

.header-padding
  width: 100%
  height: 100px

.introduction-title
  color: var(--light-black)
  padding-top: 60px
  font-size: 23px
  text-align: center
  z-index: 1
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    color: var(--dark-white)

.introduction-txt
  var(--light-black)
  padding-top: 15px
  font-size: 16px
  z-index: 1
  transition: all 0.5s ease-out
  &.dark-mode
    //transition: all 2s ease-out
    color: var(--dark-white)
  

.introduction-button-wrap
  width 100%
  top: 469px
  display: flex;
  justify-content: center;
  z-index: 1

.introduction-button
  margin: 20px
  padding-top: 60px

.unit-list-term-button
  margin-left:50%
  transform: translateX(-50%)
  margin-top: 80px
  z-index: 1

.unit-title-button-wrap
  top: 605px
  width: 100%
  height: 40%
  padding: 0
  padding-top: 40px
  display: flex
  flex-flow: column
  align-items: center

.unit-title-button
  //margin-bottom: 40px

.copyright
  margin-top:64px
  padding-bottom: 10px
  position relative
  z-index 10
</style>
