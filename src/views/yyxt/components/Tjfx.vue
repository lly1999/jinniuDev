<template>
    <div 
        v-loading="loading" 
        element-loading-text="加载中..."
        element-loading-background="rgba(122, 122, 122, 0.8)">
        <template v-for="tableItem in tableData">
            <el-table :data="tableItem.data" class="table" :fit="false">
                <el-table-column 
                    v-for="i in tableItem.headerNames.length"
                    :label="tableItem.headerNames[i - 1]"
                    :prop="tableItem.dataNames[i - 1]" width="180"/>
            </el-table>
        </template>
    </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import { getStatist } from '@/api/yyxt';

const loading = ref(true)
const tableData = ref([])
onBeforeMount(() => {
    getStatist().then(data => {
        tableData.value = data
        // console.log(tableData)
    }).finally(() => {
        loading.value = false
    })    
})
</script>

<style scoped>
.table{
    margin-bottom: 1em;
}
</style>