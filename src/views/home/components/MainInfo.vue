<template>
  
  <el-card class="card" shadow = "hover">
    <template #header>
      <ul v-if ="url"><div class="header"><el-button type="text" @click="toSystem()" >{{systemName}}</el-button></div></ul>
      <div class = "header" style="font-size:20px" v-else><el-button type="text" disabled @click="toSystem()" >{{systemName}}</el-button></div>
    </template>
    <el-image v-if="image" class="image" :src="require('@/assets/home/'+image)"> </el-image>
    <el-image class="image" v-else :src="require('@/assets/home/img-jmhj.jpg')"></el-image>

    <div class="infoContainer">
      <!-- logo -->
      <!-- <div>
        <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large"></el-avatar>
      </div> -->
      <!-- 汇总数据列表 -->

      <div>
        <el-avatar class="logo-icon" :src="require('@/assets/home/'+logo)" size="large" ></el-avatar>
        <ul v-if="infoList.length != 0" class="infoList">
          <li v-for="item in infoList">{{item.infoKey+": "+item.infoVal}}</li>
        </ul>
        <div v-else>
          暂无数据
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import router from '@/router';





const prop =defineProps({
    logo:String,
    infoList:Array,
    systemName: String,
    url:String,
    image:String,
    
})
function toSystem(){
  router.push(prop.url)
}
</script>

<style scoped>

.el-button {
  font-size: 20px;
  color: green;
 
}
.card{
  border-radius: 13px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 8%);
  margin-right: 45px;
  margin-top: 25px;
  width: 450px;
}

.header{
  text-align: center;
  
  /* width:130px;
  overflow: hidden;
  white-space: nowrap; */
  
  
}
.infoContainer{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  
}
.logo-icon{
  margin-right: 10px;
  margin-left: 25%;
}
.image {
  float: left;
  height: 170px;
  width: 170px;
  border-radius: 5px;

}

.infoList{
  list-style-type: none;
}
</style>