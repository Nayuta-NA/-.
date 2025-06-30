<template>
  <yk-space class="gather">
    <div
      v-for="(item, index) in overLink"
      :key="index"
      class="gather_list"
      :style="{ background: item.bgColor }"
    >
      <yk-space dir="vertical" size="s">
        <yk-text type="secondary">{{ item.name }}</yk-text>
        <yk-title :level="2" style="margin: 0">
          {{ item.total }}
        </yk-title>
      </yk-space>
    </div>
  </yk-space>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUserStore } from "../../pinia";
const userStore = useUserStore();
const gethers = ref(overLink);
import { overLink } from "../../utils/menu";
import { overview } from "../../mock/data";
const getdata = () => {
  // let data = overview.data;
  gethers.value[1].total = userStore.articleCount;
  gethers.value[2].total = userStore.diaryCount;
  gethers.value[3].total = userStore.galleryCount;
  gethers.value[0].total =
    (gethers.value[1].total as number) +
    (gethers.value[2].total as number) +
    (gethers.value[3].total as number);
};
getdata();
</script>
<style scoped lang="less">
.gather {
  width: 100%;
  &_list {
    width: 30%;
    background: #eee;
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: @space-xl;
    &:first-child {
      .yk-title,
      .yk-text {
        color: @white;
      }
    }
  }
}
</style>
