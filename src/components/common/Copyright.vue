<template>
  <h1 class="copyright">Copyright©2024 by TOKYO SHOSEKI CO., LTD. All rights reserved.</h1>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "Copyright",
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
.copyright
  width:95%
  margin-left:2.5%
  color var(--light-gray)
  font-size 12px
</style>
