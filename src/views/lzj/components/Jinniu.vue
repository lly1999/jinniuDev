<template>
    <el-container>
        <el-header style="font-size:25px;padding:5px ;">
            <h5 class="card-title" style="font-size:30px;padding:5px ;">垃圾大站（红星，西华）总量数据统计</h5>
        </el-header>
        <el-main>
            <div class="card-header"></div>
            <div class="card-body">
                <h5 class="card-title" style="font-size:25px;padding:5px ;">垃圾大站总量趋势统计</h5>
                <div class="card-body" style="padding:5px ;">
                    <!-- <dv-active-ring-chart :config="config_jgzm" style="width:25vw;height: 20vh;" /> -->
                    <dv-charts :option="config_jgzm" style="width:50vw;height: 30vh;" />
                </div>
                <h5 class="card-title" style="font-size:25px;padding:5px ;">垃圾大站今日总量</h5>
                <li style="font-size:25px;padding:5px">
                    金牛区垃圾今日数据：垃圾净重{{ total }}吨
                </li>
                <dv-charts :option="config_today" style="width:50vw;height: 30vh;" />
                <!-- <el-date-picker v-model="value" type="daterange" unlink-panels range-separator="到"
                    start-placeholder="选择开始时间" end-placeholder="选择结束时间" :shortcuts="shortcuts" @change="changeDate"
                    size="large" />
                <el-table :data="data" :size="large" width="100%">
                    <el-table-column property="exactDate" label="处理时间" width="200px" />
                    <el-table-column property="carNumber" label="承运车辆" width="150" />
                    <el-table-column property="netWeight" label="垃圾净重/kg" width="200" />
                    <el-table-column property="grossWeight" label="垃圾毛重/kg" width="200" />
                    <el-table-column property="tareWeight" label="垃圾皮重/kg" width="200" />
                    <el-table-column property="transporter" label="承运单位" width="300" />



                </el-table> -->
            </div>
            <!-- <div class="float-end" style="margin-top: 10px">
                <el-pagination background layout="total, prev, pager, next, jumper" :total="total_records"
                    :current-page="current_page" @current-change="pull_page" />
            </div> -->

        </el-main>
    </el-container>


</template>
<script setup>
import { useRouter, useRoute } from "vue-router";

import { House, ArrowDown, Setting, Link } from "@element-plus/icons-vue";
import Header from "@/components/Header.vue";
import { ref, reactive, computed, onBeforeMount, onMounted } from "vue";
import axios from 'axios';
import MapContent from "@/components/Mapcontent.vue"
import { getQuery } from '@/api/garbage.js'
const value = ref('')
const shortcuts = [
    {
        text: '今天',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [today, tomorrow]
        },
    },
    {
        text: '过去一周',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [week_before, tomorrow]
        },
    },
    {
        text: '上个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [month_before, tomorrow]
        },
    },

]
function changeDate() {
    start = value.value[0].getFullYear() + '-' + (value.value[0].getMonth() + 1) + '-' + value.value[0].getDate()
    end = value.value[1].getFullYear() + '-' + (value.value[1].getMonth() + 1) + '-' + value.value[1].getDate()
    getQuery('红星', 'transporter', start, end, 1, 10000).then(function (resp) {
        total_records.value = resp.length

        console.log(total_records.value = resp.length)
        page_count = parseInt(resp.length) % 10;
        // patrols.value.splice(0, patrols.value.length);
        // total_records.value = parseInt(resp.total);
        // page_count = parseInt(resp.data.data.pages);
        // ifShowQueryResult.value = false;
    })
    getQuery('红星', 'transporter', start, end, 1, 10).then(function (resp) {

        total_records.value = resp.length
        page_count = parseInt(resp.length) % 10;
        data.value = resp
    })
}
var time = (new Date).getTime();
var weekTime = new Date(time - 7 * 24 * 60 * 60 * 1000);
var month_time = new Date(time - 31 * 24 * 60 * 60 * 1000);
const week_before = weekTime.getFullYear() + '-' + (weekTime.getMonth() + 1) + '-' + weekTime.getDate()
const month_before = month_time.getFullYear() + '-' + (month_time.getMonth() + 1) + '-' + month_time.getDate()

let total_records = ref(1000);
let current_page = ref(1);
let page_count = 0;
const data = ref([])
const today = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
const tomorrow = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + (new Date().getDate() + 1)
var start = today
var end = tomorrow
const total_hongxing = ref(2)
const total_xihua = ref(2)
const total = ref(2)
const yAxis = ref([])
const yAxis_total = ref([0, 0, 0, 0, 0, 0, 0])
const period_data = reactive({
    zero_four: 0,
    four_eight: 0,
    eight_twelve: 0,
    twelve_sixteen: 0,
    sixteen_twenty: 0,
    twenty_zero: 0,

})
onBeforeMount(() => {
    //本日数据统计
    getQuery('红星', 'transporter',
        today + 'T00%3A00%3A00',
        today + 'T04%3A00%3A00',
        1, 10000).then(function (resp) {
            yAxis_total.value.splice(0, 6)

            for (let i = 0; i < resp.length; i++) {
                period_data.zero_four = resp[i].netWeight + period_data.zero_four
            }


        })
    getQuery('西华', 'transporter',
        today + 'T00%3A00%3A00',
        today + 'T04%3A00%3A00',
        1, 10000).then(function (resp) {

            for (let i = 0; i < resp.length; i++) {
                period_data.zero_four = resp[i].netWeight + period_data.zero_four
            }
            period_data.zero_four = Math.floor((period_data.zero_four / 1000) * 100) / 100
            yAxis_total.value.splice(0, 0, period_data.four_eight)


        })
    getQuery('红星', 'transporter',
        today + 'T04%3A00%3A00',
        today + 'T08%3A00%3A00',
        1, 10000).then(function (resp) {

            for (let i = 0; i < resp.length; i++) {
                period_data.four_eight = resp[i].netWeight + period_data.four_eight
            }
            period_data.four_eight = Math.floor((period_data.four_eight / 1000) * 100) / 100


        })
    getQuery('西华', 'transporter',
        today + 'T04%3A00%3A00',
        today + 'T08%3A00%3A00',
        1, 10000).then(function (resp) {

            for (let i = 0; i < resp.length; i++) {
                period_data.four_eight = resp[i].netWeight + period_data.four_eight
            }
            period_data.four_eight = Math.floor((period_data.four_eight / 1000) * 100) / 100
            yAxis_total.value.splice(1, 0, period_data.four_eight)


        })
    getQuery('红星', 'transporter',
        today + 'T08%3A00%3A00',
        today + 'T12%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.eight_twelve = resp[i].netWeight + period_data.eight_twelve
            }
            period_data.eight_twelve = Math.floor((period_data.eight_twelve / 1000) * 100) / 100
        })
    getQuery('西华', 'transporter',
        today + 'T08%3A00%3A00',
        today + 'T12%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.eight_twelve = resp[i].netWeight + period_data.eight_twelve
            }
            period_data.eight_twelve = Math.floor((period_data.eight_twelve / 1000) * 100) / 100
            yAxis_total.value.splice(2, 0, period_data.eight_twelve)
        })

    getQuery('红星', 'transporter',
        today + 'T12%3A00%3A00',
        today + 'T16%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.twelve_sixteen = resp[i].netWeight + period_data.twelve_sixteen
            }
            period_data.twelve_sixteen = Math.floor((period_data.twelve_sixteen / 1000) * 100) / 100


        })
    getQuery('西华', 'transporter',
        today + 'T12%3A00%3A00',
        today + 'T16%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.twelve_sixteen = resp[i].netWeight + period_data.twelve_sixteen
            }
            period_data.twelve_sixteen = Math.floor((period_data.twelve_sixteen / 1000) * 100) / 100

            yAxis_total.value.splice(3, 0, period_data.twelve_sixteen)

        })
    getQuery('红星', 'transporter',
        today + 'T16%3A00%3A00',
        today + 'T20%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.sixteen_twenty = resp[i].netWeight + period_data.sixteen_twenty
            }
            period_data.sixteen_twenty = Math.floor((period_data.sixteen_twenty / 1000) * 100) / 100


        })
    getQuery('西华', 'transporter',
        today + 'T16%3A00%3A00',
        today + 'T20%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.sixteen_twenty = resp[i].netWeight + period_data.sixteen_twenty
            }
            period_data.sixteen_twenty = Math.floor((period_data.sixteen_twenty / 1000) * 100) / 100

            yAxis_total.value.splice(4, 0, period_data.sixteen_twenty)


        })
    getQuery('红星', 'transporter',
        today + 'T20%3A00%3A00',
        today + 'T24%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.twenty_zero = resp[i].netWeight + period_data.twenty_zero
            }
            period_data.twenty_zero = Math.floor((period_data.twenty_zero / 1000) * 100) / 100



        })
    getQuery('西华', 'transporter',
        today + 'T20%3A00%3A00',
        today + 'T24%3A00%3A00',
        1, 10000).then(function (resp) {
            for (let i = 0; i < resp.length; i++) {
                period_data.twenty_zero = resp[i].netWeight + period_data.twenty_zero
            }
            period_data.twenty_zero = Math.floor((period_data.twenty_zero / 1000) * 100) / 100

            yAxis_total.value.splice(5, 0, period_data.twenty_zero)
            console.log(yAxis_total.value)

        })
    //过去一周的统计数据
    getQuery('红星', 'transporter',
        new Date(time - 6 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 6 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 6 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 5 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 5 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 5 * 24 * 60 * 60 * 1000).getDate(),
        1,
        10000).then(function (resp) {
            total_hongxing.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_hongxing.value = resp[i].netWeight + total_hongxing.value
            }
            total_hongxing.value = Math.floor((total_hongxing.value / 1000) * 100) / 100
        })
    getQuery('西华', 'transporter',
        new Date(time - 6 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 6 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 6 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 5 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 5 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 5 * 24 * 60 * 60 * 1000).getDate(),
        1,
        10000).then(function (resp) {
            total_xihua.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_xihua.value = resp[i].netWeight + total_xihua.value
            }
            total_xihua.value = Math.floor((total_xihua.value / 1000) * 100) / 100
            total.value = total_hongxing.value + total_xihua.value
            yAxis.value.splice(0, 0, total.value)

        })
    getQuery('红星', 'transporter',
        new Date(time - 5 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 5 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 5 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 4 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 4 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 4 * 24 * 60 * 60 * 1000).getDate(), 1, 10000).then(function (resp) {
            total_hongxing.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_hongxing.value = resp[i].netWeight + total_hongxing.value
            }
            total_hongxing.value = Math.floor((total_hongxing.value / 1000) * 100) / 100
        })
    getQuery('西华', 'transporter',
        new Date(time - 5 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 5 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 5 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 4 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 4 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 4 * 24 * 60 * 60 * 1000).getDate(), 1, 10000).then(function (resp) {
            total_xihua.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_xihua.value = resp[i].netWeight + total_xihua.value
            }
            total_xihua.value = Math.floor((total_xihua.value / 1000) * 100) / 100
            total.value = total_hongxing.value + total_xihua.value
            yAxis.value.splice(1, 0, total.value)
        })
    getQuery('红星', 'transporter',
        new Date(time - 4 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 4 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 4 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 3 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 3 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 3 * 24 * 60 * 60 * 1000).getDate(),
        1, 10000).then(function (resp) {
            total_hongxing.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_hongxing.value = resp[i].netWeight + total_hongxing.value
            }
            total_hongxing.value = Math.floor((total_hongxing.value / 1000) * 100) / 100

        })
    getQuery('西华', 'transporter',
        new Date(time - 4 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 4 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 4 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 3 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 3 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 3 * 24 * 60 * 60 * 1000).getDate(),
        1, 10000).then(function (resp) {
            total_xihua.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_xihua.value = resp[i].netWeight + total_xihua.value
            }
            total_xihua.value = Math.floor((total_xihua.value / 1000) * 100) / 100
            total.value = total_hongxing.value + total_xihua.value
            yAxis.value.splice(2, 0, total.value)

        })

    getQuery('红星', 'transporter',
        new Date(time - 3 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 3 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 3 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 2 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 2 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 2 * 24 * 60 * 60 * 1000).getDate(), 1, 10000).then(function (resp) {
            total_hongxing.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_hongxing.value = resp[i].netWeight + total_hongxing.value
            }
            total_hongxing.value = Math.floor((total_hongxing.value / 1000) * 100) / 100

        })
    getQuery('西华', 'transporter',
        new Date(time - 3 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 3 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 3 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 2 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 2 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 2 * 24 * 60 * 60 * 1000).getDate(), 1, 10000).then(function (resp) {
            total_xihua.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_xihua.value = resp[i].netWeight + total_xihua.value
            }
            total_xihua.value = Math.floor((total_xihua.value / 1000) * 100) / 100
            total.value = total_hongxing.value + total_xihua.value
            yAxis.value.splice(3, 0, total.value)
        })
    getQuery('红星', 'transporter',
        new Date(time - 2 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 2 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 2 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 1 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 1 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 1 * 24 * 60 * 60 * 1000).getDate(), 1, 10000).then(function (resp) {
            total_hongxing.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_hongxing.value = resp[i].netWeight + total_hongxing.value
            }
            total_hongxing.value = Math.floor((total_hongxing.value / 1000) * 100) / 100

        })
    getQuery('西华', 'transporter',
        new Date(time - 2 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 2 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 3 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time - 1 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 1 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 2 * 24 * 60 * 60 * 1000).getDate(), 1, 10000).then(function (resp) {
            total_xihua.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_xihua.value = resp[i].netWeight + total_xihua.value
            }
            total_xihua.value = Math.floor((total_xihua.value / 1000) * 100) / 100
            total.value = total_hongxing.value + total_xihua.value
            yAxis.value.splice(4, 0, total.value)

        })
    getQuery('红星', 'transporter',
        new Date(time - 1 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 1 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 1 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time).getFullYear() + '-' + (new Date(time).getMonth() + 1) + '-' + new Date(time).getDate(),
        1, 10000).then(function (resp) {
            total_hongxing.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_hongxing.value = resp[i].netWeight + total_hongxing.value
            }
            total_hongxing.value = Math.floor((total_hongxing.value / 1000) * 100) / 100




        })
    getQuery('西华', 'transporter',
        new Date(time - 1 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 2 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 3 * 24 * 60 * 60 * 1000).getDate(),
        new Date(time).getFullYear() + '-' + (new Date(time - 1 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 2 * 24 * 60 * 60 * 1000).getDate(), 1, 10000).then(function (resp) {
            total_xihua.value = 0;
            for (let i = 0; i < resp.length; i++) {
                total_xihua.value = resp[i].netWeight + total_xihua.value
            }
            total_xihua.value = Math.floor((total_xihua.value / 1000) * 100) / 100
            total.value = total_hongxing.value + total_xihua.value
            yAxis.value.splice(5, 0, total.value)

        })
    getQuery('红星', 'transporter', today, tomorrow, 1, 10000).then(function (resp) {
        total_hongxing.value = 0;
        for (let i = 0; i < resp.length; i++) {
            total_hongxing.value = resp[i].netWeight + total_hongxing.value
        }
        total_hongxing.value = Math.floor((total_hongxing.value / 1000) * 100) / 100


        total_records.value = resp.length
        page_count = parseInt(resp.length) % 10;

    })
    getQuery('西华', 'transporter', today, tomorrow, 1, 10000).then(function (resp) {
        for (let i = 0; i < resp.length; i++) {
            total_xihua.value = resp[i].netWeight + total_xihua.value
        }
        total_xihua.value = Math.floor((total_xihua.value / 1000) * 100) / 100
        total.value = total_hongxing.value + total_xihua.value
        total.value = Math.floor((total.value) * 100) / 100

        yAxis.value.splice(5, 0, total.value)

    })
    getQuery('红星', 'transporter', today, tomorrow, 1, 10).then(function (resp) {

        data.value = resp

    })
})
const pull_page = page => {

    // Object.keys(patrolInfo).map(key => {
    //     delete patrolInfo[key]
    // });
    current_page.value = page;
    getQuery('红星', 'transporter', start, end, page, 10).then(function (resp) {
        data.value = resp
        ifShowQueryResult.value = false;
    })
}

const config_jgzm = reactive({
    title: {
        text: '过去一周垃圾趋势'
    },
    xAxis: {
        name: '日期',
        data: [
            new Date(time - 6 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 6 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 6 * 24 * 60 * 60 * 1000).getDate(),
            new Date(time - 5 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 5 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 5 * 24 * 60 * 60 * 1000).getDate(),
            new Date(time - 4 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 4 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 4 * 24 * 60 * 60 * 1000).getDate(),
            new Date(time - 3 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 3 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 3 * 24 * 60 * 60 * 1000).getDate(),
            new Date(time - 2 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 2 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 2 * 24 * 60 * 60 * 1000).getDate(),
            new Date(time - 1 * 24 * 60 * 60 * 1000).getFullYear() + '-' + (new Date(time - 1 * 24 * 60 * 60 * 1000).getMonth() + 1) + '-' + new Date(time - 1 * 24 * 60 * 60 * 1000).getDate(),
            today,
        ]
    },
    yAxis: {
        name: '垃圾净重',
        data: 'value',
        min: 0,
        interval: 200,
    },
    series: [
        {
            data: yAxis,
            type: 'bar', label: {
                show: true,
                formatter: '{value} 吨'
            }
        }
    ]
})
const config_today = reactive({
    title: {
        text: ''
    },
    xAxis: {
        name: '时间段',
        data: ['0点-4点', '4点-8点', '8点-12点', '12点-16点', '16点-20点', '20点-24点'],

    },
    yAxis: {
        name: '垃圾净重/吨',
        data: 'value',
        min: 0,
        interval: 50,

    },
    series: [
        {
            data: yAxis_total,
            type: 'line',
            label: {
                show: true,
                formatter: '{value} 吨',
                style: {
                }
            }
        }
    ]
})
</script>