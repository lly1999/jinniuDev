<template>
  <el-container class="container">
    <Header style="height:60px " :icon="null">

      <!-- 系统名字 -->
      <template #title>
        <span class="text-title">成都市金牛区综合行政执法局,欢迎您~</span>
      </template>
      <!-- 时间 -->

      <template #time>
        <div class="text-week">
          今天是: {{ date }} {{ week }}
        </div>
      </template>

      <!-- 用户信息 -->
      <template #userinfo>
        <div class="router">
          <el-button class="buttonToMap" plain link color="fff" @click="toMap" size="large">前往地图主页</el-button>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ params.username + "（" + params.role + "）" }}
            <el-icon>
              <ArrowDown />
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
        <!-- logo -->

        <el-image class="text-logo" :src="require('@/assets/home/logo-title.jpg')" fit="scale-down"></el-image>
        <div class="classification" v-if="showDepts">
          <class-item v-for="dept in depts" :key="dept.deptId" @click="switchShowDepts(dept.deptId, dept.deptName)"
            :logo="dept.deptLogo" :name="dept.deptName" styleName="subsysName"></class-item>
        </div>
        <!-- <div class="subsys" v-if="!showDepts">
            <div class="subdepts">{{choosedDeptName}}</div>
          </div> -->
        <div class="subsys" v-if="!showDepts">

          <class-item v-for="system in choosedSystems" :key="system.systemId" @click="show(system.to, system.url)"
            :logo="system.systemLogo" :name="system.systemName" styleName="subsysName">
          </class-item>
        </div>
        <div class="subsys" v-if="!showDepts">
          <div style="padding-left:15px;margin-top: 20px;">
            <el-icon color="#000000" size="20px" @click="backtoHome()" style="cursor:pointer;">
              <svg t="1656145922576" class="icon" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1267" width="32" height="32">
                <path
                  d="M587.776 961.536q-60.416 0-117.248-25.6t-101.376-69.632-71.168-101.888-26.624-122.368l0-39.936q0-23.552-0.512-50.688t-0.512-53.76l0-48.128q0-29.696-6.144-47.104t-26.624-16.384q-15.36 0-35.328-0.512t-36.352-0.512q-26.624 0-34.304-14.336t10.752-37.888q18.432-24.576 43.52-56.32t51.712-65.536 52.224-66.56 46.08-58.368q18.432-23.552 34.816-24.064t34.816 20.992q18.432 22.528 43.52 52.736t51.712 62.976 52.224 64.512 46.08 56.32q22.528 26.624 17.408 44.544t-32.768 17.92q-8.192 0-19.968 0.512t-25.088 1.024-25.6 1.024-21.504 0.512q-19.456 0-24.064 11.776t-4.608 32.256q1.024 46.08 1.024 103.424l0 106.496q0 23.552 10.752 47.104t28.672 43.008 41.472 31.744 50.176 12.288l71.68 0q40.96 0 79.36-0.512t67.072-0.512l35.84 0q22.528 0 37.376 13.824t22.528 34.816 7.68 45.568-7.168 45.568-20.992 34.816-34.304 13.824l-27.648 0-48.128 0q-26.624 0-56.832 0.512t-57.856 0.512l-47.104 0-28.672 0z"
                  p-id="1268"></path>
              </svg>
            </el-icon>
          </div>
        </div>

      </el-header>

      <div class="background" v-if="choosedDept === 0">
        <img src="@/assets/home/banner-hjws.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
      </div>




      <!-- 页面显示区域 -->
      <el-main class="main">



        <!-- <div class="classification-title" v-if="choosedDept==-1|choosedDept==0">
            环境卫生
            <main-info v-for="(item, idx) in choosedSystems" :key="idx" :systemName="item.systemName" :url="item.url"
              :logo="item.systemLogo" :info-list="item.data" :image="item.image" :to="item.to" :deptId="item.deptId">
            </main-info>
          </div> -->
        <!-- <el-divider v-if="choosedDept==-1|choosedDept==0" /> -->


        <div class="environment-box">
          <div @click="garbage_classify_click"
            :class="garbage_classify_selected == false ? 'garbage-classify' : 'garbage-classify garbage-classify-select'">
            <img v-if="garbage_classify_selected == false" class="garbage-classify-icon"
              src="@/assets/images/environment/garbage-classify-default.png" alt="">
            <img v-if="garbage_classify_selected == true" class="garbage-classify-icon"
              src="@/assets/images/environment/garbage-classify-selected.png" alt="">
            <div
              :class="garbage_classify_selected == false ? 'garbage-classify-text' : 'garbage-classify-text garbage-classify-text-select'">
              环卫作业运行管家</div>
          </div>
          <div @click="garbage_transport_click"
            :class="garbage_transport_selected == false ? 'garbage-transport' : 'garbage-transport garbage-transport-select'">
            <img v-if="garbage_transport_selected == false" class="garbage-transport-icon"
              src="@/assets/images/environment/garbage-transport-default.png" alt="">
            <img v-if="garbage_transport_selected == true" class="garbage-transport-icon"
              src="@/assets/images/environment/truck.png" alt="">
            <div
              :class="garbage_transport_selected == false ? 'garbage-transport-text' : 'garbage-transport-text garbage-transport-text-select'">
              餐厨垃圾收运管家</div>
          </div>
          <div @click="garbage_compress_click"
            :class="garbage_compress_selected == false ? 'garbage-compress' : 'garbage-compress garbage-compress-select'">
            <img v-if="garbage_compress_selected == false" class="garbage-compress-icon"
              src="@/assets/images/environment/garbage-compress-default.png" alt="">
            <img v-if="garbage_compress_selected == true" class="garbage-compress-icon"
              src="@/assets/images/environment/garbage-compress-selected.png" alt="">
            <div
              :class="garbage_compress_selected == false ? 'garbage-compress-text' : 'garbage-compress-text garbage-compress-text-select'">
              垃圾数据归集管家</div>
          </div>

          <div
            :class="garbage_classify_selected == true ? 'environment-right classify-select' : garbage_transport_selected == true ? 'environment-right transport-select' : 'environment-right compress-select'">
            <div class="environment-right-content" v-for="environment_item in environments" :key="environment_item.id">
              <img v-if="garbage_classify_selected == true" class="content-number-img"
                src="@/assets/images/environment/1.png" alt="">
              <img v-else-if="garbage_transport_selected == true" class="content-number-img"
                src="@/assets/images/environment/2.png" alt="">
              <img v-else-if="garbage_compress_selected == true" class="content-number-img"
                src="@/assets/images/environment/3.png" alt="">

              <div class="transport-content-title">{{ environment_item.title }}</div>
              <div class="content-title-en">{{ environment_item.title_en }}</div>
              <div v-if="garbage_compress_selected == true" class="content-number">①金牛区今日垃圾总数: {{
                  environment_item.not_accept
              }}；②红星垃圾站垃圾总数:
                {{ environment_item.not_processed }}；②红星垃圾站垃圾总数: {{ environment_item.processing }}；</div>

              <div v-else-if="garbage_transport_selected == true" class="content-number">①年度收运量累积(吨): {{
                  ccljData_year
              }}；②当月收运量累积(吨):
                {{ ccljData_month }}；③当日收运量累积(吨): {{ ccljData_day }}；④总收运点位数（个）:
                {{ ccljData_sites }}</div>

              <div v-else class="content-number">①查询记录总重: {{ shlj_data }}；②垃圾记录总数:
                {{ shlj_num }}； </div>
              <div class="check-details">查看详情</div>
              <img class="detail-img" src="@/assets/images/environment/more-detail.png" alt="">
            </div>
          </div>
        </div>

        <el-image class="banner" :src="require('@/assets/home/banner.jpg')" style="">

        </el-image>
      </el-main>

    </el-container>
    <!-- 底部信息栏 -->
    <!-- <el-container>
        <el-footer class="footer">
          <div class="foot-info">
            
            <li>Copyright 2022 http://zhxzzfj.XXXX.gov.cn All Rights Reserved</li>
            <li>川公网安备 XXXXXXXXXXX号 ICP备案：蜀ICP备XXXXXXXX号 网站标识码：XXXXXXXXXX</li>
            <li>主办：成都市金牛区综合行政执法局 地址：金牛区某街道某门牌号　电话：XXXX-XXXXXX</li>
          </div>
        </el-footer>
      </el-container> -->
  </el-container>
</template>
  
<script setup>
import 'element-plus/theme-chalk/display.css'
import { ArrowDown } from '@element-plus/icons-vue'
import { ref, reactive, computed, onBeforeMount, onMounted } from "vue";
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import MainInfo from '@/views/home/components/MainInfo.vue'
import ClassItem from '@/views/home/components/ClassItem.vue'
import Header from "@/components/Header.vue"
import { get, getDeptList, getSystemList } from '@/api/home.js'
import { getMainGarbage } from '@/api/garbage';
import { getMainCclj } from '@/api/cclj.js';
import { getMainShlj } from '@/api/shlj.js';
import { params } from '@/store/store.js'

const data = ref([])

const today = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
const tomorrow = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() + 1)

const imgVisible = ref(true)
//用户信息
const user = reactive({
  username: '张三',
  role: '管理员'
})
//日期 周
let date = new Date().toLocaleDateString();
var a = new Array("日", "一", "二", "三", "四", "五", "六");
var str = new Date().getDay();
var week = "星期" + a[str];
const total_hongxing = ref(0)
const total_xihua = ref(0)
const total_jinniu = ref(0)
const ccljData_year = ref(0)
const ccljData_month = ref(0)
const ccljData_day = ref(0)
const ccljData_sites = ref(0)
const shlj_data = ref(0)
const shlj_num = ref(0)
function toSystem(item) {
  router.push({ name: item.to, params: item.systemName })
}
//部门列表, 从后端获取
const depts = ref([])
onBeforeMount(() => {
  getDeptList()
    .then(response => {
      depts.value = response
    })
  getMainGarbage().then(data => {
    total_hongxing.value = data[2].infoVal
    total_xihua.value = data[1].infoVal
    total_jinniu.value = data[0].infoVal

  })
  // getMainShlj().then(data => {
  //   shlj_num.value = data[1].infoVal
  //   shlj_data.value = data[0].infoVal

  // })
  getMainCclj().then(data => {
    ccljData_year.value = data[0].infoVal
    ccljData_month.value = data[1].infoVal
    ccljData_day.value = data[2].infoVal
    ccljData_sites.value = data[3].infoVal


  })
})
// 系统列表
const systems = ref([])
onMounted(() => {
  getSystemList().then(data => {
    systems.value = data
    // 请求各个子系统要显示的数据
    systems.value.forEach(system => {
      if (system.api !== '') {
        //get(system.api).then(data => system.data = data)
      }
    })
  })
})
//选中的部门
// -1表示全选，为默认值
const choosedDept = ref(0)
const choosedDeptName = ref()
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
const showDepts = ref(false)
function switchShowDepts(deptId, deptName) {
  choosedDept.value = deptId
  showDepts.value = !showDepts.value
  choosedDeptName.value = deptName
  if (deptId != 1) {
    imgVisible.value = false
  }
  if (deptId == -1) {
    imgVisible.value = true

  }
}

const router = useRouter()
// 跳转到to指定的子系统汇总页面
function show(to, url) {
  window.open(url)
  // if (to === '') {
  //   ll
  //   ElMessage({
  //     showClose: true,
  //     message: '正在开发中...'
  //   })
  // } else {
  //   router.push({ name: to, params: { subsysName } })
  // }
}
function toMap() {
  router.push('/map')
}
function logout() {
  //TODO 清除登录信息
  router.push('/login')
}
function backtoHome() {
  router.push('/home')
}
let garbage_classify_selected = ref(true);
let garbage_transport_selected = ref(false);
let garbage_compress_selected = ref(false);
let garbage_collect_selected = ref(false);
let environments = reactive([]);
let garbage_classify = reactive({});
let garbage_transport = reactive({});
let garbage_compress = reactive({});
let garbage_collect = reactive({});
const garbage_classify_click = () => {
  environments.splice(0, environments.length);

  garbage_classify['title'] = "环卫作业运行管家";
  garbage_classify['title_en'] = "Classification Of Domestic Waste";
  garbage_classify['not_accept'] = 23;
  garbage_classify['not_processed'] = 23;
  garbage_classify['processing'] = 23;
  garbage_classify['processed'] = 23;
  garbage_classify['returned'] = 23;

  environments.push(garbage_classify);
  garbage_classify_selected.value = true;
  garbage_transport_selected.value = false;
  garbage_compress_selected.value = false;
}

garbage_classify_click();

const garbage_transport_click = () => {
  environments.splice(0, environments.length);

  garbage_transport['title'] = "厨余垃圾收运管家";
  garbage_transport['title_en'] = "Food Waste Collection And Transportation Management";
  garbage_transport['not_accept'] = 123;
  garbage_transport['not_processed'] = 23;
  garbage_transport['processing'] = 23;
  garbage_transport['processed'] = 23;
  garbage_transport['returned'] = 23;

  environments.push(garbage_transport);
  garbage_classify_selected.value = false;
  garbage_transport_selected.value = true;
  garbage_compress_selected.value = false;
}

const garbage_compress_click = () => {
  environments.splice(0, environments.length);

  garbage_compress['title'] = "垃圾数据归集管家";
  garbage_compress['title_en'] = "Garbage Collection Management";
  garbage_compress['not_accept'] = total_jinniu.value + "吨";
  garbage_compress['not_processed'] = total_hongxing.value + "吨";
  garbage_compress['processing'] = total_xihua.value + "吨";
  garbage_compress['processed'] = 23;
  garbage_compress['returned'] = 23;

  environments.push(garbage_compress);
  garbage_classify_selected.value = false;
  garbage_transport_selected.value = false;
  garbage_compress_selected.value = true;
}

</script>
  
<style scoped>
.img-wrapper {
  background-image: url('@/assets/srzx/total.png');
  background-size: 100%;
  width: 100%;
  display: flex;
  height: 580px;
}

.classification-title {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
  font-size: 40px;
  color: #1677D9;
  margin-left: 5%;
  margin-top: 15px;
}

.banner {
  width: 100%;
}

.text-week {
  margin-left: 20px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 100%;
}

.text-title {
  margin-left: 20px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 30%;
  padding: 5px;
}

.text-logo {
  margin-left: 20px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 30%;
  padding: 5px;
}

.buttonToMap {
  font-size: large;
  color: #fff;
}

.el-dropdown-link {
  font-size: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  color: #004B8C;
}

.navHeader {
  background-color: #fff;
  color: #004B8C;
  margin-left: -20px;
  margin-right: -20px;
  height: initial;
  display: flex;
}

.title {
  padding: 25px;
  font-size: 40px;
  margin-left: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
  letter-spacing: 3px;

}

.subsys {
  /**保持子系统栏与标题栏背景色一致 */
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  text-align: center;

}

.classification {
  /**保持子系统栏与标题栏背景色一致 */
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  text-align: center;
  float: right;
  margin-left: 5%;


}

.main {
  display: flex;
  flex-wrap: wrap;
  /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
  justify-content: center;
}

.logo-title {
  margin-left: 40px;
  font-size: large;
  color: #fff;
  line-height: 60px;
  width: 25%;
  padding: 5px;
}

.background {
  display: flex;
  flex-wrap: wrap;
  width: 200;
}

.subdepts {
  padding: 0px;
  font-size: 25px;
  margin-left: -25px;
  margin-top: 50%;
  white-space: nowrap;
  float: left;
  text-decoration: underline;
}

.router {
  padding: 15px;
  font-size: 25px;
  margin-left: 10px;
  margin-top: -3px;
  white-space: nowrap;
  letter-spacing: 3px;
}

.logo-icon {
  margin-top: 25px;
  margin-left: 20px;
}

.footer {
  width: 100%;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  line-height: 32px;
  background: #004B8C;
  height: 120px;
}

.foot-info {
  padding: 10px;
}

.el-button-succeed {
  width: 180px;
  flex-wrap: wrap;
  font-size: 20px;
  color: #1677D9;
}

.el-button-null {
  font-size: 20px;
  color: gray;
}



.environment-box {
  margin-top: 10vh;
  margin-right: 70vw;
  height: 60vh;
  position: relative;
}

.garbage-classify {
  width: 256px;
  height: 156px;
  background: #F5F7F9;
  cursor: pointer;
  position: absolute;
}

.garbage-classify-select {
  background-image: url('@/assets/images/environment/rubbish-classify.png');

}

.garbage-transport {
  width: 256px;
  height: 156px;
  top: 176px;
  background: #F5F7F9;
  position: absolute;
  cursor: pointer;
}

.garbage-transport-select {
  background-image: url('@/assets/images/environment/rubbish-transport.png');
}

.garbage-compress {
  width: 256px;
  height: 156px;
  top: 352px;
  background: #F5F7F9;
  position: absolute;
  cursor: pointer;
}

.garbage-compress-select {
  background-image: url("@/assets/images/environment/garbage-compression.png");
}

.garbage-classify-icon {
  width: 32px;
  height: 32px;
  top: 44px;
  left: 112px;
  position: absolute;
}

.garbage-classify-text {
  width: 108px;
  height: 25px;
  top: 88px;
  left: 74px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #333333;
  text-align: center;
  position: absolute;
}

.garbage-classify-text-select {
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
}

.garbage-transport-icon {
  width: 32px;
  height: 32px;
  top: 44px;
  left: 112px;
  position: absolute;
}

.garbage-transport-text {
  width: 144px;
  height: 25px;
  top: 88px;
  left: 56px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #333333;
  text-align: center;
  position: absolute;
}

.garbage-transport-text-select {
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
}

.garbage-compress-icon {
  width: 32px;
  height: 32px;
  top: 44px;
  left: 112px;
  position: absolute;
}

.garbage-compress-text {
  width: 126px;
  height: 25px;
  top: 88px;
  left: 65px;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #333333;
  text-align: center;
  position: absolute;
}

.garbage-compress-text-select {
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
}

.environment-right {
  width: 904px;
  height: 508px;
  left: 296px;
  position: absolute;
}

.classify-select {
  background-image: url('@/assets/images/environment/classify.png');
}

.transport-select {
  background-image: url('@/assets/images/environment/transport.png');
}

.compress-select {
  background-image: url('@/assets/images/environment/compress.png');
}

.environment-right-content {
  width: 100%;
  height: 219px;
  background: rgba(22, 119, 217, 0.55);
  position: absolute;
  bottom: 0;
}

.content-number-img {
  width: 120px;
  height: 32px;
  position: absolute;
  top: 22px;
  left: 28px;
}

.classify-content-title {
  width: 144px;
  height: 33px;
  position: absolute;
  top: 57px;
  left: 24px;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #FFFFFF;
}

.transport-content-title {
  width: 192px;
  height: 33px;
  position: absolute;
  top: 57px;
  left: 24px;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #FFFFFF;
}

.compress-content-title {
  width: 168px;
  height: 33px;
  position: absolute;
  top: 57px;
  left: 24px;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #FFFFFF;
}

.content-title-en {
  width: 397px;
  height: 20px;
  opacity: 0.8;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
  position: absolute;
  top: 92px;
  left: 24px;
}

.content-number {
  width: 856px;
  height: 24px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 24px;
  position: absolute;
  top: 136px;
  left: 24px;
}

.check-details {
  width: 56px;
  height: 20px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
  position: absolute;
  left: 24px;
  bottom: 24px;
}

.detail-img {
  width: 12px;
  height: 12px;
  position: absolute;
  left: 84px;
  bottom: 28px;
}
</style>