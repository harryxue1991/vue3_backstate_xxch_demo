import { defineStore } from "pinia";
import { setSession, getSession } from "@/utils/auth";

export const useLoginStore = defineStore({
  id: "login",
  state: () => {
    return {
      token: getSession("token") ? getSession("token") : "",
      userInfo: getSession("userInfo")
        ? JSON.parse(getSession("userInfo"))
        : {},
    };
  },
  actions: {
    setToken(token) {
      setSession("token", token);
      this.token = token;
    },
    setUserInfo(userInfo) {
      setSession("userInfo", JSON.stringify(userInfo));
      this.userInfo = userInfo;
    },
  },
  getters: {},
});
