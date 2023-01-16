<template>
    <el-skeleton 
        :loading="loading" 
        animated>
        <template #default>
            <template v-for="tableItem in tableData">
                <el-table :data="tableItem.data" 
                table-layout="fixed"
                :row-style="{height: '50px'}"
                :cell-style="{padding: '15px',height:'20px'}"
                class="table" :fit="false">
                    <el-table-column 
                        v-for="i in tableItem.headerNames.length"
                        :label="tableItem.headerNames[i - 1]"
                        :prop="tableItem.dataNames[i - 1]" width="200"/>
                </el-table>
            </template>
        </template>
    </el-skeleton>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import { getOverview } from '@/api/jgzm.js';

const loading = ref(true)
const tableData = ref([])
onBeforeMount(() => {
    getOverview().then(data => {
        tableData.value = data
    }).finally(() => {
        loading.value = false
    })
})
</script>

<style scoped>
.table{
    
    size: large;
    font-size: 23px;
    
}
</style>