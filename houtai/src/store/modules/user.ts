import { defineStore } from "pinia";

let useUserStore = defineStore("User", {
  state: () => {
    return {};
  },
  actions: {
    //登录方法
    useLogin() {
      console.log(123);
    },
  },
  getters: {},
});
export default useUserStore;
