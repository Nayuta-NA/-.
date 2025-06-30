<template>
  <yk-space dir="vertical" style="padding-left: 232px; padding-right: 24px">
    <topTitle :is-search="false" />
    <gather />
    <yk-space style="width: 100%">
      <datas />
    </yk-space>
  </yk-space>
</template>
<script setup lang="ts">
import topTitle from "../components/bar/topTitle.vue";
import gather from "../components/overview/gather.vue";
import datas from "../components/overview/datas.vue";
</script>
<style scoped lang="less"></style>
