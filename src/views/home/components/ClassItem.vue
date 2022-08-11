<template>
    <div id="item">
        <el-avatar class="logo" :src="require('@/assets/home/'+logo)" size=15px></el-avatar>
        <el-tooltip v-if="name=='环境卫生'"
            placement="top-start"
            effect="light"
            content='生活垃圾分类 餐厨垃圾收运管理 垃圾压缩站管理'
            popper-class="tip-class"
            >
            <span :class="styleName" >{{name}}</span>
        </el-tooltip>
        <el-tooltip v-else-if="name=='市容秩序'"
            placement="top-start"
            effect="light"
            content="餐饮油烟监测服务 调度指挥平台 扬尘治理大数据中心 共享单车管理平台 街面图像综合应用"
            popper-class="tip-class"
            >
            <span :class="styleName" >{{name}}</span>
        </el-tooltip>
        <el-tooltip v-else-if="name=='景观照明'"
            placement="top-start"
            effect="light"
            content="金牛区景观照明控制系统 广告招牌二维码管理"
            popper-class="tip-class"
            >
            <span :class="styleName" >{{name}}</span>
        </el-tooltip>
        <el-tooltip v-else-if="name=='数字城管'" 
            placement="top-start"
            effect="light"
            content="成都市综合行政管理执法智慧服务平台 城管AI识别系统 数字化城市信息管理系统 城管诉易达平台"
            popper-class="tip-class"
            >
            <span :class="styleName" >{{name}}</span>
        </el-tooltip>
        <el-tooltip v-else
            placement="top-start"
            effect="light"
            :content="name"
            popper-class="tip-class"
            >
            <span :class="styleName" >{{name}}</span>
        </el-tooltip>
    </div>
</template>
<script setup>

defineProps({
    logo: String,
    name: String,
    styleName: String,
    systemName:String
})

</script>

<style>

div.tip-class {
  font-size: 20px;
  padding: 15px;
}
#item{
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    margin-left: 40px;
    padding-left: 10px;
    padding-right: 10px;
} 
#item{
    position: relative;
    text-decoration: none;
    font-size: 25px;
    color: #333;
        }
#item:before{
    content: "";
    position: absolute;
    left: 0;
    bottom:-5px;
    height: 3px;
    width: 100%;
    background: #4285f4;
    transform: scale(0);
    transition: all 0.3s;
        }
#item:hover:before{
    transform: scale(1);
        }
.logo{
    margin-right: 10px;
}
.className{
    font-size: 29px;
    display: inline-block;
    width: 130px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.subsysName{
    font-size: 28px;
    padding: 5px;
    display: inline-block;
}
</style>