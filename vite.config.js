import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          // directives: true,
          // version: "2.1.5",
        }),
      ],
    }),
  ],
  build: {
    // sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "element-plus": ["element-plus"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  // base:"./",//打包路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), //设置别名
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/mixin.scss' as *; 
          @use '@/styles/element/index.scss' as *;
        `,
      },
    },
  },
  server: {
    port: 4000, //启动端口
    open: true,
    host: "0.0.0.0",
    proxy: {
      // 选项写法
      "/api": "http://123.56.85.24:5000", //代理网址
    },
    cors: true,
  },
});
