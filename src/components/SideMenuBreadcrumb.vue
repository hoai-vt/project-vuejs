<template>
  <div class="side-menu-breadcrumb">
    <h1 class="side-menu-breadcrumb-txt">{{ $store.state.subject }} &gt; {{ currentUnit }}</h1>
  </div>
</template>

<script>
import { inject } from "vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "SideMenuBreadcrumb",
  setup() {
    const currentUnit = inject("currentUnit");
    const store = useStore();
    const textClass = document.getElementsByClassName("side-menu-breadcrumb");
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
      for (let i = 0; i < textClass.length; i++) {
        if (store.state.isDarkMode) {
          textClass[0].className = "side-menu-breadcrumb dark-mode";
        } else {
          textClass[0].className = "side-menu-breadcrumb";
        }
      }
    }

    return {
      currentUnit,
    };
  },
};
</script>

<style scoped lang="stylus">
.side-menu-breadcrumb
  color: var(--light-black)
  width: 95%
  margin-left:2.5%
  font-size 7px
  &.dark-mode
    transition: all 0.5s ease-out
    color: var(--dark-white)
</style>
