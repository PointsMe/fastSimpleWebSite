<template>
  <div class="index-view">
    <BannerTop />
    <RouterView />
    <BannerTen />
    <BannerEleven />
  </div>
</template>

<script setup lang="ts">
import BannerTop from './indexComponents/BannerTop.vue'
import BannerTen from './indexComponents/BannerTen.vue'
import BannerEleven from './indexComponents/BannerEleven.vue'
defineOptions({
  name: 'layoutView'
})
</script>
<style scoped lang="less">
.index-view {
  width: 100%;
}
</style>
