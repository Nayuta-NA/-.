<template>
  <div>
    <!-- <h1>测试axios的二次封装</h1> -->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
// import request from "./utils/request";
// import { onMounted } from "vue";
// //组件挂载完毕发送请求
// onMounted(() => {
//   request({
//     url: "/user/login",
//     method: "post",
//     data: {
//       username: "admin",
//       password: "111111",
//     },
//   }).then((res) => {
//     console.log(res);
//   });
// });
</script>
<style lang="scss">
div {
  h1 {
    color: variable.$color; //使用@use需要加文件前缀
  }
}
</style>
