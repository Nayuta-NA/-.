<script setup lang="ts">
import HeadBar from "./components/bar/HeadBar.vue";
import Menu from "./components/bar/Menu.vue";
</script>

<template>
  <!-- 头部 -->
  <!-- <HeadBar></HeadBar>
  <Menu></Menu> -->
  <!-- 内容 -->
  <div>
    <router-view />
  </div>
</template>

<style scoped lang="less">
@color: #00aeae;
.test {
  color: @color;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
