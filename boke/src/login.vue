<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>登录</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              style="margin-top: 10px"
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="margin-top: 10px"
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
      <!-- 这个xs就是当屏幕小于768，就不显示了 -->
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
let loading = ref(false);
//引入用户相关的小仓库
import { useUserStore } from "./pinia";
import { useRouter } from "vue-router";
import { user1, user2 } from "./mock/data";
const password = ref("");
const userStore = useUserStore();
//收集账号和密码
let loginForm = reactive({ username: "admin", password: "111111" });
//获取路由器
let $router = useRouter();
// console.log(loginForm);
const login = async () => {
  try {
    await userStore.login(loginForm.username, loginForm.password);
    $router.push("/");
    ElMessage({
      type: "success",
      message: getTime(),
    });
  } catch (error) {
    ElMessage({
      type: "error",
      message: "账号或密码错误",
    });
  }
};
//获取当前时间
const getTime = () => {
  let message = "";
  let hours = new Date().getHours();
  if (hours <= 11) {
    message = "hi,早上好,欢迎回来";
  } else if (hours > 11 && hours <= 13) {
    message = "hi,中午好,欢迎回来";
  } else if (hours > 13 && hours <= 18) {
    message = "hi,下午好,欢迎回来";
  } else if (hours > 18) {
    message = `hi,晚上好,欢迎回来`;
  }
  return message;
};

//try cathc执行逻辑：搭配await等待执行完毕，若找不到Error点，就执行catch
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100vh;
  background: url("../public/img/bg.png") no-repeat;
  background-size: cover;
  margin-top: -70px;
}
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background-color: rgb(22, 22, 189);
  padding: 40px;
}
h1 {
  color: white;
  font-size: 40px;
}
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  color: white;
}
.login_btn {
  width: 100%;
}
</style>
