<template>
  <div class="login">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到电商平台</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
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
import { reactive } from "vue";
import useUserStore from "../../store/modules/user";
let useStore = useUserStore();
//收集账号和密码
let loginForm = reactive({ username: "admin", password: "111111" });
console.log(loginForm);
const login = () => {
  //通知仓库发登录请求
  //请求成功跳转首页
  //请求失败 ->弹出登录失败的信息
  useStore.useLogin();
};
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background: url("@/assets/image/bg1.png") no-repeat;
  background-size: cover;
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
