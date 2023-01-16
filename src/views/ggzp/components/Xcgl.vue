<template>
    <el-skeleton :loading="loading" animated>
        <template #default>
            <template v-for="tableItem in tableData">
                <el-table :data="tableItem.data" class="table" :fit="false" :row-style="{height: '80px'}"
                    :cell-style="cellstyle">
                    <el-table-column v-for="i in tableItem.headerNames.length" :label="tableItem.headerNames[i - 1]"
                        :prop="tableItem.dataNames[i - 1]" width="220" />
                </el-table>
            </template>
        </template>
    </el-skeleton>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import { getXcgl } from '@/api/ggzp.js';
const cellstyle = () => {
    return {
        "height": '30px',
        "padding": '15px',
        "line-height": "30px"

    }
}

const loading = ref(true)
const tableData = ref([])
onBeforeMount(() => {
    getXcgl().then(data => {
        tableData.value = data
    }).finally(() => {
        loading.value = false
    })
})
</script>

<style scoped>
.table {

    margin-bottom: 1em;
    font-size: 23px;
    line-height: 40px;
}

.el-table .el-table__cell {
    line-height: 10px;
    padding: 120px;
}

.table.cell {
    line-height: 30px;
    color: black;
}
</style>