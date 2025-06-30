// // stores/user.js
// import { defineStore } from "pinia";
// import { user1, user2 } from "../mock/data";

// interface UserData {
//   article: number;
//   gallery: number;
//   diary: number;
//   avatar: string;
// }

// export const useUserStore = defineStore("user", {
//   state: () => ({
//     userInfo: null as UserData | null,
//     articleCount: 0,
//     galleryCount: 0,
//     diaryCount: 0,
//   }),
//   actions: {
//     // 登录设置用户数据

//     // 清除登录状态
//     clearInfo() {
//       this.userInfo = null;
//       this.articleCount = 0;
//       this.galleryCount = 0;
//       this.diaryCount = 0;
//       localStorage.removeItem("userData");
//     },
//   },
// });
// src/pinia/index.ts
import { defineStore } from "pinia";
import { user1, user2 } from "../mock/data";

interface UserData {
  article: number;
  gallery: number;
  diary: number;
  avatar: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: null as UserData | null,
    articleCount: 0,
    galleryCount: 0,
    diaryCount: 0,
  }),
  actions: {
    // 登录设置用户数据
    async login(username: string, password: string) {
      // 模拟接口请求
      const validUsers = [user1, user2];
      const foundUser = validUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (!foundUser) {
        throw new Error("账号或密码错误");
      }

      this.userInfo = {
        ...foundUser.data,
        avatar: foundUser.avater || "", // 修正拼写错误
      };

      // 更新统计信息
      this.articleCount = foundUser.data.article;
      this.galleryCount = foundUser.data.gallery;
      this.diaryCount = foundUser.data.diary;
      console.log(foundUser);
      // 自动持久化到localStorage
      // 移除手动操作 localStorage 的代码，让插件自动处理持久化
      // localStorage.setItem("userData", JSON.stringify(this.userInfo));
    },
    incrementArticleCount() {
      this.articleCount++;
      if (this.userInfo) {
        this.userInfo.article = this.articleCount;
      }
    },
    // 清除登录状态
    clearInfo() {
      this.userInfo = null;
      this.articleCount = 0;
      this.galleryCount = 0;
      this.diaryCount = 0;
      // 移除手动操作 localStorage 的代码，让插件自动处理持久化
      // localStorage.removeItem("userData");
    },
  },
});
