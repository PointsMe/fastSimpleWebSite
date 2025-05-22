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
          <p>简化成本管理</p>
          <p>
            我们只收取固定服务费，其他费用则根据您的需求而定。无任何隐藏费用，确保商家预算优化。
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="banner-8-content-center">
          <p>专业售后支持</p>
          <p>
            所有设备均享有一年免费保修，涵盖非人为损坏。保修期后，我们将继续提供专业维护，让您无忧使用。
          </p>
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
          <p>专业售后支持</p>
          <p>
            所有设备均享有一年免费保修，涵盖非人为损坏。保修期后，我们将继续提供专业维护，让您无忧使用。
          </p>
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
