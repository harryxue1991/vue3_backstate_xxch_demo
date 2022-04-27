import { defineStore } from "pinia";

export default defineStore({
  id: "setting",
  state: () => {
    return {
      include: [],
      exclude: [],
    };
  },
  actions: {
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
