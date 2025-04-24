<template>
  <div class="index-view">
    <BannerView />
    <BannerOne />
    <BannerTwo />
    <BannerThree />
    <BannerFour />
    <BannerFive />
    <BannerSix />
    <BannerSeven />
    <BannerEight />
    <BannerNine />
  </div>
</template>

<script setup lang="ts">
import BannerView from './indexComponents/BannerView.vue'
import BannerOne from './indexComponents/BannerOne.vue'
import BannerTwo from './indexComponents/BannerTwo.vue'
import BannerThree from './indexComponents/BannerThree.vue'
import BannerFour from './indexComponents/BannerFour.vue'
import BannerFive from './indexComponents/BannerFive.vue'
import BannerSix from './indexComponents/BannerSix.vue'
import BannerSeven from './indexComponents/BannerSeven.vue'
import BannerEight from './indexComponents/BannerEight.vue'
import BannerNine from './indexComponents/BannerNine.vue'
defineOptions({
  name: 'indexView'
})
</script>

<style scoped lang="less">
.index-view {
  width: 100%;
}
</style>
