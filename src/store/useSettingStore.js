import { defineStore } from "pinia";
import { usePreferredDark } from "@vueuse/core";

export default defineStore({
  id: "setting",
  state: () => {
    return {
      include: [],
      exclude: [],
      isDark: usePreferredDark(),
    };
  },
  actions: {
    setIsDark(val) {
      this.isDark = val;
    },
    setInclude(name) {
      if (!this.include.includes(name)) {
        this.include.push(name);
      }
    },
    setExclude(name) {
      if (!this.exclude.includes(name)) {
        this.exclude.push(name);
      }
    },
  },
  getters: {},
});
