<template>
  <div class="head-bar"></div>
  <yk-space class="menu-bar" dir="vertical" size="m">
    <router-link
      :to="item.path"
      v-for="item in navLinks"
      :key="item.path"
      class="menu-bar-nav"
    >
      <yk-space align="center" size="m">
        <component :is="item.icon" />
        <yk-text>{{ item.name }}</yk-text>
      </yk-space>
    </router-link>
  </yk-space>
</template>
<script setup lang="ts">
import { navLinks } from "../../utils/menu";
</script>
<style lang="less">
.menu-bar {
  padding: @space-l;
  position: fixed;
  top: 72;
  left: 8px;
  z-index: 10;
  &-nav {
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: @radius-m;
    text-decoration: none;
    padding: 0 35px;
    .yk-icon {
      color: @font-color-ss;
      width: 16px;
      height: 16px;
    }
    &:hover {
      background: @bg-color-l;
      .yk-text {
        font-weight: 600;
      }
    }
  }
  .router-link-active {
    background: skyblue;
    .yk-icon {
      color: @bg-color-l;
    }
    .yk-text {
      font-weight: 600;
    }
  }
}
</style>
