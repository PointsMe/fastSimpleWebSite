<template>
  <div class="banner-8">
    <el-row>
      <el-col :span="12">
        <div class="banner-8-img">
          <img src="@/assets/joinkuImages/b-8-1.png" alt="" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="banner-8-content">
          <p>{{ $t('bannerEight.costManagement.title') }}</p>
          <p>{{ $t('bannerEight.costManagement.description') }}</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="banner-8-content-center">
          <p>{{ $t('bannerEight.afterSalesSupport.title') }}</p>
          <p>{{ $t('bannerEight.afterSalesSupport.description') }}</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="banner-8-img-center">
          <img src="@/assets/joinkuImages/b-8-2.png" alt="" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="banner-8-img">
          <img src="@/assets/joinkuImages/b-8-3.png" alt="" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="banner-8-content">
          <p>{{ $t('bannerEight.professionalSupport.title') }}</p>
          <p>{{ $t('bannerEight.professionalSupport.description') }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="less">
.banner-8 {
  width: 1280px;
  margin: auto;
  padding: 150px 0;
  p {
    padding: 0;
    margin: 0;
  }
  .banner-8-img-center {
    display: flex;
    justify-content: right;
    align-items: right;
    img {
      display: block;
      // margin: auto;
      width: 524px;
      height: 355px;
    }
  }
  .banner-8-content-center {
    height: 100%;
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    p:first-child {
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: bold;
      font-size: 22px;
      color: #1b1b1b;
    }
    p:last-child {
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: 400;
      font-size: 15px;
      color: #1a1a1a;
    }
  }
  .banner-8-img {
    img {
      display: block;
      // margin: auto;
      width: 524px;
      height: 355px;
    }
  }
  .banner-8-content {
    height: 100%;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    p:first-child {
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: bold;
      font-size: 22px;
      color: #1b1b1b;
    }
    p:last-child {
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: 400;
      font-size: 15px;
      color: #1a1a1a;
    }
  }
}
</style>
