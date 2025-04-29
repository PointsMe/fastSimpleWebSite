<template>
  <div class="shop-view">
    <div class="top">
      <p>优惠商城</p>
      <p v-if="!userStore.token">
        注册会员输入邀请码，享受五折优惠
        <span>立即注册</span>&nbsp;&nbsp;&nbsp;
        <el-icon class="icon-right-shop">
          <Right />
        </el-icon>
      </p>
    </div>
    <!-- <ShoppingIndex /> -->
    <ShoppingNewIndex />
  </div>
</template>
<script setup lang="ts">
// import ShoppingIndex from '@/views/shoppingComponents/ShoppingIndex.vue'
import ShoppingNewIndex from '@/views/shoppingComponents/ShoppingNewIndex.vue'
import { useUserStore } from '@/stores/modules/user'
import {
  Right,
} from '@element-plus/icons-vue'
defineOptions({
  name: 'shoppingView'
})
const userStore = useUserStore()
</script>
<style scoped lang="less">
.shop-view {
  background-color: #f7f7f7;
  width: 100%;
  padding-bottom: 150px;

  p {
    margin: 0;
    padding: 0;
  }

  .top {
    width: 100%;
    height: 400px;
    background-image: url('@/assets/fastsImages/shopping.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-left: 320px;
    padding-top: 116px;
    margin-top: 90px;

    > p:first-child {
      font-family: Inter, Inter;
      font-weight: normal;
      font-size: 60px;
      color: #f6f6f4;
    }

    > p:nth-child(2) {
      font-family: Inter, Inter;
      font-weight: 500;
      font-size: 18px;
      color: #ffffff;
      margin-top: 14px;
      padding-bottom: 12px;
      width: 400px;
      border-bottom: 1px solid #fff;
      position: relative;

      .icon-right-shop {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateY(30%);
      }
    }
  }
}
</style>
