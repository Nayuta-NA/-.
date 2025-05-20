<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="fill"></use>
  </svg>
</template>
<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  name: String,
  fill: String,
  width: {
    type: String,
    defalut: "30px",
  },
  height: {
    type: String,
    defalut: "30px",
  },
});
</script>
<style></style>
