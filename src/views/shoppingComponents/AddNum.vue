<template>
    <div class="add-num-div">
        <span>
            <el-icon>
                <Minus />
            </el-icon>
        </span>
        <span>
            <el-input size="small" style="text-align: center" placeholder="0" />
        </span>
        <span>
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