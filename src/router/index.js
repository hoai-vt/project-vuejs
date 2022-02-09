import { createRouter, createWebHistory } from "vue-router";
import { defaultTitle } from "../assets/scripts/config";
import List from "../views/UnitList.vue";
import UnitTitlesJson from "@/assets/json/unit_titles.json";
import LearningUnit01 from "../assets/json/learning_unit_01.json";
import LearningUnit02 from "../assets/json/learning_unit_02.json";
import store from "@/store/index.js";

const { unit_titles } = UnitTitlesJson;


const routes = [
  {
    path: "/",
    name: "List",
    component: List,
    meta: { title: "ダミーダミー ○年上" },
    props: {
      unitTitlesJson: UnitTitlesJson,
    },
  },
  {
    path: "/a/",
    name: "a",
    component: () =>
      import(/* webpackChunkName: "A" */ "../views/LearningUnit.vue"),
    meta: { title: "a" },
    props: {
      unitTitle: unit_titles[0].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/b/",
    name: "b",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "b" },
    props: {
      unitTitle: unit_titles[1].title,
      learningUnitJson: LearningUnit02,
    },
  },
  {
    path: "/c/",
    name: "c",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "c" },
    props: {
      unitTitle: unit_titles[2].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/d/",
    name: "d",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "d" },
    props: {
      unitTitle: unit_titles[3].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/e/",
    name: "e",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "e" },
    props: {
      unitTitle: unit_titles[4].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/f/",
    name: "f",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "f" },
    props: {
      unitTitle: unit_titles[5].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/g/",
    name: "g",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "g" },
    props: {
      unitTitle: unit_titles[6].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/h/",
    name: "h",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "h" },
    props: {
      unitTitle: unit_titles[7].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/i/",
    name: "i",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "i" },
    props: {
      unitTitle: unit_titles[8].title,
      learningUnitJson: LearningUnit01,
    },
  },
  {
    path: "/j/",
    name: "j",
    component: () =>
      import(/* webpackChunkName: "B" */ "../views/LearningUnit.vue"),
    meta: { title: "j" },
    props: {
      unitTitle: unit_titles[9].title,
      learningUnitJson: LearningUnit01,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title || defaultTitle;
});

router.beforeEach(() =>{
  store.commit(
    "toggleDarkMode",
    localStorage.getItem("darkModeFrag") === "true"
  );
});

export default router;
