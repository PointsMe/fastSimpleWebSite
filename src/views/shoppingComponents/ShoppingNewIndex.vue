<template>
    <div class="shopping-new-index">
        <div class="content">
            <div class="shopping-tab">
                <el-row :gutter="6">
                    <el-col :span="8" class="shopping-col">
                        <div @click="changeTab('1')"
                            :class="tab === '1' ? 'shopping-content choosed' : 'shopping-content'">
                            <p class="t_c">
                                FASTSIMPLE BASIC
                            </p>
                            <p class="t_d">
                                基础套餐
                            </p>
                            <span></span>
                        </div>
                    </el-col>

                    <el-col :span="8" class="shopping-col">
                        <div @click="changeTab('2')"
                            :class="tab === '2' ? 'shopping-content choosed' : 'shopping-content'">
                            <p class="t_c">
                                FASTSIMPLE PREMIUN
                            </p>
                            <p class="t_d">
                                升级套餐
                            </p>
                            <span></span>
                        </div>
                    </el-col>

                    <el-col :span="8" class="shopping-col">
                        <div @click="changeTab('3')"
                            :class="tab === '3' ? 'shopping-content choosed' : 'shopping-content'">
                            <p class="t_c" style="height: 100%;line-height: 3;">
                                硬件加购
                            </p>
                            <!-- <p class="t_d">
                                基础套餐
                            </p> -->
                            <span></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="tab-content">
                <OrderOne v-if="tab === '1'" @toPay="toPayDrawer"/>
                <OrderTwo v-if="tab === '2'" />
                <OrderThree v-if="tab === '3'" />
            </div>
        </div>
        <DrawerView ref="DrawerRef"/>
    </div>
</template>
<script setup lang="ts">
import OrderOne from "./OrderOne.vue"
import OrderTwo from "./OrderTwo.vue"
import OrderThree from "./OrderThree.vue"
import DrawerView from "./DrawerView.vue"
defineOptions({
    name: 'shoppingNewIndex'
})
const DrawerRef = ref();
const tab = ref<string>('1')
const res: any = {
    "id": "1001",
    "name": "FASTSIMPE BASIC",
    "subtitle": "基础套餐",
    "sellPrice": 800,
    "items": [{   // 固定套餐部分
        "id": "xxx",
        "name": "xxx",
        "price": 'xxx'
    }],
    "assorts": [{     // 配套产品
        "name": "点单手印打印扫码PDA",
        "items": [{  // 可能是1个也可能是多个
            "id": "产品ID",
            "type": 101,       // 产品类型 101-正常售卖产品，102 - 服务产品(时端), 103 - 租售产品
            "unit": "",          // 单位 如年月日，个台等，可能为空
            "spec": "88mm",  //规格，有可能为空
            "sellPrice": 800
        }, {
            "id": "产品ID",
            "spec": "58mm",   // 规格
            "sellPrice": 600
        }]
    }, {
        "name": "WIFI SIM卡路由器",
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "台",    //单位
            "spec": "",  //规格
            "sellPrice": 100
        }]
    }, {
        "name": "SOFATTURA 套餐",
        "items": [{
            "id": "产品ID",
            "type": 102,
            "unit": "",
            "spec": "A套餐200张发票",
            "sellPrice": 100
        }, {
            "id": "产品ID",
            "type": 102,
            "unit": "",
            "spec": "B套餐200张发票",
            "sellPrice": 200
        }, {
            "id": "产品ID",
            "type": 102,
            "unit": "",
            "spec": "C套餐500张发票",
            "sellPrice": 300
        }, {
            "id": "产品ID",
            "type": 102,
            "unit": "",
            "spec": "D套餐1000张发票",
            "sellPrice": 500
        }]
    }]
}
const toPayDrawer = ()=>{
    console.log("toPayDrawer=>",DrawerRef)
    if(DrawerRef.value){
        DrawerRef.value.showDrawer()
    }
}
const changeTab = (val: string) => {
    tab.value = val
}
defineExpose({
    toPayDrawer
})
</script>
<style scoped lang="less">
.shopping-new-index {
    width: 100%;
    background-color: #F6F6F4;

    p {
        margin: 0;
        padding: 0;
    }

    .content {
        width: 1280px;
        margin: auto;

        .tab-content {

            margin-top: 30px;
        }

        .shopping-tab {
            margin-top: 40px;

            .shopping-col {
                display: flex;
                flex-direction: column;

                .choosed {
                    background: linear-gradient(305deg, #1A1A1A 0%, #2F2F2F 100%);
                    box-shadow: 3px 5px 9px 0px rgba(38, 27, 8, 0.14);
                    border-radius: 4px 4px 4px 4px;

                    .t_c {
                        font-family: Inter, Inter;
                        font-weight: normal;
                        font-size: 20px;
                        color: #FED15F !important;
                    }

                    .t_d {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 20px;
                        color: #FFFFFF !important;
                    }

                    >span {
                        display: block;
                        height: 4px;
                        width: 80px;
                        background-color: #FED15F;
                        position: absolute;
                        bottom: 0px;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                }

                .shopping-content {
                    position: relative;
                    background-color: #ffffff;
                    text-align: center;
                    padding: 26px 0;
                    cursor: pointer;
                    height: 100%;

                    // line-height: 1;
                    .t_c {
                        font-family: Inter, Inter;
                        font-weight: normal;
                        font-size: 20px;
                        color: #666666;
                    }

                    .t_d {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 20px;
                        color: #666666;
                    }

                }
            }
        }
    }

}
</style>