import { createApp } from "vue";

import pinia from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./style.css";
import App from "./App.vue";
//svg插件需要配置代码
import "virtual:svg-icons-register";
//将图标功能用为全局组件
import svgIcon from "./components/svgIcon/index.vue";
import "../src/styles/index.scss";
//引入路由
import router from "./router";

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(pinia);
app.component("svgIcon", svgIcon);
app.use(router);
//测试代码：测试假接口能否使用
import axios from "axios";
//登录接口
axios({
  url: "/api/user/login",
  method: "post",
  data: {
    username: "admin",
    password: "111111",
  },
});
app.mount("#app");
