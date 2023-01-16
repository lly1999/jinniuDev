<template>
    <div class="environment-box">
        <div @click="garbage_classify_click"
            :class="garbage_classify_selected == false ? 'garbage-classify' : 'garbage-classify garbage-classify-select'">
            <img v-if="garbage_classify_selected == false" class="garbage-classify-icon"
                src="@/assets/images/environment/garbage-classify-default.png" alt="">
            <img v-if="garbage_classify_selected == true" class="garbage-classify-icon"
                src="@/assets/images/environment/garbage-classify-selected.png" alt="">
            <div
                :class="garbage_classify_selected == false ? 'garbage-classify-text' : 'garbage-classify-text garbage-classify-text-select'">
                生活垃圾分类</div>
        </div>
        <div @click="garbage_transport_click"
            :class="garbage_transport_selected == false ? 'garbage-transport' : 'garbage-transport garbage-transport-select'">
            <img v-if="garbage_transport_selected == false" class="garbage-transport-icon"
                src="@/assets/images/environment/garbage-transport-default.png" alt="">
            <img v-if="garbage_transport_selected == true" class="garbage-transport-icon"
                src="@/assets/images/environment/truck.png" alt="">
            <div
                :class="garbage_transport_selected == false ? 'garbage-transport-text' : 'garbage-transport-text garbage-transport-text-select'">
                餐厨垃圾收运管理</div>
        </div>
        <div @click="garbage_compress_click"
            :class="garbage_compress_selected == false ? 'garbage-compress' : 'garbage-compress garbage-compress-select'">
            <img v-if="garbage_compress_selected == false" class="garbage-compress-icon"
                src="@/assets/images/environment/garbage-compress-default.png" alt="">
            <img v-if="garbage_compress_selected == true" class="garbage-compress-icon"
                src="@/assets/images/environment/garbage-compress-selected.png" alt="">
            <div
                :class="garbage_compress_selected == false ? 'garbage-compress-text' : 'garbage-compress-text garbage-compress-text-select'">
                垃圾压缩站管理</div>
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
                <div class="content-number">①未受理案件: {{ environment_item.not_accept }}；②未处理案件:
                    {{ environment_item.not_processed }}；③处理中案件: {{ environment_item.processing }}；④已处理案件:
                    {{ environment_item.processed }}；⑤已退回案件: {{ environment_item.returned }}</div>

                <div class="check-details">查看详情</div>
                <img class="detail-img" src="@/assets/images/environment/more-detail.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

let garbage_classify_selected = ref(true);
let garbage_transport_selected = ref(false);
let garbage_compress_selected = ref(false);
let environments = reactive([]);
let garbage_classify = reactive({});
let garbage_transport = reactive({});
let garbage_compress = reactive({});

const garbage_classify_click = () => {
    environments.splice(0, environments.length);

    garbage_classify['title'] = "生活垃圾分类";
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

    garbage_transport['title'] = "厨余垃圾收运管理";
    garbage_transport['title_en'] = "Food Waste Collection And Transportation Management";
    garbage_transport['not_accept'] = 23;
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

    garbage_compress['title'] = "垃圾压缩站管理";
    garbage_compress['title_en'] = "Garbage Compression Station Management";
    garbage_compress['not_accept'] = 23;
    garbage_compress['not_processed'] = 23;
    garbage_compress['processing'] = 23;
    garbage_compress['processed'] = 23;
    garbage_compress['returned'] = 23;

    environments.push(garbage_compress);
    garbage_classify_selected.value = false;
    garbage_transport_selected.value = false;
    garbage_compress_selected.value = true;
}
</script>

<style scoped>
.environment-box {
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