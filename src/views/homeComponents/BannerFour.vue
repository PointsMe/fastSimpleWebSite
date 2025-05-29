<template>
  <div class="banner-4">
    <el-row>
      <el-col :span="12">
        <div class="left">
          <p>{{ $t('bannerFour.aiVoiceOrder') }}</p>
          <p>{{ $t('bannerFour.threeConvenientWays') }}</p>
          <img src="@/assets/joinkuImages/b-4-1.png" alt="" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right">
          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">{{ $t('bannerFour.smartOrderGeneration') }}</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">01</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom">
              {{ $t('bannerFour.autoGenerateOrders') }}
              <ul>
                <li>
                  {{ $t('bannerFour.aiAnalysisDesc') }}
                </li>
                <li>{{ $t('bannerFour.easyAdaptation') }}</li>
              </ul>
            </div>
          </div>

          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">{{ $t('bannerFour.forPointsMeUsers') }}</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">02</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom">
              {{ $t('bannerFour.voiceBooking') }}
              <ul>
                <li>
                  {{ $t('bannerFour.voiceOrderDesc') }}
                </li>
                <li>{{ $t('bannerFour.noManualInput') }}</li>
              </ul>
            </div>
          </div>

          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">{{ $t('bannerFour.forPointsMeAndSuppliers') }}</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">03</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom">
              {{ $t('bannerFour.aiBooking') }}
              <ul>
                <li>
                  {{ $t('bannerFour.aiPhoneLineDesc') }}
                </li>
                <li>{{ $t('bannerFour.systemSyncDesc') }}</li>
              </ul>
            </div>
          </div>

          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">{{ $t('bannerFour.forNonPointsMeUsers') }}</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">04</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom" style="border: none;">
              {{ $t('bannerFour.phoneBooking') }}
              <ul>
                <li>
                  {{ $t('bannerFour.smartPhoneServiceDesc') }}
                </li>
                <li>{{ $t('bannerFour.confirmationLinkDesc') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="less">
.banner-4 {
  width: 1280px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 100px;
  p {
    margin: 0;
    padding: 0;
  }
  .el-col {
    display: flex;
    flex-direction: column;
  }
  .right {
    padding: 0px 0 20px 20px;
    border-left: 1px solid #e5e5e5;
    height: 100%;
    .right-one {
      padding-top: 20px;
      .right-one-bottom {
        font-family: Inter, Inter;
        font-weight: normal;
        font-size: 18px;
        color: #387533;
        padding-bottom: 10px;
        border-bottom: 1px solid #e5e5e5;
        ul {
          li {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 14px;
            color: #595959;
          }
        }
      }
      .right-one-left {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: bold;
        font-size: 24px;
        color: #1b1b1b;
      }
      .right-one-right {
        font-family: Inter, Inter;
        font-weight: 500;
        font-size: 55px;
        color: #7c7c7c;
      }
    }
  }
  .left {
    height: 100%;
    font-family: Source Han Sans SC, Source Han Sans SC;
    p:first-child {
      font-weight: bold;
      font-size: 52px;
      color: #1b1b1b;
    }
    p:last-child {
      font-weight: 400;
      font-size: 18px;
      color: #1b1b1b;
    }
    img {
      width: 340px;
      display: block;
      margin: auto;
      margin-top: 60px;
    }
  }
}
</style>
