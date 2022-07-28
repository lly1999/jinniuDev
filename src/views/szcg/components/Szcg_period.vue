<template>
    <el-skeleton 
        :loading="loading" 
        animated>
        <template #default>
            <template v-for="tableItem in tableData">
                <el-table :data="tableItem.data" class="table" :fit="false">
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
import { getSzcg_period} from '@/api/szcg.js';


const loading = ref(true)
const tableData = ref([])
onBeforeMount(() => {
    getSzcg_period().then(data => {
        tableData.value = data
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