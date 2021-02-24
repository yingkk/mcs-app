import defaultAxios from "axios";

const isDev = process.env.NODE_ENV === "development";

const instance = defaultAxios.create({
  baseURL: isDev ? "/api" : process.env.baseURL,
  withCredentials: true
});

defaultAxios.defaults.withCredentials = true;

instance.interceptors.request.use(
  config => {
    // 请求前置处理
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // 响应全局出路
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
