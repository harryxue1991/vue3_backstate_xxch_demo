import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();

import installElementPlus from "@/plugins/element";
import installComponent from "@/components/index";

import "normalize.css/normalize.css";

const app = createApp(App);
installElementPlus(app);
installComponent(app);

app.use(router).use(pinia).mount("#app");
