<template>
  <div class="content-l">
    <div class="container">
      <dv-border-box7 style="height: 46vh; width: 25vw">
        <!-- <div class="card text-white bg-primary mb-3 " style="max-width: 14rem;padding: 10px;height: 10vh;"> -->
        <h5
          class="card-title"
          style="font-size: 25px; padding: 5px; text-align: center"
        >
          环境卫生
        </h5>

        <div class="card-body" style="padding: 0px; height: 40vh; width: 100%">
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
          <!-- <el-menu :default-active="activeIndex_hjws" class="el-menu-demo" mode="horizontal" @select="handleSelect_hjws"
            style="width: 100%;" active-text-color="#ffd04b" background-color="#2a2a2a" text-color="#fff">
            <el-menu-item index="1">环卫作业运行管家</el-menu-item>
            <el-menu-item index="2">餐厨垃圾全生命周期管家</el-menu-item>
            <el-menu-item index="3">生活垃圾全生命周期管家</el-menu-item>
          </el-menu> -->
          <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->
          <div class="no">
            <div
              class="no-header"
              style="
                height: 1px;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                width: 85%;
                margin: 0 auto;
                margin-bottom: 10px;
              "
            ></div>
            <div class="no-hd">
              <ul>
                <li>{{ year_transport.toFixed(2) }}</li>
                <li>{{ month_transport.toFixed(2) }}</li>
                <li>{{ day_transport.toFixed(2) }}</li>
              </ul>
              <ul>
                <li>年度收运量累积(吨)</li>
                <li>当月收运量累积(吨)</li>
                <li>当日收运量累积(吨)</li>
              </ul>
            </div>
            <div
              class="no-header"
              style="
                height: 1px;
                border-top: 1px solid rgba(255, 255, 255, 0.2);
                width: 85%;
                margin: 0 auto;
                margin-bottom: 10px;
              "
            ></div>
            <!-- <div class="no-md">
              <ul>
                <li>出勤车辆数：141</li>
                <li>总车辆数：148</li>
              </ul>

            </div> -->
          </div>
          <!-- <div style="display: flex">
            <div
              id="hwzy-Charts"
              v-show="echart_index_hjws === 1"
              style="width: 12vw; height: 20vh"
            ></div>
            <div
              id="cclj-Charts"
              v-show="echart_index_hjws === 1"
              style="width: 12vw; height: 20vh"
            ></div>
          </div> -->
          <div style="display: flex">
            <div id="hwzy-Charts" v-show="echart_index_hjws === 1"></div>
            <div id="cclj-Charts" v-show="echart_index_hjws === 1"></div>
          </div>

          <div style="display: flex">
            <div
              id="cqcl-Charts"
              v-show="echart_index_hjws === 1"
              style="width: 13vw; height: 27vh"
            ></div>
            <div
              id="shlj-Charts"
              v-show="echart_index_hjws === 1"
              style="width: 13vw; height: 27vh"
            ></div>
          </div>
        </div>

        <!-- </div>  -->
      </dv-border-box7>
      <dv-border-box7 style="height: 46vh; margin-top: 2vh">
        <div dv-bg>
          <h5
            class="card-title"
            style="font-size: 25px; padding: 5px; text-align: center"
          >
            市容秩序
          </h5>
          <div
            class="card-body"
            style="padding: 0px; height: 40vh; width: 100%"
            active-text-color="#ffd04b"
            background-color="#2a2a2a"
            text-color="#fff"
          >
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
            <el-menu
              :default-active="activeIndex_srzx"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect_srzx"
              style="width: 80%; margin: 0 auto"
              active-text-color="#ffd04b"
              background-color="#05103C"
              text-color="#fff"
            >
              <el-menu-item index="1">餐饮油烟管家</el-menu-item>
              <el-menu-item index="2">调度指挥管家</el-menu-item>
              <el-menu-item index="3">扬尘治理大数据协同管家</el-menu-item>
              <el-menu-item index="4">共享单车管家</el-menu-item>
              <el-menu-item index="5">街面图像综合应用管家</el-menu-item>
            </el-menu>
            <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->
            <div v-show="echart_index_srzx === 1">
              <div id="cyyy-Charts" style="width: 26vw; height: 30vh"></div>
              <div style="width: 50%; margin: 0 auto">
                <el-pagination
                  layout="prev, pager, next"
                  :total="4"
                  background
                  text-color="#fff"
                  :page-size="1"
                  @current-change="changeCyyyChart"
                  small
                  :current-page="currentPageCyyy"
                />
              </div>
            </div>

            <div
              id="ddzh-Charts"
              v-show="echart_index_srzx === 2"
              style="width: 25vw; height: 30vh"
            >
              待接入
            </div>
            <div
              id="ycxt-Charts"
              v-show="echart_index_srzx === 3"
              style="width: 25vw; height: 30vh"
            >
              待接入
            </div>
            <div
              id="gxdc-Charts"
              v-show="echart_index_srzx === 4"
              style="width: 25vw; height: 30vh"
            ></div>
            <div
              id="jmtx-Charts"
              v-show="echart_index_srzx === 5"
              style="width: 25vw; height: 30vh"
            >
              待接入
            </div>
          </div>
        </div>
      </dv-border-box7>
    </div>
  </div>
  <div class="content_middle_top">
    <dv-border-box7 style="height: 14vh">
      <div class="no-middle" style="padding-top: 3vh">
        <div class="no-middle-hd">
          <ul>
            <li @click="handleEdit(warningReported)">{{reportedNum}}</li>
            <li @click="handleEdit(warningUnregistered)">{{unregisteredNum}}</li>
            <li @click="handleEdit(warningRegistered)">{{registeredNum}}</li>
            <li @click="handleEdit(warningDistributed)">{{distributedNum}}</li>
            <li @click="handleEdit(warningUndisposed)">{{undisposedNum}}</li>
            <li @click="handleEdit(warningDisposed)">{{disposedNum}}</li>
            <li @click="handleEdit(warningVerified)">{{verifiedNum}}</li>
          </ul>
          <ul>
            <li @click="handleEdit(warningReported)">已上报事件数</li>
            <li @click="handleEdit(warningUnregistered)">待立案事件数</li>
            <li @click="handleEdit(warningRegistered)">已立案事件数</li>
            <li @click="handleEdit(warningDistributed)">已派发事件数</li>
            <li @click="handleEdit(warningUndisposed)">待处置事件数</li>
            <li @click="handleEdit(warningDisposed)">已处置事件数</li>
            <li @click="handleEdit(warningVerified)">已核查事件数</li>
          </ul>
        </div>

        <el-dialog v-model="alarmEvent" title="告警事件统计分析" append-to-body="true">
          <!-- <WarningThings style="width:100%" /> -->
          <div class="warning-header">
            {{ warningTitle }}事件数
          </div>
          <el-date-picker
            v-model="changeValue"
            type="daterange"
            unlink-panels
            range-separator="到"
            start-placeholder="选择开始时间"
            end-placeholder="选择结束时间"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
            @change="changeDate"
            size="large"
            style="margin: 0.5rem 0 0.5rem"
          />
          <el-table
            :data="data_total.slice((currentPage - 1) * 6, currentPage * 6)"
            :size="large"
            width="100%"
            id="#vcfResult"
            :row-class-name="tableRowClassName"
          >
            <el-table-column property="uuid" label="事件uuid" width="260">
              <template #default="scope" >
                <el-tooltip class="item" effect="dark" content="点击查看事件详情" placement="top-start">
                <el-button
                  size="medium"
                  type="primary"
                  link
                  @click="warningDetail(scope.$index, scope.row)"
                  >{{ scope.row.uuid }}
                </el-button>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column property="event_no" label="事件编号" width="150" />
            <el-table-column
              property="event_name"
              label="事件名称"
              width="120"
            />
            <el-table-column
              property="event_time"
              label="事件发生时间"
              width="160"
            />
            <el-table-column
              property="map_info"
              label="事件发生地点"
              width="150"
            >
            </el-table-column>
            <el-table-column
              property="submit_time"
              label="事件登记时间"
              width="160"
            />
            <el-table-column
              property="handle_deadline"
              label="事件处理截至时间"
              width="160"
            />

            <el-table-column
              property="event_type_pid"
              label="事件类型编号"
              width="80"
            />
            <el-table-column property="tags" label="事件处理备注" width="150" />

          </el-table>
          <div class="float-end" >
            <el-pagination
              background
              layout="->,total, prev, pager, next, jumper"
              :total="totalRecords"
              :current-page="currentPage"
              @current-change="getTransport"
            />
          </div>
          <div class="warning-header" style="padding-top:30px;">
            事件详情
          </div>
          <div class="warning-detail" style="padding-top:20px;padding-left:20px;">
            <ul style="display: inline-block;">
              <li>事件id：{{id}}</li>
              <li>事件名称：{{eventName}}</li>
              <li>事件来源：{{eventSource}}</li>
              <li>事件类型：{{eventType}}</li>
              <li>发生地点：{{place}}</li>
              <li>地点纬度：{{latitude}}</li>
              <li>地点经度：{{longitude}}</li>
              <li>发生时间：{{eventTime}}</li>
              

            </ul>
            <ul style="display: inline-block;padding-left:40px;">
              <li>所属街道：{{street}}</li>
              <li>上报角色：{{reportRole}}</li>
              <!-- <li>上报附件：{{uploadFiles}}</li> -->
              <li>事件描述：{{eventDesc}}</li>
              <li>事件状态：{{eventStatus}}</li>
              <li>更新时间：{{updateTime}}</li>
              <li>事件等级：{{eventLevel}}</li>
              <li>事件备注：{{tags}}</li>
              <!-- <li>处置附件：{{handleFile}}</li> -->
              <li>事件编号：{{eventNo}}</li>
            </ul>
          </div>
        </el-dialog>
      </div>
    </dv-border-box7>
  </div>
  <div class="content-r">
    <div class="container">
      <dv-border-box7 style="height: 46vh">
        <div dv-bg>
          <h5
            class="card-title"
            style="font-size: 25px; padding: 5px; text-align: center"
          >
            招牌景观
          </h5>
          <div
            class="card-body"
            style="padding: 0px; height: 35vh; width: 100%"
          >
            <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->
            <!-- <div
              id="jgzm-Charts"
              v-show="echart_index_jgzm === 1"
              style="width: 25vw; height: 20vh"
            ></div> -->
            <div id="jgzm-Charts" v-show="echart_index_jgzm === 1"></div>
            <div class="no">
              <div
                class="no-header"
                style="
                  height: 1px;
                  border-top: 1px solid rgba(255, 255, 255, 0.2);
                  width: 85%;
                  margin: 0 auto;
                  margin-bottom: 10px;
                "
              ></div>
              <div class="no-hd">
                <ul>
                  <li>{{ year_electricity }}</li>
                  <li>{{ month_electricity }}</li>
                  <li>{{ day_electricity }}</li>
                </ul>
                <ul>
                  <li>年电量统计</li>
                  <li>月电量统计</li>
                  <li>昨日电量统计</li>
                </ul>
              </div>
              <div
                class="no-header"
                style="
                  height: 1px;
                  border-top: 1px solid rgba(255, 255, 255, 0.2);
                  width: 85%;
                  margin: 0 auto;
                  margin-bottom: 10px;
                "
              ></div>
            </div>
            <div
              id="ggzp-Charts"
              v-show="echart_index_jgzm === 1"
              style="width: 25vw; height: 30vh"
            ></div>
          </div>
        </div>
      </dv-border-box7>
      <dv-border-box7 style="height: 46vh; margin-top: 2vh">
        <div dv-bg>
          <h5
            class="card-title"
            style="font-size: 25px; padding: 5px; text-align: center"
          >
            数字城管
          </h5>
          <div
            class="card-body"
            style="padding: 0px; height: 35vh; width: 100%"
          >
            <el-menu
              :default-active="activeIndex_jgzm"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect_szcg"
              style="width: 90%; margin: 0 auto"
              active-text-color="#ffd04b"
              background-color="#05103C"
              text-color="#fff"
            >
              <el-menu-item index="1">突出问题管家</el-menu-item>
              <el-menu-item index="2">城管AI识别管家</el-menu-item>
              <el-menu-item index="3">数字化城市信息管家</el-menu-item>
              <el-menu-item index="4">城管诉易达管家</el-menu-item>
            </el-menu>
            <!-- <div id="hwzy-Charts" v-if="echart_index_hjws != 1" style="width: 25vw; height: 30vh;"></div> -->
            <div
              id="tcwt-Charts"
              v-show="echart_index_szcg === 1"
              style="width: 24vw; height: 36vh; margin-left: 0px"
            ></div>
            <div
              id="ai-Charts"
              v-show="echart_index_szcg === 2"
              style="width: 25vw; height: 30vh"
            >
              待接入
            </div>
            <div v-show="echart_index_szcg === 3">
              <div id="szcg-Charts" style="width: 25vw; height: 30vh"></div>
              <div style="width: 40%; margin: 0 auto">
                <el-pagination
                  layout="prev, pager, next"
                  :total="3"
                  background
                  text-color="#fff"
                  :page-size="1"
                  @current-change="changeSzcgChart"
                  small
                  :current-page="currentPageSzcg"
                />
              </div>
            </div>

            <div
              id="syd-Charts"
              v-show="echart_index_szcg === 4"
              style="width: 25vw; height: 30vh"
            >
              待接入
            </div>
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
import { reactive, ref, onBeforeMount, onMounted } from "vue";
import { ScrollBoard, DigitalFlop } from "@kjgl77/datav-vue3";
import { BorderBox6 as DvBorderBox6 } from "@kjgl77/datav-vue3";
import { BorderBox7 as DvBorderBox7 } from "@kjgl77/datav-vue3";
import { getQypjCg } from "@/api/szcg.js";
import { getCompanyList } from "@/api/yyxt.js";
import { getMain } from "@/api/ggzp.js";
import { getMainXzzf } from "@/api/xzzf.js";
import { getMainJgzm } from "@/api/jgzm";
import Charts from "@jiaminghi/charts";
import * as echarts from "echarts";
import { getRdfx, getSjqsfx } from "@/api/szcg.js";
import { getOverStandard, getMonitor } from "@/api/yyxt";
import { getTokenGxdc, getMainGxdc } from "@/api/gxdc";
import { getMainShlj } from "@/api/shlj";
import { stubString } from "lodash";
import { getMainCclj } from "@/api/cclj";

//=====================================================================sunny 告警事件

import moment from "moment";
import axios from "axios";

const warningReported = ref("上报");
const warningUnregistered = ref("待立案");
const warningRegistered = ref("立案");
const warningDistributed = ref("派发");
const warningDisposed = ref("处置");
const warningUndisposed = ref("待处置");
const warningVerified = ref("核查");
const reportedNum = ref(0);
const unregisteredNum = ref(0);
const registeredNum = ref(0);
const distributedNum = ref(0);
const disposedNum = ref(0);
const undisposedNum = ref(0);
const verifiedNum = ref(0);

const id = ref("");
const eventName = ref("");
const eventSource = ref("");
const eventType = ref("");
const place = ref("");
const latitude = ref("");
const longitude = ref("");
const eventTime = ref("");
const gridName = ref("");
const reportRole = ref("");
// const uploadFiles = ref("");
const eventDesc = ref("");
const eventStatus = ref("");
// const handleFile = ref("");
const dealTime = ref("");
const verifyStatus = ref("");
const verifyOrg = ref("");
const verifyTime = ref("");
const eventNo = ref("");
const eventLevel = ref("");
const street = ref("");
const tags = ref("");
const updateTime = ref("");


 

const alarmEvent = ref(false);


const data_total = reactive([]);
const queryCarNum = ref("");
let totalRecords = ref(1000);
let currentPage = ref(1);
let pageCount = 0;
let start = ref("");
let end = ref("");
const tomorrow = moment()
  .add(+1, "d")
  .format("YYYY-MM-DD");
const today =
  new Date().getFullYear() +
  "-" +
  (new Date().getMonth() + 1) +
  "-" +
  new Date().getDate();
let startTime = ref("2023-05-01");
let endTime = ref("2023-05-02");
let changeValue = ref([today, tomorrow]);
const warningTitle = ref("");

// 禁选今天以后的日期以及没有数据的
const disabledDate = (time) => {
  return (
    // time.getTime() < new Date("2022-8-31").getTime() ||
    time.getTime() > new Date().getTime()
  );
};

function changeDate() {
  console.log("changeDate:" + start + "sdf" + end);
  start =
    changeValue.value[0].getFullYear() +
    "-" +
    (changeValue.value[0].getMonth() + 1) +
    "-" +
    changeValue.value[0].getDate();
  end =
    changeValue.value[1].getFullYear() +
    "-" +
    (changeValue.value[1].getMonth() + 1) +
    "-" +
    changeValue.value[1].getDate();
  console.log("changeDate:" + start + "sdf" + end);
  getAllWarning(start, end, 1,warningTitle.value);
}

const getAllWarning = (startTime, endTime, pageNum,warningType) => {
  axios({
    url: "/api/event/getEventsByStatus",
    params: {
      status:warningType,
      startTime: startTime,
      endTime: endTime,
    },
    method: "get",
  }).then(function (resp) {
    if (resp.status == 200) {
      var data = resp.data.data;
      data_total.splice(0, data_total.length);
      for (var i in data) {
        console.log("modify_time:" + data[i].modify_time);
        var warningThings = {
          event_no: data[i].event_no,
          event_name: data[i].event_name,
          event_time: data[i].event_time,
          map_info: data[i].map_info,
          submit_time: data[i].submit_time,
          handle_deadline: data[i].handle_deadline,
          event_type_pid: data[i].event_type_pid,
          tags: data[i].tags,
          uuid: data[i].uuid,
        };
        data_total.push(warningThings);
      }
      console.log("数据长度：" + data.length);
      totalRecords.value = data_total.length;
      pageCount = parseInt(data_total.length) % 6;
      currentPage.value = pageNum;
    }
  });
};
getAllWarning(today, tomorrow, 1);

const getTransport = (pageNum) => {
  // 当前页
  currentPage.value = pageNum;
};

const handleEdit = (warningType) => {
  alarmEvent.value = true;
  warningTitle.value = warningType;
  changeValue.value[0] = today;
  changeValue.value[1] = tomorrow;
  getAllWarning(today, tomorrow, 1,warningType);
         latitude.value= "";
        eventSource.value= "";
        eventType.value= "";
        eventNo.value= "";
        // handleFile= data.handleFiles;
        eventDesc.value = "";
        eventLevel.value = "";
        eventStatus.value ="";
        reportRole.value = "";
        eventTime.value = "";
        eventName.value = "";
        id.value ="";
        place.value = "";
        longitude.value ="";
        // uploadFiles.value = "";
        // handleFile.value = "";
        tags.value ="";
        street.value = "";
        updateTime.value ="";
};

// 点击事件的uuid显示详细信息
const warningDetail = (index, row) => {
  var  uuid = row.uuid;
  console.log("事件的uuid是：" + uuid);
   axios({
    url: "/api/event/getEventFromUuid",
    params: {
      uuid: uuid,
    },
    method: "get",
  }).then(function (resp) {
    if (resp.status == 200) {
      var data = resp.data.data.data;
        console.log("latitude:" + data.latitude);
        // uploadFiles= data.uploadFiles;
        latitude.value= data.latitude;
        eventSource.value= data.eventSource;
        eventType.value= data.eventType1 + " "+ data.eventType2;
        eventNo.value= data.eventNo;
        // handleFile= data.handleFiles;
        eventDesc.value = data.eventDesc;
        eventLevel.value = data.eventLevel;
        eventStatus.value = data.eventStatus;
        reportRole.value = data.reportRole;
        eventTime.value = data.eventTime;
        eventName.value = data.eventName;
        id.value = data.id;
        place.value = data.place;
        longitude.value = data.longitude;
        // uploadFiles.value = data.uploadFiles;
        // handleFile.value = data.handleFiles;
        tags.value = data.tags;
        street.value = data.street;
        updateTime.value = data.updateTime;

  
      console.log("数据长度：" + data.length);
      totalRecords.value = data_total.length;
      pageCount = parseInt(data_total.length) % 6;
      currentPage.value = pageNum;
    }
  });
};

//===================================================================================
const currentPageSzcg = ref(1);
const currentPageCyyy = ref(1);
const year_transport = ref(0);
const month_transport = ref(0);
const day_transport = ref(0);
const year_electricity = ref(0);
const month_electricity = ref(0);
const day_electricity = ref(0);

var tableData_yyxt = [];
var tableData_szcg = [];
var tableData_ggzp = [];
var tableData_xzzf = [];
var tableData_jgzm = [];
var scroll_data_szcg_all = [];
const activeIndex_hjws = ref("1");
const activeIndex_srzx = ref("1");
const activeIndex_jgzm = ref("1");
const activeIndex_szcg = ref("1");

const echart_index_hjws = ref("1");
const echart_index_srzx = ref("1");
const echart_index_jgzm = ref("1");
const echart_index_szcg = ref("1");

const changeCyyyChart = (page) => {
  currentPageCyyy.value = page;
  if (currentPageCyyy.value === 1) {
    document
      .getElementById("cyyy-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    getOverStandard().then((tableData) => {
      var option_yyxt1 = {
        title: {
          text: "超标企业街道分布",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: [
            tableData[0].areaname,
            tableData[1].areaname,
            tableData[2].areaname,
            tableData[3].areaname,
            tableData[4].areaname,
            tableData[5].areaname,
            tableData[6].areaname,
            tableData[7].areaname,
            tableData[8].areaname,
            tableData[9].areaname,
            tableData[10].areaname,
            tableData[11].areaname,
            tableData[12].areaname,
          ],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: { interval: 0 },
        },

        yAxis: {
          type: "value",
        },
        axisTick: {
          alignWithLabel: true,
        },
        series: [
          {
            data: [
              tableData[0].value,
              tableData[1].value,
              tableData[2].value,
              tableData[3].value,
              tableData[4].value,
              tableData[5].value,
              tableData[6].value,
              tableData[7].value,
              tableData[8].value,
              tableData[9].value,
              tableData[10].value,
              tableData[11].value,
              tableData[12].value,
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myChart_cyyy.setOption(option_yyxt1);
    });
  }
  if (currentPageCyyy.value === 2) {
    document
      .getElementById("cyyy-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    var option_yyxt2 = {
      title: {
        text: "油烟投诉趋势图",
        left: "5%",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        textStyle: {
          color: "#ccc",
        },
        data: ["2020", "2021", "2022", ""],
        right: "5%",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "2020",
          type: "line",
          stack: "Total",
          data: [16, 37, 82, 129, 150, 106, 128, 142, 125, 217, 117, 117],
        },
        {
          name: "2021",
          type: "line",
          stack: "Total",
          data: [57, 71, 133, 215, 207, 167, 94, 106, 154, 115, 92, 85],
        },
        {
          name: "2022",
          type: "line",
          stack: "Total",
          data: [54, 32, 85, 94, 91, 93, 57, 61, 26, 59, 27, 26],
        },
      ],
    };
    myChart_cyyy.setOption(option_yyxt2);
  }
  if (currentPageCyyy.value === 3) {
    document
      .getElementById("cyyy-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    getMonitor().then((tableData) => {
      var option_yyxt3 = {
        title: {
          text: "餐饮企业监控级别",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "企业",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 35,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: tableData[0].ct, name: "常态" },
              { value: tableData[0].yb, name: "一般" },
              { value: tableData[0].zd, name: "重点" },
              // { value: 484, name: 'Union Ads' },
              // { value: 300, name: 'Video Ads' }
            ],
          },
        ],
      };
      myChart_cyyy.setOption(option_yyxt3);
    });
  }
  if (currentPageCyyy.value === 4) {
    document
      .getElementById("cyyy-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    var option_yyxt4 = {
      title: {
        text: "餐饮企业类型分布",
        textStyle: {
          color: "#ccc",
        },
        left: "5%",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "8%",
        right: "5%",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "企业",
          type: "pie",
          top: "20%",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 2187, name: "中餐" },
            { value: 726, name: "火锅" },
            { value: 371, name: "烧烤" },
            { value: 39, name: "西餐" },
            { value: 507, name: "面食" },
            { value: 134, name: "中式包点" },
            { value: 151, name: "饮品" },
            { value: 1532, name: "其他（干锅快餐等）" },

            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart_cyyy.setOption(option_yyxt4);
  }
};
const changeSzcgChart = (page) => {
  currentPageSzcg.value = page;
  if (currentPageSzcg.value === 1) {
    console.log(currentPageSzcg.value);
    document
      .getElementById("szcg-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    getRdfx().then((data) => {
      var option2 = {
        title: {
          text: "热点分析",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["立案", "结案"],
          textStyle: {
            color: "#ccc",
          },
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: [data[0].sub_type_name, data[1].sub_type_name, data[2].sub_type_name, data[3].sub_type_name, data[4].sub_type_name, data[5].sub_type_name, data[6].sub_type_name, data[7].sub_type_name, data[8].sub_type_name,],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "立案",
            type: "bar",
            data: [
              data[0].inst_num,
              data[1].inst_num,
              data[2].inst_num,
              data[3].inst_num,
              data[4].inst_num,
              data[5].inst_num,
              data[6].inst_num,
              data[7].inst_num,
              data[8].inst_num,
            ],
          },
          {
            name: "结案",
            type: "bar",
            data: [
              data[0].archive_num,
              data[1].archive_num,
              data[2].archive_num,
              data[3].archive_num,
              data[4].archive_num,
              data[5].archive_num,
              data[6].archive_num,
              data[7].archive_num,
              data[8].archive_num,
            ],
          },
        ],
      };
      myChart_szcg.setOption(option2);
      window.onresize = function () {
        myChart_szcg.resize();
      };
    });
  }
  if (currentPageSzcg.value === 2) {
    console.log(currentPageSzcg.value);

    document
      .getElementById("szcg-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    getSjqsfx().then((dataTable) => {
      var option4 = {
        title: {
          textStyle: {
            color: "#ccc",
          },
          text: "事件趋势分析",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          textStyle: {
            color: "#ccc",
          },
          data: [
            dataTable[0].type,
            dataTable[1].type,
            dataTable[2].type,
            dataTable[3].type,
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          axisLabel: { interval: 0 },
          type: "category",
          boundaryGap: false,
          data: [
            dataTable[0].rq,
            dataTable[4].rq,
            dataTable[8].rq,
            dataTable[12].rq,
            dataTable[16].rq,
            dataTable[20].rq,
            dataTable[24].rq,
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: dataTable[0].type,
            type: "line",
            stack: "Total",
            data: [
              dataTable[0].value,
              dataTable[4].value,
              dataTable[8].value,
              dataTable[12].value,
              dataTable[16].value,
              dataTable[20].value,
              dataTable[24].value,
            ],
          },
          {
            name: dataTable[1].type,
            type: "line",
            stack: "Total",
            data: [
              dataTable[1].value,
              dataTable[5].value,
              dataTable[9].value,
              dataTable[13].value,
              dataTable[17].value,
              dataTable[21].value,
              dataTable[25].value,
            ],
          },
          {
            name: dataTable[2].type,
            type: "line",
            stack: "Total",
            data: [
              dataTable[2].value,
              dataTable[6].value,
              dataTable[10].value,
              dataTable[14].value,
              dataTable[18].value,
              dataTable[22].value,
              dataTable[26].value,
            ],
          },
          {
            name: dataTable[3].type,
            type: "line",
            stack: "Total",
            data: [
              dataTable[3].value,
              dataTable[7].value,
              dataTable[11].value,
              dataTable[15].value,
              dataTable[19].value,
              dataTable[23].value,
              dataTable[27].value,
            ],
          },
        ],
      };
      myChart_szcg.setOption(option4);
      window.onresize = function () {
        myChart_szcg.resize();
      };
    });
  }
  if (currentPageSzcg.value === 3) {
    console.log(currentPageSzcg.value);

    document
      .getElementById("szcg-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    var option3 = {
      title: {
        text: "来源分析",
        textStyle: {
          color: "#ccc",
        },
        left: "5%",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        right: "5%",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "来源",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 54, name: "巡查上报" },
            { value: 12, name: "视频上报" },
            { value: 13, name: "自报自处" },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart_szcg.setOption(option3);
    window.onresize = function () {
      myChart_szcg.resize();
    };
  }
};
const handleSelect_srzx = (key, keypath) => {
  if (key === "1") {
    echart_index_srzx.value = 1;
    document
      .getElementById("cyyy-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    getOverStandard().then((tableData) => {
      var option_yyxt1 = {
        title: {
          text: "超标企业街道分布",
          textStyle: {
            color: "#ccc",
          },
          left: "5%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: [
            tableData[0].areaname,
            tableData[1].areaname,
            tableData[2].areaname,
            tableData[3].areaname,
            tableData[4].areaname,
            tableData[5].areaname,
            tableData[6].areaname,
            tableData[7].areaname,
            tableData[8].areaname,
            tableData[9].areaname,
            tableData[10].areaname,
            tableData[11].areaname,
            tableData[12].areaname,
          ],
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            interval: 0,
            formatter: function (value) {
              return value.split("").join("\n");
            },
          },
        },

        yAxis: {
          type: "value",
        },
        axisTick: {
          alignWithLabel: true,
        },
        grid: { left: "2%", bottom: "10%", containLabel: true },
        series: [
          {
            data: [
              tableData[0].value,
              tableData[1].value,
              tableData[2].value,
              tableData[3].value,
              tableData[4].value,
              tableData[5].value,
              tableData[6].value,
              tableData[7].value,
              tableData[8].value,
              tableData[9].value,
              tableData[10].value,
              tableData[11].value,
              tableData[12].value,
            ],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myChart_cyyy.setOption(option_yyxt1);
    });
  }
  if (key == "2") {
    echart_index_srzx.value = 2;
  }
  if (key == "3") {
    echart_index_srzx.value = 3;
  }
  if (key == "4") {
    echart_index_srzx.value = 4;
    var myChart_gxdc = echarts.init(document.getElementById("gxdc-Charts"));
    getMainGxdc().then((gxdcData) => {
      var option_gxdc1 = {
        title: {
          text: "单车统计",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "单车",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 35,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: gxdcData[2].infoVal, name: "正常停放车辆" },
              { value: gxdcData[1].infoVal, name: "异常停放车辆" },
              { value: gxdcData[3].infoVal, name: "行驶中车辆" },
              // { value: 580, name: 'Email' },
              // { value: 484, name: 'Union Ads' },
              // { value: 300, name: 'Video Ads' }
            ],
          },
        ],
      };
      myChart_gxdc.setOption(option_gxdc1);
    });
  }
  if (key == "5") {
    echart_index_srzx.value = 5;
  }
};
const handleSelect_szcg = (key, keypath) => {
  if (key === "1") {
    var myChart_tcwt = echarts.init(document.getElementById("tcwt-Charts"));

    echart_index_szcg.value = 1;
    var option = {
      title: {
        text: "事件趋势分析",
        textStyle: {
          color: "#ccc",
        },
        left: "5%",
      },
      grid: { left: "2%", right: "2%", bottom: "10%", containLabel: true },
      //这里的yAxis就是竖轴，xAxis就是横轴
      // yAxis and xAxis 交换可以改变横向或竖向
      yAxis: {
        data: ["积存垃圾", "占道经营", "其他", "非机动车", "油烟", "无照"],
        width: 60,
        overflow: "truncate",
        truncate: "...",
      },
      xAxis: {},
      // 数据的来源
      series: [
        {
          name: "source",
          // bar就是柱状图
          type: "bar",
          color: "#68C4DB",
          // 数据
          data: [2, 3, 4, 4, 5, 7],
        },
      ],
    };
    myChart_tcwt.setOption(option);
    window.onresize = function () {
      myChart_cyyy.resize();
    };
  }
  if (key === "2") {
    echart_index_szcg.value = 2;
  }
  if (key === "3") {
    echart_index_szcg.value = 3;

    var myChart_szcg = echarts.init(document.getElementById("szcg-Charts"));

    getRdfx().then((data) => {
      var option2 = {
        title: {
          text: "热点分析",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["立案", "结案"],
          textStyle: {
            color: "#ccc",
          },
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            // prettier-ignore
            data: [data[0].sub_type_name, data[1].sub_type_name, data[2].sub_type_name, data[3].sub_type_name, data[4].sub_type_name, data[5].sub_type_name, data[6].sub_type_name, data[7].sub_type_name, data[8].sub_type_name,],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "立案",
            type: "bar",
            data: [
              data[0].inst_num,
              data[1].inst_num,
              data[2].inst_num,
              data[3].inst_num,
              data[4].inst_num,
              data[5].inst_num,
              data[6].inst_num,
              data[7].inst_num,
              data[8].inst_num,
            ],
          },
          {
            name: "结案",
            type: "bar",
            data: [
              data[0].archive_num,
              data[1].archive_num,
              data[2].archive_num,
              data[3].archive_num,
              data[4].archive_num,
              data[5].archive_num,
              data[6].archive_num,
              data[7].archive_num,
              data[8].archive_num,
            ],
          },
        ],
      };
      myChart_szcg.setOption(option2);
      window.onresize = function () {
        myChart_szcg.resize();
      };
    });
  }
  if (key === "4") {
    echart_index_szcg.value = 4;
  }
};
const handleSelect_jgzm = (key, keyPath) => {
  if (key === "1") {
    echart_index_jgzm.value = 1;
    //document.getElementById("hwzy-Charts").removeAttribute("_echarts_instance_");

    var myChart_jgzm1 = echarts.init(document.getElementById("jgzm-Charts"));

    getMainJgzm().then((data) => {
      console.log(data);
      var option_jgzm1 = {
        title: {
          text: "用电量统计",
          textStyle: {
            color: "#ccc",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: ["昨日电量统计", "月电量统计", "年电量统计"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [data[1].infoVal, data[2].infoVal, data[3].infoVal],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      };
      myChart_jgzm1.setOption(option_jgzm1);
      window.onresize = function () {
        myChart_jgzm1.resize();
      };
    });
  } else if (key === "2") {
    echart_index_jgzm.value = 2;
    var myChart_ljdp1 = echarts.init(document.getElementById("ggzp-Charts"));
    getMain().then((data) => {
      var option_ljdp1 = {
        title: {
          text: "巡检店铺数量",
          textStyle: {
            color: "#ccc",
          },
          left: "4%",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "0%",
          right: "2%",
          textStyle: {
            color: "white",
          },
        },
        series: [
          {
            name: "店铺",
            type: "pie",
            top: "0%",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 35,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: data[3].infoVal, name: "总店铺数量" },
              { value: data[0].infoVal, name: "巡检店铺数量" },
              { value: data[2].infoVal, name: "未办证数量" },
              // { value: 580, name: 'Email' },
              // { value: 484, name: 'Union Ads' },
              // { value: 300, name: 'Video Ads' }
            ],
          },
        ],
      };
      myChart_ljdp1.setOption(option_ljdp1);
      window.onresize = function () {
        myChart_ljdp1.resize();
      };
    });
  }
};
// const handleSelect_hjws = (key, keyPath) => {
//   console.log(key, keyPath);
//   if (key === "1") {
//     echart_index_hjws.value = 1;
//     //document.getElementById("hwzy-Charts").removeAttribute("_echarts_instance_");

//     var mychar_hjws = echarts.init(document.getElementById("hwzy-Charts"));
//     var hjws_option = {
//       title: {
//         text: "环卫作业运行管家",
//         textStyle: {
//           color: "#ccc",
//         },
//       },
//       tooltip: {
//         trigger: "axis",
//         axisPointer: {
//           type: "shadow",
//         },
//       },
//       xAxis: {
//         type: "category",
//         data: ["出勤车辆", "总车辆"],
//       },
//       yAxis: {
//         type: "value",
//       },
//       series: [
//         {
//           data: [141, 145],
//           type: "bar",
//           showBackground: true,
//           backgroundStyle: {
//             color: "rgba(180, 180, 180, 0.2)",
//           },
//         },
//       ],
//     };
//     window.onresize = function () {
//       mychar_hjws.resize();
//     };
//     mychar_hjws.setOption(hjws_option);
//   } else if (key === "2") {
//     echart_index_hjws.value = 2;
//     var mychar_cclj = echarts.init(document.getElementById("cclj-Charts"));
//     getMainCclj().then((tableData) => {
//       var cclj_option = {
//         title: {
//           text: "餐厨垃圾全生命周期管家",
//           textStyle: {
//             color: "#ccc",
//           },
//         },
//         tooltip: {
//           trigger: "axis",
//           axisPointer: {
//             type: "shadow",
//           },
//         },
//         xAxis: {
//           type: "category",
//           data: [
//             "年度收运量累积(吨)",
//             "当月收运量累积(吨)",
//             "当日收运量累积(吨)",
//           ],
//         },
//         yAxis: {
//           type: "value",
//         },
//         series: [
//           {
//             data: [
//               tableData[0].infoVal,
//               tableData[1].infoVal,
//               tableData[2].infoVal,
//             ],
//             type: "bar",
//             showBackground: true,
//             backgroundStyle: {
//               color: "rgba(180, 180, 180, 0.2)",
//             },
//           },
//         ],
//       };
//       window.onresize = function () {
//         mychar_cclj.resize();
//       };
//       mychar_cclj.setOption(cclj_option);
//     });
//   } else if (key === "3") {
//     echart_index_hjws.value = 3;
//     var mychar_shlj = echarts.init(document.getElementById("shlj-Charts"));
//     getMainShlj().then((tableData) => {
//       var data1 = tableData[1].infoVal;
//       data1 = data1.substr(0, data1.length - 1) * 1;
//       var data2 = tableData[2].infoVal;
//       data2 = data2.substr(0, data2.length - 1) * 1;
//       var shlj_option = {
//         title: {
//           text: "金牛区垃圾净重",
//           subtext: "大站分布",
//           left: "center",
//           textStyle: {
//             color: "#ccc",
//             fontSize: "26",
//           },
//           subtextStyle: {
//             color: "#ccc",
//             fontSize: "20",
//           },
//         },
//         tooltip: {
//           trigger: "item",
//         },
//         legend: {
//           orient: "vertical",
//           left: "left",
//           textStyle: {
//             color: "#ccc",
//             fontSize: "16",
//           },
//         },
//         series: [
//           {
//             name: "站点名",
//             type: "pie",
//             radius: "70%",
//             data: [
//               { value: data1, name: "西华垃圾站数据" },
//               { value: data2, name: "红星垃圾站数据" },
//             ],
//             emphasis: {
//               itemStyle: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//               },
//               textStyle: {
//                 color: "#ccc",
//                 fontSize: "16",
//               },
//             },
//           },
//         ],
//       };
//       window.onresize = function () {
//         mychar_shlj.resize();
//       };
//       mychar_shlj.setOption(shlj_option);
//     });
//   }
// };
onMounted(() => {

  //===========================================sunny 告警事件
   axios({
    url: "/api/event/getEventsStatusNum",
    params: {
      startTime: today,
      endTime: tomorrow,
    },
    method: "get",
  }).then(function (resp) {
    if (resp.status == 200) {
      var data = resp.data.data;
      unregisteredNum.value=data.待立案,
      registeredNum.value= data.已立案,
      reportedNum.value= data.已上报,
        distributedNum.value = data.已派发,
      undisposedNum.value=data.待处置,
      disposedNum.value= data.已处置,
        verifiedNum.value = data.已核查,
      
      console.log("数据长度：" + data.length);
      totalRecords.value = data_total.length;
      pageCount = parseInt(data_total.length) % 6;
      currentPage.value = pageNum;
    }
  });

  //=====================================================
  echart_index_hjws.value = 1;
  echart_index_jgzm.value = 1;
  echart_index_srzx.value = 1;
  //document.getElementById("hwzy-Charts").removeAttribute("_echarts_instance_");
  echart_index_szcg.value = 1;
  var mychar_cclj = echarts.init(document.getElementById("cclj-Charts"));
  var mychar_shlj = echarts.init(document.getElementById("shlj-Charts"));
  var mychar_cqcl = echarts.init(document.getElementById("cqcl-Charts"));
  getMain().then((data) => {
    var myChart_ljdp1 = echarts.init(document.getElementById("ggzp-Charts"));

    var option_ljdp1 = {
      title: {
        text: "巡检店铺数量",
        textStyle: {
          color: "#ccc",
        },
        left: "4%",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "0%",
        right: "2%",
        textStyle: {
          color: "white",
        },
      },
      series: [
        {
          name: "店铺",
          type: "pie",
          top: "0%",
          radius: ["40%", "60%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 35,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: data[3].infoVal, name: "总店铺数量" },
            { value: data[0].infoVal, name: "巡检店铺数量" },
            { value: data[2].infoVal, name: "未办证数量" },
            // { value: 580, name: 'Email' },
            // { value: 484, name: 'Union Ads' },
            // { value: 300, name: 'Video Ads' }
          ],
        },
      ],
    };
    myChart_ljdp1.setOption(option_ljdp1);
    window.onresize = function () {
      myChart_ljdp1.resize();
    };
  });
  getMainShlj().then((tableData) => {
    var data1 = tableData[1].infoVal;
    data1 = data1.substr(0, data1.length - 1) * 1;
    var data2 = tableData[2].infoVal;
    data2 = data2.substr(0, data2.length - 1) * 1;
    var shlj_option = {
      title: {
        text: "金牛区垃圾净重",
        left: "center",
        textStyle: {
          color: "#ccc",
          fontSize: "15",
        },
        subtextStyle: {
          color: "#ccc",
          fontSize: "20",
        },
      },
      tooltip: {
        trigger: "item",
      },
      color: ["#E0847F", "#CD8BECA9"],
      legend: {
        bottom: "0%",
        left: "center",
        textStyle: {
          color: "#ccc",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "站点名",
          type: "pie",
          radius: "70%",

          data: [
            { value: data1, name: "西华" },
            { value: data2, name: "红星" },
          ],

          label: {
            normal: {
              show: false,
            },
            labelLine: {
              normal: {
                position: "inner",
                show: false,
              },
            },
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
            },
            textStyle: {
              color: "#ccc",
              fontSize: "16",
            },
          },
        },
      ],
    };

    var cqcl_option = {
      title: {
        text: "车辆出勤情况",
        left: "center",
        textStyle: {
          color: "#ccc",
          fontSize: "15",
        },
        subtextStyle: {
          color: "#ccc",
          fontSize: "20",
        },
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        bottom: "0%",
        left: "center",
        textStyle: {
          color: "#ccc",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "出勤车辆",
          type: "pie",
          radius: "70%",

          data: [
            { value: 121, name: "出勤" },
            { value: 14, name: "未出勤" },
          ],
          label: {
            normal: {
              show: false,
            },
            labelLine: {
              normal: {
                position: "inner",
                show: false,
              },
            },
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
            },
            textStyle: {
              color: "#ccc",
              fontSize: "16",
            },
          },
        },
      ],
    };
    window.onresize = function () {
      mychar_shlj.resize();
      mychar_cqcl.resize();
    };
    mychar_shlj.setOption(shlj_option);
    mychar_cqcl.setOption(cqcl_option);
  });

  getMainCclj().then((tableData) => {
    year_transport.value = Number(tableData[0].infoVal);
    month_transport.value = Number(tableData[1].infoVal);
    day_transport.value = Number(tableData[2].infoVal);
    var cclj_option = {
      title: {
        text: "餐厨垃圾全生命周期管家",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: [
          "年度收运量累积（吨）",
          "当月收运量累积（吨）",
          "当日收运量累积（吨）",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            tableData[0].infoVal,
            tableData[1].infoVal,
            tableData[2].infoVal,
          ],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    window.onresize = function () {
      mychar_cclj.resize();
    };
    mychar_cclj.setOption(cclj_option);
  });

  getOverStandard().then((tableData) => {
    document
      .getElementById("cyyy-Charts")
      .removeAttribute("_echarts_instance_");
    var myChart_cyyy = echarts.init(document.getElementById("cyyy-Charts"));
    var option_yyxt1 = {
      title: {
        text: "超标企业街道分布",
        textStyle: {
          color: "#ccc",
        },
        left: "5%",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: [
          tableData[0].areaname,
          tableData[1].areaname,
          tableData[2].areaname,
          tableData[3].areaname,
          tableData[4].areaname,
          tableData[5].areaname,
          tableData[6].areaname,
          tableData[7].areaname,
          tableData[8].areaname,
          tableData[9].areaname,
          tableData[10].areaname,
          tableData[11].areaname,
          tableData[12].areaname,
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          interval: 0,
          formatter: function (value) {
            return value.split("").join("\n");
          },
        },
      },

      yAxis: {
        type: "value",
      },
      axisTick: {
        alignWithLabel: true,
      },
      grid: { left: "2%", bottom: "10%", containLabel: true },
      series: [
        {
          data: [
            tableData[0].value,
            tableData[1].value,
            tableData[2].value,
            tableData[3].value,
            tableData[4].value,
            tableData[5].value,
            tableData[6].value,
            tableData[7].value,
            tableData[8].value,
            tableData[9].value,
            tableData[10].value,
            tableData[11].value,
            tableData[12].value,
          ],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    myChart_cyyy.setOption(option_yyxt1);
  });
  var myChart_jgzm1 = echarts.init(document.getElementById("jgzm-Charts"));

  getMainJgzm().then((data) => {
    year_electricity.value = data[3].infoVal;
    month_electricity.value = data[2].infoVal;
    day_electricity.value = data[1].infoVal;
    console.log(data);
    var option_jgzm1 = {
      title: {
        text: "用电量统计",
        textStyle: {
          color: "#ccc",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        type: "category",
        data: ["昨日电量统计", "月电量统计", "年电量统计"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [data[1].infoVal, data[2].infoVal, data[3].infoVal],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    myChart_jgzm1.setOption(option_jgzm1);
    window.onresize = function () {
      myChart_jgzm1.resize();
    };
  });
  // var mychar_hjws = echarts.init(document.getElementById("hwzy-Charts"));
  // var hjws_option = {
  //   title: {
  //     text: "环卫作业运行管家",
  //     textStyle: {
  //       color: "#ccc",
  //     },
  //   },
  //   xAxis: {
  //     type: "category",
  //     data: ["出勤车辆", "总车辆"],
  //   },
  //   yAxis: {
  //     type: "value",
  //   },
  //   series: [
  //     {
  //       data: [141, 145],
  //       type: "bar",
  //       showBackground: true,
  //       backgroundStyle: {
  //         color: "rgba(180, 180, 180, 0.2)",
  //       },
  //     },
  //   ],
  // };
  // window.onresize = function () {
  //   mychar_hjws.resize();
  // };
  // mychar_hjws.setOption(hjws_option);
  var myChart_tcwt = echarts.init(document.getElementById("tcwt-Charts"));

  echart_index_szcg.value = 1;
  var option = {
    title: {
      text: "事件趋势分析",
      textStyle: {
        color: "#ccc",
      },
      left: "5%",
    },
    grid: { left: "2%", right: "2%", bottom: "10%", containLabel: true },
    //这里的yAxis就是竖轴，xAxis就是横轴
    // yAxis and xAxis 交换可以改变横向或竖向
    yAxis: {
      data: ["积存垃圾", "占道经营", "其他", "非机动车", "油烟", "无照"],
      width: 60,
      overflow: "truncate",
      truncate: "...",
    },
    xAxis: {},
    // 数据的来源
    series: [
      {
        name: "source",
        // bar就是柱状图
        type: "bar",
        color: "#68C4DB",
        // 数据
        data: [2, 3, 4, 4, 5, 7],
      },
    ],
  };
  myChart_tcwt.setOption(option);
});

// const config = reactive({
//   header: ['街道', '立案数', '处置数', '结案数', '结案率'],
//   headerHeight: 25,

//   align: ['center'],
//   rowNum: 4,
//   columnWidth: [200, 100, 100, 100, 100, 100],
//   headerBGC: '#006400',
//   oddRowBGC: '#3CB371',
//   evenRowBGC: '#8FBC8F',
//   data: [

//   ],

// })
// const config_ggzp = reactive({
//   data: [

//   ],
//   colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
//   unit: '店铺'
// })
// const config_yyxt = reactive({
//   data: [

//     {
//       name: '餐饮业',
//       value: 167
//     },
//     {
//       name: '零售业',
//       value: 123
//     },
//   ], showValue: true,

// })
// const config_xzzf = reactive({
//   data: [

//   ],
//   colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
//   unit: '案件'

// })
// const config_jgzm = reactive({
//   title: {
//     text: '耗电区域占比图'
//   },
//   series: [
//     {
//       type: 'pie',
//       data: [

//       ],
//       insideLabel: {
//         show: true
//       }
//     }
//   ]
// })
</script>

<style lang="scss" scoped>
/* .content {
    position: absolute;
    top: 7vh;

    display: flex;
    z-index: 20;
} */

.content-l {
  left: 0;

  width: 25vw;
  padding: 3vh;
  display: flex;
  flex-direction: column;
  height: 93vh;
  position: absolute;
  z-index: 10;
  user-select: none;
  color: white;
  /* background-color: #2a2a2a; */
  background-image: url("/public/images/bg.jpg");

  opacity: 0.9;
}

/* .content-l-top {
  height: 150px;
} */

.content_middle_top {
  left: 28vw;

  width: 40.7vw;
  height: 14vh;
  padding: 3vh;
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 40;
  user-select: none;
  color: white;
  /* background-color: #2a2a2a; */
  background-image: url("/public/images/bg.jpg");

  opacity: 0.9;
}

/* .content-mid {

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

} */

.content-r {
  right: 0;
  width: 25vw;
  /* background-color: rgba(0, 11, 61, 0.5); */
  background-image: url("/public/images/bg.jpg");
  padding-left: 3vh;
  padding-top: 3vh;
  padding-bottom: 3vh;
  padding-right: 3vh;
  display: flex;
  flex-direction: column;
  height: 93vh;
  position: absolute;
  z-index: 10;
  user-select: none;
  opacity: 0.9;
  color: white;
}

.person-box {
  margin-right: 10px;
  width: 10vw;
  height: 15vh;
  --bs-bg-opacity: 0.2;
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

.no {
  width: 100%;
  padding: 10px;
}

.no-hd {
  padding: 5px;
  position: relative;
  /* border:1px solid rgb(25,186,139); */
}

.no-hd ul {
  display: flex;
}

li {
  list-style: none;
}

.no-hd li {
  position: relative;
  flex: 1;
  line-height: 2rem;
  font-size: 1.5rem;
  color: #fff;
  font-family: heiti;
  text-align: center;
}

.no-hd ul:nth-child(2) li {
  font-size: 0.6rem;
}

.no-hd ul:nth-child(1) li::after {
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  content: "";
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.no-hd ul:nth-child(1) li:nth-child(3)::after {
  content: "";
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  width: 0px;
  background: rgba(255, 255, 255, 0.2);
}

.no-md {
  padding: 0px;
  position: relative;
  /* border:1px solid rgb(25,186,139); */
}

.no-md ul {
  display: flex;
}

.no-md li {
  position: relative;
  flex: 1;
  line-height: 1rem;
  font-size: 1rem;
  color: #fff;
  font-family: heiti;
  text-align: center;
}

.no-md li:nth-child(1) {
  position: relative;
  flex: 1;
  line-height: 1rem;
  font-size: 1rem;
  color: rgb(232, 241, 152);
  font-family: heiti;
  text-align: center;
}

.no-middle {
  width: 100%;
  /* padding: 10px; */
}

.no-middle-hd {
  /* padding: 5px; */
  position: relative;
  /* border:1px solid rgb(25,186,139); */
}

.no-middle-hd ul {
  display: flex;
}

.no-middle-hd li {
  position: relative;
  flex: 1;
  line-height: 2rem;
  font-size: 2rem;
  color: #fff;
  font-family: heiti;
  text-align: center;
}

.no-middle-hd ul:nth-child(2) li {
  font-size: 0.9rem;
  padding-top: 8px;
}

.no-middle-hd ul:nth-child(1) li::after {
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  content: "";
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.no-middle-hd ul:nth-child(1) li:nth-child(5)::after {
  content: "";
  position: absolute;
  top: 25%;
  right: 0;
  height: 50%;
  width: 0px;
  background: rgba(255, 255, 255, 0.2);
}

.warning-header {
  font-size: 24px;
  font-weight: bold;
}

.warning-detail li{
  min-height:30px;
  max-height:100px;
  width:350px;
  padding-top:20px;
  font-size: 16px;
  // font-weight:bold;
}

/* dialog弹框代码可复制 */
/deep/ .el-dialog__body{
  user-select:none;
}


</style>
