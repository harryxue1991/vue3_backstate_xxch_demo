// 公共
import MsTable from "@/components/MsTable/index.vue";
import MsHandle from "@/components/MsHandle/index.vue";
// 函数组件
import MsRender from "@/components/MsRender/index.js";

export default (app) => {
  app.component("ms-table", MsTable);
  app.component("ms-handle", MsHandle);
  app.component("ms-render", MsRender);
};
