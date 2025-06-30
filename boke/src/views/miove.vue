<template>
  <div class="screen">
    <img :src="miove[src].path" alt="肖生客的救赎" />
    <!-- <screenBar :movie="miove[0]" /> -->
    <button @click="next" style="float: left">next</button>
  </div>
  <yk-space dir="vertical" style="padding-left: 232px; padding-right: 24px">
    <h1>推荐</h1>
    <div class="card">
      <div
        class="son"
        v-for="(movie, index) in miove"
        :key="index"
        @mouseenter="showIntro[index] = true"
        @mouseleave="showIntro[index] = false"
      >
        <img :src="movie.path" alt="" v-show="!showIntro[index]" />

        <div class="intro" v-show="showIntro[index]">
          {{ movie.information }}
        </div>
        <a
          href="https://v.qq.com/x/cover/1o29ui77e85grdr/h0022ah1yrf.html"
          target="_blank"
          @click="incrementMovieCount"
          ><span>{{ movie.name }}</span></a
        >
      </div>
    </div>
    <h1 style="margin-top: 20px">经典高分</h1>
    <div class="card">
      <div
        class="son"
        v-for="(movie, index) in miove"
        :key="index"
        @mouseenter="showIntro[index] = true"
        @mouseleave="showIntro[index] = false"
      >
        <img :src="movie.path" alt="" v-show="!showIntro[index]" />

        <div class="intro" v-show="showIntro[index]">
          {{ movie.information }}
        </div>
        <a href=""
          ><span>{{ movie.name }}</span></a
        >
      </div>
    </div>
    <h1 style="margin-top: 20px">重磅热播</h1>
    <div class="card">
      <div
        class="son"
        v-for="(movie, index) in miove"
        :key="index"
        @mouseenter="showIntro[index] = true"
        @mouseleave="showIntro[index] = false"
      >
        <img :src="movie.path" alt="" v-show="!showIntro[index]" />

        <div class="intro" v-show="showIntro[index]">
          {{ movie.information }}
        </div>
        <a href=""
          ><span>{{ movie.name }}</span></a
        >
      </div>
    </div>
  </yk-space>
</template>
<script setup lang="ts">
import screenBar from "../components/bar/screenBar.vue";
import { miove } from "../mock/data";
import { ref } from "vue";
import { useUserStore } from "../pinia";

let userStore = useUserStore();
const incrementMovieCount = () => {
  userStore.incrementArticleCount();
  console.log(userStore.articleCount);
};
let src = ref(0);
let showIntro = ref(Array(miove.length).fill(false));
let next = () => {
  if (src.value == miove.length - 1) src.value = 0;
  else src.value += 1;
};
const time = setInterval(next, 3000);
clearInterval(time);
</script>
<style lang="less" scoped>
.screen {
  width: 100%;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
  }
}
.card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .son {
    width: 22%;
    height: 150px;
    position: relative; /* 添加定位以便介绍层叠在图片上 */

    a {
      position: relative;
      width: 100%;
      height: 100%;

      .intro {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 10px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        pointer-events: none; /* 关键点：让鼠标事件穿透到下层 */
      }
    }

    span {
      font-weight: 800;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
