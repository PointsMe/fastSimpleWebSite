<template>
    <div class="drawer-view">
        <el-drawer v-model="drawerStatus" size="67%" :with-header="false">
            <el-row class="row-d">
                <el-col :span="15" class="left-content">
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
                            <el-col :span="12" class="col-pay" v-for="(item, index) in payStyle" :key="index">
                                <div @click="choosePayStyle(item.id)"
                                    :class="item.checked ? 'pay-c choosed-pay' : 'pay-c'">
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
                                                <el-icon v-else>
                                                    <CircleCheckFilled />
                                                </el-icon>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                        <p class="title-t">
                            收货信息
                        </p>
                        <div class="form-message">
                            <el-form ref="ruleFormRef" :model="formModel" :rules="rules" label-width="auto">
                                <el-row :gutter="12">
                                    <el-col :span="12">
                                        <el-form-item label="" prop="contactName">
                                            <el-input size="default" v-model="formModel.contactName" placeholder="名称" />
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="" prop="contactPhone">
                                            <el-input size="default" v-model="formModel.contactPhone" placeholder="号码">
                                                <template #prepend>
                                                    <AllCountryView @changeCountry="changeCountry" />
                                                </template>
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="" prop="country">
                                            <el-input size="default" v-model="formModel.country" placeholder="国家">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="" prop="city">
                                            <el-input size="default" v-model="formModel.city" placeholder="城市">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="8">
                                        <el-form-item label="">
                                            <el-input size="default" v-model="formModel.mail" placeholder="邮编">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item label="" prop="address">
                                            <el-input size="default" v-model="formModel.address" placeholder="收货地址">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <!-- <el-col :span="24" v-if="![82,92].includes(qrCode)">
                                        <div class="code">
                                            银行卡
                                        </div>
                                    </el-col>
                                    <el-col :span="12" v-if="![82,92].includes(qrCode)">
                                        <el-form-item label="">
                                            <el-input size="default" v-model="ruleForm.code" placeholder="选择/输入银行类别">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" v-if="![82,92].includes(qrCode)">
                                        <el-form-item label="">
                                            <el-input size="default" v-model="ruleForm.code" placeholder="请输入银行卡号">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12" v-if="![82,92].includes(qrCode)">
                                        <el-form-item label="">
                                            <el-input size="default" v-model="ruleForm.code" placeholder="银行卡有效期">
                                            </el-input>
                                        </el-form-item>
                                    </el-col> -->
                                    <!-- <el-col :span="24" v-if="![82,92].includes(qrCode)">
                                        <el-form-item label="">
                                            <el-input size="default" v-model="formModel.inviteCode" placeholder="CVV/CVC码">
                                            </el-input>
                                        </el-form-item>
                                    </el-col> -->
                                    <el-col :span="24">
                                        <div class="code">
                                            推荐码
                                        </div>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-form-item label="">
                                            <el-input size="default" v-model="formModel.inviteCode" placeholder="输入推荐码">
                                            </el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                            </el-form>
                        </div>
                    </div>
                    <div class="bottom-pay" v-if="showPayBtn">
                            <el-button class="pay-btn" @click="payMoneyFn">立即支付</el-button>
                    </div>
                    <div class="qrCode-pay" v-else>
                        <el-row :gutter="12">
                            <el-col :span="12">
                                <div class="left-pay">
                                    <img class="pay-mon" src="@/assets/fastsImages/wx-pay.png" alt="">
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="right-pay">
                                    <p>总计：</p>
                                    <p>€1652</p>
                                    <p>
                                        <img class="pay-mon-icon" src="@/assets/fastsImages/wx-pay-icon.png" alt="">
                                    </p>
                                    <p>打开微信APP扫码支付</p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
                <el-col :span="9" class="right-content">
                    <div class="title">
                        <el-row>
                            <el-col :span="12" class="left">
                                结算清单
                            </el-col>
                            <el-col :span="12" class="right">
                                <div class="close">
                                    <el-icon @click="closeDrawer">
                                        <Close />
                                    </el-icon>
                                    <!-- <el-icon><CloseBold /></el-icon> -->
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="order-list">
                        <el-row class="row-one" v-for="(item,index) in (orderList.items).filter((iv:any)=>iv.type === 119)" :key="index">
                            <el-col :span="20">
                                <div class="title-i">
                                    {{ item.name }}
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="money-num">
                                    <span>*{{ item.value || 1 }}</span>
                                    <span>€{{ item.sellPrice }}</span>
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="goods-list">
                                    <p v-for="(itemChild,indexChild) in item.children" :key="indexChild">
                                        {{ itemChild.name }}
                                    </p>
                                </div>
                            </el-col>
                        </el-row>
                        <el-row class="row-one" v-for="(item,index) in (orderList.items).filter((iv:any)=>iv.type !== 119)" :key="index">
                            <el-col :span="20">
                                <div class="title-i">
                                    {{ item.name }}
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="money-num">
                                    <span>*{{ item.value || 1 }}</span>
                                    <span>€{{ item.sellPrice }}</span>
                                </div>
                            </el-col>
                            <el-col :span="24">
                                <div class="goods-list">
                                    <p>
                                        {{ item.unit }}
                                    </p>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                    <div class="order-btn">
                        <el-row>
                            <el-col :span="12" class="left">
                                <span>总计</span>
                            </el-col>
                            <el-col :span="12" class="right">
                                €{{ orderList.totalAmount }}
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-drawer>
        <PaySuccess ref="PaySuccessRef" />
        <PayError ref="PayErrorRef" />
    </div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import adyenPng from "@/assets/fastsImages/adyen.png"
import guestPng from "@/assets/fastsImages/guest.png"
import wxPng from "@/assets/fastsImages/wx.png"
import alipayPng from "@/assets/fastsImages/alipay.png"
import { CircleCheckFilled, Close } from '@element-plus/icons-vue'
import PaySuccess from "./PaySuccess.vue"
import PayError from './PayError.vue'
import AllCountryView from "@/components/AllCountryView.vue"
import { debounce } from "@/utils/index"
import { ref } from 'vue'
import { createApi,payApi,orderListApi } from "@/apis/goods"
import { useShoppingCartStore } from '@/stores/modules/shoppingCart'
interface RuleForm {
    contactName: string,
    contactPhone: string,
    country: string,
    city: string,
    mail: string,
    address: string,
    inviteCode: string,
}
const PaySuccessRef = ref();
const PayErrorRef = ref();
const countryCode = ref('+86');
const drawerStatus = ref<boolean>(false)
const qrCode = ref()
const showPayBtn = ref<boolean>(true)
const ruleFormRef = ref<FormInstance>()
const formModel = ref<RuleForm>({
    contactName: '',
    contactPhone: '',
    country: '',
    city: '',
    mail: '',
    address: '',
    inviteCode: ''
})
const rules = reactive<FormRules<RuleForm>>({
    contactName: [
        { required: true, message: 'Please input contactName', trigger: 'blur' },
    ],
    contactPhone: [
        { required: true, message: 'Please input contactPhone', trigger: 'blur' },
    ],
    country: [
        { required: true, message: 'Please input country', trigger: 'blur' },
    ],
    city: [
        { required: true, message: 'Please input city', trigger: 'blur' },
    ],
    // mail: [
    //     { required: true, message: 'Please input mail', trigger: 'blur' },
    // ],
    address: [
        { required: true, message: 'Please input address', trigger: 'blur' },
    ],
    // inviteCode: [
    //     { required: true, message: 'Please input Activity name', trigger: 'blur' },
    // ],
})
const shoppingCartStore = useShoppingCartStore()
const changeCountry = (e: string) => {
    countryCode.value = e
}
const orderList = ref<any>({})
const showDrawer = (data:any) => {
    drawerStatus.value = true
    orderList.value = data
    console.log("orderList===>",orderList.value,data)
}
const closeDrawer = () => {
    drawerStatus.value = false
}
const payMoney = () => {
    // if(PaySuccessRef.value){
    //     PaySuccessRef.value.showModal()
    // }
    // if (PayErrorRef.value) {
    //     PayErrorRef.value.showModal()
    // }
    // if([82,92].includes(qrCode.value)){
    //     showPayBtn.value = false
    // }
    if(!countryCode.value){
        return ElMessage.warning("请选择国家")
    }
    if (!ruleFormRef.value) return;
    if(payStyle.value.find(iv=>iv.checked)?.id !== 101){
        return ElMessage.warning("请选择付款方式")
    }
    ruleFormRef.value.validate(async (valid) => {
            if (valid) {
                const cart = shoppingCartStore.cart;
                console.log("valid",valid)
                const params = {
                    ...cart,
                    deliveryAddress: {
                        ...formModel.value,
                        contactPhone: `${countryCode.value.replace('+','')}-${formModel.value.contactPhone}`
                    },
                    inviteCode: formModel.value.inviteCode
                }
                console.log("params===>",params)
                const {data} = await createApi(params)
                console.log("data===>",data)
                if(data.id){
                    shoppingCartStore.setOrderId(data.id)
                    const res = await payApi({
                        orderId: data.id,
                        paymode: payStyle.value.find(iv=>iv.checked)?.id
                    })
                    if(res){
                        getOrderList()
                    }
                    // PaySuccessRef.value.showModal()
                }else{
                    // PayErrorRef.value.showModal()
                }
            }
    })
}
const payMoneyFn = debounce(payMoney, 1000)
const payStyle = ref<Array<{
    id: number,
    img: string,
    name: string,
    checked: boolean
}>>([
    {
        id: 102,
        img: adyenPng,
        name: 'PAYPAL',
        checked: true
    },
    {
        id: 101,
        img: guestPng,
        name: 'guest',
        checked: false
    },
    {
        id: 92,
        img: wxPng,
        name: '微信',
        checked: false
    },
    {
        id: 82,
        img: alipayPng,
        name: '支付宝',
        checked: false
    },
])

const choosePayStyle = (val: number) => {
    payStyle.value = payStyle.value.map(item => {
        if (item.id === val) {
            item.checked = true
        } else {
            item.checked = false
        }
        return {
            ...item
        }
    })
    showPayBtn.value = true
}
const getOrderList = async () => {
    const timer = setInterval(async () => {
        const {data} = await orderListApi()
        console.log("data===>",data)
        const current = data.list.find((iv:any)=>iv.id === shoppingCartStore.orderId)
        if(current){
            clearInterval(timer)
            if(current.state === 101){
                PayErrorRef.value.showModal()
               
            }else if(current.state === 102){ 
                if(current.paymentState === 109){//101 创建 （待审核） 102 已接单 109 已结束 111 已取消
                    PaySuccessRef.value.showModal()
                }else{
                    PayErrorRef.value.showModal()
                }
            }
        }
    }, 1000)
}
watch(
    () => payStyle.value,
    (newVal:Array<any>) => {
        let current = newVal.find(iv=>iv.checked)
        console.log("newVal",newVal,current)
        if(current){
            qrCode.value = current.id
        }
    },
    {   deep: true,
        immediate: true } // 关键选项
);
onMounted(()=>{
    console.log("cart===>",shoppingCartStore.cart)
    if(shoppingCartStore.orderId){
        getOrderList()
    }
})
defineExpose({
    showDrawer,
})
</script>
<style scoped lang="less">
.drawer-view {
    .row-d {
        height: 100vh;
        width: 100%;

        .left-content {
            background: #F0F0F0;
            width: 100%;
            padding: 0 50px;
            padding-top: 94px;
            position: relative;

            .qrCode-pay {
                width: 70%;
                margin: auto;

                .left-pay {
                    text-align: right;
                    height: 100%;

                    .pay-mon {
                        width: 160px;
                        height: 160px;
                        display: block;
                        float: right;
                    }
                }

                .left-pay::after {
                    clear: both;
                }

                .right-pay {
                    text-align: left;
                    font-family: Source Han Sans SC, Source Han Sans SC;

                    p {
                        padding: 0;
                        margin: 0;
                    }

                    >p:first-child {
                        font-weight: 400;
                        font-size: 14px;
                        color: #1B1B1B;
                    }

                    >p:nth-child(2) {
                        font-family: Inter, Inter;
                        font-weight: bold;
                        font-size: 36px;
                        color: #1B1B1B;
                    }

                    >p:nth-child(3) {}

                    >p:nth-child(4) {
                        font-weight: 500;
                        font-size: 16px;
                        color: #1A1A1A;
                    }

                    .pay-mon-icon {
                        width: 24px;
                        height: 24px;
                    }
                }

            }

            .bottom-pay {
                position: absolute;
                width: calc(100% - 100px);
                height: 55px;
                bottom: 70px;
                left: 50px;

                .pay-btn {
                    width: 100%;
                    height: 100%;
                    background: #1B1B1B;
                    color: #fff;
                    border-radius: 12px 12px 12px 12px;
                }
            }

            .pay-style {
                >p {
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 500;
                    font-size: 16px;
                    color: #1A1A1A;
                    margin: 0;
                    padding: 0;
                    padding-bottom: 14px;
                }

                .form-message {
                    .code {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 16px;
                        color: #1A1A1A;
                        margin: 0;
                        padding: 0;
                        padding-bottom: 14px;
                    }
                }

                .title-t {
                    margin-top: 30px;
                }

                .col-pay {
                    margin-top: 10px;

                    .choosed-pay {
                        background: rgba(233, 156, 14, 0.04) !important;
                        border-radius: 8px;
                        border: 1px solid #E99C0E;
                    }

                    .pay-c {
                        background: #ffffff;
                        height: 74px;
                        width: 100%;
                        border-radius: 8px;

                        .right-col {
                            .sele {
                                height: 100%;
                                // line-height: 74px;
                                position: relative;

                                .el-icon {
                                    position: absolute;
                                    display: block;
                                    font-size: 25px;
                                    right: 16px;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    color: #E99C0E;
                                }

                                .not-choose-icon {
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

                        .left-col {
                            .left-img {
                                width: 100%;
                                height: 74px;
                                line-height: 74px;
                                position: relative;
                                text-indent: 70px;

                                >img {
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
            padding: 0 50px;
            padding-top: 94px;
            padding-bottom: 50px;
            position: relative;
            width: 100%;
            height: 100%;

            .order-btn {
                width: calc(100% - 100px);
                height: 80px;
                position: absolute;
                bottom: 50px;

                .left {
                    text-align: left;
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 400;
                    font-size: 16px;
                    color: #666666;
                    line-height: 50px;
                }

                .right {
                    text-align: right;
                    font-family: Inter, Inter;
                    font-weight: bold;
                    font-size: 28px;
                    color: #1A1A1A;
                }
            }

            .order-list {
                .row-one {
                    margin-top: 24px;

                    .title-i {
                        width: 100%;
                        text-align: left;
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 400;
                        font-size: 16px;
                        color: #595959;
                    }

                    .money-num {
                        width: 100%;
                        text-align: right;
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 16px;
                        color: #1A1A1A;

                        >span:last-child {
                            margin-left: 20px;
                        }
                    }

                    .goods-list {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 400;
                        font-size: 14px;
                        color: #999999;
                        padding-top: 5px;

                        p {
                            padding-top: 5px;
                        }
                    }
                }

            }

            .title {
                padding-bottom: 26px;

                .left {
                    text-align: left;
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 500;
                    font-size: 24px;
                    color: #1A1A1A;
                }

                .close {
                    width: 100%;
                    height: 100%;

                    >.el-icon {
                        display: block;
                        position: absolute;
                        right: 0;
                        top: -30px;
                        cursor: pointer;
                        font-size: 30px;
                        color: #999999;
                    }
                }
            }
        }
    }

}
</style>