<template>
  <div class="pay-suc-view">
    <BannerTop />
    <div class="top-content">
      <img v-if="payStatus" src="@/assets/fastsImages/pay-suc.png" alt="" />
      <img v-else class="err-title" src="@/assets/fastsImages/pay-err.png" alt="" />
      <p class="title" v-if="payStatus">支付成功</p>
      <p class="title" v-else>支付失败</p>
      <p class="sub-title">可前往“我的订单”中查看详情</p>
      <div class="pay-btns">
        <span v-if="payStatus" @click="checkOrder">查看订单</span>
        <span v-else @click="checkOrder">重新支付</span>
        <span @click="sureBtn">确认</span>
      </div>
    </div>
    <div class="bottom-content">
      <div class="content">
        <el-row>
          <el-col :span="12">
            <div class="title-1">
              <span>服务加购</span>
              <span class="width-100"></span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="con">
              <span @click="toPay">立即加购</span>
              <el-icon><DArrowRight /></el-icon>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24" v-if="dataList.length > 0">
          <el-col :span="12" v-for="(item, index) in dataList" :key="index">
            <div class="contet-i">
              <p class="title">{{ item.name }}</p>
              <p class="sub-title">
                <!-- SOFATTURA套餐简要介绍SOFATTURA套餐简要介绍SOFATTURA套餐简要介绍SOFATTURA套餐简要介绍 -->
              </p>
              <div class="con">
                <span @click="toPay">立即加购</span>
                <el-icon><DArrowRight /></el-icon>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  <OrderDetailView ref="OrderDetailViewRef" />
</template>
<script setup lang="ts">
import OrderDetailView from './OrderDetailView.vue'
import BannerTop from "@/views/indexComponents/BannerTop.vue";
import { DArrowRight } from "@element-plus/icons-vue";
import { getProductSoftwaresApi } from "@/apis/goods";
import { getToken } from "@/utils/cache/cookies";
import { useShoppingCartStore } from '@/stores/modules/shoppingCart'
import { useCommonStore } from '@/stores/modules/common'
import { ElMessage } from 'element-plus';
const shoppingCartStore = useShoppingCartStore();
const commonStore = useCommonStore()
const payStatus = ref(false)
const router = useRouter();
const dataList = ref<any>([]);
const getData = async () => {
  const { data } = await getProductSoftwaresApi();
  dataList.value = data;
};
const toPay = () => {
  shoppingCartStore.setTabId("1003");
  shoppingCartStore.setTabThreeShowWare(true)
  router.push("/shopping");
};
const checkOrder = () => {
    router.replace("/paysuccess");
    if(!shoppingCartStore.orderId){
        return ElMessage.error('订单ID丢失！！！')
    }
    commonStore.setShowOrderDetailView(true);
};
const sureBtn = () => {
    shoppingCartStore.resetOrderId();
    router.push("/shopping");
};
// const againPay = () => {
//     router.replace("/paysuccess");
//     if(!shoppingCartStore.orderId){
//         return ElMessage.error('订单ID丢失！！！')
//     }
//     commonStore.setShowOrderDetailView(true);
// }
onMounted(() => {
  getData().then(() => {
    if (getToken()) {
      if (
        router.currentRoute.value?.query?.status &&
        router.currentRoute.value?.query?.status === "false"
      ) {
        console.log("支付失败");
        const orderId = router.currentRoute.value?.query?.orderId as any;
        shoppingCartStore.setOrderId(orderId);
        payStatus.value = false
      } else if (
        router.currentRoute.value?.query?.status &&
        router.currentRoute.value?.query?.status === "true"
      ) {
        console.log("支付成功");
        const orderId = router.currentRoute.value?.query?.orderId as any;
        shoppingCartStore.setOrderId(orderId);
        payStatus.value = true
      }
    }
  });
});
</script>
<style lang="less" scoped>
.pay-suc-view {
  p {
    padding: 0;
    margin: 0;
  }
  width: 100%;
  height: 100vh;
  .bottom-content {
    width: 1920px;
    height: calc(100vh - 600px);
    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 232, 172, 0.84) 100%);
    border-radius: 0px 0px 0px 0px;
    .content {
      width: 1280px;
      margin: auto;
      padding-top: 30px;
      padding-bottom: 50px;
      .contet-i {
        padding: 20px 10px;
        background: linear-gradient(90deg, #111111 0%, #3e3d36 100%);
        border-radius: 6px 6px 6px 6px;
        color: #ffffff;
        .title {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 20px;
          color: #fed15f;
        }
        .sub-title {
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 16px;
          color: #d9d9d9;
          margin-top: 30px;
          margin-bottom: 20px;
        }
      }
      .con {
        display: flex;
        align-items: center;
        justify-content: right;
        height: 40px;
        line-height: 40px;
        > span {
          cursor: pointer;
        }
      }
      .title-1 {
        font-size: 16px;
        color: #1b1b1b;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 500;
        margin-bottom: 10px;
        height: 40px;
        line-height: 40px;
        position: relative;

        > span {
          display: block;
        }
        > span {
          position: absolute;
          left: 0;
        }
        > span:first-child {
          z-index: 2;
        }
        > span:last-child {
          width: 30px;
          height: 8px;
          bottom: 8px;
          z-index: 1;
          background-color: #fed15f;
        }
        .width-100 {
          width: 60px !important;
        }
      }
    }
  }
  .top-content {
    width: 100%;
    // margin-top: 90px;
    padding-top: 190px;
    padding-bottom: 100px;
    height: 600px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    background: linear-gradient(165deg, #111111 0%, #282828 69%, #212121 100%);
    color: #ffffff;
    .pay-btns {
      margin-top: 40px;
      > span:first-child {
        display: inline-block;
        width: 200px;
        height: 40px;
        line-height: 40px;
        border-radius: 34px 34px 34px 34px;
        border: 1px solid #ffffff;
        margin-right: 5px;
        cursor: pointer;
      }
      > span:last-child {
        display: inline-block;
        width: 200px;
        height: 40px;
        line-height: 40px;
        background: #ffffff;
        border-radius: 34px 34px 34px 34px;
        border: 1px solid #ffffff;
        color: #1a1a1a;
        margin-left: 5px;
        cursor: pointer;
      }
    }
    .title {
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: 500;
      font-size: 24px;
    }
    .sub-title {
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: 400;
      font-size: 14px;
    }
    > img {
      width: 230px;
      height: 230px;
      display: block;
      margin: auto;
    }
    .err-title{
        margin-bottom: 20px;
        width: 180px !important;
        height: 180px !important;
    }
  }
}
</style>
