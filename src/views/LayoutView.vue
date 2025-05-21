<template>
  <div class="index-view">
    <BannerTop />
    <RouterView />
    <BannerTen />
    <BannerEleven />
    <OrderView ref="OrderViewRef" />
    <OrderDetailView ref="OrderDetailViewRef" />
    <LoginModalView ref="LoginModalViewRef" />
    <RegisterModalView ref="RegisterModalViewRef" />
    <FindPassModalView ref="FindPassModalViewRef" />
  </div>
</template>

<script setup lang="ts">
import BannerTop from '@/views/homeComponents/Top.vue'
import BannerTen from '@/views/homeComponents/BannerTen.vue'
import BannerEleven from '@/views/homeComponents/BannerEleven.vue'
import OrderView from './orderView.vue'
import OrderDetailView from './OrderDetailView.vue'
import LoginModalView from '@/views/LoginModalView.vue'
import RegisterModalView from '@/views/RegisterModalView.vue'
import FindPassModalView from '@/views/FindPassModalView.vue'
defineOptions({
  name: 'layoutView'
})

</script>
<style scoped lang="less">
.index-view {
  width: 100%;
}
</style>
