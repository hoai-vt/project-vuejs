import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App).use(store).use(router);

app.use(VueAxios, { axios: axios });
app.provide("axios", app.config.globalProperties.axios);
app.mount("#app");
