<template>
    <el-radio-group v-model="radio1" @change="changeRadio">
        <el-radio v-for="(itemChil, chilIndex) in props.radioList" :key="chilIndex" :value="itemChil.id">
            <div class="radio-con">
                {{ itemChil.spec }}<span :class="!chilIndex ? 'oragin' : 'grey'">€{{
                    itemChil.sellPrice }}</span>
            </div>
        </el-radio>
    </el-radio-group>
</template>
<script setup lang="ts">
const props = defineProps({
    radioList: {
        type: Array<{
            spec:string,
            sellPrice:string,
            id: string
        }>,
        require: true
    },
    id: {
        type: String,
        require: true
    }
})
const radio1 = ref<string>(props.radioList?.[0]?.id ?? '')
const changeRadio = (e:string)=>{
    radio1.value = e
}
</script>
<style scoped lang="less">
.radio-con {
    font-family: Source Han Sans SC, Source Han Sans SC;
    font-weight: 500;
    font-size: 14px;
    color: #646464;
}

.oragin {
    color: #FDB522;
}

.grey {
    color: #999999;
}
</style>