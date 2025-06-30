<!-- <template>
  <yk-space dir="vertical" size="xl" style="width: 100%">
    <div class="data-cart">
      <div class="data-cart_title">
        <p
          class="data-card_title-name"
          style="font-size: 15px; font-weight: 500"
        >
          每日新增观看
        </p>

        <el-radio-group v-model="radio1" size="small" @change="getVisit">
          <el-radio-button label="近半月" value="month" />
          <el-radio-button label="近一周" value="week" />
        </el-radio-group>
      </div>
      <LineChart :data="visitData" />
    </div>
    <div class="data-cart">
      <div class="data-cart_title">
        <p
          class="data-card_title-name"
          style="font-size: 15px; font-weight: 500"
        >
          本周观影类型
        </p>

        <el-radio-group v-model="radio2" size="small">
          <el-radio-button label="近一月" value="month" />
          <el-radio-button label="近一周" value="week" />
        </el-radio-group>
      </div>
      <Pie :data="overview.data" />
    </div>
  </yk-space>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import LineChart from "../echarts/line.vue";
// import LineChart from "../echarts/line.vue";
import { visit } from "../../mock/data";
import { useUserStore } from "../../pinia";
import { log } from "echarts/types/src/util/log.js";
import Pie from "../echarts/pie.vue";
const visitData = ref(visit.data.slice(0, 7));

const getVisit = async (e: string) => {
  let data = visit.data;
  if (e == "week") {
    data = data.slice(0, 7);
  }
  visitData.value = [...data];
  // console.log(visitData.value);
};

const radio1 = ref("week");
const radio2 = ref("week");
onMounted(() => {
  getVisit(radio1.value);
});
</script>
<style scoped lang="less">
.data-cart {
  padding: @space-xl;
  background: @bg-color-l;
  width: 100%;
  &_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    // &-name {
    //   .font-l();
    // }
  }
}
</style> -->
<template>
  <yk-space dir="vertical" size="xl" style="width: 100%">
    <div class="data-cart">
      <div class="data-cart_title">
        <p
          class="data-card_title-name"
          style="font-size: 15px; font-weight: 500"
        >
          每日新增观看
        </p>

        <el-radio-group v-model="radio1" size="small" @change="getVisit">
          <el-radio-button label="近半月" value="month" />
          <el-radio-button label="近一周" value="week" />
        </el-radio-group>
      </div>
      <!-- <LineChart
        :data="{
          article: userStore.articleCount,
          diary: userStore.diaryCount,
          gallery: userStore.galleryCount,
        }"
      /> -->
      <LineChart :data="visitData" />
    </div>
    <div class="data-cart">
      <div class="data-cart_title">
        <p
          class="data-card_title-name"
          style="font-size: 15px; font-weight: 500"
        >
          本周观影类型
        </p>

        <el-radio-group v-model="radio2" size="small">
          <el-radio-button label="近一月" value="month" />
          <el-radio-button label="近一周" value="week" />
        </el-radio-group>
      </div>
      <!-- 将 Pinia 中的数据传递给 Pie 组件 -->
      <Pie
        :data="{
          article: userStore.articleCount,
          diary: userStore.diaryCount,
          gallery: userStore.galleryCount,
        }"
      />
    </div>
  </yk-space>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import LineChart from "../echarts/line.vue";
import { visit } from "../../mock/data";
import { useUserStore } from "../../pinia";
import Pie from "../echarts/pie.vue";

const userStore = useUserStore();
const visitData = ref(visit.data.slice(0, 7));

const getVisit = async (e: string) => {
  let data = visit.data;
  if (e === "week") {
    data = data.slice(0, 7);
  }
  visitData.value = [...data];
};

const radio1 = ref("week");
const radio2 = ref("week");

onMounted(() => {
  getVisit(radio1.value);
});

// 监听 Pinia 数据的变化
watch(
  () => [userStore.articleCount, userStore.galleryCount, userStore.diaryCount],
  () => {
    // 数据变化时不需要额外操作，因为组件会自动更新
  },
  { deep: true }
);
</script>
<style scoped lang="less">
.data-cart {
  padding: @space-xl;
  background: @bg-color-l;
  width: 100%;
  &_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    // &-name {
    //   .font-l();
    // }
  }
}
</style>
