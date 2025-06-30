<template><div ref="chart" style="width: 100%; height: 300px"></div></template>
<script setup lang="ts">
import * as echarts from "echarts";
import {
  ref,
  onMounted,
  defineProps,
  reactive,
  watch,
  onBeforeUnmount,
} from "vue";
let props = defineProps(["data"]);

let dates = props.data.map((item: any) => item.date);
let counts = props.data.map((item: any) => item.count);
console.log(counts);

watch(
  () => props.data,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      dates = props.data.map((item: any) => item.date);
      counts = props.data.map((item: any) => item.count);
      initChart();
    }
  },
  { deep: true }
);

const chart = ref<HTMLDivElement | null>(null);
const myChart = ref<echarts.ECharts | null>(null);

onMounted(() => {
  initChart();
});
const initChart = () => {
  var myChart = echarts.init(chart.value);
  const option = reactive({
    xAxis: {
      type: "category",
      data: dates,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: counts,
        type: "line",
      },
    ],
  });
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
};
// const initChart = () => {
//   if (!chartRef.value) return;
//   myChart.value = echarts.init(chartRef.value);
//   // updateChartConfig(); // 首次渲染
// };
</script>
