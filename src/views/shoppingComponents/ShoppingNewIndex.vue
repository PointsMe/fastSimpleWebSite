<template>
  <div class="shopping-new-index">
    <div class="content">
      <div class="shopping-tab">
        <el-row>
          <el-col
            class="shopping-col"
            v-for="(item, index) in tabArr"
            :span="item.span"
            :key="index"
          >
            <div
              @click="changeTab(item.id)"
              :class="item.checked ? 'shopping-content choosed' : 'shopping-content'"
            >
              <p class="'t_c'">
                {{ item.subtitle }}
              </p>
              <p class="t_d">
                {{ item.name }}
                <!-- <span v-if="item.id === '1001' && shoppingCartStore.cart.items.find((it:any)=>it.itemId === hotGoodsId.id)?.count === 5">({{ $t('shoppingNewIndex.completeVersion') }})</span> -->
              </p>
              <span></span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="tab-content">
        <div v-for="(item, index) in tabArr" :key="index">
          <OrderOne v-if="!index && item.checked" :id="item.id" @toPay="toPayDrawer" />
          <OrderTwo
            v-if="index === 1 && item.checked"
            :id="item.id"
            @toPay="toPayDrawer"
          />
          <OrderFour
            v-if="index === 2 && item.checked"
            :id="item.id"
            @toPay="toPayDrawer"
          />
          <OrderThree
            v-if="index === 3 && item.checked"
            :id="item.id"
            @toPay="toPayDrawer"
          />
        </div>
      </div>
    </div>
    <DrawerView ref="DrawerRef" />
    <PayError ref="PayErrorRef" />
    <PaySuccess ref="PaySuccessRef" />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import OrderOne from "./OrderOne.vue";
import OrderTwo from "./OrderTwo.vue";
import OrderThree from "./OrderThree.vue";
import OrderFour from "./OrderFour.vue";
import DrawerView from "./DrawerView.vue";
import PayError from "./PayError.vue";
import PaySuccess from "./PaySuccess.vue";
import { useUserStore } from "@/stores/modules/user";
import { getGoodsListApi } from "@/apis/goods";
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { getToken } from "@/utils/cache/cookies";
import { hotGoodsId } from "@/http/config";
const shoppingCartStore = useShoppingCartStore();
const userStore = useUserStore();
defineOptions({
  name: "shoppingNewIndex",
});
const router = useRouter();
const hardwareSelection = {
  id: "1003",
  name: "所有",
  subtitle: "",
  span: 3,
  checked: false,
};
const DrawerRef = ref();
const PayErrorRef = ref();
const PaySuccessRef = ref();
const tab = ref<string>("1");
const tabArr = ref<
  Array<{
    id: string;
    name: string;
    subtitle: string;
    checked: boolean;
    span: number;
  }>
>([]);
// {
//     id: '1001',
//     name: 'FASTSIMPLE BASIC',
//     subtitle: '基础套餐',
//     checked: false
// },
// {
//     id: '1002',
//     name: 'FASTSIMPLE premiun',
//     subtitle: '升级套餐',
//     checked: false
// },hardwareSelection
const toPayDrawer = (orderList: any, inviteCode: string) => {
  console.log("toPayDrawer=>", shoppingCartStore.cart, inviteCode);
  if (DrawerRef.value) {
    DrawerRef.value.showDrawer(orderList, inviteCode);
  }
};
const changeTab = (val: string) => {
  // window.localStorage.setItem("shoppingTab",val)
  if (tabArr.value.find((iv) => iv.checked)?.id === val) {
    return false;
  }
  shoppingCartStore.resetTabThreeShowWare()
  shoppingCartStore.resetCart();
  console.log("====changeTab>", tabArr.value);
  tabArr.value = tabArr.value.map((item) => {
    return {
      ...item,
      checked: item.id === val ? true : false,
    };
  });
  console.log("====changeTab>", tabArr.value);
};
const getData = async () => {
  const { data } = await getGoodsListApi({
    biz: userStore.biz,
  });
  console.log("shoppingCartStore.tabId", shoppingCartStore.tabId);
  if (data && data.length > 0) {
    console.log("res===>", data);
    const list = data.map((item: any, index: number) => {
      return {
        id: item.id,
        name: item.name,
        subtitle: item.subtitle,
        span: 7,
        checked: shoppingCartStore.tabId === item.id ? true : false,
      };
    });
    console.log("list.contact(hardwareSelection)", list);
    // list.push(hardwareSelection);
    list.forEach((element: any, index: number) => {
      if (shoppingCartStore.tabId) {
        if (element.id === shoppingCartStore.tabId) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!index) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      }
    });
    tabArr.value = list;
  }
};

onMounted(() => {
  getData().then(() => {
    console.log("onMounted=>", router.currentRoute.value.query);
    if (getToken()) {
      if (
        router.currentRoute.value?.query?.status &&
        router.currentRoute.value?.query?.status === "false"
      ) {
        PayErrorRef.value.showModal(router.currentRoute.value?.query?.orderId);
      } else if (
        router.currentRoute.value?.query?.status &&
        router.currentRoute.value?.query?.status === "true"
      ) {
        PaySuccessRef.value.showModal(router.currentRoute.value?.query?.orderId);
      }
    }
  });
});
watch(
  ()=> userStore.token,
  ()=>{
    getData();
  }
)
defineExpose({
  toPayDrawer,
});
</script>
<style scoped lang="less">
.shopping-new-index {
  width: 100%;
  background-color: #f6f6f4;

  p {
    margin: 0;
    padding: 0;
  }

  .content {
    width: 1280px;
    margin: auto;
    position: relative;
    padding-top: 10px;
    .tab-content {
      margin-top: 30px;
    }

    .shopping-tab {
      // margin-top: 40px;
      position: absolute;
      width: 100%;
      top: -40px;
      z-index: 2;
      .shopping-col {
        display: flex;
        flex-direction: column;

        .choosed {
          filter: blur(0px) !important;
          opacity: 1 !important;
          .t_c {
            font-family: Inter, Inter;
            font-weight: normal;
            font-size: 20px;
            color: #387533 !important;
          }
          .l_t_c {
            // height: 100%;
            // line-height: 3;
          }

          .t_d {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 20px;
            color: #387533 !important;
          }

          > span {
            display: block;
            height: 4px;
            width: 80px;
            background-color: #387533;
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .shopping-content {
          background-color: #ffffff;
          text-align: center;
          padding: 16px 0;
          cursor: pointer;
          // height: 100%;
          height: 60px;
          position: relative;
          // line-height: 1;
          filter: blur(0px);
          opacity: 0.5;
          .t_c {
            font-family: Inter, Inter;
            font-weight: normal;
            font-size: 20px;
            color: black;
          }
          .l_t_c {
            height: 100%;
            line-height: 3;
          }
          .t_d {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 20px;
            color: black;
          }
        }
      }
    }
  }
}
</style>
