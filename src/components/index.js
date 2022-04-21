// 公共
import MsTable from "@/components/MsTable/index.vue";
import MsHandle from "@/components/MsHandle/index.vue";

const components = [MsTable, MsHandle];

// 函数组件
import MsRender from "@/components/MsRender/index.js";

export default (app) => {
  components.map((component) => {
    app.component(component.name, component);
  });
  app.component("ms-render", MsRender);
};
