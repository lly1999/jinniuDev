<template>
    <div class="city-scape">
        <div class="city-scape-left">
            <div class="city-scape-left-one" @click="one_clicked">
                <div
                    :class="one_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                    <div :class="one_selected == true ? 'left-number left-number-text-selected' : 'left-number'">1</div>
                </div>
                <div :class="one_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'">
                    <p>成都市综合行政</p>
                    <p>管理执法智慧服务平台</p>
                </div>
                <div :class="one_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
            </div>

            <div class="city-scape-left-two" @click="two_clicked">
                <div
                    :class="two_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                    <div :class="two_selected == true ? 'left-number left-number-text-selected' : 'left-number'">2</div>
                </div>
                <div :class="two_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                    style="top: 38px; left: 60px">
                    餐饮油烟监测服务
                </div>
                <div :class="two_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
            </div>

            <div class="city-scape-left-three" @click="three_clicked">
                <div
                    :class="three_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                    <div :class="three_selected == true ? 'left-number left-number-text-selected' : 'left-number'">3
                    </div>
                </div>
                <div :class="three_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                    style="top: 38px; left: 60px">
                    调度指挥平台
                </div>
                <div :class="three_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
            </div>

            <div class="city-scape-left-four" @click="four_clicked">
                <div
                    :class="four_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                    <div :class="four_selected == true ? 'left-number left-number-text-selected' : 'left-number'">4
                    </div>
                </div>
                <div :class="four_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                    style="top: 25px; left: 60px">
                    <p>扬尘治理</p>
                    <p>大数据协同管理中心</p>
                </div>
                <div :class="four_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
            </div>

            <div class="city-scape-left-five" @click="five_clicked">
                <div
                    :class="five_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                    <div :class="five_selected == true ? 'left-number left-number-text-selected' : 'left-number'">5
                    </div>
                </div>
                <div :class="five_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                    style="top: 37px; left: 60px">
                    共享单车管理平台
                </div>
                <div :class="five_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
            </div>

            <div class="city-scape-left-six" @click="six_clicked">
                <div
                    :class="six_selected == true ? 'city-scape-left-number left-number-selected' : 'city-scape-left-number'">
                    <div :class="six_selected == true ? 'left-number left-number-text-selected' : 'left-number'">6</div>
                </div>
                <div :class="six_selected == true ? 'city-scape-left-name left-name-selected' : 'city-scape-left-name'"
                    style="top: 37px; left: 60px">
                    街面图像综合应用
                </div>
                <div :class="six_selected == true ? 'col-line col-line-selected' : 'col-line'"></div>
            </div>
            <div class="extra-col-line"></div>
        </div>

        <div class="city-scape-right" v-for="system_info in systems" :key="system_info.id">
            <img v-if="one_selected == true" class="right-number-img" src="@/assets/images/city/number1.png" alt="">
            <img v-if="two_selected == true" class="right-number-img" src="@/assets/images/city/number2.png" alt="">
            <img v-if="three_selected == true" class="right-number-img" src="@/assets/images/city/number3.png" alt="">
            <img v-if="four_selected == true" class="right-number-img" src="@/assets/images/city/number4.png" alt="">
            <img v-if="five_selected == true" class="right-number-img" src="@/assets/images/city/number5.png" alt="">
            <img v-if="six_selected == true" class="right-number-img" src="@/assets/images/city/number6.png" alt="">

            <div class="system-name">{{ system_info.name }}</div>
            <div class="system-name-en">{{ system_info.name_en }}</div>

            <img v-if="one_selected == true" class="right-bg" src="@/assets/images/city/bg1.png" alt="">
            <img v-if="two_selected == true" class="right-bg" src="@/assets/images/city/bg2.png" alt="">
            <img v-if="three_selected == true" class="right-bg" src="@/assets/images/city/bg3.png" alt="">
            <img v-if="four_selected == true" class="right-bg" src="@/assets/images/city/bg4.png" alt="">
            <img v-if="five_selected == true" class="right-bg" src="@/assets/images/city/bg5.png" alt="">
            <img v-if="six_selected == true" class="right-bg" src="@/assets/images/city/bg6.png" alt="">

            <div class="system-content">
                <img v-if="one_selected == true" class="content-bg" src="@/assets/images/city/content1.png" alt="">
                <img v-if="two_selected == true" class="content-bg" src="@/assets/images/city/content2.png" alt="">
                <img v-if="three_selected == true" class="content-bg" src="@/assets/images/city/content3.png" alt="">
                <img v-if="four_selected == true" class="content-bg" src="@/assets/images/city/content4.png" alt="">
                <img v-if="five_selected == true" class="content-bg" src="@/assets/images/city/content5.png" alt="">
                <img v-if="six_selected == true" class="content-bg" src="@/assets/images/city/content6.png" alt="">

                <div class="system-content-test">
                    <p v-for="item in system_info.items" :key="item.id">{{ item.desc }}：{{ item.value }}</p>
                </div>
                <img class="check-img" src="@/assets/images/city/check.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue"

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

const one_clicked = () => {
    systems.splice(0, systems.length);

    system_zonghe.name = "成都市综合行政管理执法智慧服务平台";
    system_zonghe.name_en = "Intelligent Service Platform For Comprehensive Administrative Management And Law Enforcement";

    let zonghe_info = [
        { desc: "今日结案", value: "0" },
        { desc: "今日上报案件", value: '0' },
        { desc: "今日结案率", value: '今日无案件' },
        { desc: "本周解决", value: '2448' },
        { desc: "本周上报案件", value: '2482' }
    ]
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

    let canyin_info = [
        { desc: "已安装设备企业", value: "675" },
        { desc: "正常运行企业", value: '490' },
        { desc: "离线企业数", value: '182' },
        { desc: "超标企业数", value: '1' },
        { desc: "预警企业数", value: '2' }
    ]
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

    let danche_info = [
        { desc: "未受理案件", value: "33" },
        { desc: "未处理案件", value: '23' },
        { desc: "处理中案件", value: '10' },
        { desc: "已处理案件", value: '23' },
        { desc: "已退回案件", value: '23' }
    ]
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
.city-scape {
    position: relative;
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