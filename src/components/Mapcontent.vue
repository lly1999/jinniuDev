<template>


  <div class="content-l">
    <div class="container">
      <dv-border-box6 style="height:25vh;padding:5px">

        <!-- <div class="card text-white bg-primary mb-3 " style="max-width: 14rem;padding: 10px;height: 10vh;"> -->
        <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">景观照明</h5>
        <div class="card-body" style="padding:5px ;">
          <!-- <dv-active-ring-chart :config="config_jgzm" style="width:25vw;height: 20vh;" /> -->
          <!-- <dv-charts :option="config_jgzm" style="width:25vw;height: 20vh;"/> -->
          今日暂无景观照明数据
        </div>
        <!-- </div>  -->

      </dv-border-box6>
      <dv-border-box7 style="height:30vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">城市管家</h5>
          <ScrollBoard v-model:config="config" style="width:25vw;height: 20vh;padding:5px" />
        </div>
      </dv-border-box7>
      <dv-border-box7 style="height:30vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">油烟检测</h5>
          <div>
            <dv-conical-column-chart :config="config_yyxt" style="width:25vw;height:20vh;" />
          </div>
        </div>
      </dv-border-box7>
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
    </div>
  </div>
  <div class="content-mid">

    <div class="card text-white bg-primary mb-3 person-box ">
      <div class="card-body">
        <!-- <h5 class="card-title">城市管家</h5> -->
        <!-- <DigitalFlop :config="memberNumber" style="width:25vw" /> -->
      </div>
    </div>
  </div>
  <div class="content-r">
    <div class="container">
      <dv-border-box7 style="height:30vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">行政执法</h5>
          <dv-capsule-chart :config="config_xzzf" style="width:25vw;height:20vh" />
        </div>
      </dv-border-box7>
      <dv-border-box7 style="height:30vh;padding:5px">
        <div dv-bg>
          <h5 class="card-title" style="font-size:25px;padding:5px ;text-align: center;">广告招牌</h5>
          <div>
            <dv-capsule-chart :config="config_ggzp" style="width:25vw;height:20vh" />
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
import { reactive, ref, onBeforeMount } from 'vue';
import { ScrollBoard, DigitalFlop } from '@kjgl77/datav-vue3'
import { BorderBox6 as DvBorderBox6 } from '@kjgl77/datav-vue3'
import { BorderBox7 as DvBorderBox7 } from '@kjgl77/datav-vue3'
import { getQypjCg } from '@/api/szcg.js'
import { getCompanyList } from '@/api/yyxt.js'
import { getMain } from '@/api/ggzp.js'
import { getMainXzzf } from '@/api/xzzf.js'
import { getOverview } from '@/api/jgzm.js'
import Charts from '@jiaminghi/charts'
var tableData_yyxt = []
var tableData_szcg = []
var tableData_ggzp = []
var tableData_xzzf = []
var tableData_jgzm = []

var scroll_data_szcg_all = []
onBeforeMount(() => {

  // getMainXzzf().then(data => {
  //   tableData_xzzf = data
  //   let conical_conlum = {
  //     name: '今日上报:' + tableData_xzzf[0].infoVal,
  //     value: tableData_xzzf[0].infoVal,
  //   }
  //   let conical_conlum1 = {
  //     name: '今日结案:' + tableData_xzzf[1].infoVal,
  //     value: tableData_xzzf[1].infoVal
  //   }
  //   let conical_conlum2 = {
  //     name: '本周上报:' + tableData_xzzf[3].infoVal,
  //     value: tableData_xzzf[3].infoVal
  //   }
  //   let conical_conlum3 = {
  //     name: '本周结案:' + tableData_xzzf[4].infoVal,
  //     value: tableData_xzzf[4].infoVal
  //   }
  //   let data_xzzf = []
  //   data_xzzf.push(conical_conlum)
  //   data_xzzf.push(conical_conlum1)
  //   data_xzzf.push(conical_conlum2)
  //   data_xzzf.push(conical_conlum3)

  //   config_xzzf.data = data_xzzf
  // })
  getMain().then(data => {
    tableData_ggzp = data
    let conical_conlum = {
      name: '餐饮业:' + tableData_ggzp[2].infoVal,
      value: tableData_ggzp[2].infoVal,
    }
    let conical_conlum1 = {
      name: '零售业:' + tableData_ggzp[3].infoVal,
      value: tableData_ggzp[3].infoVal
    }
    let conical_conlum2 = {
      name: '服务业:' + tableData_ggzp[4].infoVal,
      value: tableData_ggzp[4].infoVal
    }
    let conical_conlum3 = {
      name: '其他企业:' + tableData_ggzp[5].infoVal,
      value: tableData_ggzp[5].infoVal
    }
    let data_ggzp = []
    data_ggzp.push(conical_conlum)
    data_ggzp.push(conical_conlum1)
    data_ggzp.push(conical_conlum2)
    data_ggzp.push(conical_conlum3)

    config_ggzp.data = data_ggzp
  })

  getQypjCg().then(data => {
    tableData_szcg = data[0]
    for (let i = 1; i < 14; ++i) {
      let scroll_data_szcg = []
      scroll_data_szcg.push(tableData_szcg.data[i].val0)
      scroll_data_szcg.push(tableData_szcg.data[i].val1)
      scroll_data_szcg.push(tableData_szcg.data[i].val2)
      scroll_data_szcg.push(tableData_szcg.data[i].val3)
      scroll_data_szcg.push(tableData_szcg.data[i].val4)
      scroll_data_szcg_all.push(scroll_data_szcg)

    }
    config.data = scroll_data_szcg_all
  })
  getCompanyList().then(data => {
    tableData_yyxt = data
    console.log(tableData_yyxt[0].data)
    let conical_conlum = {
      name: '正常企业',
      value: tableData_yyxt[0].data[0].normal,
    }
    let conical_conlum1 = {
      name: '超标企业',
      value: tableData_yyxt[0].data[0].overproof,
    }
    let conical_conlum2 = {
      name: '预警企业',
      value: tableData_yyxt[0].data[0].warning,
    }
    let conical_conlum3 = {
      name: '离线企业',
      value: tableData_yyxt[0].data[0].offline,
    }
    let data_yyxt = []
    data_yyxt.push(conical_conlum)
    data_yyxt.push(conical_conlum1)
    data_yyxt.push(conical_conlum2)
    data_yyxt.push(conical_conlum3)

    config_yyxt.data = data_yyxt

  })

  getOverview().then(data => {
    tableData_jgzm = data
    console.log(tableData_jgzm[0].data)
    let conical_conlum = {
      name: '一品天下:' + tableData_jgzm[0].data[0].val1,
      value: tableData_jgzm[0].data[0].val1,
    }
    let conical_conlum1 = {
      name: '城北体育中心:' + tableData_jgzm[1].data[0].val1,
      value: tableData_jgzm[0].data[1].val1,
    }
    let conical_conlum2 = {
      name: '枣子巷:' + tableData_jgzm[0].data[2].val1,
      value: tableData_jgzm[0].data[2].val1,
    }
    let conical_conlum3 = {
      name: '一环路内透:' + tableData_jgzm[0].data[3].val1,
      value: tableData_jgzm[0].data[3].val1,
    }
    let data_jgzm = []
    data_jgzm.push(conical_conlum)
    data_jgzm.push(conical_conlum1)
    data_jgzm.push(conical_conlum2)
    data_jgzm.push(conical_conlum3)

    config_jgzm.series[0].data = data_jgzm
    console.log(config_jgzm.series[0].data)
  })
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

// let config = reactive({
//     header: ['街道', '立案数', '处置数','结案数','结案率','得分'],
//     headerHeight: 25,
//     data: [
//         ['抚琴', '1', '1','抚琴', '1', '1'],
//         ['西华', '1', '1','抚琴', '1', '1'],
//         ['街道1', '1', '1','抚琴', '1', '1'],
//         ['街道2', '1', '1','抚琴', '1', '1'],
//         ['街道3', '1', '1','抚琴', '1', '1'],
//         ['街道4', '1', '1','抚琴', '1', '1'],
//         ['街道5', '1', '1','抚琴', '1', '1'],
//         ['街道6', '1', '1','抚琴', '1', '1'],
//         ['街道7', '1', '1','抚琴', '1', '1'],
//         ['街道8', '1', '1','抚琴', '1', '1'],
//     ],
//     align: ['center'],
//     rowNum: 4,
//     columnWidth: [100,100,100,100,100,100],
//     headerBGC: '#006400',
//     oddRowBGC: '#3CB371',
//     evenRowBGC: '#8FBC8F',
// });

let problemCount = reactive({
  header: ['街道', '打卡问题', '严管街道到位问题', '定位异常', '信息接收'],
  data: [
    ['抚琴', '1', '1', '问题', '问题'],
    ['西华', '1', '1', '问题', '问题'],
    ['街道1', '1', '1', '问题', '问题'],
    ['街道2', '1', '1', '问题', '问题'],
    ['街道3', '1', '1', '问题', '问题'],
    ['街道4', '1', '1', '问题', '问题'],
    ['街道5', '1', '1', '问题', '问题'],
    ['街道6', '1', '1', '问题', '问题'],
    ['街道7', '1', '1', '问题', '问题'],
    ['街道8', '1', '1', '问题', '问题'],
  ],
  align: ['center'],
})

let digitConfig = reactive({
  number: [100],
  content: '{nt}人',
  style: {
    fontSize: 40,
  }
});

let memberNumber = reactive({
  number: [100],
  content: '城市管家 地图界面',
  style: {
    fontSize: 40,
    fill: '#5CA1D8',
  }
});

let deployed = reactive({
  number: [100],
  content: '{nt}人',
  style: {
    fontSize: 40,
    fill: '#708090',
  }
});

let excused = reactive({
  number: [100],
  content: '{nt}人',
  style: {
    fontSize: 40,
    fill: '#E1B95A',
  }
});

let situ = reactive({
  number: [100],
  content: '{nt}人',
  style: {
    fontSize: 40,
    fill: '#97C151',
  }
});

let positionException = reactive({
  number: [100],
  content: '{nt}人',
  style: {
    fontSize: 40,
    fill: '#E95547',
  }
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

  width: 25vw;
  padding: 3vh;
  display: flex;
  flex-direction: column;
  height: 93vh;
  position: absolute;
  z-index: 20;
  user-select: none;
  color: white;
  background-color: #2a2a2a;
  opacity: 0.7;
}

.content-l-top {
  height: 150px;

}

.content-mid {

  left: 23vw;
  width: 54.4vw;
  height: 8vh;
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
  width: 25vw;
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
  opacity: 0.7;
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


