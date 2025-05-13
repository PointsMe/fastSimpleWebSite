<template>
  <div class="banner-one">
    <div class="title">
      <span>{{ $t('bannerOne.featuredPackages') }}</span>
      <span style="cursor: pointer;" @click="toShopping">
        {{ $t('bannerOne.more') }}<el-icon><DArrowRight /></el-icon>
      </span>
    </div>
    <div>
      <el-row :gutter="12">
        <el-col :span="8">
          <div class="img-col">
            <img src="@/assets/fastsImages/b-1-1.png" alt="" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="img-col">
            <img src="@/assets/fastsImages/b-1-2.png" alt="" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="img-col">
            <img src="@/assets/fastsImages/b-1-3.png" alt="" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DArrowRight } from '@element-plus/icons-vue'
defineOptions({
  name: 'bannerOne'
})
const router = useRouter()
const toShopping = ()=>{
  router.push("/shopping")
}
</script>
<style scoped lang="less">
.banner-one {
  width: 100%;
  height: 986px;
  background: #f6f6f4;
  padding: 240px 320px 40px 320px;
  .img-col {
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
  .title {
    position: relative;
    > span:first-child {
      font-weight: bold;
      font-size: 52px;
      color: #1b1b1b;
    }
    > span:last-child {
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}
</style>
