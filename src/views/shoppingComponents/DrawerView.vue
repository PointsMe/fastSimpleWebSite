<template>
    <div class="drawer-view">
        <el-drawer v-model="drawerStatus" size="60%" :with-header="false">
            <el-row class="row-d">
                <el-col :span="16" class="left-content">
                    <div class="title">
                        <el-row>
                            <el-col :span="12" class="left">
                                结算
                            </el-col>
                            <el-col :span="12" class="right">
                                15584566249
                            </el-col>
                        </el-row>
                    </div>
                    <div class="pay-style">
                        <p>
                            请选择付款方式
                        </p>
                        <el-row :gutter="12">
                            <el-col :span="12" class="col-pay" v-for="(item,index) in payStyle" :key="index">
                                <div @click="choosePayStyle(item.id)" :class="item.checked ? 'pay-c choosed-pay' : 'pay-c'" >
                                    <el-row>
                                        <el-col :span="12" class="left-col">
                                            <div class="left-img">
                                                <img :src="item.img" alt="">
                                                <span>{{ item.name }}</span>
                                            </div>
                                        </el-col>
                                        <el-col :span="12" class="right-col">
                                            <div class="sele">
                                                <span v-if="!item.checked" class="not-choose-icon"></span>
                                                <el-icon v-else><CircleCheckFilled /></el-icon>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="8" class="right-content"></el-col>
            </el-row>
        </el-drawer>
    </div>
</template>
<script lang="ts" setup>
import adyenPng from "@/assets/fastsImages/adyen.png"
import guestPng from "@/assets/fastsImages/guest.png"
import wxPng from "@/assets/fastsImages/wx.png"
import alipayPng from "@/assets/fastsImages/alipay.png"
import { CircleCheckFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { fa } from "element-plus/es/locale/index.mjs"
const drawerStatus = ref<boolean>(false)
const showDrawer = () => {
    drawerStatus.value = true
}
defineExpose({
    showDrawer,
})
const payStyle = ref<Array<{
    id: number,
    img: string,
    name:string,
    checked: boolean
}>>([
    {
        id: 1,
        img: adyenPng,
        name:'ADYEN',
        checked: false
    },
    {
        id: 2,
        img: guestPng,
        name:'guest',
        checked: true
    },
    {
        id: 3,
        img: wxPng,
        name:'微信',
        checked: false
    },
    {
        id: 4,
        img: alipayPng,
        name:'支付宝',
        checked: false
    },
])
const choosePayStyle = (val: number)=>{
    payStyle.value = payStyle.value.map(item=>{
        if(item.id === val){
            item.checked = true
        }else{
            item.checked =false
        }
        return {
            ...item
        }
    })
}
</script>
<style scoped lang="less">
.drawer-view {
    .row-d {
        height: 100vh;
        width: 100%;

        .left-content {
            background: #F0F0F0;

            padding: 0 50px;
            padding-top: 94px;
            .pay-style{
                >p{
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 500;
                    font-size: 16px;
                    color: #1A1A1A;
                    margin: 0;
                    padding: 0;
                    padding-bottom: 14px;
                }
                .col-pay{
                    margin-top: 10px;
                    .choosed-pay{
                        background: rgba(233,156,14,0.04) !important;
                        border-radius: 8px;
                        border: 1px solid #E99C0E;
                    }
                    .pay-c{
                        background: #ffffff;
                        height: 74px;
                        width: 100%;
                        border-radius: 8px;
                        .right-col{
                            .sele{
                                height: 100%;
                                // line-height: 74px;
                                position: relative;
                                .el-icon{
                                    position: absolute;
                                    display: block;
                                    font-size: 25px;
                                    right: 16px;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    color: #E99C0E;
                                }
                                .not-choose-icon{
                                    position: absolute;
                                    display: block;
                                    width: 20px;
                                    height: 20px;
                                    border-radius: 50%;
                                    right: 18px;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    border: 1px solid #999999;
                                }
                            }
                        }
                        .left-col{
                            .left-img{
                            width: 100%;
                            height: 74px;
                            line-height: 74px;
                            position: relative;
                            text-indent: 70px;
                            >img{
                                position: absolute;
                                display: block;
                                left: 8px;
                                top: 8px;
                                width: 58px;
                                height: 58px;
                            }
                        }
                        }
                        
                    }
                }
            }
            .title {
                padding-bottom: 50px;
                .left {
                    text-align: left;
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 500;
                    font-size: 24px;
                    color: #1A1A1A;
                }

                .right {
                    text-align: right;
                    font-family: Inter, Inter;
                    font-weight: 500;
                    font-size: 16px;
                    color: #999999;
                }
            }
        }

        .right-content {
            background-color: #ffffff;
            padding-top: 94px;
        }
    }

}
</style>