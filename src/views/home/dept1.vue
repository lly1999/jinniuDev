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
                    <class-item v-for="dept in depts" :key="dept.deptId"
                        @click="switchShowDepts(dept.deptId, dept.deptName)" :logo="dept.deptLogo" :name="dept.deptName"
                        styleName="subsysName"></class-item>
                </div>
                <!-- <div class="subsys" v-if="!showDepts">
          <div class="subdepts">{{choosedDeptName}}</div>
        </div> -->
                <div class="subsys" v-if="!showDepts">

                    <class-item v-for="system in choosedSystems" :key="system.systemId"
                        @click="show(system.systemId, system.url)" :logo="system.systemLogo" :name="system.systemName"
                        styleName="subsysName">
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

            <div class="background" v-if="choosedDept === 1">
                <img src="@/assets/home/banner-srzx.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
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

                <div class="city-scape">
                    <div class="city-scape-left">
                        <div class="city-scape-left-one" @click="one_clicked">
                            <div
                                :class="one_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                                <div
                                    :class="one_selected == true ? 'left-number left-number-text-selected' : 'left-number'">
                                    1</div>
                            </div>
                            <div
                                :class="one_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'">
                                <p>综合行政管理</p>
                                <p>管理执法智慧服务管家</p>
                            </div>
                            <div :class="one_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
                        </div>

                        <div class="city-scape-left-two" @click="two_clicked">
                            <div
                                :class="two_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                                <div
                                    :class="two_selected == true ? 'left-number left-number-text-selected' : 'left-number'">
                                    2</div>
                            </div>
                            <div :class="two_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                                style="top: 38px; left: 60px">
                                餐饮油烟管家
                            </div>
                            <div :class="two_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
                        </div>

                        <div class="city-scape-left-three" @click="three_clicked">
                            <div
                                :class="three_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                                <div
                                    :class="three_selected == true ? 'left-number left-number-text-selected' : 'left-number'">
                                    3
                                </div>
                            </div>
                            <div :class="three_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                                style="top: 38px; left: 60px">
                                调度指挥管家
                            </div>
                            <div :class="three_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
                        </div>

                        <div class="city-scape-left-four" @click="four_clicked">
                            <div
                                :class="four_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                                <div
                                    :class="four_selected == true ? 'left-number left-number-text-selected' : 'left-number'">
                                    4
                                </div>
                            </div>
                            <div :class="four_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                                style="top: 25px; left: 60px">
                                <p>扬尘治理</p>
                                <p>大数据协同管家</p>
                            </div>
                            <div :class="four_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
                        </div>

                        <div class="city-scape-left-five" @click="five_clicked">
                            <div
                                :class="five_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                                <div
                                    :class="five_selected == true ? 'left-number left-number-text-selected' : 'left-number'">
                                    5
                                </div>
                            </div>
                            <div :class="five_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                                style="top: 37px; left: 60px">
                                共享单车管家
                            </div>
                            <div :class="five_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
                        </div>

                        <div class="city-scape-left-six" @click="six_clicked">
                            <div
                                :class="six_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                                <div
                                    :class="six_selected == true ? 'left-number left-number-text-selected' : 'left-number'">
                                    6</div>
                            </div>
                            <div :class="six_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                                style="top: 37px; left: 60px">
                                街面图像综合应用管家
                            </div>
                            <div :class="six_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
                        </div>
                        <div class="extra-col-line"></div>
                    </div>

                    <div class="city-scape-right" v-for="system_info in systems" :key="system_info.id">
                        <img v-if="one_selected == true" class="right-number-img" src="@/assets/images/city/number1.png"
                            alt="">
                        <img v-if="two_selected == true" class="right-number-img" src="@/assets/images/city/number2.png"
                            alt="">
                        <img v-if="three_selected == true" class="right-number-img"
                            src="@/assets/images/city/number3.png" alt="">
                        <img v-if="four_selected == true" class="right-number-img"
                            src="@/assets/images/city/number4.png" alt="">
                        <img v-if="five_selected == true" class="right-number-img"
                            src="@/assets/images/city/number5.png" alt="">
                        <img v-if="six_selected == true" class="right-number-img" src="@/assets/images/city/number6.png"
                            alt="">

                        <div class="system-name">{{ system_info.name }}</div>
                        <div class="system-name-en">{{ system_info.name_en }}</div>

                        <img v-if="one_selected == true" class="right-bg" src="@/assets/images/city/bg1.png" alt="">
                        <img v-if="two_selected == true" class="right-bg" src="@/assets/images/city/bg2.png" alt="">
                        <img v-if="three_selected == true" class="right-bg" src="@/assets/images/city/bg3.png" alt="">
                        <img v-if="four_selected == true" class="right-bg" src="@/assets/images/city/bg4.png" alt="">
                        <img v-if="five_selected == true" class="right-bg" src="@/assets/images/city/bg5.png" alt="">
                        <img v-if="six_selected == true" class="right-bg" src="@/assets/images/city/bg6.png" alt="">

                        <div class="system-content">
                            <img v-if="one_selected == true" class="content-bg" src="@/assets/images/city/content1.png"
                                alt="">
                            <img v-if="two_selected == true" class="content-bg" src="@/assets/images/city/content2.png"
                                alt="">
                            <img v-if="three_selected == true" class="content-bg"
                                src="@/assets/images/city/content3.png" alt="">
                            <img v-if="four_selected == true" class="content-bg" src="@/assets/images/city/content4.png"
                                alt="">
                            <img v-if="five_selected == true" class="content-bg" src="@/assets/images/city/content5.png"
                                alt="">
                            <img v-if="six_selected == true" class="content-bg" src="@/assets/images/city/content6.png"
                                alt="">

                            <div class="system-content-test">
                                <p v-for="item in system_info.items" :key="item.id">{{ item.desc }}：{{ item.value }}</p>
                            </div>
                            <img class="check-img" src="@/assets/images/city/check.png" alt="">
                        </div>
                    </div>
                </div>



            </el-main>
            <el-image class="banner" :src="require('@/assets/home/banner.jpg')" style="">

            </el-image>
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
import { getMainInfoYyxt } from '@/api/yyxt.js'
import { getMainXzzf } from '@/api/xzzf.js'
import { getTokenGxdc, getMainGxdc } from "@/api/gxdc";
import { params } from '@/store/store.js'

const tableDataYyxt = ref([])
const tableDataXzzf = ref([])
const tableDataGxdc = ref([])
const gxdc = reactive({ url: '' })
const gxdcUrl = ref('')

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
    getMainInfoYyxt().then(data => {
        tableDataYyxt.value = data
        canyin_info[0].value = tableDataYyxt.value[0].infoVal
        canyin_info[1].value = tableDataYyxt.value[1].infoVal
        canyin_info[2].value = tableDataYyxt.value[2].infoVal
        canyin_info[3].value = tableDataYyxt.value[3].infoVal
        canyin_info[4].value = tableDataYyxt.value[4].infoVal

    })
    // getMainXzzf().then(data => {
    //     tableDataXzzf.value = data
    //     zonghe_info[0].value = data[0].infoVal
    //     zonghe_info[1].value = data[1].infoVal
    //     zonghe_info[2].value = data[2].infoVal
    //     zonghe_info[3].value = data[3].infoVal
    //     zonghe_info[4].value = data[4].infoVal

    // })
    getTokenGxdc().then(data => {
        gxdcUrl.value = data
        gxdc.url = 'http://1.14.108.100/manage/?token=' + gxdcUrl.value
        console.log(gxdc.url)
    })
    getMainGxdc().then(data => {
        tableDataGxdc.value = data
        danche_info[0].value = data[0].infoVal
        danche_info[1].value = data[1].infoVal
        danche_info[2].value = data[2].infoVal
        danche_info[3].value = data[3].infoVal
        danche_info[4].value = data[4].infoVal
    })

}


)

// 系统列表
const systemss = ref([])
onMounted(() => {
    getSystemList().then(data => {
        systemss.value = data
        // 请求各个子系统要显示的数据
        systemss.value.forEach(system => {
            if (system.api !== '') {
                // get(system.api).then(data => system.data = data)
            }
        })
    })
})
//选中的部门
// -1表示全选，为默认值
const choosedDept = ref(1)
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

    return systemss.value
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
function show(id, url) {
    if (url === '') {

        ElMessage({
            showClose: true,
            message: '正在开发中...'
        })
    } else {
        // router.push({ name: to, params: { subsysName } })
        if (id != '14')
            window.open(url)
        if (id == '14')
            window.open(gxdc.url)
    }
    // if (to === '') {
    //     ll
    //     ElMessage({
    //         showClose: true,
    //         message: '正在开发中...'
    //     })
    // } else {
    //     router.push({ name: to, params: { subsysName } })
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
let one_selected = ref(false);
let two_selected = ref(false);
let three_selected = ref(false);
let four_selected = ref(false);
let five_selected = ref(false);
let six_selected = ref(false);
let systems = reactive([]);
let system_zonghe = reactive({});
let system_canyin = reactive({});
let system_diaodu = reactive({});
let system_yangchen = reactive({});
let system_danche = reactive({});
let system_jiemiantuxiang = reactive({});
let zonghe_info = [
    { desc: "今日结案", value: "" },
    { desc: "今日上报案件", value: '' },
    { desc: "今日结案率", value: '' },
    { desc: "本周解决", value: '' },
    { desc: "本周上报案件", value: '' }
]
let canyin_info = [
    { desc: "已安装设备企业", value: "675" },
    { desc: "正常运行企业", value: '490' },
    { desc: "离线企业数", value: '182' },
    { desc: "超标企业数", value: '1' },
    { desc: "预警企业数", value: '2' }
]
let danche_info = [
    { desc: "全部停放车辆", value: "40684" },
    { desc: "异常停放车辆", value: '6927' },
    { desc: "正常停放车辆", value: '33757' },
    { desc: "行驶中车辆", value: '2767' },
    { desc: "分值", value: '0.829' }
]
const one_clicked = () => {
    systems.splice(0, systems.length);

    system_zonghe.name = "成都市综合行政管理执法智慧服务平台";
    system_zonghe.name_en = "Intelligent Service Platform For Comprehensive Administrative Management And Law Enforcement";


    system_zonghe['items'] = zonghe_info;
    systems.push(system_zonghe);
    one_selected.value = true;
    two_selected.value = false;
    three_selected.value = false;
    four_selected.value = false;
    five_selected.value = false;
    six_selected.value = false;
}

one_clicked();

const two_clicked = () => {
    systems.splice(0, systems.length);

    system_canyin.name = "餐饮油烟监测服务";
    system_canyin.name_en = "Catering Lampblack Monitoring Service"


    system_canyin['items'] = canyin_info;

    systems.push(system_canyin);
    one_selected.value = false;
    two_selected.value = true;
    three_selected.value = false;
    four_selected.value = false;
    five_selected.value = false;
    six_selected.value = false;
}

const three_clicked = () => {
    systems.splice(0, systems.length);

    system_diaodu.name = "扬尘治理大数据协同管理中心";
    system_diaodu.name_en = "Dust Control Big Data Collaborative Management Center"

    let diaodu_info = [
        { desc: "未受理案件", value: "33" },
        { desc: "未处理案件", value: '23' },
        { desc: "处理中案件", value: '10' },
        { desc: "已处理案件", value: '23' },
        { desc: "已退回案件", value: '23' }
    ]
    system_diaodu['items'] = diaodu_info;

    systems.push(system_diaodu);
    one_selected.value = false;
    two_selected.value = false;
    three_selected.value = true;
    four_selected.value = false;
    five_selected.value = false;
    six_selected.value = false;
}

const four_clicked = () => {
    systems.splice(0, systems.length);

    system_yangchen.name = "餐饮油烟监测服务";
    system_yangchen.name_en = "Catering Lampblack Monitoring Service"

    let yangchen_info = [
        { desc: "未受理案件", value: "33" },
        { desc: "未处理案件", value: '23' },
        { desc: "处理中案件", value: '10' },
        { desc: "已处理案件", value: '23' },
        { desc: "已退回案件", value: '23' }
    ]
    system_yangchen['items'] = yangchen_info;

    systems.push(system_yangchen);
    one_selected.value = false;
    two_selected.value = false;
    three_selected.value = false;
    four_selected.value = true;
    five_selected.value = false;
    six_selected.value = false;
}

const five_clicked = () => {
    systems.splice(0, systems.length);

    system_danche.name = "共享单车管理平台";
    system_danche.name_en = "Shared Bicycle Management Platform"


    system_danche['items'] = danche_info;

    systems.push(system_danche);
    one_selected.value = false;
    two_selected.value = false;
    three_selected.value = false;
    four_selected.value = false;
    five_selected.value = true;
    six_selected.value = false;
}

const six_clicked = () => {
    systems.splice(0, systems.length);

    system_jiemiantuxiang.name = "街面图像综合应用";
    system_jiemiantuxiang.name_en = "Comprehensive Application Of Street Image"

    let jiemiantuxiang_info = [
        { desc: "未受理案件", value: "33" },
        { desc: "未处理案件", value: '23' },
        { desc: "处理中案件", value: '10' },
        { desc: "已处理案件", value: '23' },
        { desc: "已退回案件", value: '23' }
    ]
    system_jiemiantuxiang['items'] = jiemiantuxiang_info;

    systems.push(system_jiemiantuxiang);
    one_selected.value = false;
    two_selected.value = false;
    three_selected.value = false;
    four_selected.value = false;
    five_selected.value = false;
    six_selected.value = true;
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

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.city-scape {
    position: relative;
    margin-top: 10vh;
    margin-right: 60vw;
    height: 1000px;
}

.city-scape-left-one {
    cursor: pointer;
    width: 320px;
}

.city-scape-left-number {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 25px;
    border: 1px solid #333333;
}

.left-number {
    width: 15px;
    height: 33px;
    position: absolute;
    top: 7px;
    left: 16px;
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #333333;
    text-align: center;
}

.city-scape-left-name {
    width: 180px;
    height: 50px;
    position: absolute;
    left: 60px;
    top: 23px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #333333;
}

.city-scape-left-two {
    width: 320px;
    position: absolute;
    top: 100px;
    cursor: pointer;
}

.city-scape-left-three {
    width: 320px;
    position: absolute;
    top: 200px;
    cursor: pointer;
}

.city-scape-left-four {
    width: 320px;
    position: absolute;
    top: 300px;
    cursor: pointer;
}

.city-scape-left-five {
    width: 320px;
    position: absolute;
    top: 400px;
    cursor: pointer;
}

.city-scape-left-six {
    width: 320px;
    position: absolute;
    top: 500px;
    cursor: pointer;
}

.col-line {
    width: 1px;
    height: 100px;
    background: #CCCCCC;
    position: absolute;
    left: 319px;
}

.extra-col-line {
    width: 1px;
    height: 260px;
    background: #CCCCCC;
    position: absolute;
    left: 319px;
    top: 600px;
}

.left-number-selected {
    background: #1677D9;

}

.left-number-text-selected {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
}

.left-name-selected {
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #1677D9;
}

.col-line-selected {
    width: 4px;
    background: #1677D9;
}

.right-number-img {
    width: 120px;
    height: 32px;
    position: absolute;
    left: 363px;
    top: 13px;
}

.system-name {
    width: 408px;
    height: 33px;
    position: absolute;
    top: 48px;
    left: 360px;
    font-family: PingFangSC-Semibold;
    font-size: 24px;
    color: #1677D9;
}

.system-name-en {
    width: 672px;
    height: 20px;
    position: absolute;
    top: 83px;
    left: 360px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #999999;
}

.right-bg {
    width: 799px;
    height: 599px;
    position: absolute;
    top: 123px;
    left: 360px;
}

.system-content {
    width: 599px;
    height: 290px;
    position: absolute;
    top: 560px;
    left: 602px;
}

.content-bg {
    width: 100%;
    height: 100%;
    position: absolute;
}

.system-content-test {
    width: 160px;
    height: 120px;
    position: absolute;
    top: 40px;
    left: 40px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 24px;
}

.check-img {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 202px;
    left: 40px;
    cursor: pointer;
}
</style>