<template>
  <div class="order-view-dialog">
    <el-dialog
      v-model="dialogVisible"
      width="45%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="handleClose"
    >
      <template #title>
        <h3 class="title-dialog">我的订单</h3>
      </template>
      <div class="content">
        <div class="content-tab">
          <span
            v-for="(item, index) in tabList"
            :key="index"
            :class="item.checked ? 'choosed' : ''"
            @click="changeTab(item)"
            >{{ item.name }}</span
          >
        </div>
        <div class="order-list">
          <div v-if="orderList.length > 0" class="current-one">
            <el-collapse>
              <el-collapse-item title="Consistency" v-for="(item,index) in orderList" :key="index" :name="index + 1">
                <template #title>
                  <div>
                    <el-row class="order-row-one">
                      <el-col :span="16">
                        <div class="title-left">
                          <span>订单号:</span>
                          <span>{{ item.id }}</span>
                          <span>
                             <label v-if="item.paymentState === 101">创建 （待审核）</label>
                             <label v-if="item.paymentState === 102">已接单</label>
                             <label v-if="item.paymentState === 109">已结束</label>
                             <label v-if="item.paymentState === 111">已取消</label>
                          </span>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="title-right">2025-3-16</div>
                      </el-col>
                    </el-row>
                    <div class="order-title" v-if="item.items.find((iv:any)=>iv.type === 119)">
                      {{ item.items.find((iv:any)=>iv.type === 119).name }}
                      <!-- <span>基础套餐</span> -->
                     </div>
                    <div class="order-info">商品信息</div>
                  </div>
                </template>
                <div>
                  <div class="order-info-list">
                    <el-row class="order-info-row">
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                    </el-row>
                    <div class="order-total">总计：<span>€1020</span></div>
                  </div>
                  <div class="wuliu-info">
                    <div class="wuliu-info-title">物流信息</div>
                    <div class="wuliu-info-content">收件人：Josh</div>
                    <div class="wuliu-info-content">电话号码：13356889425</div>
                    <div class="wuliu-info-content">详细地址：中国-广东省-深圳市-福田区-笋岗西路2006号-921中餐厅</div>
                    <div class="wuliu-info-name">等待发货（联系客服：88546331224）</div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="Consistency" name="2">
                <template #title>
                  <div>
                    <el-row class="order-row-one">
                      <el-col :span="16">
                        <div class="title-left">
                          <span>订单号:</span>
                          <span>6622626569852626</span>
                          <span>已完成</span>
                        </div>
                      </el-col>
                      <el-col :span="8">
                        <div class="title-right">2025-3-16</div>
                      </el-col>
                    </el-row>
                    <div class="order-title">Fastsimple Basic <span>基础套餐</span></div>
                    <div class="order-info">商品信息</div>
                  </div>
                </template>
                <div>
                  <div class="order-info-list">
                    <el-row class="order-info-row">
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                      <el-col :span="12">
                        <div>平板11寸HUAWEI SE</div>
                      </el-col>
                    </el-row>
                    <div class="order-total">总计：<span>€1020</span></div>
                  </div>
                  <div class="wuliu-info">
                    <div class="wuliu-info-title">物流信息</div>
                    <div class="wuliu-info-content">收件人：Josh</div>
                    <div class="wuliu-info-content">电话号码：13356889425</div>
                    <div class="wuliu-info-content">详细地址：中国-广东省-深圳市-福田区-笋岗西路2006号-921中餐厅</div>
                    <div class="wuliu-info-name">等待发货（联系客服：88546331224）</div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <div v-else class="current-none">
              <img src="@/assets/fastsImages/b-5-3.png" alt="">
              <p>目前没有订单记录</p>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { orderListApi } from "@/apis/goods";
import { ElMessageBox } from "element-plus";
import { useCommonStore } from "@/stores/modules/common";
interface TabListType {
  id: number;
  name: string;
  checked: boolean;
}
const commonStore = useCommonStore();
const dialogVisible = ref<boolean>(false);
const tabList = ref<Array<TabListType>>([
  {
    name: "全部",
    id: 1,
    checked: true,
  },
  {
    name: "待付款",
    id: 2,
    checked: false,
  },
  {
    name: "待发货",
    id: 3,
    checked: false,
  },
  {
    name: "已完成",
    id: 4,
    checked: false,
  },
]);
const orderList = ref<Array<any>>([])
const handleClose = (done: () => void) => {
  commonStore.setShowOrderListView(false);
  done();
};
const changeTab = (item: TabListType) => {
  tabList.value = tabList.value.map((iv) => {
    return {
      ...iv,
      checked: iv.id === item.id,
    };
  });
};
const getOrderList = async () => {
  const {data} = await orderListApi()
  console.log("data===>",data)
  orderList.value = data.list
}
watch(
  () => commonStore.showOrderListView,
  (newVal) => {
    console.log("newVal", newVal);
    dialogVisible.value = newVal;
    if(newVal){
      getOrderList()
    }
  },
  { immediate: true } // 关键选项
);
</script>
<style scoped lang="less">
.order-view-dialog {
  .content {
    .order-list {
      margin-top: 20px;
      .order-info {
        padding-left: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 16px;
        color: #1a1a1a;
        text-align: left;
      }
      .order-title {
        padding-left: 20px;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: bold;
        font-size: 24px;
        color: #1e1e1e;
        > span {
          font-weight: 400;
          font-size: 16px;
          color: #666666;
        }
      }
      .current-none{
        text-align: center;
        margin-top: 100px;
        margin-bottom: 100px;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 16px;
        color: #999999;
        >img{
          display: block;
          width: 100px;
          margin: auto;
        }
        >p{
          padding-top: 10px;
        }
      }
      .current-one {
        width: 100%;
        // position: relative;
        height: 500px;
        overflow-y: scroll;
        .wuliu-info{
          padding-left: 20px;
          .wuliu-info-name{
            text-align: right;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #666666;
            padding-top: 20px;
          }
          .wuliu-info-content{
            font-family: Source Han Sans SC, Source Han Sans SC;
            padding-top: 16px;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
          }
          .wuliu-info-title{
            padding-top: 20px;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 16px;
            color: #1A1A1A;
          }
        }
        .order-info-list{
          border-bottom: 1px solid #E5E5E5;
          .order-total {
          text-align: right;
          padding-right: 20px;
          padding-bottom: 20px;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 14px;
          color: #666666;
          > span {
            font-family: DIN, DIN;
            font-weight: 500;
            font-size: 20px;
            color: #1b1b1b;
          }
        }
        .order-info-row {
          padding: 0px 20px;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 14px;
          color: #999999;
        }
        }
        
        .order-row-one {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 16px;
          color: #1a1a1a;
          background: #f6f6f6;
          border-radius: 5px;
          // padding: 8px 16px;
          padding-left: 16px;
          padding-right: 16px;
          width: 100%;
          position: absolute;
          top: -1px;
          height: 42px;
          line-height: 42px;
          .title-right {
            text-align: right;
          }
          .title-left {
            text-align: left;
            span {
              display: inline-block;
            }
            span:last-child {
              height: 30px;
              line-height: 30px;
              border-radius: 6px 6px 6px 6px;
              background: #fdb522;
              color: #fff;
              padding: 0 10px;
              margin-left: 10px;
              font-weight: 400;
              font-size: 14px;
            }
          }
        }
      }
    }
    .content-tab {
      display: flex;
      // justify-content: left;
      // align-items: center;
      // margin-bottom: 83px;
      span {
        display: inline-block;
        position: relative;
        cursor: pointer;
        margin-left: 30px;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
      }
      > span:first-child {
        margin-left: 0 !important;
      }
      .choosed {
        color: #fdb522;
        &::after {
          content: ""; /* 创建伪元素 */
          position: absolute; /* 绝对定位 */
          left: 50%; /* 与原始元素左对齐 */
          bottom: -5px; /* 与原始元素底部对齐 */
          width: 20px; /* 宽度为100%，即与原始元素相同 */
          height: 2px; /* 下划线的高度 */
          background-color: #fdb522; /* 下划线的颜色 */
          transform: translateX(-50%);
        }
      }
    }
  }
  .title-dialog {
    font-family: Inter, Inter;
    font-weight: bold;
    font-size: 32px;
    color: #1a1a1a;
  }
}
</style>
