<template>
  <div class="login-wrap">
    <div class="ms-title">金牛城市管家智慧平台</div>
    <!--      定时触发表单显示-->
    <div class="ms-login">
      <transition name="fade">
        <el-form :model="params" class="ms-content" v-if="seen">
          <el-form-item>
            <el-input v-model="params.username" placeholder="用户名">
              <template #prepend>
                <el-icon>
                  <User/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" v-model="params.password" placeholder="密码">
              <template #prepend>
                <el-icon>
                  <Lock/>
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="login()">登录</el-button>
          </div>
        </el-form>
      </transition>
    </div>
    <div class="ms-bottom">成都市金牛区综合行政执法局</div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import {ref, reactive, onMounted} from "vue";
import {User, Lock} from '@element-plus/icons-vue'
const seen = ref(true)
const params = reactive({
  username: "admin",
  password: "123456"
})

const showForm = () => {
  seen.value = !seen.value
}
//页面加载完成3s后自动显示登录界面
// onMounted(() => {
//   setTimeout(showForm, 3000)
// })

const router = useRouter()
function login(){
  router.push({name:'home'})
}
</script>

<style scoped>

.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/login-bg.jpg);
  background-size: 100%;
}

.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.ms-title {
  position: absolute;
  left: 45%;
  top: 40%;
  margin: -190px 0 0 -175px;
  line-height: 50px;
  text-align: center;
  font-size: 60px;
  color: #fff;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.ms-bottom{
  position: absolute;
  left: 43%;
  bottom: 200px;
  margin: -190px 0 0 -175px;
  line-height: 50px;
  /* text-align: center; */
  font-size: 48px;
  color: #fff;
  font-family:LOGO;
}

/*表单fade显示*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>