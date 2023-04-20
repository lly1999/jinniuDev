<template>
  <div class="content-l">
    <div class="container">
      <dv-border-box7 style="height:40vh;padding:5px">

        <!-- <div class="card text-white bg-primary mb-3 " style="max-width: 14rem;padding: 10px;height: 10vh;"> -->
        <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">环境卫生</h5>

        <div class="card-body" style="padding:0px ; height: 35vh;width:100%;">
          <!-- <el-tabs v-model="activeName" type="border-card" class="hwzy-tabs" @tab-click="handleClick" style="width:100%">
            <el-tab-pane label="环卫作业运行管家" name="first">
              <div class="hwzy-Charts" style="width: 25vw; height: 30vh;"> </div>
            </el-tab-pane>
            <el-tab-pane label="餐厨垃圾全生命周期管家" name="second">
              <div class="hwzy-Charts" style="width: 25vw; height: 30vh;"> </div>
            </el-tab-pane>
            <el-tab-pane label="生活垃圾全生命周期管家" name="third">
              <div class="hwzy-Charts" style="width: 25vw; height: 30vh;"> </div>
            </el-tab-pane>
          </el-tabs> -->
          <el-menu :default-active="activeIndex_hjws" class="el-menu-demo" mode="horizontal" @select="handleSelect_hjws"
            style="width: 100%;" active-text-color="#ffd04b" background-color="#2a2a2a" text-color="#fff">
            <el-menu-item index="1">环卫作业运行管家</el-menu-item>
            <el-menu-item index="2">餐厨垃圾全生命周期管家</el-menu-item>
            <el-menu-item index="3">生活垃圾全生命周期管家</el-menu-item>
          </el-menu>
          <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->

          <div id="hwzy-Charts" v-show="echart_index_hjws === 1" style="width: 30vw; height: 30vh;"></div>
          <div id="cclj-Charts" v-show="echart_index_hjws === 2" style="width: 30vw; height: 30vh;"> </div>
          <div id="shlj-Charts" v-show="echart_index_hjws === 3" style="width: 30vw; height: 30vh;"> </div>

        </div>
        <!-- </div>  -->

      </dv-border-box7>
      <dv-border-box7 style="height:40vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">市容秩序</h5>
          <div class="card-body" style="padding:0px ; height: 35vh;width:100%;" active-text-color="#ffd04b"
            background-color="#2a2a2a" text-color="#fff">
            <!-- <el-tabs v-model="activeName" type="border-card" class="hwzy-tabs" @tab-click="handleClick" style="width:100%">
            <el-tab-pane label="环卫作业运行管家" name="first">
              <div class="hwzy-Charts" style="width: 25vw; height: 30vh;"> </div>
            </el-tab-pane>
            <el-tab-pane label="餐厨垃圾全生命周期管家" name="second">
              <div class="hwzy-Charts" style="width: 25vw; height: 30vh;"> </div>
            </el-tab-pane>
            <el-tab-pane label="生活垃圾全生命周期管家" name="third">
              <div class="hwzy-Charts" style="width: 25vw; height: 30vh;"> </div>
            </el-tab-pane>
          </el-tabs> -->
            <el-menu :default-active="activeIndex_srzx" class="el-menu-demo" mode="horizontal" @select="handleSelect_srzx"
              style="width: 100%;" active-text-color="#ffd04b" background-color="#2a2a2a" text-color="#fff">
              <el-menu-item index="1">餐饮油烟管家</el-menu-item>
              <el-menu-item index="2">调度指挥管家</el-menu-item>
              <el-menu-item index="3">扬尘治理大数据协同管家</el-menu-item>
              <el-menu-item index="4">共享单车管家</el-menu-item>
              <el-menu-item index="5">街面图像综合应用管家</el-menu-item>

            </el-menu>
            <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->
            <div v-show="echart_index_srzx === 1">
              <div id="cyyy-Charts" style="width: 30vw; height: 30vh;"></div>
              <el-pagination layout="prev, pager, next" :total="4" background-color="#2a2a2a" text-color="#fff"
                :page-size="1" @current-change="changeCyyyChart" small :current-page="currentPageCyyy" />
            </div>

            <div id="ddzh-Charts" v-show="echart_index_srzx === 2" style="width: 30vw; height: 30vh;"> 待接入</div>
            <div id="ycxt-Charts" v-show="echart_index_srzx === 3" style="width: 30vw; height: 30vh;"> 待接入 </div>
            <div id="gxdc-Charts" v-show="echart_index_srzx === 4" style="width: 30vw; height: 30vh;"> </div>
            <div id="jmtx-Charts" v-show="echart_index_srzx === 5" style="width: 30vw; height: 30vh;"> 待接入</div>
          </div>
        </div>
      </dv-border-box7>
    </div>
  </div>
  <!-- <dv-border-box7 style="height:30vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">招牌景观</h5>
          <div>
            <dv-conical-column-chart :config="config_yyxt" style="width:25vw;height:20vh;" />
          </div>
        </div>
      </dv-border-box7> -->
  <!-- <dv-border-box1 ref="borderRef">
      <div :style="`width: 40rem`" h18rem color-white flex justify-center items-center>
        dv-border-box1
      </div>
    </dv-border-box1> -->

  <!-- <div class="card text-dark bg-info mb-3 " style="max-width: 18rem;">
                    <div class="card-header">协管人员实时情况(含服务外包人员)</div>
                    <div class="card-body">
                        <div>在编：1人</div>
                        <div>抽调：1人</div>
                        <p></p>
                        <div>补休：1人</div>
                        <div>在岗在位：1人</div>
                        <div>未按时打卡人员：1人</div>
                    </div>

                </div>
                </div> -->
  <!-- </div>
  </div> -->
  <!-- <div class="content-mid">

    <div class="card text-white bg-primary mb-3 person-box ">
      <div class="card-body">
        <h5 class="card-title">城市管家</h5>
      </div>
    </div>
  </div> -->
  <div class="content-r">
    <div class="container">
      <dv-border-box7 style="height:40vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">招牌景观</h5>
          <div class="card-body" style="padding:0px ; height: 35vh;width:100%;">

            <el-menu :default-active="activeIndex_jgzm" class="el-menu-demo" mode="horizontal" @select="handleSelect_jgzm"
              style="width: 100%;" active-text-color="#ffd04b" background-color="#2a2a2a" text-color="#fff">
              <el-menu-item index="1">景观照明管家</el-menu-item>
              <el-menu-item index="2">临街店铺管家</el-menu-item>
            </el-menu>
            <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->
            <div id="jgzm-Charts" v-show="echart_index_jgzm === 1" style="width: 30vw; height: 30vh;"></div>
            <div id="ggzp-Charts" v-show="echart_index_jgzm === 2" style="width: 30vw; height: 30vh;"> </div>

          </div>
        </div>
      </dv-border-box7>
      <dv-border-box7 style="height:40vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">数字城管</h5>
          <div class="card-body" style="padding:0px ; height: 35vh;width:100%;">

            <el-menu :default-active="activeIndex_jgzm" class="el-menu-demo" mode="horizontal" @select="handleSelect_szcg"
              style="width: 100%;" active-text-color="#ffd04b" background-color="#2a2a2a" text-color="#fff">
              <el-menu-item index="1">突出问题管家</el-menu-item>
              <el-menu-item index="2">城管AI识别管家</el-menu-item>
              <el-menu-item index="3">数字化城市信息管家</el-menu-item>
              <el-menu-item index="4">城管诉易达管家</el-menu-item>

            </el-menu>
            <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->
            <div id="tcwt-Charts" v-show="echart_index_szcg === 1" style="width: 30vw; height: 30vh;"></div>
            <div id="ai-Charts" v-show="echart_index_szcg === 2" style="width: 30vw; height: 30vh;"> 待接入</div>
            <div v-show="echart_index_szcg === 3">
              <div id="szcg-Charts" style="width: 30vw; height: 30vh;"></div>
              <el-pagination layout="prev, pager, next" :total="3" background-color="#2a2a2a" text-color="#fff"
                :page-size="1" @current-change="changeSzcgChart" small :current-page="currentPageSzcg" />
            </div>

            <div id="syd-Charts" v-show="echart_index_szcg === 4" style="width: 30vw; height: 30vh;"> 待接入</div>


          </div>
        </div>
      </dv-border-box7>

      <!-- <div class="card text-white bg-success mb-3 ">
                <div class="card-header">市容严管街人员情况</div>
                <div class="card-body">

                    <ScrollBoard v-model:config="problemCount" style="width:25vw;height: 27vh;" />

                </div>

            </div> -->
    </div>

  </div>
</template>


<script setup>
import { reactive, ref, onBeforeMount, onMounted } from 'vue';
import { ScrollBoard, DigitalFlop } from '@kjgl77/datav-vue3'
import { BorderBox6 as DvBorderBox6 } from '@kjgl77/datav-vue3'
import { BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'
import { getQypjCg } from '@/api/szcg.js'
import { getCompanyList } from '@/api/yyxt.js'
import { getMain } from '@/api/ggzp.js'
import { getMainXzzf } from '@/api/xzzf.js'
import { getMainJgzm } from "@/api/jgzm"
import Charts from '@jiaminghi/charts'
import * as echarts from "echarts";
import { getRdfx, getSjqsfx } from "@/api/szcg.js";
import { getOverStandard, getMonitor } from '@/api/yyxt';
import { getTokenGxdc, getMainGxdc } from "@/api/gxdc";
import { getMainShlj } from "@/api/shlj";
import { stubString } from 'lodash';
import { getMainCclj } from "@/api/cclj";

const currentPageSzcg = ref(1)
const currentPageCyyy = ref(1)

var tableData_yyxt = []
var tableData_szcg = []
var tableData_ggzp = []
var tableData_xzzf = []
var tableData_jgzm = []
var scroll_data_szcg_all = []
const activeIndex_hjws = ref('1')
const activeIndex_srzx = ref('1')
const activeIndex_jgzm = ref('1')
const activeIndex_szcg = ref('1')

const echart_index_hjws = ref('1')
const echart_index_srzx = ref('1')
const echart_index_jgzm = ref('1')
const echart_index_szcg = ref('1')
const changeCyyyChart = (page) => {
  currentPageCyyy.value = page
  if (currentPageCyyy.value === 1) {
    document.getElementById("cyyy-Charts").removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    getOverStandard().then(tableData => {

      var option_yyxt1 = {
        title: {
          text: '超标企业街道分布',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: [tableData[0].areaname, tableData[1].areaname, tableData[2].areaname, tableData[3].areaname, tableData[4].areaname, tableData[5].areaname, tableData[6].areaname, tableData[7].areaname, tableData[8].areaname, tableData[9].areaname, tableData[10].areaname, tableData[11].areaname, tableData[12].areaname],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: { interval: 0 },

        },

        yAxis: {
          type: 'value'
        },
        axisTick: {
          alignWithLabel: true
        },
        series: [
          {
            data: [tableData[0].value, tableData[1].value, tableData[2].value, tableData[3].value, tableData[4].value, tableData[5].value, tableData[6].value, tableData[7].value, tableData[8].value, tableData[9].value, tableData[10].value, tableData[11].value, tableData[12].value],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      myChart_cyyy.setOption(option_yyxt1)

    })
  }
  if (currentPageCyyy.value === 2) {
    document.getElementById("cyyy-Charts").removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    var option_yyxt2 = {

      title: {
        text: '油烟投诉趋势图',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        textStyle: {
          color: '#ccc'
        },
        data: ['2020', '2021', '2022', '',]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '2020',
          type: 'line',
          stack: 'Total',
          data: [16, 37, 82, 129, 150, 106, 128, 142, 125, 217, 117, 117]
        },
        {
          name: '2021',
          type: 'line',
          stack: 'Total',
          data: [57, 71, 133, 215, 207, 167, 94, 106, 154, 115, 92, 85]
        },
        {
          name: '2022',
          type: 'line',
          stack: 'Total',
          data: [54, 32, 85, 94, 91, 93, 57, 61, 26, 59, 27, 26]
        },

      ]
    };
    myChart_cyyy.setOption(option_yyxt2)


  }
  if (currentPageCyyy.value === 3) {
    document.getElementById("cyyy-Charts").removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    getMonitor().then(tableData => {
      var option_yyxt3 = {
        title: {
          text: '餐饮企业监控级别',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: 'white'
          }
        },
        series: [
          {
            name: '企业',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 35,
                fontWeight: 'bold',

              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: tableData[0].ct, name: '常态' },
              { value: tableData[0].yb, name: '一般' },
              { value: tableData[0].zd, name: '重点' },
              // { value: 484, name: 'Union Ads' },
              // { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
      myChart_cyyy.setOption(option_yyxt3)
    })

  }
  if (currentPageCyyy.value === 4) {
    document.getElementById("cyyy-Charts").removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    var option_yyxt4 = {
      title: {
        text: '餐饮企业类型分布',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          color: 'white'
        }
      },
      series: [
        {
          name: '企业',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: 'bold',

            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 2187, name: '中餐' },
            { value: 726, name: '火锅' },
            { value: 371, name: '烧烤' },
            { value: 39, name: '西餐' },
            { value: 507, name: '面食' },
            { value: 134, name: '中式包点' },
            { value: 151, name: '饮品' },
            { value: 1532, name: '其他（干锅快餐等）' },


            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }
    myChart_cyyy.setOption(option_yyxt4)


  }
}
const changeSzcgChart = (page) => {
  currentPageSzcg.value = page
  if (currentPageSzcg.value === 1) {
    console.log(currentPageSzcg.value)
    document.getElementById("szcg-Charts").removeAttribute("_echarts_instance_");
    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    getRdfx().then(data => {
      var option2 = {
        title: {
          text: '热点分析',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['立案', '结案'],
          textStyle: {
            color: '#ccc'
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: [data[0].sub_type_name, data[1].sub_type_name, data[2].sub_type_name, data[3].sub_type_name, data[4].sub_type_name, data[5].sub_type_name, data[6].sub_type_name, data[7].sub_type_name, data[8].sub_type_name,]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '立案',
            type: 'bar',
            data: [
              data[0].inst_num, data[1].inst_num, data[2].inst_num, data[3].inst_num, data[4].inst_num, data[5].inst_num, data[6].inst_num, data[7].inst_num, data[8].inst_num,
            ],

          },
          {
            name: '结案',
            type: 'bar',
            data: [
              data[0].archive_num, data[1].archive_num, data[2].archive_num, data[3].archive_num, data[4].archive_num, data[5].archive_num, data[6].archive_num, data[7].archive_num, data[8].archive_num,
            ],

          }
        ]
      };
      myChart_szcg.setOption(option2);
      window.onresize = function () {
        myChart_szcg.resize()

      }
    })
  }
  if (currentPageSzcg.value === 2) {
    console.log(currentPageSzcg.value)

    document.getElementById("szcg-Charts").removeAttribute("_echarts_instance_");
    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    getSjqsfx().then(dataTable => {
      var option4 = {
        title: {
          textStyle: {
            color: '#ccc'
          },
          text: '事件趋势分析'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          textStyle: {
            color: '#ccc'
          },
          data: [dataTable[0].type, dataTable[1].type, dataTable[2].type, dataTable[3].type,]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          axisLabel: { interval: 0 },
          type: 'category',
          boundaryGap: false,
          data: [dataTable[0].rq, dataTable[4].rq, dataTable[8].rq, dataTable[12].rq, dataTable[16].rq, dataTable[20].rq, dataTable[24].rq]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: dataTable[0].type,
            type: 'line',
            stack: 'Total',
            data: [dataTable[0].value, dataTable[4].value, dataTable[8].value, dataTable[12].value, dataTable[16].value, dataTable[20].value, dataTable[24].value]
          },
          {
            name: dataTable[1].type,
            type: 'line',
            stack: 'Total',
            data: [dataTable[1].value, dataTable[5].value, dataTable[9].value, dataTable[13].value, dataTable[17].value, dataTable[21].value, dataTable[25].value]
          },
          {
            name: dataTable[2].type,
            type: 'line',
            stack: 'Total',
            data: [dataTable[2].value, dataTable[6].value, dataTable[10].value, dataTable[14].value, dataTable[18].value, dataTable[22].value, dataTable[26].value]
          },
          {
            name: dataTable[3].type,
            type: 'line',
            stack: 'Total',
            data: [dataTable[3].value, dataTable[7].value, dataTable[11].value, dataTable[15].value, dataTable[19].value, dataTable[23].value, dataTable[27].value]
          },

        ]
      };
      myChart_szcg.setOption(option4);
      window.onresize = function () {
        myChart_szcg.resize()

      }

    })
  }
  if (currentPageSzcg.value === 3) {
    console.log(currentPageSzcg.value)

    document.getElementById("szcg-Charts").removeAttribute("_echarts_instance_");
    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    var option3 = {
      title: {
        text: '来源分析',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          color: 'white'
        }
      },
      series: [
        {
          name: '来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: 'bold',

            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 54, name: '巡查上报' },
            { value: 12, name: '视频上报' },
            { value: 13, name: '自报自处' },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }
    myChart_szcg.setOption(option3);
    window.onresize = function () {
      myChart_szcg.resize()

    }
  }

}
const handleSelect_srzx = (key, keypath) => {
  if (key === '1') {
    echart_index_srzx.value = 1
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    getOverStandard().then(tableData => {

      var option_yyxt1 = {
        title: {
          text: '超标企业街道分布',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: [tableData[0].areaname, tableData[1].areaname, tableData[2].areaname, tableData[3].areaname, tableData[4].areaname, tableData[5].areaname, tableData[6].areaname, tableData[7].areaname, tableData[8].areaname, tableData[9].areaname, tableData[10].areaname, tableData[11].areaname, tableData[12].areaname],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: { interval: 0 },

        },

        yAxis: {
          type: 'value'
        },
        axisTick: {
          alignWithLabel: true
        },
        series: [
          {
            data: [tableData[0].value, tableData[1].value, tableData[2].value, tableData[3].value, tableData[4].value, tableData[5].value, tableData[6].value, tableData[7].value, tableData[8].value, tableData[9].value, tableData[10].value, tableData[11].value, tableData[12].value],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      myChart_cyyy.setOption(option_yyxt1)

    })

  }
  if (key == '2') {
    echart_index_srzx.value = 2

  }
  if (key == '3') {
    echart_index_srzx.value = 3

  }
  if (key == '4') {
    echart_index_srzx.value = 4
    var myChart_gxdc = echarts.init(document.getElementById("gxdc-Charts"));
    getMainGxdc().then(gxdcData => {
      var option_gxdc1 = {
        title: {
          text: '单车统计',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: 'white'
          }
        },
        series: [
          {
            name: '单车',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 35,
                fontWeight: 'bold',

              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: gxdcData[2].infoVal, name: '正常停放车辆' },
              { value: gxdcData[1].infoVal, name: '异常停放车辆' },
              { value: gxdcData[3].infoVal, name: '行驶中车辆' },
              // { value: 580, name: 'Email' },
              // { value: 484, name: 'Union Ads' },
              // { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
      myChart_gxdc.setOption(option_gxdc1)
    })
  }
  if (key == '5') {
    echart_index_srzx.value = 5

  }
}
const handleSelect_szcg = (key, keypath) => {
  if (key === '1') {
    var myChart_tcwt = echarts.init(document.getElementById("tcwt-Charts"));

    echart_index_szcg.value = 1
    var option = {
      title: {
        text: '事件趋势分析',
        textStyle: {
          color: '#ccc'
        }
      },
      //这里的yAxis就是竖轴，xAxis就是横轴
      // yAxis and xAxis 交换可以改变横向或竖向
      yAxis: {
        data: ['积存垃圾', '占道经营', '其他', '非机动车', '油烟', '无照']
      },
      xAxis: {

      },
      // 数据的来源
      series: [
        {
          name: 'source',
          // bar就是柱状图
          type: 'bar',
          color: '#dd6b66',
          // 数据
          data: [2, 3, 4, 4, 5, 7,]
        }
      ]
    }
    myChart_tcwt.setOption(option)
    window.onresize = function () {
      myChart_cyyy.resize()

    }
  }
  if (key === '2') {
    echart_index_szcg.value = 2

  }
  if (key === '3') {
    echart_index_szcg.value = 3

    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    getRdfx().then(data => {
      var option2 = {
        title: {
          text: '热点分析',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['立案', '结案'],
          textStyle: {
            color: '#ccc'
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: [data[0].sub_type_name, data[1].sub_type_name, data[2].sub_type_name, data[3].sub_type_name, data[4].sub_type_name, data[5].sub_type_name, data[6].sub_type_name, data[7].sub_type_name, data[8].sub_type_name,]
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '立案',
            type: 'bar',
            data: [
              data[0].inst_num, data[1].inst_num, data[2].inst_num, data[3].inst_num, data[4].inst_num, data[5].inst_num, data[6].inst_num, data[7].inst_num, data[8].inst_num,
            ],

          },
          {
            name: '结案',
            type: 'bar',
            data: [
              data[0].archive_num, data[1].archive_num, data[2].archive_num, data[3].archive_num, data[4].archive_num, data[5].archive_num, data[6].archive_num, data[7].archive_num, data[8].archive_num,
            ],

          }
        ]
      };
      myChart_szcg.setOption(option2);
      window.onresize = function () {
        myChart_szcg.resize()

      }
    })
  }
  if (key === '4') {
    echart_index_szcg.value = 4

  }

}
const handleSelect_jgzm = (key, keyPath) => {
  if (key === '1') {
    echart_index_jgzm.value = 1
    //document.getElementById("hwzy-Charts").removeAttribute("_echarts_instance_");

    var myChart_jgzm1 = echarts.init(document.getElementById("jgzm-Charts"));

    getMainJgzm().then(data => {
      console.log(data)
      var option_jgzm1 = {
        title: {
          text: '用电量统计',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ['昨日电量统计', '月电量统计', '年电量统计']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [data[1].infoVal, data[2].infoVal, data[3].infoVal],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
      myChart_jgzm1.setOption(option_jgzm1)
      window.onresize = function () {
        myChart_jgzm1.resize()

      }
    })

  }
  else if (key === '2') {
    echart_index_jgzm.value = 2
    var myChart_ljdp1 = echarts.init(document.getElementById("ggzp-Charts"));
    getMain().then(data => {

      var option_ljdp1 = {
        title: {
          text: '巡检店铺数量',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: 'white'
          }
        },
        series: [
          {
            name: '店铺',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 35,
                fontWeight: 'bold',

              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: data[3].infoVal, name: '总店铺数量' },
              { value: data[0].infoVal, name: '巡检店铺数量' },
              { value: data[2].infoVal, name: '未办证数量' },
              // { value: 580, name: 'Email' },
              // { value: 484, name: 'Union Ads' },
              // { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
      myChart_ljdp1.setOption(option_ljdp1)
      window.onresize = function () {
        myChart_ljdp1.resize()

      }
    })

  }

}
const handleSelect_hjws = (key, keyPath) => {
  console.log(key, keyPath)
  if (key === '1') {
    echart_index_hjws.value = 1
    //document.getElementById("hwzy-Charts").removeAttribute("_echarts_instance_");

    var mychar_hjws = echarts.init(document.getElementById("hwzy-Charts"));
    var hjws_option = {
      title: {
        text: '环卫作业运行管家',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['出勤车辆', '总车辆']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [141, 145],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
    window.onresize = function () {
      mychar_hjws.resize()

    }
    mychar_hjws.setOption(hjws_option)
  }
  else if (key === '2') {
    echart_index_hjws.value = 2
    var mychar_cclj = echarts.init(document.getElementById("cclj-Charts"));
    getMainCclj().then(tableData => {
      var cclj_option = {
        title: {
          text: '餐厨垃圾全生命周期管家',
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ['年度收运量累积(吨)', '当月收运量累积(吨)', '当日收运量累积(吨)']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [tableData[0].infoVal, tableData[1].infoVal, tableData[2].infoVal],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      }
      window.onresize = function () {
        mychar_cclj.resize()

      }
      mychar_cclj.setOption(cclj_option)
    })

  }
  else if (key === '3') {
    echart_index_hjws.value = 3
    var mychar_shlj = echarts.init(document.getElementById("shlj-Charts"));
    getMainShlj().then(tableData => {
      var data1 = tableData[1].infoVal
      data1 = (data1.substr(0, data1.length - 1)) * 1;
      var data2 = tableData[2].infoVal
      data2 = (data2.substr(0, data2.length - 1)) * 1;
      var shlj_option = {
        title: {
          text: '金牛区垃圾净重',
          subtext: '大站分布',
          left: 'center',
          textStyle: {
            color: '#ccc',
            fontSize: '26'
          },
          subtextStyle: {
            color: '#ccc',
            fontSize: '20'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#ccc',
            fontSize: '16'
          }
        },
        series: [
          {
            name: '站点名',
            type: 'pie',
            radius: '70%',
            data: [
              { value: data1, name: '西华垃圾站数据' },
              { value: data2, name: '红星垃圾站数据' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
              },
              textStyle: {
                color: '#ccc',
                fontSize: '16'
              }
            }
          }
        ]
      }
      window.onresize = function () {
        mychar_shlj.resize()

      }
      mychar_shlj.setOption(shlj_option)
    })

  }
}
onMounted(() => {
  echart_index_hjws.value = 1
  echart_index_jgzm.value = 1
  echart_index_srzx.value = 1
  //document.getElementById("hwzy-Charts").removeAttribute("_echarts_instance_");
  echart_index_szcg.value = 1
  var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
  getOverStandard().then(tableData => {

    var option_yyxt1 = {
      title: {
        text: '超标企业街道分布',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: [tableData[0].areaname, tableData[1].areaname, tableData[2].areaname, tableData[3].areaname, tableData[4].areaname, tableData[5].areaname, tableData[6].areaname, tableData[7].areaname, tableData[8].areaname, tableData[9].areaname, tableData[10].areaname, tableData[11].areaname, tableData[12].areaname],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: { interval: 0 },

      },

      yAxis: {
        type: 'value'
      },
      axisTick: {
        alignWithLabel: true
      },
      series: [
        {
          data: [tableData[0].value, tableData[1].value, tableData[2].value, tableData[3].value, tableData[4].value, tableData[5].value, tableData[6].value, tableData[7].value, tableData[8].value, tableData[9].value, tableData[10].value, tableData[11].value, tableData[12].value],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    };
    myChart_cyyy.setOption(option_yyxt1)

  })
  var myChart_jgzm1 = echarts.init(document.getElementById("jgzm-Charts"));

  getMainJgzm().then(data => {
    console.log(data)
    var option_jgzm1 = {
      title: {
        text: '用电量统计',
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['昨日电量统计', '月电量统计', '年电量统计']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [data[1].infoVal, data[2].infoVal, data[3].infoVal],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
    myChart_jgzm1.setOption(option_jgzm1)
    window.onresize = function () {
      myChart_jgzm1.resize()

    }
  })
  var mychar_hjws = echarts.init(document.getElementById("hwzy-Charts"));
  var hjws_option = {
    xAxis: {
      type: 'category',
      data: ['出勤车辆', '总车辆']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [141, 145],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }
  window.onresize = function () {
    mychar_hjws.resize()

  }
  mychar_hjws.setOption(hjws_option)
  var myChart_tcwt = echarts.init(document.getElementById("tcwt-Charts"));

  echart_index_szcg.value = 1
  var option = {
    title: {
      text: '事件趋势分析',
      textStyle: {
        color: '#ccc'
      }
    },
    //这里的yAxis就是竖轴，xAxis就是横轴
    // yAxis and xAxis 交换可以改变横向或竖向
    yAxis: {
      data: ['积存垃圾', '占道经营', '其他', '非机动车', '油烟', '无照']
    },
    xAxis: {

    },
    // 数据的来源
    series: [
      {
        name: 'source',
        // bar就是柱状图
        type: 'bar',
        color: '#dd6b66',
        // 数据
        data: [2, 3, 4, 4, 5, 7,]
      }
    ]
  }
  myChart_tcwt.setOption(option)
})



const config = reactive({
  header: ['街道', '立案数', '处置数', '结案数', '结案率'],
  headerHeight: 25,

  align: ['center'],
  rowNum: 4,
  columnWidth: [200, 100, 100, 100, 100, 100],
  headerBGC: '#006400',
  oddRowBGC: '#3CB371',
  evenRowBGC: '#8FBC8F',
  data: [

  ],

})
const config_ggzp = reactive({
  data: [


  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '店铺'
})
const config_yyxt = reactive({
  data: [

    {
      name: '餐饮业',
      value: 167
    },
    {
      name: '零售业',
      value: 123
    },
  ], showValue: true,

})
const config_xzzf = reactive({
  data: [


  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '案件'

})
const config_jgzm = reactive({
  title: {
    text: '耗电区域占比图'
  },
  series: [
    {
      type: 'pie',
      data: [

      ],
      insideLabel: {
        show: true
      }
    }
  ]
})




</script>

<style scoped>
/* .content {
    position: absolute;
    top: 7vh;

    display: flex;
    z-index: 20;
} */

.content-l {
  left: 0;

  width: 30vw;
  padding: 3vh;
  display: flex;
  flex-direction: column;
  height: 93vh;
  position: absolute;
  z-index: 20;
  user-select: none;
  color: white;
  background-color: #2a2a2a;
  opacity: 0.9;
}

.content-l-top {
  height: 150px;

}

.content-mid {

  left: 23vw;
  width: 44.4vw;
  height: 6vh;
  background-color: #2a2a2a;
  position: absolute;
  z-index: 20;
  display: flex;
  flex-flow: wrap;
  user-select: none;
  opacity: 0.7;
  color: white;

}

.content-r {

  right: 0;
  width: 30vw;
  /* background-color: rgba(0, 11, 61, 0.5); */
  background-color: #2a2a2a;
  padding-left: 3vh;
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-right: 1vh;
  display: flex;
  flex-direction: column;
  height: 93vh;
  position: absolute;
  z-index: 20;
  user-select: none;
  opacity: 0.9;
  color: white;

}

.person-box {
  margin-right: 10px;
  width: 10vw;
  height: 15vh;
  --bs-bg-opacity: .2;
}

.person-title {
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-right: 30px;
  text-align: center;
}

.person-number {
  font-size: 30px;
  text-align: center;
}

:deep(.DigitalFlop) {
  width: 25vw;
}
</style>


