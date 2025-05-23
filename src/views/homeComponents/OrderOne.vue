<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="order-one">
    <el-row :gutter="6" class="row-list">
      <el-col :span="24" class="left">
        <div class="content-list">
          <!-- <div class="list-one">
            <el-row>
              <el-col :span="12" class="left title">
                {{ response.subtitle }}
              </el-col>
              <el-col :span="12" class="right sub-title">
                <div class="pos-right" @click="joinUsFn" v-if="!userStore.token">
                  <el-icon>
                    <QuestionFilled />
                  </el-icon>
                  {{
                    $t("orderOne.registerMember", { price: userStore.discountedPrice })
                  }}
                </div>
              </el-col>
            </el-row>
          </div> -->
          <div class="new-list-one">
            <el-row class="row-1-one">
              <el-col :span="8" class="left title">
                <div class="title-1">
                  <span>JOINKU MINI</span>
                </div>
              </el-col>
              <el-col :span="16" class="right">
                <div class="title-2">
                  <span>注册会员立享优惠，</span>
                  <label>立即注册</label>
                  <el-icon><DArrowRight /></el-icon>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" class="left">
                <div class="title-3">
                  <p>JOINKU MINI</p>
                  <p>小卖铺收银管理系统</p>
                </div>
              </el-col>
              <el-col :span="12" class="right">
                <div class="title-4">
                  <p>€1250</p>
                  <p>€2050</p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="list-one-i">
            <el-row>
              <el-row
                style="width: 100%"
                v-for="(item, index) in response.items"
                :key="index"
              >
                <el-col :span="12" class="left">{{ item.name }}</el-col>
                <el-col :span="12" class="right">€{{ item.price }}</el-col>
              </el-row>
            </el-row>
          </div>
          <div class="list-one-j">
            <div>
              <span>{{ $t("orderOne.normalPrice") }}</span>
              <span class="normal"> €{{ response.sellPrice }} </span>
              <span class="m-f-20">{{ $t("orderOne.invitePrice") }}</span>
              <span class="origin"> €{{ Number(response.vipPrice) }} </span>
              <div class="pos-abs" style="visibility: hidden">
                <AddNum
                  :parents="{
                    minSelectCount: 1,
                    maxSelectCount: 1,
                  }"
                  :data="{
                    id: response.id,
                    name: response.name,
                    type: 119,
                  }"
                  :inviteCode="inviteCode"
                  @changeOrderList="changeOrderList"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="content-list-a"
          v-for="(item, index) in response.assorts"
          :key="index"
        >
          <div
            :class="
              item.items[0].id === posGoodsId.id
                ? isShowPos
                  ? 'current-one pos-bg-class'
                  : 'current-one pos-bg-class-padding'
                : 'current-one'
            "
          >
            <el-row v-if="item.items.length < 3">
              <el-col :span="12" class="left">
                <el-row>
                  <el-col :span="24">
                    <div class="left-i-a">
                      <span>{{ item.name }}</span>
                      <span
                        class="sub-left-i-a"
                        v-if="item.items.length === 1 && item.items[0].spec"
                        >({{ item.items[0].spec }})</span
                      >
                      <el-icon
                        class="margin-left-ico"
                        v-if="item.items[0].id === posGoodsId.id && !isShowPos"
                        @click="isShowPos = !isShowPos"
                        ><ArrowRightBold
                      /></el-icon>
                      <el-icon
                        class="margin-left-ico"
                        v-if="item.items[0].id === posGoodsId.id && isShowPos"
                        @click="isShowPos = !isShowPos"
                        ><ArrowDownBold
                      /></el-icon>
                    </div>
                  </el-col>
                  <el-col :span="24">
                    <div class="tips-text" v-if="item.items[0].id === posGoodsId.id">
                      <span>
                        {{ $t("posGoods.content") }}
                      </span>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="12" class="right">
                <el-row>
                  <el-col
                    :span="24"
                    v-for="(itemChil, chilIndex) in item.items"
                    :key="chilIndex"
                  >
                    <div class="num-div" v-if="item.maxSelectCount > 2">
                      <span v-if="itemChil.spec" style="color: #6a8c69"
                        >({{ itemChil.spec }})</span
                      >
                      <span v-if="itemChil.value">{{ itemChil.value }}</span>
                      <span v-if="itemChil.unit">{{ itemChil.unit }}/</span>
                      <span>€{{ itemChil.sellPrice }}</span>
                      <div class="pos-abs">
                        <AddNum
                          :parents="item"
                          :data="itemChil"
                          :inviteCode="inviteCode"
                          @changeOrderList="changeOrderList"
                        />
                      </div>
                    </div>
                    <div class="radio-common" v-if="item.maxSelectCount < 3">
                      <span v-if="itemChil.spec && item.items.length > 1"
                        >({{ itemChil.spec }})</span
                      >
                      <RadioView
                        :parents="item"
                        :data="itemChil"
                        :inviteCode="inviteCode"
                        @changeOrderList="changeOrderList"
                      />
                    </div>
                  </el-col>
                  <el-col
                    :span="24"
                    class="right tips"
                    v-if="item.items[0].id === posGoodsId.id"
                  >
                    <div class="tips-text">
                      <span> {{ $t("posGoods.fee") }} </span>
                    </div>
                  </el-col>
                  <el-col
                    :span="24"
                    class="right tips"
                    v-if="item.items[0].id === hotGoodsId.id"
                  >
                    <div class="tips-text">
                      <span> *{{ $t("hotGoods") }} </span>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="24" v-if="item.items[0].id === posGoodsId.id">
                <div class="pos-div-content" v-if="isShowPos">
                  {{ $t("posGoods.contentAnother") }}
                </div>
              </el-col>
            </el-row>
            <el-row v-if="item.items.length > 2">
              <el-col :span="24" class="title-b">{{ item.name }}</el-col>
              <el-col :span="24">
                <InvoiceCheckbox
                  @changeOrderList="changeOrderList"
                  :parents="item"
                  :inviteCode="inviteCode"
                />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="btn-div">
          <el-button class="btn-1" type="primary">立即购买</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import AddNum from "./AddNum.vue";
import RadioView from "./RadioView.vue";
import InvoiceCheckbox from "./InvoiceCheckbox.vue";
import {
  ArrowRightBold,
  ArrowDownBold,
  QuestionFilled,
  DArrowRight,
} from "@element-plus/icons-vue";
import { useUserStore } from "@/stores/modules/user";
import { ElMessage } from "element-plus";
import { getGoodsDetailApi, precreateApi } from "@/apis/goods";
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { debounce } from "lodash";
import { i18n } from "@/lang/index";
import { hotGoodsId, posGoodsId } from "@/http/config";
const userStore = useUserStore();
const shoppingCartStore = useShoppingCartStore();
const props = defineProps({
  id: {
    type: String,
    require: true,
  },
});
const emits = defineEmits(["toPay"]);
const isShowPos = ref(false);
const inviteCode = ref("");
defineOptions({
  name: "orderOne",
});
const response: any = ref({});

const getData = async () => {
  if (props.id) {
    const { data } = await getGoodsDetailApi(props.id);
    // const value = {
    //     "id": "1001",
    //     "name": "FASTSIMPLE BASIC",
    //     "subtitle": "基础套餐",
    //     "sellPrice": 800,
    //     "items": [
    //         {
    //             "id": "100010101",
    //             "name": "平板11寸HUAWEI SE",
    //             "price": 230
    //         },
    //         {
    //             "id": "100030101",
    //             "name": "热敏打印机",
    //             "price": 300
    //         },
    //         {
    //             "id": "100040101",
    //             "name": "平板电脑支架",
    //             "price": 70
    //         },
    //         {
    //             "id": "200010101",
    //             "name": "FASTSIMPLE软件授权费",
    //             "price": 200
    //         }
    //     ],
    //     "assorts": [
    //         {
    //             "name": "FASTSIMPLE年费",
    //             "minSelectCount": 1,
    //             "maxSelectCount": 1,
    //             "items": [
    //                 {
    //                     "id": "200030101",
    //                     "type": 102,
    //                     "spec": "1打印机 + 1平板",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 200
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "POS机",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100070101",
    //                     "type": 101,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 220
    //                 },
    //                 {
    //                     "id": "100070102",
    //                     "type": 103,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": "12",
    //                     "sellPrice": 10
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "点单手印打印扫码PDA",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100080101",
    //                     "type": 101,
    //                     "spec": "80mm",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 800
    //                 },
    //                 {
    //                     "id": "100080102",
    //                     "type": 101,
    //                     "spec": "58mm",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 600
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "WIFI路由器SIM卡版",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100050101",
    //                     "type": 101,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 100
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "钱箱",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 200,
    //             "items": [
    //                 {
    //                     "id": "100090101",
    //                     "type": 101,
    //                     "spec": "",
    //                     "unit": null,
    //                     "value": null,
    //                     "sellPrice": 80
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "SOFATTURA发票",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 6,
    //             "items": [
    //                 {
    //                     "id": "200020101",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },
    //                 {
    //                     "id": "200020102",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020103",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020104",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020105",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 },{
    //                     "id": "200020106",
    //                     "type": 102,
    //                     "spec": "套餐A(200张)",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 }
    //             ]
    //         },
    //         {
    //             "name": "税号搜索",
    //             "minSelectCount": 0,
    //             "maxSelectCount": 1,
    //             "items": [
    //                 {
    //                     "id": "200020201",
    //                     "type": 102,
    //                     "spec": "",
    //                     "unit": "年",
    //                     "value": "1",
    //                     "sellPrice": 100
    //                 }
    //             ]
    //         }
    //     ]
    // }
    response.value = data;
  }
};

const orderList = ref<any>({
  netAmount: 0,
  taxAmount: 0,
  totalAmount: 0,
  discountAmount: 0,
  finalAmount: 0,
  items: [],
});

const changeOrderList = (data: any) => {
  console.log("changeOrderList==>", data);
  orderList.value = data;
};

const joinUsFn = () => {
  // if(UpdateViewRef.value){
  //     UpdateViewRef.value.showModal()
  // }
};
const enterEvent = (event: any) => {
  console.log("enterEvent==>", event);
  blurInviteCode(event.target.value);
};
const blurInviteCode = async (value: any) => {
  console.log("blurInviteCode==>", value, inviteCode.value);

  if (
    (inviteCode.value && inviteCode.value.length > 4) ||
    inviteCode.value.length === 0
  ) {
    const params = shoppingCartStore.cart;
    const current = params.items.find((iv: any) => iv.type === 119);
    if (current) {
      params.type = 102;
    } else {
      params.type = 100;
    }
    params.items = params.items.filter((iv) => iv.count);
    const { data } = await precreateApi({
      ...params,
      inviteCode: inviteCode.value,
    });
    orderList.value = data;
    ElMessage.success(i18n.global.t("orderOne.discountUpdated"));
  } else {
    ElMessage.warning(i18n.global.t("orderOne.pleaseEnterCorrectCode"));
  }
};
const blurInviteCodeFn = debounce(blurInviteCode, 1000);
const changeInviteCode = (value: any) => {
  // 限制输入为数字和字母
  const val = value.replace(/[^a-zA-Z0-9]/g, "").trim();
  inviteCode.value = val.substring(0, 8);
  console.log("changeInviteCode==>", val);
  if (val.length === 0) {
    blurInviteCode(event);
  } else {
    if (val.length > 4 && val.length < 9) {
      blurInviteCodeFn(event);
    }
  }
};
const toPay = async () => {
  console.log("aaaaa====>", orderList.value);
  if (orderList.value.items.find((iv: any) => iv.type === 119)) {
    emits("toPay", JSON.parse(JSON.stringify(orderList.value)), inviteCode.value);
  } else {
    ElMessage.warning(i18n.global.t("orderOne.pleaseSelectPackage"));
  }
};
onMounted(() => {
  getData();
});

defineExpose({
  joinUsFn,
  changeOrderList,
});
</script>
<style scoped lang="less">
.order-one {
  padding: 40px 15px;
  background-color: #ffffff;
  border-radius: 6px;
  .row-list {
    .btn-div {
      width: 100%;
      margin: auto;
      // height: 70px;
      margin-top: 40px;
      background: #1a1a1a;
      color: #fff;
      border-radius: 6px;
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: 400;
      font-size: 16px;
      .btn-1 {
        width: 100%;
        background: #1a1a1a;
        color: #fff;
        border: none;
        height: 70px;
        // height: 70px;
        // font-size: 16px;
        // font-weight: 500;
      }
    }
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
      background-color: #ffffff;
      border-radius: 6px;
      position: relative;
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

    .left {
      text-align: left;

      .title {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 500;
        font-size: 14px;
        color: #1b1b1b;
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

    .content-list-a {
      // margin-top: 5px;
      background-color: #ffffff;
      // border-radius: 6px;
      border-bottom: 1px solid #d8d8d8 !important;
      .current-one {
        padding: 10px 0;
      }
      .pos-bg-class-padding {
        background-color: rgb(144, 215, 214);
      }
      .pos-bg-class {
        height: 578px;
        width: 100%;
        background-image: url("@/assets/fastsImages/pos-bg.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        .pos-div-content {
          font-family: Source Han Sans SC, Source Han Sans SC;
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
        font-size: 12px;
        color: #1b1b1b;
      }

      .tips {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400 !important;
        font-size: 14px !important;
        color: #999999;
      }

      .left {
        .left-i-a {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 12px;
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
            font-size: 11px;
          }
        }
      }

      .right {
        .oragin {
          color: #6a8c69;
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
            color: #6a8c69;
          }

          > span {
            font-family: DIN, DIN;
            font-weight: 500;
            font-size: 11px;
            color: #999999;
          }
        }

        .radio-common {
          .radio-con {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 11px;
            color: #646464;
          }
        }
      }
    }

    .content-list-top {
      margin-top: 5px;
    }

    .content-list {
      // padding: 30px;
      background-color: #ffffff;
      // border-radius: 6px;
      border-bottom: 1px solid #d8d8d8;
      .list-one-j {
        text-align: right;
        padding-top: 20px;
        padding-bottom: 10px;
        > div:first-child {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 500;
          font-size: 11px;
          color: #646464;
          position: relative;
          // padding-right: 120px;

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
            color: #6a8c69;
          }
        }

        > div:last-child {
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
        // padding-bottom: 28px;
        // border-bottom: 1px solid #d8d8d8;

        .left {
          padding-top: 10px;
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 12px;
          color: #595959;
        }

        .right {
          padding-top: 10px;
          font-family: DIN, DIN;
          font-weight: 500;
          font-size: 12px;
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

      .new-list-one {
        .row-1-one {
          padding-bottom: 30px;
        }
        p {
          margin: 0;
          padding: 0;
        }
        padding-left: 10px;
        padding-bottom: 20px;
        border-bottom: 1px solid #d8d8d8;
        .title-1 {
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 14px;
          color: #ffffff;
          text-align: center;
          > span {
            width: 140px;
            height: 30px;
            line-height: 30px;
            background: #6a8c69;
            border-radius: 6px;
            display: block;
          }
        }
        .title-2 {
          font-family: Inter, Inter;
          font-weight: 500;
          font-size: 14px;
          color: #666666;
          display: flex;
          align-items: center;
          justify-content: right;
          label {
            color: #6a8c69;
          }
          .el-icon {
            color: #6a8c69;
          }
        }
        .title-3 {
          font-weight: bold;
          > p:first-child {
            font-family: Inter, Inter;
            font-size: 32px;
            color: #6a8c69;
          }
          > p:last-child {
            font-family: Source Han Sans SC, Source Han Sans SC;
            // margin-top: 5PX;
            font-size: 28px;
            color: #1a1a1a;
          }
        }
        .title-4 {
          position: relative;
          > p:first-child {
            font-family: Inter, Inter;
            font-weight: bold;
            font-size: 52px;
            color: #387533;
          }
          > p:last-child {
            position: absolute;
            bottom: -10px;
            right: 0;
            font-family: Inter, Inter;
            font-weight: 500;
            font-size: 14px;
            color: #bdbdbd;
            text-decoration-line: line-through;
          }
        }
      }
    }
  }
}
</style>
