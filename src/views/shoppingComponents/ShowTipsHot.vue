<template>
  <div class="show-tips-div">
    <el-dialog v-model="dialogVisible" width="25%" :before-close="handleClose">
      <div class="content">
        <div class="title">{{ $t('showTipsHot.upgradeTitle') }}</div>
        <div class="content-text">
          {{ $t('showTipsHot.contentText') }}
        </div>
        
        <div class="btns">
          <el-button class="btn-add" type="primary" @click="sureBtn">{{ $t('showTipsHot.knowButton') }}</el-button>
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

import { useShoppingCartStore } from "@/stores/modules/shoppingCart";
import { ref } from "vue";

const shoppingCartStore = useShoppingCartStore();
const dialogVisible = ref(shoppingCartStore.hotGoods.show);
const handleClose = (done: () => void) => {
  shoppingCartStore.setHotGoods(false);
  done();
};
const sureBtn = async() => {
    shoppingCartStore.setHotGoods(false);
};
onMounted(() => {
});
watch(
  () => shoppingCartStore.hotGoods,
  (newVal) => {
    dialogVisible.value = newVal;
  },
  { immediate: true } // 关键选项
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
