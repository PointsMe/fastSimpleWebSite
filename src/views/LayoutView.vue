<template>
  <div class="index-view">
    <BannerTop />
    <RouterView />
    <BannerTen />
    <BannerEleven />
  </div>
</template>

<script setup lang="ts">
import BannerTop from '@/views/indexComponents/BannerTop.vue'
import BannerTen from '@/views/indexComponents/BannerTen.vue'
import BannerEleven from '@/views/indexComponents/BannerEleven.vue'
defineOptions({
  name: 'layoutView'
})
</script>
<style scoped lang="less">
.index-view {
  width: 100%;
}
</style>
