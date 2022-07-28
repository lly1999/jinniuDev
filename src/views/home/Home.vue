<template>
  <el-container class="container">
    <Header @back="" style="height:60px ;">
      <!-- logo -->
      <template #icon>
         <el-avatar class="logo-icon" :src="require('@/assets/home/logo.jpg')" :size="50"></el-avatar>
      </template>
      <!-- 系统名字 -->
      <template #title>
        <span class="logo-title" >成都市金牛区综合行政执法局</span>
      </template>
      <!-- 用户信息 -->
      <template #userinfo>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{user.username + "（" + user.role + "）"}}
            <el-icon>
              <ArrowDown/>
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </Header>
    <el-container>
      <!-- 大类和子系统栏 -->
      <el-header class="navHeader">
        <div class="title">金牛城市管家智慧平台</div>
        
        <div class="classification" v-if="showDepts">
          <class-item 
            v-for="dept in depts" 
            :key = "dept.deptId"
            @click="switchShowDepts(dept.deptId,dept.deptName)"
            :logo="dept.deptLogo" :name="dept.deptName" styleName="subsysName"></class-item>
        </div>
         <div class="subsys" v-if="!showDepts">
         <div class="subdepts">{{choosedDeptName}}部门</div></div>
        <div class="subsys" v-if="!showDepts">
          
          <class-item
            v-for="system in choosedSystems"
            :key="system.systemId"
            @click="show(system.to, system.systemName)"
            :logo="system.systemLogo" :name="system.systemName" styleName="subsysName">
          </class-item>
        </div>
        <div class="subsys" v-if="!showDepts">
        <div style="padding-left:15px;margin-top: 20px;">
            <el-icon color="#000000" size="20px" @click="switchShowDepts(-1)" style="cursor:pointer;">
              <svg t="1656145922576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1267" width="32" height="32"><path d="M587.776 961.536q-60.416 0-117.248-25.6t-101.376-69.632-71.168-101.888-26.624-122.368l0-39.936q0-23.552-0.512-50.688t-0.512-53.76l0-48.128q0-29.696-6.144-47.104t-26.624-16.384q-15.36 0-35.328-0.512t-36.352-0.512q-26.624 0-34.304-14.336t10.752-37.888q18.432-24.576 43.52-56.32t51.712-65.536 52.224-66.56 46.08-58.368q18.432-23.552 34.816-24.064t34.816 20.992q18.432 22.528 43.52 52.736t51.712 62.976 52.224 64.512 46.08 56.32q22.528 26.624 17.408 44.544t-32.768 17.92q-8.192 0-19.968 0.512t-25.088 1.024-25.6 1.024-21.504 0.512q-19.456 0-24.064 11.776t-4.608 32.256q1.024 46.08 1.024 103.424l0 106.496q0 23.552 10.752 47.104t28.672 43.008 41.472 31.744 50.176 12.288l71.68 0q40.96 0 79.36-0.512t67.072-0.512l35.84 0q22.528 0 37.376 13.824t22.528 34.816 7.68 45.568-7.168 45.568-20.992 34.816-34.304 13.824l-27.648 0-48.128 0q-26.624 0-56.832 0.512t-57.856 0.512l-47.104 0-28.672 0z" p-id="1268"></path></svg>
            </el-icon>
          </div>
        </div>
        <!-- <el-row class="classification" :gutter="20" v-if="showDepts" justify="space-around">
          <el-col :span="Math.floor(24 / depts.length)" 
            v-for="dept in depts" 
            :key="dept.deptId"
            @click="switchShowDepts(dept.deptId)">
            <class-item :logo="dept.deptLogo" :name="dept.deptName" styleName="className"></class-item>
          </el-col>
        </el-row> -->
        <!-- <el-row class="subsys" :gutter="20" v-if="!showDepts" justify="start">
          <el-col :span="1">
            <el-icon color="#ffffff" size="20px" @click="switchShowDepts(-1)" style="cursor:pointer;">
              <svg t="1656145922576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1267" width="32" height="32"><path d="M587.776 961.536q-60.416 0-117.248-25.6t-101.376-69.632-71.168-101.888-26.624-122.368l0-39.936q0-23.552-0.512-50.688t-0.512-53.76l0-48.128q0-29.696-6.144-47.104t-26.624-16.384q-15.36 0-35.328-0.512t-36.352-0.512q-26.624 0-34.304-14.336t10.752-37.888q18.432-24.576 43.52-56.32t51.712-65.536 52.224-66.56 46.08-58.368q18.432-23.552 34.816-24.064t34.816 20.992q18.432 22.528 43.52 52.736t51.712 62.976 52.224 64.512 46.08 56.32q22.528 26.624 17.408 44.544t-32.768 17.92q-8.192 0-19.968 0.512t-25.088 1.024-25.6 1.024-21.504 0.512q-19.456 0-24.064 11.776t-4.608 32.256q1.024 46.08 1.024 103.424l0 106.496q0 23.552 10.752 47.104t28.672 43.008 41.472 31.744 50.176 12.288l71.68 0q40.96 0 79.36-0.512t67.072-0.512l35.84 0q22.528 0 37.376 13.824t22.528 34.816 7.68 45.568-7.168 45.568-20.992 34.816-34.304 13.824l-27.648 0-48.128 0q-26.624 0-56.832 0.512t-57.856 0.512l-47.104 0-28.672 0z" p-id="1268"></path></svg>
            </el-icon>
          </el-col>
          <el-col :span="Math.floor(23 / choosedSystems.length)" 
            v-for="system in choosedSystems"
            :key="system.systemId"
            @click="show(system.to, system.systemName)">
            <class-item :logo="system.systemLogo" :name="system.systemName" styleName="subsysName"></class-item>
          </el-col>
        </el-row> -->
        <!-- 背景图片-->
      </el-header>
      <div class="background" v-if="showDepts">
          <img src="@/assets/home/background-00.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>
      <div class="background" v-if="choosedDept===0">
          <img src="@/assets/home/background2.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>
<div class="background" v-if="choosedDept===1">
          <img src="@/assets/home/background3.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>
<div class="background" v-if="choosedDept===2">
          <img src="@/assets/home/background5.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>
        <div class="background" v-if="choosedDept===3">
          <img src="@/assets/home/background-hjws.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>
        <div class="background" v-if="choosedDept===4">
          <img src="@/assets/home/background-ggzp.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>
        <div class="background" v-if="choosedDept===5">
          <img src="@/assets/home/background4.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>
        <div class="background" v-if="choosedDept===6">
          <img src="@/assets/home/background6.jpg" width="10000"  style="overflow-y:auto;overflow-x: auto;">
        </div>

      <!-- 页面显示区域 -->
      <el-main  class="main">
        <main-info
            v-for="(item, idx) in choosedSystems"
            :key="idx"
            :system-name="item.systemName"
            :url = "item.url"
            :logo="item.systemLogo"
            :info-list="item.data"
            :image = "item.image">
        </main-info>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import 'element-plus/theme-chalk/display.css'
import { ArrowDown} from '@element-plus/icons-vue'
import {ref, reactive, computed, onBeforeMount, onMounted} from "vue";
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

import MainInfo from '@/views/home/components/MainInfo.vue'
import ClassItem from '@/views/home/components/ClassItem.vue'
import Header from "@/components/Header.vue"
import {get, getDeptList, getSystemList} from '@/api/home.js'

//用户信息
const user = reactive({
  username: '张三',
  role: '管理员'
})


//部门列表, 从后端获取
const depts = ref([])
onBeforeMount(() => {
  getDeptList()
    .then(response => {
      depts.value = response
    })
})

// 系统列表
const systems = ref([])
onMounted(() => {
  getSystemList().then(data => {
    systems.value = data
    // 请求各个子系统要显示的数据
    systems.value.forEach(system => {
      if(system.api !== ''){
        get(system.api).then(data => system.data = data)
      }
    })
  })
})
//选中的部门
// -1表示全选，为默认值
const choosedDept = ref(-1)
const choosedDeptName =ref()
//选中部门对应的子系统
const choosedSystems = computed(() => {
  //过滤函数
  let filterFun = (system) => {
    // 只显示选中部门的子系统
    return system.deptId === choosedDept.value
  }
  //显示所有部门的子系统
  if (choosedDept.value === -1) {
    filterFun = () => true
  }

  return systems.value
    .filter(filterFun)
    // .filter(system => {
    //   console.log(system)
    //   // 只显示有数据的子系统
    //   return system.data && system.data.length != 0
    // })
})

// 切换显示部门和子系统
const showDepts=ref(true)
function switchShowDepts(deptId,deptName){
  choosedDept.value = deptId
  showDepts.value = !showDepts.value
  choosedDeptName.value = deptName
}

const router = useRouter()
// 跳转到to指定的子系统汇总页面
function show(to, subsysName){
  if(to === ''){ll
    ElMessage({
      showClose: true,
      message: '正在开发中...'
    })
  }else{
    router.push({name: to, params:{subsysName}})
  }
}

function logout(){
  //TODO 清除登录信息
  router.back()
}
</script>

<style scoped>

.container{
  display: flex;
  flex-direction: column;
}

.navHeader{
  background-color: #fff;
  color: #000;
  margin-left: -20px;
  margin-right: -20px;
  height: initial;
  display:flex;
}
.title{
  padding: 25px;
  font-size:32px;
  margin-left: 10px;
  margin-bottom: 10px;
  white-space: nowrap

}
.classification, .subsys{
  /**保持子系统栏与标题栏背景色一致 */
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  text-align: center;
  
  
}

.main{
  display: flex;
  flex-wrap: wrap;/*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
  justify-content: center;
}

.logo-title {
  font-size: x-large;
  color: #fff;
  line-height: 60px;
}

.background
{
  display: flex;
  flex-wrap: wrap;
  width:200;
}

.subdepts{
  padding: 0px;
  font-size:20px;
  margin-left: -25px;
  margin-top: 15px;
  white-space: nowrap;
  float: left;
  text-decoration: underline;
}
</style>