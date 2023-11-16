import router from "@/router";
import { getToken,removeToken } from "@/composables/auth";
import store from "@/store/index.js";


router.beforeEach(async (to, from, next) => {
  //获取token
  const token = getToken();
  if (!token && to.path != "/login") {
    return next({ path: "/login" });
  }
  //防止重复登录
    if (token && to.path == "/login") {
      router.push("/login")
      removeToken();
     
  }

  if (token) {
    await store.dispatch("getInfo");
  }
  //放行
  next();
});