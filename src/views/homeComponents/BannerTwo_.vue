<template>
  <div class="package-section">
    <div class="section-header">
      <div class="title">
        <div>精选套餐</div>
        <div>
          <span class="left"> 限时优惠套餐</span>
          <span class="right">更多 >></span>
        </div>
      </div>
    </div>
    <div class="package-content">
      <div class="package-item">
        <OrderOne :id="'1001'" @toPay="toPayDrawer" />
      </div>
      <div class="package-item">
        <OrderOne :id="'1001'" @toPay="toPayDrawer" />
      </div>
      <div class="package-item" style="left: 1500px">
        <OrderOne :id="'1001'" @toPay="toPayDrawer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OrderOne from "@/views/homeComponents/OrderOne.vue";
const toPayDrawer = () => {
  console.log("toPayDrawer");
};
// 使用 Vue 3 的 Composition API
</script>

<style scoped lang="less">
.package-section {
  width: 100%;
  overflow: hidden;
  margin: auto;
  background: #f6f6f4;
  padding-bottom: 100px;
  .package-content::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    overflow: hidden;
  }
  .package-content {
    margin-left: 320px;
    overflow: hidden;
    width: 100%;
    .package-item {
      margin-right: 20px;
      float: left;
      width: 600px;
      height: 100%;
    }
  }
  .section-header {
    width: 1280px;
    padding: 20px;
    margin: auto;
    .title {
      font-size: 24px;
      font-weight: bold;
      > div:first-child {
        text-align: left;
      }
      > div:last-child {
        width: 100%;
        text-align: left;
        font-size: 12px;
        color: #1b1b1b;
        .right {
          display: block;
          float: right;
          color: #666;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
