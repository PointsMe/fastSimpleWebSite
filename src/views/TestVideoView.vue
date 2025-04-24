<template>
  <div style="width: 300px;margin: auto;margin-top: 200px;">
      <vue3VideoPlay
      width="800px"
      title="钢铁侠"
      src="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4"
      :poster="options.poster"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @canplay="onCanplay" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
 
 const options = reactive({
   src: "https://m.suike.cn/19ad7364-c927-4f21-87ed-5f6fa45c70eb", //视频源
   poster: '', //封面
 })
 const onPlay = (ev) => {
   console.log('播放')
 }
 const onPause = (ev) => {
   console.log(ev, '暂停')
 }
  
 const onTimeupdate = (ev) => {
   console.log(ev, '时间更新')
 }
 const onCanplay = (ev) => {
   console.log(ev, '可以播放')
 }
</script>
<style scoped lang="less">

</style>