<template>
  <h2 class="side-menu-header">{{ currentUnit }}</h2>
</template>

<script>
import { inject } from "vue";
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "SideMenuHeader",
  setup() {
    const currentUnit = inject("currentUnit");
    const store = useStore();
    onMounted(() => {
      
    });
    
    store.subscribe((mutation) => {
      if (mutation.type === 'toggleDarkMode') {
        //ダークモード切り替わり検知、表示切替
      }
    })
    return {
      currentUnit,
    };
  },
};
</script>

<style scoped lang="stylus">
h2
  color var(--light-black)
  font-size 16px
  text-align center
  padding 30px 15px
  background-color var(--light-yellow)
  transition all .5s ease-out;
.dark-mode
  h2
    color var(--dark-white)
    background-color var(--dark-deepblue-dark)
    transition all .5s ease-out;
</style>
