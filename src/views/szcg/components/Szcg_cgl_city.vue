<template>
    <el-skeleton 
        :loading="loading" 
        animated>
        <template #default>
            <template v-for="tableItem in tableData">
                <el-table :data="tableItem.data" class="table" :fit="false"
                :row-style="{height: '50px'}"
                :cell-style="{padding: '15px',height:'20px'}">
                 <el-table-colum prop ="问题类型" label = "部件" width="160"/>
                    <el-table-column 
                        v-for="i in tableItem.headerNames.length"
                        :label="tableItem.headerNames[i - 1]"
                        :prop="tableItem.dataNames[i - 1]" width="160"/>
                </el-table>
            </template>
        </template>
    </el-skeleton>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import { getSzcg_cgl_city} from '@/api/szcg.js';


const loading = ref(true)
const tableData = ref([])
onBeforeMount(() => {
    getSzcg_cgl_city().then(data => {
        tableData.value = data
    }).finally(() => {
        loading.value = false
    })

})
</script>

<style scoped>
.table{
    size: large;
    margin-bottom: 1em;
    font-size: 23px;
}
</style>