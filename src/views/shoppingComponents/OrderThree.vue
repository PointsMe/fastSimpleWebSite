<template>
  <div class="order-one">
    <el-row :gutter="6" class="row-list">
      <el-col :span="16" class="left">
        <div class="content-list-left">
          <div class="left-1" v-if="response1 && response1.hardwares.length > 0">
            <div class="title-1">
              <span>{{ $t('shopping.addHardware') }}</span>
              <span></span>
            </div>
            <el-row class="row-1 row-b" :gutter="24">
              <el-col :span="8" v-for="(item, index) in response1.hardwares" :key="index">
                <div class="new-con">
                  <div class="img-div">
                    <img v-if="item.imageUrl" :src="item.imageUrl" alt="" />
                    <el-image v-else>
                      <template #error>
                        <div class="image-slot">
                          <el-icon><Picture /></el-icon>
                        </div>
                      </template>
                    </el-image>
                  </div>
                  <div class="padding-10">
                    <p>
                      {{ item.name }}
                    </p>
                    <p v-if="item.skus[0].spec" style="color: #fdb522">
                      {{ item.skus[0].spec }}
                    </p>
                    <div class="con-r">
                      <div class="con-l">
                        <span v-if="item.skus[0].unit">{{ item.skus[0].unit }}/</span>
                        <span>€{{ item.skus[0].sellPrice }}</span>
                      </div>
                      <div class="pos-abs">
                        <AddNum
                          :data="item.skus[0]"
                          :parents="{
                            minSelectCount: 0,
                            maxSelectCount: 999
                          }"
                          @changeOrderList="changeOrderList"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
              <!-- <el-col :span="12">
                <div class="con">
                  <img :src="item.imageUrl" alt="" />
                  {{ item.name }}
                  <span v-if="item.spec" style="color: #fdb522">({{ item.spec }})</span>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="con-r">
                  <div class="con-l">
                    <span v-if="item.unit">{{ item.unit }}/</span>
                    <span>€{{ item.sellPrice }}</span>
                  </div>

                  <div class="pos-abs">
                    <AddNum
                      :data="item"
                      :parents="{
                        minSelectCount: 0,
                        maxSelectCount: 999,
                      }"
                      @changeOrderList="changeOrderList"
                    />
                  </div>
                </div>
              </el-col> -->
              <!-- <el-col :span="24" class="margin-5"></el-col> -->
            </el-row>
          </div>
          <div class="left-2" v-if="response1 && response1.softwares.length > 0">
            <div class="title-1">
              <span>{{ $t('shopping.addSoft') }}</span>
              <span></span>
            </div>
            <div v-for="(item, index) in response1.softwares" :key="index">
              <el-row class="el-white" v-if="item.skus.length > 2">
                <el-col :span="24" class="title-b">{{ item.name }}</el-col>
                <el-col :span="24">
                  <ParentsInvoiceCheckbox @changeOrderList="changeOrderList" :parents="item" />
                </el-col>
              </el-row>
              <el-row class="el-white" v-if="item.skus.length < 3">
                <el-col :span="12" class="left">
                  <el-row>
                    <el-col :span="24">
                      <div class="left-i-a">
                        <span>{{ item.name }}</span>
                        <span
                          class="sub-left-i-a"
                          v-if="item.skus.length === 1 && item.skus[0].spec"
                          >({{ item.skus[0].spec }})</span
                        >
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="12" class="right">
                  <el-row>
                    <el-col :span="24" v-for="(itemChil, chilIndex) in item.skus" :key="chilIndex">
                      <div class="num-div" v-if="item.maxSelectCount > 2">
                        <span v-if="itemChil.spec" style="color: #fdb522"
                          >({{ itemChil.spec }})</span
                        >
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
                        <span v-if="itemChil.spec && item.items.length > 1"
                          >({{ itemChil.spec }})</span
                        >
                        <ParentsRadioView
                          :parents="item"
                          :data="itemChil"
                          @changeOrderList="changeOrderList"
                        />
                      </div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="left-3" v-if="response1 && response1.services.length > 0">
            <div class="title-1">
              <span>{{ $t('shopping.otherServer') }}</span>
              <span class="width-100"></span>
            </div>
            <div class="content-list-a" v-for="(item, index) in response1.services" :key="index">
              <div
                :class="
                  item.skus[0].id === posGoodsId.id
                    ? isShowPos
                      ? 'current-one pos-bg-class'
                      : 'current-one pos-bg-class-padding'
                    : 'current-one'
                "
              >
                <el-row v-if="item.skus.length < 3">
                  <el-col :span="12" class="left">
                    <el-row>
                      <el-col :span="24">
                        <div class="left-i-a">
                          <span>{{ item.name }}</span>
                          <span
                            class="sub-left-i-a"
                            v-if="item.skus.length === 1 && item.skus[0].spec"
                            >({{ item.skus[0].spec }})</span
                          >
                          <el-icon
                            class="margin-left-ico"
                            v-if="item.skus[0].id === posGoodsId.id && !isShowPos"
                            @click="isShowPos = !isShowPos"
                            ><ArrowRightBold
                          /></el-icon>
                          <el-icon
                            class="margin-left-ico"
                            v-if="item.skus[0].id === posGoodsId.id && isShowPos"
                            @click="isShowPos = !isShowPos"
                            ><ArrowDownBold
                          /></el-icon>
                        </div>
                      </el-col>
                      <el-col :span="24">
                        <div class="tips-text" v-if="item.skus[0].id === posGoodsId.id">
                          <span>
                            {{ $t('posGoods.content') }}
                          </span>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="12" class="right">
                    <el-row>
                      <el-col
                        :span="24"
                        v-for="(itemChil, chilIndex) in item.skus"
                        :key="chilIndex"
                      >
                        <div class="num-div" v-if="item.maxSelectCount > 2">
                          <span v-if="itemChil.spec" style="color: #fdb522"
                            >({{ itemChil.spec }})</span
                          >
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
                          <span v-if="itemChil.spec && item.skus.length > 1"
                            >({{ itemChil.spec }})</span
                          >
                          <ParentsRadioView
                            :parents="item"
                            :data="itemChil"
                            @changeOrderList="changeOrderList"
                          />
                        </div>
                      </el-col>
                      <el-col
                        :span="24"
                        class="right tips"
                        v-if="item.skus[0].id === posGoodsId.id"
                      >
                        <div class="tips-text">
                          <span> {{ $t('posGoods.fee') }} </span>
                        </div>
                      </el-col>
                      <el-col
                        :span="24"
                        class="right tips"
                        v-if="item.skus[0].id === hotGoodsId.id"
                      >
                        <div class="tips-text">
                          <span> *{{ $t('hotGoods') }} </span>
                        </div>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="24" v-if="item.skus[0].id === posGoodsId.id">
                    <div class="pos-div-content" v-if="isShowPos">
                      <span v-if="commonStore.language === 'it'">
                        {{ $t('posGoods.contentAnother') }}
                      </span>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="right margin-5">
        <div class="content-list-right">
          <div class="title">
            <el-divider>
              <div>{{ $t('orderThree.total') }}</div>
            </el-divider>
            <!-- <el-row :gutter="12">
                            <el-col :span="10" class="col-a">
                                <div class="line"></div>
                            </el-col>
                            <el-col :span="4" class="col-a">
                                {{ $t('orderThree.total') }}
                            </el-col>
                            <el-col :span="10" class="col-a">
                                <div class="line"></div>
                            </el-col>
                        </el-row> -->
          </div>
          <!-- <div class="all-order">
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
                    </div> -->
          <div class="all-order">
            <div class="order-list" v-if="orderList.items.find((iv: any) => iv.type === 119)">
              <el-row>
                <el-col
                  v-for="(item, index) in orderList.items.find((iv: any) => iv.type === 119)
                    ?.children"
                  :span="
                    orderList.items.find((iv: any) => iv.type === 119)?.children?.length ===
                    index + 1
                      ? 20
                      : 24
                  "
                  class="left"
                  :key="index"
                >
                  {{ item.name }}
                </el-col>
                <el-col :span="4" class="right">
                  €{{ orderList.items.find((iv: any) => iv.type === 119)?.sellPrice }}
                </el-col>
              </el-row>
            </div>
            <div
              class="order-i"
              v-for="(item, index) in orderList.items.filter((iv: any) => iv.type !== 119)"
              :key="index"
            >
              <el-row>
                <el-col :span="24" class="left">
                  {{ item.name }}
                </el-col>
                <el-col :span="12" class="left tips">
                  <!-- 1打印机+1平板 -->
                </el-col>
                <el-col :span="12" class="right tips-1">
                  <div class="con-tips-1">
                    <span>*{{ item.count }}</span>
                    <span style="margin-left: 20px"> €{{ item.sellPrice }}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="order-btn">
            <el-row class="order-btn-row">
              <el-col :span="16" class="left-i-sub">{{ $t('orderThree.totalAmount') }}</el-col>
              <el-col :span="8" class="right-i-sub"> €{{ orderList?.totalAmount || 0 }} </el-col>
              <el-col :span="16" class="left-i-sub">{{ $t('orderThree.taxAmount') }}</el-col>
              <el-col :span="8" class="right-i-sub"> €{{ orderList?.taxAmount || 0 }} </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" class="left-i">
                <span class="word"
                  >{{ $t('orderThree.finalAmount') }}
                  <label class="word-1">(+ IVA)</label>
                </span>
              </el-col>
              <el-col :span="14" class="right-i">
                <span>
                  €{{ orderList?.finalAmount || 0 }}
                  <!-- <label class="word-1">+ IVA</label> -->
                </span>
              </el-col>
              <el-col :span="24">
                <el-button class="button-h" @click="toPay">{{ $t('orderThree.buyNow') }}</el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <JoinUs ref="JoinUsFnRef" />
  <ShowTips ref="ShowTipsRef" />
  <ShowTipsHot ref="ShowTipsHotRef" />
</template>
<script setup lang="ts">
import AddNum from './AddNum.vue'
import ParentsRadioView from './ParentsRadioView.vue'
import ShowTipsHot from './ShowTipsHot.vue'
import ShowTips from './ShowTips.vue'
import JoinUs from './JoinUs.vue'
import ParentsInvoiceCheckbox from './ParentsInvoiceCheckbox.vue'
import { ArrowRightBold, ArrowDownBold, Picture } from '@element-plus/icons-vue'
import { getProductSoftwaresApi, precreateApi, getProductAllApi } from '@/apis/goods'
import { useUserStore } from '@/stores/modules/user'
import { hotGoodsId, posGoodsId } from '@/http/config'
import { useShoppingCartStore } from '@/stores/modules/shoppingCart'
import { useCommonStore } from '@/stores/modules/common'
defineOptions({
  name: 'orderTwo'
})
const emits = defineEmits(['toPay'])
const commonStore = useCommonStore()
const response1 = ref()
const isShowPos = ref(true)
const ShowTipsRef = ref()
const ShowTipsHotRef = ref()
const userStore = useUserStore()
const router = useRouter()
const shoppingCartStore = useShoppingCartStore()
const getData = async () => {
  const { data } = await getProductSoftwaresApi()
  data.softwares = data.map((item: any) => {
    return {
      ...item,
      maxSelectCount: 1,
      minSelectCount: 0
    }
  })
  response1.value = data
}
const getData1 = async () => {
  const { data } = await getProductAllApi()
  // data.hardwares = data.hardwares.map((item: any) => {
  //   return {
  //     ...item,
  //     type: 101
  //   };
  // });
  data.softwares = data.softwares.map((item: any) => {
    return {
      ...item,
      maxSelectCount: 1,
      minSelectCount: 0
    }
  })
  data.services = data.services.map((item: any) => {
    return {
      ...item,
      maxSelectCount: 99,
      minSelectCount: 0
    }
  })
  console.log('getData1===>', data)
  response1.value = data
}
const orderList = ref<any>({
  netAmount: 0,
  taxAmount: 0,
  totalAmount: 0,
  discountAmount: 0,
  finalAmount: 0,
  items: []
})

const changeOrderList = (data: any) => {
  console.log('changeOrderList==>', data)
  orderList.value = data
}

const toPay = async () => {
  console.log('aaaaa')
  if (orderList.value.items.length > 0) {
    emits('toPay', JSON.parse(JSON.stringify(orderList.value)))
  }
}
onMounted(() => {
  const tabThreeShowWare = shoppingCartStore.tabThreeShowWare
  if (tabThreeShowWare) {
    getData()
  } else {
    getData1()
  }
})
watch(
  () => commonStore.language,
  (val) => {
    const tabThreeShowWare = shoppingCartStore.tabThreeShowWare
    if (tabThreeShowWare) {
      getData()
    } else {
      getData1()
    }
  },
  {
    immediate: true
  }
)
defineExpose({
  changeOrderList
})
</script>
<style scoped lang="less">
.order-one {
  .content-list-a {
    margin-top: 5px;
    background-color: #ffffff;
    border-radius: 6px;
    .current-one {
      padding: 30px;
    }
    .pos-bg-class-padding {
      // background-color: rgb(144, 215, 214);
    }
    .pos-bg-class {
      height: 578px;
      width: 100%;
      background-image: url('@/assets/fastsImages/pos-bg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .pos-div-content {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 400;
        font-size: 12px;
        color: #124c45;
        margin-left: 50%;
      }
    }
    .tips-text {
      font-family: DIN, DIN;
      font-weight: 500;
      font-size: 12px;
      color: #646464;
    }
    .g-b {
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
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
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 500;
      font-size: 16px;
      color: #1b1b1b;
    }

    .tips {
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 400 !important;
      font-size: 14px !important;
      color: #999999;
    }

    .left {
      .left-i-a {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 500;
        font-size: 16px;
        color: #1b1b1b;
        display: flex;
        align-items: center;
        justify-content: left;
        > span {
          display: inline-block;
        }
        .margin-left-ico {
          margin-left: 10px;
        }
        .sub-left-i-a {
          font-size: 13px;
        }
      }
    }

    .right {
      .oragin {
        color: #fdb522;
      }

      .grey {
        color: #999999;
      }

      .num-div {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 500;
        font-size: 14px;
        color: #646464;
        position: relative;
        width: 100%;
        height: 100%;
        padding-right: 102px;

        .oragin {
          color: #fdb522;
        }

        > span {
          font-family: DIN, DIN;
          font-weight: 500;
          font-size: 18px;
          color: #999999;
        }
      }

      .radio-common {
        .radio-con {
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: 500;
          font-size: 14px;
          color: #646464;
        }
      }
    }
  }
  .el-white {
    background-color: #ffffff;
    margin-top: 10px;
    padding: 20px;
    border-radius: 3px;
  }
  .pos-abs {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .row-list {
    .el-col {
      display: flex;
      flex-direction: column;
    }
    .margin-5 {
      margin-bottom: 5px;
    }
    .content-list,
    .content-list-right {
      height: 100%; // 确保内容容器占满高度
      min-height: 600px;
    }

    .content-list,
    .content-list-left {
      height: 100%; // 确保内容容器占满高度
      min-height: 600px;
    }

    .content-list-right {
      padding: 30px;
      background-color: #ffffff;
      border-radius: 6px;
      position: relative;
      color: #1a1a1a;
      .order-btn {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        padding: 0px 30px 30px 30px;
        .order-btn-row {
          font-size: 16px;
          .left-i-sub {
            text-align: left;
          }
          .right-i-sub {
            text-align: right;
          }
        }

        .input-h {
          text-align: center;
          height: 60px;
          margin-top: 16px;
        }

        .button-h {
          text-align: center;
          height: 60px;
          background: #1b1b1b;
          margin-top: 10px;
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 16px;
          color: #ffffff;
        }

        .left-i {
          text-align: left;
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: 400;
          font-size: 16px;
          color: #1b1b1b;
          position: relative;

          .word {
            position: absolute;
            bottom: 10px;
            left: 0;
            .word-1 {
              font-size: 14px;
              color: #999999;
            }
          }
        }

        .right-i {
          text-align: right;
          font-family: Inter, Inter;
          font-weight: bold;
          font-size: 48px;
          color: #1a1a1a;
          .word-1 {
            font-size: 24px;
            color: #999999;
          }
        }
      }

      .all-order {
        height: calc(100% - 250px);
        max-height: calc(100% - 250px);
        overflow-y: auto;
        .left {
          text-align: left;
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: 400;
          font-size: 16px;
          padding-top: 30px;
        }

        .right {
          padding-top: 30px;
          font-family: DIN, DIN;
          font-weight: 500;
          font-size: 18px;
          color: #1a1a1a;
          // margin-bottom: 5px;
        }

        .order-i {
          border-bottom: 1px solid #ededed;
          padding-bottom: 24px;

          .tips-1 {
            padding-top: 0;
            .con-tips-1 {
              span {
                display: inline-block;
              }
              span:last-child {
                margin-left: 20px;
              }
            }
          }

          .tips {
            font-family:
              Source Han Sans SC,
              Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
            padding-top: 0;
          }
        }

        .order-list {
          border-bottom: 1px solid #ededed;
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
            background: #bdbdbd;
            transform: scaleY(0.5);
            /* 垂直缩放至0.5倍 */
            transform-origin: 0 0;
            /* 确保缩放基点正确 */
          }
        }
      }
    }

    .content-list-left {
      // padding: 30px;
      // background-color: #FFFFFF;
      position: relative;

      .left-1,
      .left-2,
      .left-3 {
        .title-1 {
          font-size: 16px;
          color: #1b1b1b;
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: 500;
          margin-bottom: 10px;
          border-bottom: 1px solid #b1b1b1;
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
        .row-b {
          margin-bottom: 5px;
          // .margin-5{
          //     height: 5px;
          //     background-color: #F6F6F4;
          // }
        }
        .row-1 {
          .el-col {
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
          }
          // padding: 12px;
          // background-color: #ffffff;
          border-radius: 6px;
          .con-l {
            font-family:
              Source Han Sans SC,
              Source Han Sans SC;
            font-weight: 500;
            font-size: 14px;
            color: #646464;
            height: 60px;
            line-height: 60px;

            > span:last-child {
              font-family: DIN, DIN;
              font-weight: 500;
              font-size: 18px;
              color: #999999;
            }
          }

          .new-con {
            background-color: #ffffff;
            height: 100%;
            .padding-10 {
              margin: 10px;
            }
            .img-div {
              margin: 10px;
              background-color: #f6f6f4;
              height: 120px;
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              > img {
                display: block;
                margin: auto;
                // width: 142px;
                height: 80px;
                width: 100px;
              }
            }

            .con-r {
              padding-right: 102px;
              position: relative;
              width: 100%;
              // height: 60px;
              // height: 100%;
              position: relative;
              // line-height: 60px;
              text-align: left;
            }
            > p {
              font-size: 14px;
              color: #1b1b1b;
              text-align: left;
            }
          }
          .con {
            height: 60px;
            position: relative;
            line-height: 60px;
            font-family:
              Source Han Sans SC,
              Source Han Sans SC;
            font-weight: 500;
            font-size: 16px;
            color: #1b1b1b;
            text-indent: 65px;

            > img {
              height: 60px;
              display: block;
              position: absolute;
              left: 0;
            }
          }
        }
      }
    }

    .left {
      text-align: left;

      .title {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 500;
        font-size: 16px;
        color: #1b1b1b;
      }

      .sub-title {
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 400;
        font-size: 12px;
        color: #646464;

        .pos-right {
          position: absolute;
          right: 0;
          bottom: 0;

          .el-icon {
            color: #2865ff;
            font-size: 13px;
          }

          // font-size: 13px;
        }
      }
    }

    .right {
      text-align: right;
    }
  }
}
</style>
