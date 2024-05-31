import axios from "axios";
import { message } from "antd";

const httpInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
});

httpInstance.interceptors.request.use(
  (config) => {
    config.headers["X-Token"] = localStorage.getItem("BLOG_TOKEN") || "";
    return config;
  },
  (error) => {
    message.error("请求失败");
    return new Promise.reject(error);
  }
);

httpInstance.interceptors.response.use(
  (res) => {
    const { code, result, msg } = res.data;
    if (code === 301) {
      message.warning(msg);
    } else if (code === 200 && result.isShowMessage) {
      message.success(msg);
    }
    return result;
  },
  (error) => {
    message.error("网络错误");
    return Promise.reject(error);
  }
);

export type ClientError = {
  code: number;
  msg: string;
};

export const post = <T>(url: string, data?: any): T => {
  return httpInstance.post<T>(url, data) as T;
};

export const get = <T>(url: string, data?: any): T => {
  return httpInstance.get<T>(url, { params: data }) as T;
};

export const fetchFile = async (url: string, data: any, param?: any) => {
  const defaultConfig = {
    method: "POST",
    body: data,
    headers: {
      "X-Token": localStorage.getItem("BLOG_TOKEN") || "",
    },
    ...param,
  };
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/files` + url,
      defaultConfig
    );
    if (!response.ok) {
      throw new Error("请求失败");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
