import service from "@/utils/request.js";

// 登录
export const LOGIN = () => service.post("/login");

// 首页 - 列表
export const GET_LIST = () => service.get("/list");
