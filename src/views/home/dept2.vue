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

            <div class="background" v-if="choosedDept === 2">
                <img src="@/assets/home/banner-jgzm.png" width="10000" style="overflow-y:auto;overflow-x: auto;">
            </div>




            <!-- 页面显示区域 -->
            <el-main class="main">
                <div class="number1"> <img class="right-number-img" src="@/assets/images/city/number1.png" alt="">
                    <div class="classification-title" v-if="choosedDept == -1 | choosedDept == 2">
                        景观照明管家
                    </div>
                    <div>JinNiu Centralized Control Systems Of LandScape Lighting</div>
                </div>


                <template v-for="(item, idx) in choosedSystems">
                    <!-- <main-info v-if="item.deptId==2" :key="idx" :systemName="item.systemName" :url="item.url"
          :logo="item.systemLogo" :info-list="item.data" :image="item.image" :to="item.to" :deptId="item.deptId">
        </main-info> -->
                    <div class="jgzmInfo" v-if="item.deptId == 2" :key="idx" :systemName="item.systemName" :url="item.url"
                        :logo="item.systemLogo" :infoList="item.data" :image="item.image" :to="item.to"
                        :deptId="item.deptId">

                        <div v-if="item.systemName == '景观照明管家'" style="display: flex;">
                            <el-image :src="require('@/assets/jgzm/' + idx + '-1.jpg')" style="width:30%" fit="scale-down">
                            </el-image>
                            <div style="padding:5px ;margin-top:0%;font-size: 25px;margin-left: 3%;width:1000px">
                                <el-button v-if="item.url" class="el-button-succeed" type="text" @click="toSystem(item)"
                                    style="margin-top:0px;margin-left:0%">{{ item.systemName }} 设备报警信息</el-button>

                                <div style="padding:5px">
                                    <template v-for="tableItem in tableData_jbgl">
                                        <el-table :data="tableItem.data" class="table" :fit="false"
                                            :row-style="{ height: '80px' }" :cell-style="cellstyle" max-height="300">
                                            <el-table-column v-for="i in tableItem.headerNames.length"
                                                :label="tableItem.headerNames[i - 1]" :prop="tableItem.dataNames[i - 1]"
                                                width="200" />
                                        </el-table>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <div class="number1"> <img class="right-number-img" src="@/assets/images/city/number2.png" alt="">
                    <div class="classification-title" v-if="choosedDept == -1 | choosedDept == 2">
                        临街店铺管家
                    </div>
                    <div>QR Code Management of Advertising Signs</div>
                </div>
                <div class="jgzmInfo">
                    <div id="container_ggzp1" style="width: 900px; height: 350px;margin-left: 200px;"></div>
                    <el-image fit="scale-down" :src="require('@/assets/jgzm/6-1.jpg')"
                        style="width:30%;float: right;margin-left: 30%;">
                    </el-image>
                </div>
                <!-- <template v-for="(item, idx) in choosedSystems">
                    <div class="jgzmInfo" v-if="item.deptId == 2" :key="idx" :systemName="item.systemName" :url="item.url"
                        :logo="item.systemLogo" :infoList="item.data" :image="item.image" :to="item.to"
                        :deptId="item.deptId">

                        <div v-if="item.systemName == '临街店铺管家'" style="display: flex;background-color:#e6e6e6;">

                            <div style="padding:5px ;margin-top:2%;font-size: 20px;margin-left: 2%;">
                                <el-button v-if="item.url" class="el-button-succeed" type="text" @click="toSystem(item)"
                                    style="margin-top:10px;margin-left:10%">{{ item.systemName }}</el-button>
                                <div style="margin-top: 1%;">
                                    <li v-for="item in item.data" style="font-size: 20px;padding: 5px;">
                                        {{ item.infoKey + ": " + item.infoVal }}
                                    </li>
                                </div>
                            </div>
                            <el-image fit="scale-down" :src="require('@/assets/jgzm/' + idx + '-1.jpg')"
                                style="width:30%;float: right;margin-left: 50%;">
                            </el-image>
                        </div>

                    </div>

                </template> -->





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
import { params } from '@/store/store.js'
import { getAlarm } from '@/api/jgzm.js';
import { getMain } from '@/api/ggzp.js';
import * as echarts from "echarts";

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

// function toSystem(item) {
//     router.push({ name: item.to, params: item.systemName })
// }
function echartInit_ggzp() {
    var myChart_ggzp1 = echarts.init(document.getElementById("container_ggzp1"));
    var option_ggzp1 = {
        title: {
            text: '店铺统计',
            subtext: '店铺详细分类统计',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '店铺详细分类统计',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: ggzp_tableData.value[1].infoVal, name: ggzp_tableData.value[1].infoKey },
                    { value: ggzp_tableData.value[2].infoVal, name: ggzp_tableData.value[2].infoKey },
                    { value: ggzp_tableData.value[3].infoVal, name: ggzp_tableData.value[3].infoKey },
                    { value: ggzp_tableData.value[4].infoVal, name: ggzp_tableData.value[4].infoKey },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }, label: {
                    show: true,
                    formatter(param) {
                        // correct the percentage
                        return param.name + ' (' + param.percent + '%)';
                    }
                },
            }
        ]
    };
    myChart_ggzp1.setOption(option_ggzp1)

}
function toSystem(item) {
    if (item.url === '') {

        ElMessage({
            showClose: true,
            message: '正在开发中...'
        })
    } else
        window.open(item.url)
}

const ggzp_tableData = ref([])
//部门列表, 从后端获取
const depts = ref([])
onBeforeMount(() => {


    getDeptList()
        .then(response => {
            depts.value = response
        })
    getAlarm().then(data => {
        tableData_jbgl.value = data
        console.log(tableData_jbgl)
    })
})

// 系统列表
const systems = ref([])
const tableData_jbgl = ref([]) //警报管理

onMounted(() => {
    getMain().then(data => {
        ggzp_tableData.value = data
        echartInit_ggzp();
    })

    getSystemList().then(data => {
        systems.value = data
        // 请求各个子系统要显示的数据
        systems.value.forEach(system => {
            if (system.api !== '') {
                if (system.systemId == '9' || system.systemId == '10')
                    get(system.api).then(data => system.data = data)
            }
        })
    })
})
//选中的部门
// -1表示全选，为默认值
const choosedDept = ref(2)
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
    router.push('dept' + deptId)
    // choosedDept.value = deptId
    // showDepts.value = !showDepts.value
    // choosedDeptName.value = deptName
    // if (deptId != 1) {
    //   imgVisible.value = false
    // }
    // if (deptId == -1) {
    //   imgVisible.value = true

    // }
}

const router = useRouter()
// 跳转到to指定的子系统汇总页面
function show(to, url) {
    window.open(url)
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
</script>
  
<style scoped>
.AI {
    text-align: center;
    height: 292px;
    width: 389px;
    background-size: 100%;
    background-image: url('@/assets/szcg/ai.png');
    opacity: 0.9;
    display: flex;
}

.szcg {
    text-align: center;
    height: 292px;
    width: 389px;
    background-size: 100%;
    background-image: url('@/assets/szcg/szcg.jpg');
    opacity: 0.9;
    display: flex;
}

.syd {
    text-align: center;
    height: 292px;
    width: 389px;
    background-size: 100%;
    background-image: url('@/assets/szcg/syd.jpg');
    opacity: 0.9;
    display: flex;
    background-color: #1677D9;

}

.jgzmInfo {
    width: 100%;
    height: auto;
    margin-left: 5%;
    display: flex;
    padding: 5px;
    color: black;
}

.szcgInfo {
    height: 600px;
    width: 400px;
    height: auto;
    margin-left: 5%;
    padding: 5px;
    color: white;


}



.number1 {
    width: 90%;
    padding: 10px;
}

.classification-title {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*当屏幕尺寸变小时，各个子系统汇总模块自动换行*/
    font-size: 30px;
    color: #1677D9;

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
</style>