<template>
  <div class="banner7">
    <div class="list-d-6">
      <!-- <img src="@/assets/headset-fill-2.png" alt="" /> -->
      <div class="banner-7-content">
        <div class="title">
          <p>{{ $t('bannerSeven.title') }}</p>
          <p>{{ $t('bannerSeven.subtitle') }}</p>
        </div>
        <el-row class="banner-7-content-row">
          <el-col :span="8">
            <!-- <div class="content">
               <div class="line"></div>
              <div class="content-item">
                <p>
                  <img src="@/assets/joinkuImages/b-7-1.png" alt="" />
                </p>
                <p>移动电脑同步</p>
                <p>与多个审批者共享预订单并管理确认链接以减少错误。</p>
              </div>
              <div class="line-b"></div>
            </div> -->
            <div class="content"></div>
          </el-col>

          <el-col :span="8">
            <div class="content">
              <div class="line border-top"></div>
              <div class="content-item border-left">
                <p>
                  <img src="@/assets/joinkuImages/b-7-1.png" alt="" />
                </p>
                <p>{{ $t('bannerSeven.features.mobileSync.title') }}</p>
                <p>{{ $t('bannerSeven.features.mobileSync.description') }}</p>
              </div>
              <div class="line-b border-bottom"></div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="content">
              <div class="line border-top"></div>
              <div class="content-item border-left">
                <p>
                  <img src="@/assets/joinkuImages/b-7-2.png" alt="" />
                </p>
                <p>{{ $t('bannerSeven.features.quickScan.title') }}</p>
                <p>{{ $t('bannerSeven.features.quickScan.description') }}</p>
              </div>
              <div class="line-b border-bottom"></div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="content">
              <div class="line border-top"></div>
              <div class="content-item">
                <p>
                  <img src="@/assets/joinkuImages/b-7-3.png" alt="" />
                </p>
                <p>{{ $t('bannerSeven.features.mobilePrint.title') }}</p>
                <p>{{ $t('bannerSeven.features.mobilePrint.description') }}</p>
              </div>
              <div class="line-b border-bottom"></div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="content">
              <div class="line"></div>
              <div class="content-item border-left">
                <p>
                  <img src="@/assets/joinkuImages/b-7-4.png" alt="" />
                </p>
                <p>{{ $t('bannerSeven.features.oneClickScan.title') }}</p>
                <p>{{ $t('bannerSeven.features.oneClickScan.description') }}</p>
              </div>
              <div class="line-b border-bottom"></div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="content">
              <div class="line"></div>
              <div class="content-item border-left">
                <p>
                  <img src="@/assets/joinkuImages/b-7-5.png" alt="" />
                </p>
                <p>{{ $t('bannerSeven.features.importInventory.title') }}</p>
                <p>{{ $t('bannerSeven.features.importInventory.description') }}</p>
              </div>
              <div class="line-b border-bottom"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="banner-7-content-2">
        <p>{{ $t('bannerSeven.regulations.title') }}</p>
        <p>{{ $t('bannerSeven.regulations.description') }}</p>
      </div>
    </div>
    <div class="list-f-6">
      <!-- <img src="@/assets/headset-fill-3.png" alt="" /> -->
      <div class="content-2">
        <div class="title">
          <p>{{ $t('bannerSeven.support.title') }}</p>
          <p>{{ $t('bannerSeven.support.subtitle') }}</p>
        </div>
        <el-row :gutter="12">
          <el-col :span="6">
            <div class="content">
              <p>
                <img src="@/assets/joinkuImages/b-7-6.png" alt="" />
              </p>
              <p>{{ $t('bannerSeven.support.features.invoice.title') }}</p>
              <p>{{ $t('bannerSeven.support.features.invoice.description') }}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content">
              <p>
                <img src="@/assets/joinkuImages/b-7-7.png" alt="" />
              </p>
              <p>{{ $t('bannerSeven.support.features.receipt.title') }}</p>
              <p>{{ $t('bannerSeven.support.features.receipt.description') }}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content">
              <p>
                <img src="@/assets/joinkuImages/b-7-8.png" alt="" />
              </p>
              <p>{{ $t('bannerSeven.support.features.dataExchange.title') }}</p>
              <p>{{ $t('bannerSeven.support.features.dataExchange.description') }}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="content content-2-p">
              <!-- <p>
                <img src="@/assets/joinkuImages/b-3-3.png" alt="" />
              </p> -->
              <!-- <p>我们的解决方案可帮助企业</p> -->
              <p class="font-16">
                {{ $t('bannerSeven.support.features.dataStorage.description') }}
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="banner-7-content-2">
        <p>{{ $t('bannerSeven.sync.title') }}</p>
        <p>{{ $t('bannerSeven.sync.description') }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner7 {
  p {
    padding: 0;
    margin: 0;
  }
  .list-f-6 {
    margin: auto;
    padding: 100px 0;
    .content-2 {
      width: 1280px;
      margin: auto;
      text-align: left;
      .el-row {
        margin-top: 50px;
        margin-bottom: 100px;
      }
      .el-col {
        display: flex;
        flex-direction: column;
        // justify-content: center;
        border-left: 1px solid #1b1b1b;
      }
      .content {
        font-family: Source Han Sans SC, Source Han Sans SC;
        padding: 10px;
        img {
          width: 50px;
          height: 50px;
        }
        p:nth-child(2) {
          font-weight: bold;
          font-size: 22px;
          color: #000000;
          padding: 8px 0;
        }
        p:last-child {
          font-weight: 400;
          font-size: 13px;
          color: #1a1a1a;
          // padding-bottom: 20px;
        }
      }
      .content-2-p {
          height: 100%;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          .font-16 {
            font-size: 16px !important;
          }
        }
      .title {
        p:first-child {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
        }
        p:last-child {
          font-family: Source Han Sans SC, Source Han Sans SC;
          font-weight: 400;
          font-size: 18px;
          color: #1a1a1a;
        }
      }
    }
  }
  .list-d-6 {
    // margin-top: 160px;
    .banner-7-content {
      width: 100%;
      // height: 400px;
      background-image: url("@/assets/joinkuImages/b-7-bg.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      padding: 100px 0;
      .banner-7-content-row {
        width: 1280px;
        margin: auto;
        padding-top: 100px;
        padding-bottom: 100px;

        .el-col {
          display: flex;
          flex-direction: column;
        }
        .content {
          color: #fff;
          // padding-top: 10px;
          // padding-bottom: 10px;
          font-family: Source Han Sans SC, Source Han Sans SC;
          // border-top: 1px solid #fff;
          height: 100%;
          .line {
            width: 95%;
            height: 20px;
            margin: auto;
          }
          .line-b {
            width: 95%;
            height: 20px;
            margin: auto;
          }
          .border-bottom {
            border-bottom: 1px solid #fff;
          }
          .border-top {
            border-top: 1px solid #fff;
          }
          .border-left {
            border-left: 1px solid #fff;
          }
          .border-right {
            border-right: 1px solid #fff;
          }
          .content-item {
            padding-left: 10px;
            padding-right: 10px;
            height: 150px;
            p {
              text-align: left;
              img {
                width: 50px;
                height: 50px;
              }
            }
            p:nth-child(2) {
              font-weight: bold;
              font-size: 20px;
            }
            p:nth-child(3) {
              font-weight: 400;
              font-size: 14px;
              padding-bottom: 10px;
              color: #a1a1a1;
            }
          }
        }
      }
      .title {
        width: 1280px;
        margin: auto;
        text-align: left;
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: bold;
        font-size: 52px;
        color: #fff;
        > p:last-child {
          font-weight: 400;
          font-size: 18px;
          color: #fff;
        }
      }
    }

    img {
      width: 100%;
    }
  }
  .banner-7-content-2 {
    text-align: center;
    background-color: #1b1b1b;
    padding: 80px 40px;
    color: #fff;
    margin-top: -5px;
    > p {
      margin: 0;
      padding: 0;
    }

    > p:first-child {
      font-size: 52px;
      font-weight: bold;
    }

    > p:last-child {
      padding: 0 15%;
    }
  }
}
</style>
