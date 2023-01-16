<template>
    <el-skeleton 
        :loading="loading" 
        animated>
        <template #default>
            <template v-for="tableItem in tableData">
                <el-table :data="tableItem.data" class="table" fit="true" max-height="800px" size="large"
                :row-style="{height: '50px','line-height':'35px'}"
                :cell-style="cellStyle">
                    <el-table-column 
                        v-for="i in tableItem.headerNames.length"
                        :label="tableItem.headerNames[i - 1]"
                        :prop="tableItem.dataNames[i - 1]" width="250"/>
                </el-table>
            </template>
        </template>
    </el-skeleton>
    
</template>
<!--:cell-style="cellStyle"-->
<script setup>
  
import { onBeforeMount, ref } from 'vue';
import { getHistory } from '@/api/xzzf.js';

const loading = ref(true)
const tableData = ref([])
onBeforeMount(() => {
    getHistory().then(data => {
        tableData.value = data
    }).finally(() => {
        loading.value = false
    })
})

const cellStyle= (()=>{
    return {
    'font-size':'30px',
    height: '150px',
    padding: '10px',
    'line-height':'40px',
    margin:'5px'
  }
})

</script>

<style scoped>
.el-table--enable-row-transition .el-table__body td.el-table__cell{
    line-height: 50px;
}
.cell {
    line-height: 50px;
}
.table{
    size: large;
    margin-bottom: 1em;
    font-size: 25px;
}
.el-table .cell {
line-height: 200px;
}
.el-table .el-table__cell {
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
    z-index: 1;
    line-height: 35px;
}
.el-table__row{
    line-height: 35px;
}
.el-table__cell .cell{
    line-height: 30px;
}
</style>