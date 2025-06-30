// import { createApp } from "vue";
// import App from "./App.vue";
// import { createPinia } from "pinia";
// import "@yike-design/ui/es/index.less";
// import "./style.less";
// import router from "./router";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import Icon from "@yike-design/ui/es/components/svg-icon";
// import { YkMessage, YkNotification } from "@yike-design/ui";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// // createApp(App).mount('#app')
// const app = createApp(App);
// const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate); // 启用持久化
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }
// app.config.globalProperties.$notification = YkNotification;
// app.config.globalProperties.$message = YkMessage;
// app.use(pinia);
// app.use(router);
// app.use(Icon);
// app.use(ElementPlus);

// app.mount("#app");
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "@yike-design/ui/es/index.less";
import "./style.less";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import Icon from "@yike-design/ui/es/components/svg-icon";
import { YkMessage, YkNotification } from "@yike-design/ui";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); // 启用持久化

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.config.globalProperties.$notification = YkNotification;
app.config.globalProperties.$message = YkMessage;
app.use(pinia);
app.use(router);
app.use(Icon);
app.use(ElementPlus);

app.mount("#app");
