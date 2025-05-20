<template>
  <div class="show-tips-div">
    <el-dialog v-model="dialogVisible" width="25%" :before-close="handleClose">
      <div class="content">
        <div class="title">第三方条款说明</div>
        <div class="content-text">
          尊敬的客户，感谢您选择我们的收银系统套餐！为保障您的权益，特此告知：
        </div>
        <div class="content-ul">
          <ul>
            <li>您选择的POS设备为第三方合作产品，需与对方直接签订服务协议</li>
            <li>设备月租费用为 10欧元/月（费用由第三方直接收取）</li>
            <li>添加后，我们的客服将在24小时内与您联系，协助完成后续流程</li>
          </ul>
        </div>
        <div class="btns">
          <el-button class="btn-add" type="primary" @click="sureBtn">确定添加</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
defineProps({
  tips: {
    type: String,
    default: "",
  },
});
import { inject } from 'vue';
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { ref } from "vue";
import { precreateApi } from "@/apis/goods";
const emits = defineEmits(["changeOrderList"]);
const sharedMethod = inject('sharedMethod') as () => void;
const shoppingCartStore = useShoppingCartStore();
const dialogVisible = ref(shoppingCartStore.posGoods.show);
const handleClose = (done: () => void) => {
  shoppingCartStore.setPosGoods({
    ...shoppingCartStore.posGoods,
    show: false,
  });
  done();
};
const sureBtn = async() => {
    sharedMethod();
  const params = shoppingCartStore.cart;
  const current = params.items.find((iv: any) => iv.type === 119);
  if (current) {
    params.type = 102;
  } else {
    params.type = 100;
  }
  params.items = params.items.filter((iv: any) => iv.count);
  shoppingCartStore.setCart(params);
  const { data } = await precreateApi(params);
  if (data) {
    shoppingCartStore.setPosGoods({
      ...shoppingCartStore.posGoods,
      show: false,
    })
    emits("changeOrderList", data);
  }
};
onMounted(() => {
//   sharedMethod();
});
watch(
  () => shoppingCartStore.posGoods.show,
  (newVal) => {
    dialogVisible.value = newVal;
  },
  { immediate: true, deep: true } // 关键选项
);
</script>
<style lang="less" scoped>
.show-tips-div {
  .content {
    text-align: center;
    font-family: Source Han Sans SC, Source Han Sans SC;
    padding: 0 20px;
    .title {
      font-weight: bold;
      font-size: 28px;
      color: #1a1a1a;
    }
    .content-text {
      font-weight: 400;
      font-size: 13px;
      color: #666666;
      margin-top: 10px;
    }
    .content-ul {
      margin-top: 40px;
      font-weight: 400;
      font-size: 16px;
      color: #1a1a1a;
      text-align: left;
    }
    .btns {
      margin: auto;
      margin-top: 50px;
      margin-bottom: 50px;
      .btn-add {
        color: #fff;
        background-color: #1b1b1b;
        border: none;
        width: 60%;
        height: 35px;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
