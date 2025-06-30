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
console.log(props);

const chart = ref<HTMLDivElement | null>(null);
const myChart = ref<echarts.ECharts | null>(null);

onMounted(() => {
  initChart();
});
const initChart = () => {
  var myChart = echarts.init(chart.value);
  const option = reactive({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: props.data.article, name: "电影" },
          { value: props.data.diary, name: "动漫" },
          { value: props.data.gallery, name: "综艺" },
        ],
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
