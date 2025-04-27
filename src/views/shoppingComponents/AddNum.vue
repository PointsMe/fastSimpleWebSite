<template>
    <div class="add-num-div">
        <span @click="reduce">
            <el-icon>
                <Minus />
            </el-icon>
        </span>
        <span>
            <el-input size="small" v-model="inputNum" placeholder="0" @input="changeInput" />
        </span>
        <span @click="increase">
            <el-icon>
                <Plus />
            </el-icon>
        </span>
    </div>
</template>
<script setup lang="ts">
import { Minus, Plus } from '@element-plus/icons-vue'
defineOptions({
    name: 'addNum'
})
//定义props变量接收defineProps返回值
const props = defineProps({
    requireChoosed: {
        type: Boolean,
        required: false,
    },
});
const inputNum = ref(1)
const changeInput = (e: any) => {
    if (!/^\d+$/.test(e)) {
        inputNum.value = props.requireChoosed ? 1 : 0
    } else {
        inputNum.value = parseInt(e)
    }
}
const reduce = () => {
    if (props.requireChoosed) {
        if (Number(inputNum.value) > 1) {
            inputNum.value = Number(inputNum.value) - 1
        }
    } else {
        if (Number(inputNum.value) > 0) {
            inputNum.value = Number(inputNum.value) - 1
        }
    }

}
const increase = () => {
    inputNum.value = Number(inputNum.value) + 1
}
</script>
<style scoped lang="less">
.add-num-div {
    width: 96px;
    height: 24px;
    position: relative;

    span {
        display: block;
    }

    >span:first-child {
        background-color: #F7F7F7;
        width: 24px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 1px;
        color: #BDBDBD;
        height: 24px;

        .el-icon {
            font-size: 16px;
            font-weight: bold;
            margin-top: 4px;
        }
    }

    >span:nth-child(2) {
        margin-left: 28px;
        // height: 20px;
        width: 40px;
        text-align: center;
    }

    >span:last-child {
        background-color: #F7F7F7;
        width: 24px;
        height: 24px;
        text-align: center;
        cursor: pointer;
        position: absolute;
        left: 72px;
        top: 1px;
        color: #1A1A1A;

        .el-icon {
            font-size: 16px;
            font-weight: bold;
            margin-top: 4px;
        }
    }
}
</style>