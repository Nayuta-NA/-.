<template>
  <div class="headBar" align="center">
    <yk-space class="headBar-left" style="cursor: pointer" @click="backHome">
      <img src="../../../public/vite.svg" alt="" class="logo" />
      <span class="name">NAYUTA个人影院</span>
    </yk-space>
    <yk-space class="headBar-right" align="center" style="padding-right: 30px">
      <el-badge v-show="login" :value="1" class="item" style="margin-top: 5px">
        <el-icon size="25" style="margin-top: 1px"
          ><Message
        /></el-icon> </el-badge
      ><el-avatar
        @click="back"
        v-show="login"
        src="../../../public/img/tx.png"
      />
      <div><yk-theme /></div>
      <el-button
        type="primary"
        style="width: 60px"
        @click="dialogVisible = true"
        >{{ login ? "退出" : "登录" }}</el-button
      >
      <el-dialog v-model="dialogVisible" title="Tips" width="500">
        <span>{{ login ? "你确定要退出吗？" : "请登录" }}</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="quxiao">取消</el-button>
            <el-button type="primary" @click="del"> 确定 </el-button>
          </div>
        </template>
      </el-dialog>
    </yk-space>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "../../pinia";
let userStore = useUserStore();
const router = useRouter();
//返回总览
const backHome = () => {
  router.push("/");
};
import { ref } from "vue";

const dialogVisible = ref(false);
const login = ref(true);
const quxiao = () => {
  dialogVisible.value = false;
};
const del = async () => {
  await userStore.clearInfo();
  router.push("/login");
};
const back = () => {
  router.push("/Overview");
};
</script>
<style scoped lang="less">
.headBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: @bg-color-l;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0, @space-xl;
}
.logo {
  margin-left: 20px;
  height: 25px;
  width: 25px;
}
.name {
  font-size: 20px;
  font-weight: 600;
}
</style>
