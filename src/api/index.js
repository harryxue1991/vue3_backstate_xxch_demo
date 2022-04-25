import service from "@/utils/request.js";

// 登录
export const LOGIN = (data) => service.post("/login", data);

// 首页 - 列表
export const GET_LIST = (data) => service.get("/list", { params: data });
