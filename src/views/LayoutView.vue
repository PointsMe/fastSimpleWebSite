<template>
  <div class="index-view">
    <BannerTop />
    <RouterView />
    <BannerTen />
    <BannerEleven />
    <OrderView ref="OrderViewRef" />
  </div>
</template>

<script setup lang="ts">
import BannerTop from '@/views/indexComponents/BannerTop.vue'
import BannerTen from '@/views/indexComponents/BannerTen.vue'
import BannerEleven from '@/views/indexComponents/BannerEleven.vue'
import OrderView from './orderView.vue'
defineOptions({
  name: 'layoutView'
})

</script>
<style scoped lang="less">
.index-view {
  width: 100%;
}
</style>
