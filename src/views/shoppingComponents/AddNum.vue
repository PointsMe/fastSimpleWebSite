<template>
  <div class="add-num-div" :ref="(el) => setRef(el)">
    <span @click="reduceFn" :class="data?.type === 119 ? 'not-allow' : ''">
      <el-icon>
        <Minus />
      </el-icon>
    </span>
    <span>
      <el-input
        :disabled="data?.type === 119"
        size="small"
        v-model="inputNum"
        placeholder="0"
        @input="changeInput"
      />
    </span>
    <span @click="increaseFn" :class="data?.type === 119 ? 'not-allow' : ''">
      <el-icon>
        <Plus />
      </el-icon>
    </span>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Minus, Plus } from "@element-plus/icons-vue";
import { debounce } from "lodash";
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { useUserStore } from "@/stores/modules/user";
import { precreateApi } from "@/apis/goods";
import { ElMessage } from "element-plus";
import { i18n } from "@/lang/index";
import { emitter } from "@/eventBus/index";
defineOptions({
  name: "addNum",
});
const refDom = ref<any>({});
const shoppingCartStore = useShoppingCartStore();
const userStore = useUserStore();
const emits = defineEmits(["changeOrderList"]);
//定义props变量接收defineProps返回值
const props = defineProps({
  parents: {
    type: Object,
    required: false,
  },
  data: {
    type: Object,
    required: false,
  },
  inviteCode: {
    type: String,
    required: false,
  },
});

const inputNum = ref<number>(0);
const setRef = (el: any) => {
  refDom.value[`Ref_${props.data?.id}`] = el;
};
const changeInput = async (e: any) => {
  if (!userStore.token) {
    return ElMessage.warning(i18n.global.t("shopping.loginFirst"));
  }
  console.log("changeInput===>", e);
  let value = 0;
  if (parseInt(e) && parseInt(e) > 0) {
    value =
      parseInt(e) > props.parents?.maxSelectCount
        ? props.parents?.maxSelectCount
        : parseInt(e);
  } else {
    value = props.parents?.minSelectCount ?? 1;
  }
  if (props.parents?.name === "POS机器PAXA920PRO 4G无线网络WIFI+4G" && value !== 0) {
    shoppingCartStore.setPosGoods({
      num: 1,
      show: true,
      type: 'input',
      currentData: {
        data: props.data,
        parents: props.parents,
        inviteCode: props.inviteCode,
      },
    });
  } else {
    const params = shoppingCartStore.cart;
    const current = params.items.find((iv) => iv.itemId === props?.data?.id);
    if (current) {
      current.count = value;
    } else {
      params.items.push({
        type: props?.data?.type,
        itemId: props?.data?.id,
        count: value,
      });
    }
    shoppingCartStore.setCart(params);
    const data = await addPrecreate();
    if (data) {
      inputNum.value = value;
      emits("changeOrderList", data);
    }
  }
};

const reduce = async () => {
  console.log("reduce===>", props.parents, inputNum.value);
  if (!userStore.token) {
    return ElMessage.warning(i18n.global.t("shopping.loginFirst"));
  }
  if (Number(inputNum.value) > 0) {
    const value =
      Number(inputNum.value) > props.parents?.minSelectCount
        ? Number(inputNum.value) - 1
        : props.parents?.minSelectCount;
    // const value = Number(inputNum.value) - 1
    if (
      props.parents?.name === "POS机器PAXA920PRO 4G无线网络WIFI+4G" &&
      shoppingCartStore.posGoods.num === 1 &&
      value === 0
    ) {
      shoppingCartStore.setPosGoods({
        num: shoppingCartStore.posGoods.num - 1,
        show: false,
        type: 'btn',
        currentData: {
          data: props.data,
          parents: props.parents,
          inviteCode: props.inviteCode,
        },
      });
    }
    const params = shoppingCartStore.cart;
    const current = params.items.find((iv) => iv.itemId === props?.data?.id);
    if (current) {
      current.count = value;
    } else {
      params.items.push({
        type: props?.data?.type,
        itemId: props?.data?.id,
        count: value,
      });
    }
    shoppingCartStore.setCart(params);
    const data = await addPrecreate();
    if (data) {
      inputNum.value = value;
      emits("changeOrderList", data);
    }
  }
};
const addPrecreate = async (posInviteCode: string = "") => {
  if (!userStore.token) {
    return ElMessage.warning(i18n.global.t("shopping.loginFirst"));
  }
  const params = shoppingCartStore.cart as any;
  const tab = window.localStorage.getItem("shoppingTab") || "1001";
  console.log("请求参数：", params, tab);
  if (tab === "1003") {
    params.items = params.items.filter((iv: any) => iv.type !== 119);
  } else {
    params.items = params.items.filter((iv: any) => iv.type !== 119);
    params.items.push({
      type: 119,
      itemId: tab,
      count: 1,
    });
  }
  const current = params.items.find((iv: any) => iv.type === 119);
  if (current) {
    params.type = 102;
  } else {
    params.type = 100;
  }
  if (posInviteCode) {
    params.inviteCode = posInviteCode;
  }
  if (props.inviteCode) {
    params.inviteCode = props.inviteCode;
  }
  params.items = params.items.filter((iv: any) => iv.count);
  shoppingCartStore.setCart(params);

  const { data } = await precreateApi(params);
  console.log("precreateApi===>", data);
  return data;
  // return params
};
const increase = async () => {
  console.log("increase===>", props.parents, props?.data, inputNum.value);
  if (
    props.parents?.name === "POS机器PAXA920PRO 4G无线网络WIFI+4G" &&
    shoppingCartStore.posGoods.num === 0
  ) {
    shoppingCartStore.setPosGoods({
      num: shoppingCartStore.posGoods.num + 1,
      show: true,
      type: 'btn',
      currentData: {
        data: props.data,
        parents: props.parents,
        inviteCode: props.inviteCode,
      },
    });
  } else {
    const value =
      Number(inputNum.value) + 1 > props.parents?.maxSelectCount
        ? props.parents?.maxSelectCount
        : Number(inputNum.value) + 1;

    if (props.parents?.name === "热敏打印机" && inputNum.value === props.parents?.maxSelectCount) {
      shoppingCartStore.setHotGoods(true);
    }
    const params = shoppingCartStore.cart;
    const current = params.items.find((iv) => iv.itemId === props?.data?.id);
    if (current) {
      current.count = value;
    } else {
      params.items.push({
        type: props?.data?.type,
        itemId: props?.data?.id,
        count: value,
      });
    }
    shoppingCartStore.setCart(params);
    const data = await addPrecreate();
    if (data) {
      console.log("increase===111>", data, value);
      inputNum.value = value;
      emits("changeOrderList", data);
    }
  }
};
const reduceFn = debounce(reduce, 500);
const increaseFn = debounce(increase, 500);

const handleMessage = async (payload: any) => {
  const paramsDialog = shoppingCartStore.posGoods.currentData;
  console.log(
    "handleMessage:",
    payload,
    paramsDialog,
    refDom.value[`Ref_${paramsDialog?.data?.id}`]
  );
  if (refDom.value[`Ref_${paramsDialog?.data?.id}`]) {
    const value =
      Number(inputNum.value) + 1 > paramsDialog.parents?.maxSelectCount
        ? paramsDialog.parents?.maxSelectCount
        : shoppingCartStore.posGoods.type === 'input' ? Number(inputNum.value) : Number(inputNum.value) + 1;

    const params = shoppingCartStore.cart;
    const current = params.items.find((iv) => iv.itemId === paramsDialog?.data?.id);
    if (current) {
      current.count = value;
    } else {
      params.items.push({
        type: paramsDialog?.data?.type,
        itemId: paramsDialog?.data?.id,
        count: value,
      });
    }
    shoppingCartStore.setCart(params);
    const data = await addPrecreate(paramsDialog.inviteCode);
    if (data) {
      console.log("increase===111>", data, value);
      inputNum.value = value;
      emits("changeOrderList", data);
    }
  }
};

const handleClose = async() => {
  const paramsDialog = shoppingCartStore.posGoods.currentData;
  console.log("handleClose===>",paramsDialog,refDom.value[`Ref_${paramsDialog?.data?.id}`]);
  if (refDom.value[`Ref_${paramsDialog?.data?.id}`]) {
    const params = shoppingCartStore.cart;
    params.items = params.items.filter((iv:any) => iv.itemId !== paramsDialog?.data?.id);
    shoppingCartStore.setCart(params);
    const data = await addPrecreate(paramsDialog.inviteCode);
    if (data) {
      inputNum.value = 0;
      emits("changeOrderList", data);
    }
  }
};
onMounted(() => {
  if (props.data?.type === 119) {
    inputNum.value = 1;
    increaseFn();
  }
  emitter.on("sibling-msg", handleMessage);
  emitter.on("sibling-msg-close", handleClose);
});
onUnmounted(() => {
  emitter.off("sibling-msg", handleMessage);
  emitter.off("sibling-msg-close", handleClose);
});
</script>
<style scoped lang="less">
.add-num-div {
  width: 96px;
  height: 24px;
  position: relative;
  .not-allow {
    cursor: not-allowed !important;
  }
  span {
    display: block;
  }

  > span:first-child {
    background-color: #f7f7f7;
    width: 24px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 1px;
    color: #bdbdbd;
    height: 24px;

    .el-icon {
      font-size: 16px;
      font-weight: bold;
      margin-top: 4px;
    }
  }

  > span:nth-child(2) {
    margin-left: 28px;
    // height: 20px;
    width: 40px;
    text-align: center;
  }

  > span:last-child {
    background-color: #f7f7f7;
    width: 24px;
    height: 24px;
    text-align: center;
    cursor: pointer;
    position: absolute;
    left: 72px;
    top: 1px;
    color: #1a1a1a;

    .el-icon {
      font-size: 16px;
      font-weight: bold;
      margin-top: 4px;
    }
  }
}
</style>
