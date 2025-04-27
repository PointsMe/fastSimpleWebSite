<template>
    <div class="order-one">
        <el-row :gutter="6" class="row-list">
            <el-col :span="16" class="left">
                <div class="content-list">
                    <div class="list-one">
                        <el-row>
                            <el-col :span="12" class="left title">
                                {{ response.subtitle }}
                            </el-col>
                            <el-col :span="12" class="right sub-title">
                                <div class="pos-right" @click=joinUsFn>
                                    <el-icon>
                                        <QuestionFilled />
                                    </el-icon>
                                    注册会员输入邀请码后，能享受€{{ userStore.discountedPrice }}优惠哦
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="list-one-i">
                        <el-row>
                            <el-row style="width: 100%;" v-for="(item, index) in response.items" :key="index">
                                <el-col :span="12" class="left">{{ item.name }}</el-col>
                                <el-col :span="12" class="right">€{{ item.price }}</el-col>
                            </el-row>
                        </el-row>
                    </div>
                    <div class="list-one-j">
                        <div>
                            <span>正常价:</span>
                            <span class="normal">
                                €{{ response.sellPrice }}
                            </span>
                            <span class="m-f-20">邀请价:</span>
                            <span class="origin">
                                €{{ userStore.discountedPrice }}
                            </span>
                            <div class="pos-abs">
                                <AddNum :requireChoosed="true" :id="response.id"/>
                            </div>
                        </div>
                        <div>
                            <span style="color: #FF0000;">*</span>
                            固定套餐数量每增加一套，FASTSIMPLE标配版年费增加€10/年
                        </div>
                    </div>
                </div>
                <div class="content-list-a" v-for="(item, index) in response.assorts" :key="index">
                    <el-row v-if="['input', 'radio', 'checkbox'].includes(item.type)">
                        <el-col :span="12" class="left">
                            {{ item.name }}
                        </el-col>
                        <el-col :span="12" class="right">
                            <div class="num-div" v-if="item.type === 'input'">
                                {{ item.items[0].unit }}/<span>€{{ item.items[0].sellPrice }}</span>
                                <div class="pos-abs">
                                    <AddNum :requireChoosed="item.tips ? true : false" :id="item.id"/>
                                </div>
                            </div>
                            <div class="radio-common" v-if="item.type === 'radio' || item.type === 'checkbox'">
                                <RadioView 
                                    v-if="item.type === 'radio' && item.items.length > 0" 
                                     :id="item.id"
                                    :radio-list="item.items"
                                />
                                <CheckboxView 
                                     v-if="item.type === 'checkbox' && item.items.length > 0"
                                     :id="item.id"
                                     :checkbox-list="item.items"
                                />
                            </div>
                        </el-col>
                        <el-col :span="24" class="right tips" v-if="item.tips">
                            <span><label style="color: #FF0000;">*</label>{{ item.tips }}</span>
                        </el-col>
                    </el-row>
                    <el-row v-if="['checkboxList'].includes(item.type)">
                        <el-col :span="24" class="title-b">{{ item.name }}</el-col>
                        <el-col :span="24">
                            <el-checkbox-group class="g-b">
                                <el-checkbox v-for="(itemChil, chilIndex) in item.items" :key="chilIndex"
                                    :label="itemChil.spec" :value="itemChil.id">
                                    <div class="c-b">
                                        {{ itemChil.spec }} /
                                        <span class="mon">€{{ itemChil.sellPrice }}</span>
                                    </div>
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-col>
                    </el-row>
                </div>

                <div class="content-list content-list-top">
                    <div class="list-one">
                        <el-row>
                            <el-col :span="12" class="left title">
                                {{ serverBuyer.subtitle }}
                            </el-col>
                        </el-row>

                    </div>
                    <div class="list-one-i none-m-b">
                        <el-row>
                            <el-row style="width: 100%;" v-for="(item, index) in serverBuyer.assorts" :key="index">
                                <el-col :span="12" class="left">{{ item.name }}</el-col>
                                <el-col :span="12" class="right">
                                    <div class="all-i" v-if="item.type === 'input'">
                                        <span class="i-1"> {{ item.items[0].unit }}/</span><span class="i-2">€ {{
                                            item.items[0].sellPrice }}</span>
                                        <div class="pos-abs">
                                            <AddNum :require-choosed="false" :id="item.id"/>
                                        </div>
                                    </div>
                                    <div class="c-k-a" v-if="item.type === 'checkbox'">
                                        <CheckboxView 
                                                :id="item.id"
                                                :checkbox-list="item.items"
                                        />
                                        <!-- <el-checkbox-group>
                                            <el-checkbox v-for="(itemChil, chilIndex) in item.items" :key="chilIndex"
                                                :label="itemChil.sellPrice" :value="itemChil.id">
                                                <span class="num-c">€{{ itemChil.sellPrice }}</span>
                                            </el-checkbox>
                                        </el-checkbox-group> -->
                                    </div>
                                </el-col>
                            </el-row>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="8" class="right">
                <div class="content-list-right">
                    <div class="title">
                        <el-row :gutter="12">
                            <el-col :span="10" class="col-a">
                                <div class="line"></div>
                            </el-col>
                            <el-col :span="4" class="col-a">
                                总计
                            </el-col>
                            <el-col :span="10" class="col-a">
                                <div class="line"></div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="all-order">
                        <div class="order-list">
                            <el-row>
                                <el-col :span="24" class="left">
                                    平板11寸HUAWEI SE*1
                                </el-col>
                                <el-col :span="24" class="left">
                                    热敏打印机*1
                                </el-col>
                                <el-col :span="24" class="left">
                                    平板收银防盗支架*1
                                </el-col>
                                <el-col :span="20" class="left">
                                    FASTSIMPLE软件授权费*1
                                </el-col>
                                <el-col :span="4" class="right">
                                    €800
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i">
                            <el-row>
                                <el-col :span="24" class="left">
                                    FASTSIMPLE标配版年费
                                </el-col>
                                <el-col :span="20" class="left tips">
                                    1打印机+1平板
                                </el-col>
                                <el-col :span="4" class="right tips-1">
                                    €216
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i">
                            <el-row>
                                <el-col :span="24" class="left">
                                    POS机（刷卡机）*1
                                </el-col>
                                <el-col :span="20" class="left tips">
                                    购买
                                </el-col>
                                <el-col :span="4" class="right tips-1">
                                    €220
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i">
                            <el-row>
                                <el-col :span="20" class="left">
                                    热敏打印机*2
                                </el-col>
                                <el-col :span="4" class="right">
                                    €600
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <div class="order-btn">
                        <el-row>
                            <el-col :span="8" class="left-i">
                                <span class="word">总计：</span>
                            </el-col>
                            <el-col :span="16" class="right-i">
                                €1816
                            </el-col>
                            <el-col :span="24">
                                <el-input class="input-h" placeholder="输入邀请码立减400€" size="large" />
                            </el-col>
                            <el-col :span="24">
                                <el-button class="button-h" @click="toPay">立即购买</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
        <JoinUs ref="JoinUsFnRef" />
        <UpdateView ref="UpdateViewRef" />
    </div>
</template>
<script setup lang="ts">
import AddNum from "./AddNum.vue"
import RadioView from "./RadioView.vue"
import CheckboxView from "./CheckboxView.vue"
import { QuestionFilled } from '@element-plus/icons-vue'
import JoinUs from "./JoinUs.vue"
import UpdateView from "./UpdateView.vue"
import { useUserStore } from "@/stores/modules/user"
const userStore = useUserStore()
const JoinUsFnRef = ref()
const UpdateViewRef = ref()
const emits = defineEmits(['toPay'])
defineOptions({
    name: 'orderOne'
})
const serverBuyer:any = reactive({
    "id": "1002",
    "name": "SERVER BUYER",
    "subtitle": "服务选购",
    "sellPrice": 800,
    "assorts": [{
        "id": '1',
        "name": "远程指导安装人工费",
        "type": 'input',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "小时",    //单位
            "spec": "",  //规格
            "sellPrice": 230
        }]
    }, {
        "id": '2',
        "name": "商品人工导入费",
        "type": 'checkbox',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "",    //单位
            "spec": "",  //规格
            "sellPrice": 100
        }, {
            "id": "产品ID",
            "type": 101,
            "unit": "",    //单位
            "spec": "",  //规格
            "sellPrice": 200
        }]
    }, {
        "id": '3',
        "name": "商品人工翻译费",
        "type": 'input',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "语言",    //单位
            "spec": "",  //规格
            "sellPrice": 50
        }]
    }, {
        "id": '4',
        "name": "人工售后费",
        "type": 'input',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "30分钟",    //单位
            "spec": "",  //规格
            "sellPrice": 10
        }]
    }]
})
const response:any = reactive({
    "id": "1001",
    "name": "FASTSIMPE BASIC",
    "subtitle": "基础套餐",
    "sellPrice": 800,
    "items": [{   // 固定套餐部分
        "id": "1001-1",
        "name": "平板11寸HUAWEI SE",
        "price": 230
    },
    {   // 固定套餐部分
        "id": "10热敏打印机",
        "name": "热敏打印机",
        "price": 300
    },
    {   // 固定套餐部分
        "id": "1001-3",
        "name": "平板收银防盗支架",
        "price": 70
    },
    {   // 固定套餐部分
        "id": "1001-4",
        "name": "FASTSIMPLE软件授权费",
        "price": 200
    }
    ],
    "assorts": [{
        "id": '1',
        "name": "FASTSIMPLE标配版年费（1打印机+1平板）",
        "type": 'radio',
        "tips": '二选一',
        "items": [{
            "id": "1",
            "type": 101,
            "unit": "",    //单位
            "spec": "购买",  //规格
            "sellPrice": 216
        }, {
            "id": "2",
            "type": 101,
            "unit": "",    //单位
            "spec": "租用/月",  //规格
            "sellPrice": 20
        }]
    }, {
        "id": '2',
        "name": "POS机(刷卡机)",
        "type": 'radio',
        "tips": '二选一',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "",    //单位
            "spec": "购买",  //规格
            "sellPrice": 220
        }, {
            "id": "产品ID2",
            "type": 101,
            "unit": "",    //单位
            "spec": "租用/月",  //规格
            "sellPrice": 10
        }]
    }, {     // 配套产品
        "id": '3',
        "name": "点单收银打印扫码PDA",
        "type": 'checkbox',
        "items": [{  // 可能是1个也可能是多个
            "id": "1",
            "type": 101,       // 产品类型 101-正常售卖产品，102 - 服务产品(时端), 103 - 租售产品
            "unit": "",          // 单位 如年月日，个台等，可能为空
            "spec": "88mm",  //规格，有可能为空
            "sellPrice": 800,

        }, {
            "id": "2",
            "spec": "58mm",   // 规格
            "sellPrice": 600
        }]
    }, {
        "id": '4',
        "name": "WIFI SIM卡版路由器",
        "type": 'input',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "台",    //单位
            "spec": "",  //规格
            "sellPrice": 100
        }]
    }, {
        "id": '5',
        "name": "钱箱",
        "type": 'input',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "个",    //单位
            "spec": "个",  //规格
            "sellPrice": 80
        }]
    }, {
        "id": '6',
        "name": "热敏打印机",
        "type": 'input',
        "tips": '热敏打印机每增加一台，FASTSIMPLE标配版年费增加€10/年（上限2台）',
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "个",    //单位
            "spec": "个",  //规格
            "sellPrice": 300,
        }]
    }, {
        "id": '7',
        "name": "SOFATTURA 套餐",
        "type": 'checkboxList',
        "items": [{
            "id": "产品ID",
            "type": 102,
            "unit": "",
            "spec": "A套餐200张发票",
            "sellPrice": 100
        }, {
            "id": "产品ID2",
            "type": 102,
            "unit": "",
            "spec": "B套餐200张发票",
            "sellPrice": 200
        }, {
            "id": "产品ID3",
            "type": 102,
            "unit": "",
            "spec": "C套餐500张发票",
            "sellPrice": 300
        }, {
            "id": "产品ID4",
            "type": 102,
            "unit": "",
            "spec": "D套餐1000张发票",
            "sellPrice": 500
        }, {
            "id": "产品ID5",
            "type": 102,
            "unit": "",
            "spec": "E套餐10000张发票",
            "sellPrice": 200
        }, {
            "id": "产品ID6",
            "type": 102,
            "unit": "",
            "spec": "税号搜索功能",
            "sellPrice": 100
        }
        ]
    }]
})
const toPay = () => {
    console.log("aaaaa")
    emits('toPay')
}
const joinUsFn = () => {
    if (JoinUsFnRef.value) {
        JoinUsFnRef.value.showModal()
    }
    // if(UpdateViewRef.value){
    //     UpdateViewRef.value.showModal()
    // }
}
// defineExpose({
//     joinUsFn
// })
</script>
<style scoped lang="less">
.order-one {
    .row-list {
        .pos-abs {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }

        .el-col {
            display: flex;
            flex-direction: column;
        }

        .content-list,
        .content-list-right {
            height: 100%; // 确保内容容器占满高度
        }

        .content-list-right {
            padding: 30px;
            background-color: #FFFFFF;
            border-radius: 6px;
            position: relative;

            .order-btn {
                position: absolute;
                width: 100%;
                bottom: 0;
                left: 0;
                padding: 0px 30px 30px 30px;

                .input-h {
                    text-align: center;
                    height: 60px;
                    margin-top: 16px;
                }

                .button-h {
                    text-align: center;
                    height: 60px;
                    background: #1B1B1B;
                    margin-top: 10px;
                    font-family: Inter, Inter;
                    font-weight: 500;
                    font-size: 16px;
                    color: #FFFFFF;
                }

                .left-i {
                    text-align: left;
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 400;
                    font-size: 16px;
                    color: #1B1B1B;
                    position: relative;

                    .word {
                        position: absolute;
                        bottom: 10px;
                        left: 0;
                    }
                }

                .right-i {
                    text-align: right;
                    font-family: Inter, Inter;
                    font-weight: bold;
                    font-size: 48px;
                    color: #1A1A1A;
                }
            }

            .all-order {
                .left {
                    text-align: left;
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 400;
                    font-size: 16px;
                    padding-top: 30px;
                }

                .right {
                    padding-top: 30px;
                    font-family: DIN, DIN;
                    font-weight: 500;
                    font-size: 18px;
                    color: #1A1A1A;
                }

                .order-i {
                    border-bottom: 1px solid #EDEDED;
                    padding-bottom: 24px;

                    .tips-1 {
                        padding-top: 0;
                    }

                    .tips {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 400;
                        font-size: 14px;
                        color: #999999;
                        padding-top: 0;
                    }
                }

                .order-list {
                    border-bottom: 1px solid #EDEDED;
                    padding-bottom: 24px;


                }
            }

            .title {
                text-align: center;

                .col-a {
                    position: relative;

                    .line {
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 50%;
                        height: 1px;
                        /* 初始高度1px */
                        background: #BDBDBD;
                        transform: scaleY(0.5);
                        /* 垂直缩放至0.5倍 */
                        transform-origin: 0 0;
                        /* 确保缩放基点正确 */
                    }
                }
            }
        }

        .left {
            text-align: left;

            .title {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 16px;
                color: #1B1B1B;
            }

            .sub-title {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 12px;
                color: #646464;

                .pos-right {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    cursor: pointer;

                    .el-icon {
                        color: #2865FF;
                        font-size: 13px;
                    }

                    // font-size: 13px;
                }
            }
        }

        .right {
            text-align: right;
        }


        .content-list-a {
            padding: 30px;
            margin-top: 5px;
            background-color: #FFFFFF;
            border-radius: 6px;

            .g-b {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 14px;
                color: #646464;

                .c-b {
                    .mon {
                        font-family: DIN, DIN;
                        font-weight: 500;
                        font-size: 18px;
                        color: #999999;
                    }
                }
            }

            .title-b {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 16px;
                color: #1B1B1B;
            }

            .tips {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400 !important;
                font-size: 14px !important;
                color: #999999;
            }

            .left {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 16px;
                color: #1B1B1B;
            }

            .right {
                .oragin {
                    color: #FDB522;
                }

                .grey {
                    color: #999999;
                }

                .num-div {
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 500;
                    font-size: 14px;
                    color: #646464;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    padding-right: 102px;

                    .oragin {
                        color: #FDB522;
                    }

                    >span {
                        font-family: DIN, DIN;
                        font-weight: 500;
                        font-size: 18px;
                        color: #999999;
                    }
                }

                .radio-common {
                    .radio-con {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 14px;
                        color: #646464;
                    }
                }
            }
        }

        .content-list-top {
            margin-top: 5px;
        }

        .content-list {
            padding: 30px;
            background-color: #FFFFFF;
            border-radius: 6px;

            .list-one-j {
                text-align: right;
                padding-top: 28px;

                >div:first-child {
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 500;
                    font-size: 14px;
                    color: #646464;
                    position: relative;
                    padding-right: 120px;

                    .normal {
                        font-family: DIN, DIN;
                        font-weight: 500;
                        font-size: 18px;
                        color: #999999;
                    }

                    .m-f-20 {
                        margin-left: 30px;
                    }

                    .origin {
                        font-family: DIN, DIN;
                        font-weight: 500;
                        font-size: 18px;
                        color: #FDB522;
                    }
                }

                >div:last-child {
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 400;
                    font-size: 14px;
                    color: #646464;
                }
            }

            .none-m-b {
                border: none !important;
                padding-bottom: 0px !important;
            }

            .list-one-i {
                padding-left: 10px;
                padding-bottom: 28px;
                border-bottom: 1px solid #EDEDED;

                .left {
                    padding-top: 28px;
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 400;
                    font-size: 16px;
                    color: #595959;
                }

                .right {
                    padding-top: 28px;
                    font-family: DIN, DIN;
                    font-weight: 500;
                    font-size: 16px;
                    color: #999999;

                    .c-k-a {
                        .num-c {
                            font-family: DIN, DIN;
                            font-weight: 500;
                            font-size: 18px;
                            color: #999999;
                        }
                    }

                    .all-i {
                        padding-right: 102px;
                        position: relative;

                        .i-1 {
                            font-family: Source Han Sans SC, Source Han Sans SC;
                            font-weight: 500;
                            font-size: 14px;
                            color: #646464;
                        }

                        .i-2 {
                            font-family: DIN, DIN;
                            font-weight: 500;
                            font-size: 18px;
                            color: #999999;
                        }
                    }
                }
            }

            .list-one {
                padding-left: 10px;
                padding-bottom: 20px;
                border-bottom: 1px solid #EDEDED;
            }
        }
    }

}
</style>