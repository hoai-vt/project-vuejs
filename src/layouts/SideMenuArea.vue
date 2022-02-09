<template>
  <div class="side-menu-area-container">
    <div class="side-menu-area">
      <SideMenuHeader :title="title" />
      <SideMenu />
      <SideMenuBreadcrumb class="side-menu-breadcrumb" />
      <Copyright class="copyright display-option" />
    </div>
  </div>
</template>

<script>
import SideMenuHeader from "@/components/SideMenuHeader.vue";
import SideMenu from "@/components/SideMenu.vue";
import SideMenuBreadcrumb from "@/components/SideMenuBreadcrumb.vue";
import Copyright from "@/components/common/Copyright.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "SideMenuArea",
  components: {
    SideMenuHeader,
    SideMenu,
    SideMenuBreadcrumb,
    Copyright,
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
.side-menu-area-container
  direction rtl
.side-menu-area
  direction ltr
  min-height 100%
  padding 0 0 60px
  background-color var(--light-beige)
  transition all .5s ease-out;
.dark-mode
  .side-menu-area
    background-color var(--dark-black)
    transition all .5s ease-out;
.side-menu-breadcrumb
  padding 20px
.copyright
  padding 0 20px
</style>
