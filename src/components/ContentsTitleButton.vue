<template>
  <a v-if="isInternalLink(path)" :href="path">
    <div class="contents-title-btn">
      <div class="page-number">
        <h1 class="number-txt" v-html="number"></h1>
      </div>
      <div class="contents-title-txt" v-html="title"></div>
      <img v-if="iconImg" :src="iconImg" :class="icon" alt="" />
    </div>
  </a>

  <a v-else @click="transitionPage(path)">
    <div class="contents-title-btn">
      <div class="page-number">
        <h1 class="number-txt" v-html="number"></h1>
      </div>
      <div class="contents-title-txt" v-html="title"></div>
      <img v-if="iconImg" :src="iconImg" :class="icon" alt="" />
    </div>
  </a>
</template>

<script>
import { computed } from "vue";
import { isInternalLink } from "@/assets/scripts/utils/url";
import pageTransition from "@/composables/pageTransition";
import { useStore } from "vuex";

export default {
  name: "ContentsTitleButton",
  props: {
    number: String,
    title: String,
    icon: String,
    path: { type: String, default: "" },
  },
  setup(props) {
    const { transitionPage } = pageTransition();
    const store = useStore();

    let iconImg = computed(() => {
      if (store.state.isDarkMode == false) {
        //アイコン分岐
        if (props.icon === "icon-blank") {
          return null;
        } else if (props.icon === "icon-movie") {
          //動画
          return store.state.iconImg.lightMovieImg;
        } else if (props.icon === "icon-sound") {
          //音声
          return require("../assets/images/icon_sound_img.png");
        } else if (props.icon === "icon-simulation") {
          //シミュレーション
          return require("../assets/images/icon_simulation_img.png");
        } else if (props.icon === "icon-work") {
          //ワークシート
          return require("../assets/images/icon_work_img.png");
        } else if (props.icon === "icon-document") {
          //資料
          return require("../assets/images/icon_document_img.png");
        } else if (props.icon === "icon-practice") {
          //練習
          return require("../assets/images/icon_practice_img.png");
        } else if (props.icon === "icon-program") {
          //プログラミング
          return require("../assets/images/icon_program_img.png");
        } else if (props.icon === "icon-web") {
          //WEBページ
          return require("../assets/images/icon_web_img.png");
        } else if (props.icon === "icon-link") {
          //他教科リンク
          return require("../assets/images/icon_link_img.png");
        } else if (props.icon === "icon-tablet") {
          //iPadとタッチペン
          return require("../assets/images/icon_tablet_img.png");
        } else if (props.icon === "icon-star") {
          //星型
          return require("../assets/images/icon_star_img.png");
        } else if (props.icon === "icon-thinking") {
          //思考ツール
          return require("../assets/images/icon_thinking_img.png");
        } else {
          return null;
        }
      } else {
        //アイコン分岐
        if (props.icon === "icon-blank") {
          return null;
        } else if (props.icon === "icon-movie") {
          //動画
          return store.state.iconImg.darkMovieImg;
        } else if (props.icon === "icon-sound") {
          //音声
          return store.state.iconImg.darkSoundImg;
        } else if (props.icon === "icon-simulation") {
          //シミュレーション
          return store.state.iconImg.darkSimulationImg;
        } else if (props.icon === "icon-work") {
          //ワークシート
          return store.state.iconImg.darkWorkImg
        } else if (props.icon === "icon-document") {
          //資料
          return store.state.iconImg.darkDocumentImg
        } else if (props.icon === "icon-practice") {
          //練習
          return store.state.iconImg.darkPracticeImg
        } else if (props.icon === "icon-program") {
          //プログラミング
          return store.state.iconImg.darkProgramImg
        } else if (props.icon === "icon-web") {
          //WEBページ
          return store.state.iconImg.darkWebImg
        } else if (props.icon === "icon-link") {
          //他教科リンク
          return store.state.iconImg.darkLinkImg
        } else if (props.icon === "icon-tablet") {
          //iPadとタッチペン
          return store.state.iconImg.darkTabletImg
        } else if (props.icon === "icon-star") {
          //星型
          return store.state.iconImg.darkStarImg
        } else if (props.icon === "icon-thinking") {
          //思考ツール
          return store.state.iconImg.darkThinkingImg
        } else {
          return null;
        }
      }
    });
    
    return {
      iconImg,
      transitionPage,
      isInternalLink,
    };
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/config.styl';

icon()
  height: 100%
  // padding-top: 3%
  // padding-bottom: 3%

a
  text-decoration: none
  display: block
  cursor: pointer

.contents-title-btn
  position: relative
  width: 57vw
  height: auto
  color: black
  background-color: white
  display: flex
  border-radius: 21px
  font-size: 12px
  filter: drop-shadow(0px 3px 10px rgba(0, 149, 220, 0.5))
  text-align: left
  align-items: center
  transition all .5s ease-out

.dark-mode
  .contents-title-btn
    color var(--dark-white)
    background-color var(--dark-deepblue)
    transition all .5s ease-out
    filter: drop-shadow(0px 3px 10px rgba(0, 149, 220, 0))

// .shadow
//   filter: drop-shadow(0px 3px 10px rgba(0, 149, 220, 0))

.page-number
  position: absolute
  width: 120px
  height: 100%
  color: white
  background-color: var(--light-blue)
  display: flex
  align-items: center
  justify-content: center
  border-bottom-left-radius: 10px
  border-top-left-radius: 10px

.dark-mode
  .page-number
    background-color var(--dark-deepblue-light)
    transition all .5s ease-out

.number-txt
  font-size: 15px
  width: 80px
  text-align: center

.contents-title-txt
  width: 90%
  padding-left: 150px
  padding-top: 3%
  padding-bottom: 3%
  font-size 20px
  font-weight bold
  // left: elemLeft(480,454,500)

.icon-movie
  icon()
  width: 39.82px
  margin-right: 20px
  margin-left: 2vw

.icon-sound
  icon()
  width: 39.81px
  margin-right: 20px
  margin-left: 2vw

.icon-simulation
  icon()
  width: 25.01px
  margin-right: 28px
  margin-left: 2vw

.icon-work
  icon()
  width: 40.74px
  margin-right: 18px
  margin-left: 2vw

.icon-document
  icon()
  width: 39.82px
  margin-right: 20px
  margin-left: 2vw

.icon-practice
  icon()
  width: 40.76px
  margin-right: 18px
  margin-left: 2vw

.icon-program
  icon()
  width: 39.82px
  margin-right: 20px
  margin-left: 2vw

.icon-web
  icon()
  width: 39.82px
  margin-right: 20px
  margin-left: 2vw

.icon-link
  icon()
  width: 39.82px
  margin-right: 20px
  margin-left: 2vw

.icon-tablet
  icon()
  width: 40.74px
  margin-right: 18px
  margin-left: 2vw

.icon-star
  icon()
  width: 30.82px
  margin-right: 24px
  margin-left: 2vw

.icon-thinking
  icon()
  width: 39.82px
  margin-right: 20px
  margin-left: 2vw
</style>
