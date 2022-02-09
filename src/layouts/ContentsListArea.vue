<template>
  <div class="contents-list">
    <ToggleButton class="toggle-button" />
    <ul :class="{ 'contents-list-container': true, show: isShow }">
      <li
        v-for="item in learningUnitJson.contents[getContentsKey()]"
        :key="item.id"
        :id="item.anchor_id"
      >
        <ContentsTitleButton
          class="col-right"
          :number="item.page_number.text"
          :class="item.button.class"
          :title="item.button.text"
          :icon="item.button.icon"
          :path="item.button.path"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, inject, watch, computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import ToggleButton from "@/components/ToggleButton.vue";
import ContentsTitleButton from "@/components/ContentsTitleButton.vue";
import { isContains } from "@/assets/scripts/utils/url";

export default {
  name: "ContentsListArea",
  components: {
    ToggleButton,
    ContentsTitleButton,
  },
  setup() {
    const learningUnitJson = inject("learningUnitJson");
    const route = useRoute();
    const store = useStore();
    const isShow = ref(false);
    const hash = computed(() => route.hash);

    const getContentsKey = () => {
      return route.hash
        ? Object.keys(learningUnitJson.contents).find((key) =>
            isContains(key, route.hash)
          )
        : learningUnitJson.contents.default;
    };
    onMounted(() => {
      setTimeout(() => {
        isShow.value = true;
      }, 100);
    });

    watch(hash, () => {
      console.log(hash.value);
      isShow.value = false;
      setTimeout(() => {
        isShow.value = true;
      }, 100);
    });

    store.subscribe((mutation) => {
      if (mutation.type === 'toggleDarkMode') {
        //ダークモード切り替わり検知、表示切替
      }
    })

    return {
      learningUnitJson,
      getContentsKey,
      isShow,
    };
  },
};
</script>

<style scoped lang="stylus">
.contents-list
  background-color var(--light-skyblue)
  transition all .5s ease-out

.dark-mode
  .contents-list
    background-color var(--dark-midnightblue)
    transition all .5s ease-out
.toggle-button
  position: absolute
  top: 70px
  right: 1%
.contents-list-container
  padding 130px 30px 60px
  margin 0 0 0 -10px
  opacity 0
  // transition all .5s ease-out
  &.show
    opacity 1
    margin-left 0;
    transition all .4s ease-out
li
  clear both
  padding 15px
  display: flex
  align-items: center
.col-left
  margin-top: 1%
  float left
.col-right
  float left
  margin 10px 0 0 20px
</style>
