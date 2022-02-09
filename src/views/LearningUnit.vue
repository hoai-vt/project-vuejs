<template>
  <div :class="{ 'learning-unit': true, 'dark-mode': $store.state.isDarkMode }">
    <EachHeader :title="$store.state.subject" />
    <SideMenuArea class="col-left" />
    <ContentsListArea class="col-right" />
  </div>
</template>

<script>
import { onMounted, provide } from "vue";
import { useRoute } from "vue-router";
import { removeHtmlTag } from "@/assets/scripts/utils/url";
import EachHeader from "../components/EachHeader.vue";
import SideMenuArea from "@/layouts/SideMenuArea.vue";
import ContentsListArea from "@/layouts/ContentsListArea.vue";

export default {
  name: "LearningUnit",
  components: {
    EachHeader,
    SideMenuArea,
    ContentsListArea,
  },
  props: {
    unitTitle: { type: String, default: "" },
    learningUnitJson: { type: Object, default: () => ({}) },
  },
  setup(props) {
    const route = useRoute();
    // console.log(
    //   `path:${route.path}, hash:${route.hash}, mode:${route.query.mode}`
    // );
    // console.log(props.learningUnitJson);

    provide("learningUnitJson", props.learningUnitJson);
    provide("currentUnit", removeHtmlTag(props.unitTitle));

    const scrollTo = (elem, top) => {
      elem.scrollTop = top;
    };

    onMounted(() => {
      if (route.hash) {
        const targetId = route.hash.replace("#", "");
        const targetElem = document.getElementById(targetId);

        if (!targetElem) return;

        const targetTop = targetElem.getBoundingClientRect().top;
        const contentList = document.querySelector(".contents-list");
        const eachHeaderHeight = document
          .querySelector(".each-header")
          .getBoundingClientRect().height;

        setTimeout(
          () => scrollTo(contentList, targetTop - eachHeaderHeight),
          1
        );

        const contentsListContainer = document.querySelector(
          ".contents-list-container"
        );

        const containerHeight =
          contentsListContainer.getBoundingClientRect().height;

        const defaultBottom = 60;
        const offsetBottom =
          window.innerHeight - containerHeight - eachHeaderHeight + targetTop + defaultBottom;

        if (offsetBottom > defaultBottom) {
          contentsListContainer.style.paddingBottom = offsetBottom + "px";
        }
      }
    });
  },
};
</script>

<style scoped lang="stylus">
.learning-unit
  background-color var(--light-skyblue)
  height 100%
  overflow hidden
  position relative
  transition all .5s ease-out;
  &.dark-mode
    background-color var(--dark-midnightblue)
    transition all .5s ease-out;

.col-left
  position absolute
  top 0
  left 0
  padding-top 60px
  width 30%
  height 100%
  overflow auto

.col-right
  position absolute
  top 0
  right 0
  // padding-top 60px
  width 70%
  height 100%
  overflow auto
</style>
