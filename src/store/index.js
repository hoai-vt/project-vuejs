import { createStore } from "vuex";
import UnitTitlesJson from "@/assets/json/unit_titles.json";

export default createStore({
  state: {
    subject: UnitTitlesJson.subject,
    //ダークモードフラグ
    isDarkMode: false,
    //アイコン画像
    iconImg:{
      lightMovieImg: require("../assets/images/icon_movie_img.png"),
      lightSoundImg: require("../assets/images/icon_sound_img.png"),
      lightSimulationImg: require("../assets/images/icon_simulation_img.png"),
      lightWorkImg: require("../assets/images/icon_work_img.png"),
      lightDocumentImg: require("../assets/images/icon_document_img.png"),
      lightPracticeImg: require("../assets/images/icon_practice_img.png"),
      lightProgramImg: require("../assets/images/icon_program_img.png"),
      lightWebImg: require("../assets/images/icon_web_img.png"),
      lightLinkImg: require("../assets/images/icon_link_img.png"),
      lightTabletImg: require("../assets/images/icon_tablet_img.png"),
      lightStarImg: require("../assets/images/icon_star_img.png"),
      lightThinkingImg: require("../assets/images/icon_thinking_img.png"),
      darkMovieImg: require("../assets/images/icon_movie_dark_img.png"),
      darkSoundImg: require("../assets/images/icon_sound_dark_img.png"),
      darkSimulationImg: require("../assets/images/icon_simulation_dark_img.png"),
      darkWorkImg: require("../assets/images/icon_work_dark_img.png"),
      darkDocumentImg: require("../assets/images/icon_document_dark_img.png"),
      darkPracticeImg: require("../assets/images/icon_practice_dark_img.png"),
      darkProgramImg: require("../assets/images/icon_program_dark_img.png"),
      darkWebImg: require("../assets/images/icon_web_dark_img.png"),
      darkLinkImg: require("../assets/images/icon_link_dark_img.png"),
      darkTabletImg: require("../assets/images/icon_tablet_dark_img.png"),
      darkStarImg: require("../assets/images/icon_star_dark_img.png"),
      darkThinkingImg: require("../assets/images/icon_thinking_dark_img.png"),
    },
  },
  //isDarkMode切り替わり検知
  mutations: {
    toggleDarkMode(state, toggleValue) {
      state.isDarkMode = toggleValue;
    },
  },
  actions: {},
  modules: {},
});
