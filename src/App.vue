<template>
  <RouterView />
</template>
<script setup lang="ts">
import { useCommonStore } from "@/stores/modules/common";
const commonStore = useCommonStore(); 
onMounted(()=>{
  commonStore.getCountryList()
})
</script>
<style scoped lang="less"></style>
