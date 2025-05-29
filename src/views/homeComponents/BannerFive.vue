<template>
  <div class="banner-5">
    <div class="content-5">
      <div class="title">
        <div class="col-1-t">
          {{ $t("bannerFive.title") }}
        </div>
        <div class="col-3-t">
          {{ $t("bannerFive.subtitle") }}
        </div>
      </div>
      <el-row class="row-t-5-2">
        <el-col :span="7">
          <div>
            <div>
              <img src="@/assets/banner-5-1.png" alt="" />
            </div>
            <p class="f-p">{{ $t("bannerFive.features.sync.title") }}</p>
            <p class="s-p">{{ $t("bannerFive.features.sync.description") }}</p>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="7">
          <div>
            <div>
              <img src="@/assets/banner-5-2.png" alt="" />
            </div>
            <p class="f-p">{{ $t("bannerFive.features.order.title") }}</p>
            <p class="s-p">{{ $t("bannerFive.features.order.description") }}</p>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
        <el-col :span="7">
          <div>
            <div>
              <img src="@/assets/banner-5-3.png" alt="" />
            </div>
            <p class="f-p">{{ $t("bannerFive.features.security.title") }}</p>
            <p class="s-p">{{ $t("bannerFive.features.security.description") }}</p>
          </div>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-5 {
  width: 100%;
  // height: 707px;
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #1b1b1b;
  .content-5 {
    width: 1280px;
    margin: auto;
    .row-t-5-2 {
      text-align: left;
      color: #fff;
      margin-top: 60px;
      p {
        margin: 0;
        padding: 0;
      }
      .f-p {
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
      }
      .s-p {
        font-weight: 400;
        font-size: 16px;
        margin-top: 10px;
        color: #666;
        font-family: Source Han Sans SC-Regular;
      }
    }
    .title {
      color: #fff;
      .col-1-t {
          font-size: 52px;
          font-weight: bold;
          text-align: left;
        }
      .col-3-t {
          font-weight: 400;
          font-size: 18px;
          text-indent: 30px;
        }
    }
  }
}
</style>
