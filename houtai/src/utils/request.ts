//进行axios二次封装：使用请求与响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
//利用axios对象的create方法，去创建axios（实例），其他的配置：基础路径，超时的时间
let request = axios.create({
  //和从包里印出来的一样，但是这个可以写一些其他的配置
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础自带/api
  timeout: 5000, //超时时间
});
//给axios实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //config配置对象，headers属性请求头，经常给服务器携带公共参数
  return config;
});
//3.响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data;
  },
  //失败的
  //处理网络错误
  (error) => {
    //失败回调：处理https网络错误的
    //定义变量存储网络错误信息
    let message = "";
    //https状态码
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "TOKEN过期";
        break;
      case 403:
        message = "无权访问";
        break;
      case 404:
        message = "请求地址错误";
        break;
      case 500:
        message = "服务器出现问题";
        break;
      default:
        message = "网络问题";
    }
    //提示错误信息
    ElMessage({
      type: "error",
      message,
    });
    return Promise.reject(error);
  }
);
export default request;
