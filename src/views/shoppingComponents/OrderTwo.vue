<template>
    <div class="order-two">
        <el-row :gutter="6" class="row-list">
            <el-col :span="16" class="left">
                <div class="content-list">
                    <div class="list-one">
                        <el-row>
                            <el-col :span="12" class="left title">
                                {{ response.subtitle }}
                            </el-col>
                            <el-col :span="12" class="right sub-title">
                                <div class="pos-right" @click=joinUsFn v-if="!userStore.token">
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
                                <AddNum
                                    :parents="{
                                        minSelectCount: 1,
                                        maxSelectCount: 1,
                                    }"
                                    :data="{
                                        id: response.id,
                                        name: response.name,
                                        type: 119
                                    }"
                                    @changeOrderList="changeOrderList"
                                />
                                
                            </div>
                        </div>
                        <!-- <div>
                            <span style="color: #FF0000;">*</span>
                            固定套餐数量每增加一套，FASTSIMPLE标配版年费增加€10/年
                        </div> -->
                    </div>
                </div>
                <div class="content-list-a" v-for="(item, index) in response.assorts" :key="index">
                    <el-row v-if="item.items.length < 3">
                        <el-col :span="12" class="left">
                            <div class="left-i-a">
                                {{ item.name }}
                                <label class="sub-left-i-a" v-if="item.items.length === 1 && item.items[0].spec">({{ item.items[0].spec }})</label>
                            </div>
                            
                        </el-col>
                        <el-col :span="12" class="right">
                            <el-row>
                                <el-col :span="24" v-for="(itemChil,chilIndex) in item.items" :key="chilIndex">
                                    <div class="num-div" v-if="item.maxSelectCount > 2">
                                        <span v-if="itemChil.spec" style="color: #FDB522;">({{ itemChil.spec }})</span>
                                        <span v-if="itemChil.value">{{ itemChil.value }}</span>
                                        <span v-if="itemChil.unit">{{ itemChil.unit }}/</span>
                                        <span>€{{ itemChil.sellPrice }}</span>
                                        <div class="pos-abs">
                                            <AddNum 
                                                :parents="item"
                                                :data="itemChil"
                                                @changeOrderList="changeOrderList"
                                            />
                                        </div>
                                    </div>
                                    <div class="radio-common" v-if="item.maxSelectCount < 3">
                                        <span v-if="itemChil.spec && item.items.length > 1">({{ itemChil.spec }})</span>
                                        <RadioView 
                                            :parents="item"
                                            :data="itemChil"
                                            @changeOrderList="changeOrderList"
                                            />
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <!-- <el-col :span="24" class="right tips" v-if="item.tips">
                            <span><label style="color: #FF0000;">*</label>{{ item.tips }}</span>
                        </el-col> -->
                    </el-row>
                    <el-row v-if="item.items.length > 3">
                        <el-col :span="24" class="title-b">{{ item.name }}</el-col>
                        <el-col :span="24">
                            <InvoiceCheckbox 
                                 @changeOrderList="changeOrderList"
                                :parents="item"
                            />
                        </el-col>
                    </el-row>
                </div>





                <!-- <div class="content-list content-list-top">
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
                                            <AddNum :require-choosed="false" :id="item.id" :mixNum="item.mixNum"
                                                :maxNum="item.maxNum" />
                                        </div>
                                    </div>
                                    <CheckboxView v-if="item.type === 'checkbox'" :id="item.id"
                                        :checkbox-list="item.items">
                                    </CheckboxView>
                                </el-col>
                            </el-row>
                        </el-row>
                    </div>
                </div> -->
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
                        <div class="order-list" v-if="orderList.items.find((iv: any)=> iv.type === 119)">
                            <el-row>
                                <el-col 
                                    v-for="(item,index) in orderList.items.find((iv: any)=> iv.type === 119)?.children"
                                    :span="orderList.items.find((iv: any)=> iv.type === 119)?.children?.length === index + 1 ? 20 : 24" class="left"  :key="index">
                                    {{ item.name }}
                                </el-col>
                                <el-col :span="4" class="right">
                                    €{{ orderList.items.find((iv: any)=> iv.type === 119)?.sellPrice }}
                                </el-col>
                            </el-row>
                        </div>
                        <div class="order-i" v-for="(item,index) in orderList.items.filter((iv: any)=> iv.type !== 119)" :key="index">
                            <el-row>
                                <el-col :span="24" class="left">
                                    {{ item.name }}
                                </el-col>
                                <el-col :span="20" class="left tips">
                                    <!-- 1打印机+1平板 -->
                                </el-col>
                                <el-col :span="4" class="right tips-1">
                                    €{{ item.sellPrice }}
                                </el-col>
                            </el-row>
                        </div>
                        <!-- <div class="order-i">
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
                        </div> -->
                    </div>
                    <div class="order-btn">
                        <el-row>
                            <el-col :span="8" class="left-i">
                                <span class="word">总计：</span>
                            </el-col>
                            <el-col :span="16" class="right-i">
                                €{{ orderList?.totalAmount || 0 }}
                            </el-col>
                            <el-col :span="24">
                                <el-input class="input-h" :placeholder="`输入邀请码立减${userStore.discountedPrice}€`" size="large" />
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
import InvoiceCheckbox from "./InvoiceCheckbox.vue"
import { QuestionFilled } from '@element-plus/icons-vue'
import JoinUs from "./JoinUs.vue"
import UpdateView from "./UpdateView.vue"
import { useUserStore } from "@/stores/modules/user"
import { ElMessage } from "element-plus"
import { getGoodsDetailApi } from "@/apis/goods"
const userStore = useUserStore()

const JoinUsFnRef = ref()
const UpdateViewRef = ref()
const props = defineProps({
    id:{
        type:String,
        require: true
    }
})
const emits = defineEmits(['toPay'])
defineOptions({
    name: 'orderOne'
})
const serverBuyer:any = reactive({
    "id": "1002",
    "name": "SERVER BUYER",
    "subtitle": "服务选购",
    "sellPrice": 800,
    "mixNum": 1,
    "maxNum": 999,
    "assorts": [{
        "id": '1',
        "name": "远程指导安装人工费",
        "type": 'input',
        "mixNum": 0,
        "maxNum": 999,
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
            "id": "1",
            "type": 101,
            "unit": "",    //单位
            "spec": "",  //规格
            "sellPrice": 100
        }, {
            "id": "2",
            "type": 101,
            "unit": "",    //单位
            "spec": "",  //规格
            "sellPrice": 200
        }]
    }, {
        "id": '3',
        "name": "商品人工翻译费",
        "type": 'input',
        "mixNum": 0,
        "maxNum": 999,
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
        "mixNum": 0,
        "maxNum": 999,
        "items": [{
            "id": "产品ID",
            "type": 101,
            "unit": "30分钟",    //单位
            "spec": "",  //规格
            "sellPrice": 10
        }]
    }]
})
const response:any = ref({})

const getData = async()=>{
    if (props.id) {
        const {data} = await getGoodsDetailApi(props.id)
        response.value = data
    }
}

const orderList = ref<any>({
    netAmount: 0,
    taxAmount: 0,
    totalAmount: 0,
    discountAmount: 0,
    finalAmount: 0,
    items:[]
})

const changeOrderList = (data:any)=>{
    console.log("changeOrderList==>",data)
    orderList.value = data
}



const joinUsFn = () => {
    if (JoinUsFnRef.value) {
        JoinUsFnRef.value.showModal()
    }
    // if(UpdateViewRef.value){
    //     UpdateViewRef.value.showModal()
    // }
}
const toPay = () => {
    console.log("aaaaa")
    if(orderList.value.items.find((iv:any)=>iv.type === 119)){
        emits('toPay',JSON.parse(JSON.stringify(orderList.value)))
    }else{
        ElMessage.warning("请先选择套餐")
    }
}
onMounted(()=>{
    getData()
})

defineExpose({
    joinUsFn,
    changeOrderList
})
</script>
<style scoped lang="less">
.order-two {
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
                height: 77%;
                overflow-y: scroll;
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
                
                .left-i-a{
                    font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 16px;
                color: #1B1B1B;
                .sub-left-i-a{
                        font-size: 13px;
                    }
                }
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

                    .num-c {
                            font-family: DIN, DIN;
                            font-weight: 500;
                            font-size: 18px;
                            color: #999999;
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