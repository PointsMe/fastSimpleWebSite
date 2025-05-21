<template>
  <div class="show-tips-div">
    <el-dialog v-model="dialogVisible" width="25%" :before-close="handleClose">
      <div class="content">
        <div class="title">{{ $t('showTips.title') }}</div>
        <div class="content-text">
          {{ $t('showTips.content') }}
        </div>
        <div class="content-ul">
          <ul>
            <li>{{ $t('showTips.terms1') }}</li>
            <li>{{ $t('showTips.terms2') }}</li>
            <li>{{ $t('showTips.terms3') }}</li>
          </ul>
        </div>
        <div class="btns">
          <el-button class="btn-add" type="primary" @click="sureBtn">{{ $t('showTips.confirm') }}</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts">
import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { ref } from "vue";
import { emitter } from '@/eventBus/index'
import { i18n } from '@/lang/index'

const sendMessage = () => {
  emitter.emit('sibling-msg', {
    content: '来自兄弟组件的消息'
  })
}
const sendCloseTips = () => {
  emitter.emit('sibling-msg-close', {
    content: '来自兄弟组件的消息'
  })
}
const shoppingCartStore = useShoppingCartStore();
const dialogVisible = ref(shoppingCartStore.posGoods.show);
const handleClose = (done: () => void) => {
  shoppingCartStore.setPosGoods({
    ...shoppingCartStore.posGoods,
    num: 0,
    show: false,
  });
  sendCloseTips()
  done();
};
const sureBtn = async() => {
    shoppingCartStore.setPosGoods({
        ...shoppingCartStore.posGoods,
        show: false,
    });
    sendMessage()
//   const params = shoppingCartStore.cart;
//   const current = params.items.find((iv: any) => iv.type === 119);
//   if (current) {
//     params.type = 102;
//   } else {
//     params.type = 100;
//   }
//   params.items = params.items.filter((iv: any) => iv.count);
//   shoppingCartStore.setCart(params);
//   const { data } = await precreateApi(params);
//   if (data) {
//     shoppingCartStore.setPosGoods({
//       ...shoppingCartStore.posGoods,
//       show: false,
//     })
//     emits("changeOrderList", data);
//   }
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
