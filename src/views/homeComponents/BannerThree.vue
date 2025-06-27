<template>
  <div class="warehouse-management">
    <div class="content">
      <div class="title">
        <el-row class="row-t-5">
          <el-col :span="24" class="col-1-t">{{ $t('bannerThree.title') }}</el-col>
          <!-- <el-col :span="4" class="col-2-t">
            <div class="line"></div>
          </el-col> -->
          <el-col :span="24" class="col-3-t">
            {{ $t('bannerThree.subTitle') }}
          </el-col>
        </el-row>
      </div>
      <div class="center">
        <!-- <img src="@/assets/banner3-1.png" alt="" /> -->
        <el-row>
          <el-col :span="12">
            <div class="content-3-left">
              <div class="content-3-left-item">
                <img src="@/assets/joinkuImages/b-3-1.png" alt="" />
                <span>{{ $t('bannerThree.supplier') }}</span>
              </div>
            </div>
            <el-row class="row-center-item">
              <el-col :span="3">
                <div>
                  <img src="@/assets/joinkuImages/b-3-7.png" alt="" />
                </div>
              </el-col>
              <el-col :span="21">
                <div class="sub-title">
                  <p>{{ $t('bannerThree.aiPurchase.title') }}</p>
                  <p>{{ $t('bannerThree.aiPurchase.description') }}</p>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-center-item">
              <el-col :span="3">
                <div>
                    <img src="@/assets/joinkuImages/b-3-8.png" alt="" />
                </div>
              </el-col>
              <el-col :span="21">
                <div class="sub-title">
                  <p>{{ $t('bannerThree.aiSales.title') }}</p>
                  <p>{{ $t('bannerThree.aiSales.description') }}</p>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-center-item">
              <el-col :span="3">
                <div>
                    <img src="@/assets/joinkuImages/b-3-9.png" alt="" />
                </div>
              </el-col>
              <el-col :span="21">
                <div class="sub-title">
                  <p>{{ $t('bannerThree.aiDelivery.title') }}</p>
                  <p>{{ $t('bannerThree.aiDelivery.description') }}</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <div class="right-img">
              <img src="@/assets/joinkuImages/banner-3-div.png" alt="" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bottom-banner-3">
        <el-row :gutter="20">
          <el-col :span="7" class="col-b" style="background: #dfe5f0">
            <div class="col-1-ban-3">
              <div class="top1-col">
                <img src="@/assets/supplier-icon.png" alt="" />
                <span class="tips">{{ $t('bannerThree.supplierVersion') }}</span>
              </div>
              <div class="line-2">
                {{ $t('bannerThree.supplierVersionDesc') }}
                <img class="qiehuan" src="@/assets/qiehuan.png" alt="" />
              </div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.features.smartInventory.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.features.smartInventory.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.features.efficientOrder.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.features.efficientOrder.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.features.batchImport.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.features.batchImport.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.features.collaborativeOrder.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.features.collaborativeOrder.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.features.cloudStorage.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.features.cloudStorage.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </div>

      <div class="center">
        <!-- <img src="@/assets/banner3-1.png" alt="" /> -->
        <el-row>
          <el-col :span="12">
            <div class="content-3-left">
              <div class="content-3-left-item">
                <img src="@/assets/joinkuImages/b-3-2.png" alt="" />
                <span style="color: #387a46;">{{ $t('bannerThree.retail') }}</span>
              </div>
            </div>
            <el-row class="row-center-item">
              <el-col :span="3">
                <div>
                  <img src="@/assets/joinkuImages/b-3-3.png" alt="" />
                </div>
              </el-col>
              <el-col :span="21">
                <div class="sub-title">
                  <p>{{ $t('bannerThree.smartOps.title') }}</p>
                  <p>{{ $t('bannerThree.smartOps.description') }}</p>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-center-item">
              <el-col :span="3">
                <div>
                  <img src="@/assets/joinkuImages/b-3-4.png" alt="" />
                </div>
              </el-col>
              <el-col :span="21">
                <div class="sub-title">
                  <p>{{ $t('bannerThree.merchAI.title') }}</p>
                  <p>{{ $t('bannerThree.merchAI.description') }}</p>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-center-item">
              <el-col :span="3">
                <div>
                  <img src="@/assets/joinkuImages/b-3-5.png" alt="" />
                </div>
              </el-col>
              <el-col :span="21">
                <div class="sub-title">
                  <p>{{ $t('bannerThree.retailBrain.title') }}</p>
                  <p>{{ $t('bannerThree.retailBrain.description') }}</p>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <div class="right-img">
              <img src="@/assets/joinkuImages/b-3-6.png" alt="" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="bottom-banner-3">
        <el-row :gutter="20">
          <el-col :span="7" class="col-b" style="background: #dee9e1">
            <div class="col-1-ban-3" style="color: #387a46">
              <div class="top1-col">
                <img src="@/assets/supplier-icon-y.png" alt="" />
                <span class="tips">{{ $t('bannerThree.retailManagement') }}</span>
              </div>
              <div class="line-2">{{ $t('bannerThree.retailManagementDesc') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.retailFeatures.multiRole.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.retailFeatures.multiRole.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.retailFeatures.mobileInventory.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.retailFeatures.mobileInventory.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.retailFeatures.seamlessSync.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.retailFeatures.seamlessSync.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.retailFeatures.promotion.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.retailFeatures.promotion.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>

          <el-col :span="7" class="col-b border-top-y">
            <div class="con-a-b">
              <div class="t-b">{{ $t('bannerThree.retailFeatures.multiStore.title') }}</div>
              <div class="t-b-t">{{ $t('bannerThree.retailFeatures.multiStore.description') }}</div>
            </div>
          </el-col>
          <el-col :span="1"></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'bannerThree'
})
</script>

<style scoped lang="less">
.warehouse-management {
  width: 100%;
  background-color: #fff;
  p {
    margin: 0;
    padding: 0;
  }
  .content {
    width: 1280px;
    margin: auto;

    .bottom-banner-3 {
      margin: auto;
      text-align: left;
      margin-top: 40px;
      margin-bottom: 40px;
      .border-top {
        border-top: 1px solid;
      }

      .border-top-y {
        border-top: 1px solid #387533;
      }

      .col-b {
        padding: 15px;
        // height: 110px;
        margin-top: 10px;
        margin-bottom: 10px;

        .con-a-b {
          background-color: #fff !important;

          .t-b {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
          }
          .t-b-t {
              color: #595959;
              // padding: 10px 0;
            }
        }

        .col-1-ban-3 {
          color: #365aa1;

          .top1-col {
            text-align: right;
            padding-bottom: 10px;
            font-size: 32px;
            height: 36px;
            line-height: 36px;
            margin-bottom: 10px;
            .tips {
              display: inline-block;
              margin-left: 15px;
            }

            > img {
              height: 36px;
              display: block;
              float: left;
            }
          }

          .line-2 {
            border-top: 1px solid;
            padding: 10px 0;

            .qiehuan {
              display: block;
              float: right;
            }
          }
        }
      }
    }

    .center {
      width: 85%;
      margin: auto;
      .el-col {
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
      }
      .right-img {
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .row-center-item {
        margin-top: 40px;
        img {
          width: 52px;
          height: 52px;
        }
        .sub-title {
          font-family: Source Han Sans SC, Source Han Sans SC;
          p:first-child {
            font-weight: bold;
            font-size: 24px;
            color: #000000;
          }
          p:nth-child(2) {
            font-weight: 400;
            font-size: 16px;
            color: #595959;
          }
        }
      }
      .content-3-left {
        margin-bottom: 20px;
        margin-top: 50px;
        .content-3-left-item {
          display: flex;
          align-items: center;
          justify-content: left;
          > img {
            width: 60px;
            height: 60px;
          }
          > span {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: bold;
            font-size: 45px;
            color: #365aa1;
            margin-left: 10px;
          }
        }
      }
    }

    .title {
      margin-top: 100px;
      text-align: left;
      margin-bottom: 20px;
      .row-t-5 {
        // height: 70px;
        // line-height: 70px;
        .col-3-t {
          // text-indent: 20px;
          font-weight: 400;
          font-size: 18px;
          color: #595959;
        }
        .col-2-t {
          position: relative;
          .line {
            width: 100%;
            height: 1px;
            background-color: #aaa;
            position: absolute;
            top: 50%;
          }
        }
        .col-1-t {
          font-size: 52px;
          font-weight: bold;
          text-align: left;
          color: #1a1a1a;
        }
      }
    }
  }
}
</style>
