<template>
  <nav class="side-menu">
    <SideMenuButton
      v-for="(sub_unit, index) in learningUnitJson.sub_units"
      :key="sub_unit.Id"
      :text="learningUnitJson.sub_units[index].text"
      :class="learningUnitJson.sub_units[index].class"
      :name="learningUnitJson.sub_units[index].link_name"
      :hash="learningUnitJson.sub_units[index].hash"
      :index="index"
    />
  </nav>
</template>

<script>
import { inject } from "vue";
import SideMenuButton from "@/components/SideMenuButton.vue";

export default {
  name: "SideMenu",
  components: {
    SideMenuButton,
  },
  setup() {
    const learningUnitJson = inject("learningUnitJson");
    return {
      learningUnitJson,
    };
  },
};
</script>

<style scoped lang="stylus">
.side-menu
  padding 30px 20px
</style>
