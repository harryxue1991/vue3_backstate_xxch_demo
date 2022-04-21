import axios from "axios";
import { ElMessage } from "element-plus";
import { getSession } from "@/utils/auth";

const service = axios.create({
  baseURL:
    "https://www.fastmock.site/mock/deceb1875f0c265bff4e3e384afdab46/api",
  timeout: 15000, // request timeout
});
// 发起请求之前的拦截器
service.interceptors.request.use(
  (config) => {
    // 如果有token 就携带tokon
    const token = getSession("token");
    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      if (res.code == 200 || res.status == 200) {
        return res;
      } else {
        if (res && Array.isArray(res)) {
          return res;
        } else {
          ElMessage.error(res.message || "Error");
          return {};
        }
      }
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
