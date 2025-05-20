//用户信息数据
//此函数会返回一个数组，数组里面包含两个用户信息
// createUserList: 此函数会返回一个数组，数组里面包含两个用户信息

function createUserList() {
  return [
    {
      userId: 1,
      avatar: "https://example.com/avatar1.jpg",
      username: "admin",
      password: "111111",
      desc: "系统管理员",
      roles: ["系统管理员"],
      buttons: ["users:manage", "users:create"],
      routes: ["dashboard", "users", "settings"],
      token: "Admin-Token",
    },
    {
      userId: 2,
      avatar: "https://example.com/avatar2.jpg",
      username: "system",
      password: "111111",
      desc: "系统用户",
      roles: ["系统用户"],
      buttons: ["users:detail", "users:user"],
      routes: ["home", "detail"],
      token: "System-Token",
    },
  ];
}
// 对外暴露数组,数组里面包含两个接口
// 定义登录请求体类型
export default [
  {
    // 用户登录接口
    url: "/api/user/login", //请求地址
    method: "post", //请求方式
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body;
      //调用获取用户信息函数，用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      );
      //没有用户返回失败信息
      if (!checkUser) {
        return { code: 201, data: { message: "账号或者密码不正确" } };
      }
      //如果有返回成功信息
      const { token } = checkUser;
      return { code: 200, data: { token } };
    },
  },
];
