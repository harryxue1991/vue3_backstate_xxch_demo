import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
const pinia = createPinia();

import "@/router/permission";
import "normalize.css/normalize.css";

//引入Elmessage和Elloading的css样式文件
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-overlay.css";

// import installElementPlus from "@/plugins/element";
import installComponent from "@/components/index";

const app = createApp(App);
// installElementPlus(app);
installComponent(app);

app.use(router).use(pinia).mount("#app");
