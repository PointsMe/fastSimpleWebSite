<template>
  <div class="banner-4-div">
    <div class="con-job">
      <div class="title-content">
        <div class="title">FastSimple的理想业务</div>
        <span></span>
      </div>
      <div class="sub-title">为中小型企业量身定做的解决方案</div>
    </div>
    <div class="con-list"></div>
    <div class="pay-style">
      <div class="title-content">
        <div class="title">灵活的支付</div>
        <span></span>
      </div>
      <div class="sub-title">多种付款选择与集成电子发票</div>
      <div class="pay-list">
        <el-row :gutter="12">
          <el-col :span="12">
            <el-row>
              <el-col :span="12"> </el-col>
              <el-col :span="12" class="height-50">
                <div class="title">多种支付方式</div>
                <div class="sub-t">更能满足客户多样化的喜好。</div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="height-50"> </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-2.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-3.png" alt="" />
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-4.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-5.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-6.png" alt="" />
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-7.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-8.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-9.png" alt="" />
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="height-50">
                <div class="one-pay">
                  <img src="@/assets/fastsImages/b-4-10.png" alt="" />
                </div>
              </el-col>
              <el-col :span="8" class="height-50"> </el-col>
              <el-col :span="8" class="height-50"> </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <div class="pay-options">
        <div class="title">
          <el-row class="row-line">
            <el-col :span="10" class="col-relative">
              <div class="line"></div>
            </el-col>
            <el-col :span="4">
              <div class="name">
                <p>计费选项</p>
                <p>适应各种场景</p>
              </div>
            </el-col>
            <el-col :span="10" class="col-relative">
              <div class="line"></div>
            </el-col>
          </el-row>
        </div>
        <div class="title-list">
          <el-row>
            <el-col :span="6">
              <div class="col-one">
                <span>01</span>
                提供支付所有
              </div>
            </el-col>
            <el-col :span="6">
              <div class="col-one">
                <span>02</span>
                平分秋色
              </div>
            </el-col>
            <el-col :span="6">
              <div class="col-one">
                <span>03</span>
                Pay-as-needed
              </div>
            </el-col>
            <el-col :span="6">
              <div class="col-one">
                <span>04</span>
                每个订单计费
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="title-list-1">
          <el-row :gutter="12">
            <el-col :span="8">
              <div class="con-a">
                <img src="@/assets/fastsImages/b-4-11.png" alt="" />
                <p class="f-p">多种货币的支持</p>
                <p class="s-p">轻松处理各种货币的交易，以满足全球业务需求</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="con-a">
                <img src="@/assets/fastsImages/b-4-12.png" alt="" />
                <p class="f-p">多种支付场景</p>
                <p class="s-p">可适应就餐、外卖等支付场景，提升客户满意度</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="con-a">
                <img src="@/assets/fastsImages/b-4-13.png" alt="" />
                <p class="f-p">集成E-Invoicing</p>
                <p class="s-p">
                  与税务机关的直接连接消除了对第三方平台的需求，简化了流程并确保合规性
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-4-div {
  width: 100%;
  .pay-style {
    width: 1280px;
    margin: auto;
    .pay-options {
      .title-list-1 {
        .con-a {
          text-align: center;
          img {
            display: block;
            height: 282px;
            width: 100%;
          }
          > p {
            margin: 0;
            padding: 0;
          }
          .f-p {
            font-weight: bold;
            font-size: 24px;
            color: rgba(0, 0, 0, 0.9);
            margin-top: 20px;
          }

          .s-p {
            margin-top: 10px;
            font-weight: 400;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.6);
          }
        }
      }
      .title-list {
        margin: 60px 0;
        .col-one {
          font-weight: bold;
          font-size: 24px;
          color: #1a1a1a;
          > span {
            font-weight: 400;
            font-size: 80px;
            color: #fed15f;
          }
        }
      }
      .title {
        .row-line {
          height: 60px;
          .col-relative {
            position: relative;
            .line {
              position: absolute;
              top: 50%;
              width: 100%;
              height: 1px;
              background-color: #1a1a1a;
            }
          }

          .name {
            text-align: center;
            > p:first-child {
              font-weight: bold;
              font-size: 40px;
              color: #1b1b1b;
            }
            > p:last-child {
              font-weight: 400;
              font-size: 16px;
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
    .pay-list {
      width: 100%;
      .height-50 {
        height: 200px;
        margin-top: 20px;
        .one-pay {
          width: 200px;
          > img {
            width: 100%;
            height: 100%;
          }
        }
        .title {
          font-weight: bold;
          font-size: 40px;
          color: #1b1b1b;
          margin-top: 20px;
        }
        .sub-t {
          font-weight: 400;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .sub-title {
      text-align: left;
      font-weight: 400;
      font-size: 18px;
      color: #1b1b1b;
    }
    .title-content {
      position: relative;
      height: 80px;
      margin: auto;
      margin-top: 100px;
      text-align: left;
      .title {
        font-weight: bold;
        font-size: 52px;
        color: #1a1a1a;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
      }

      > span {
        display: block;
        width: 204px;
        height: 16px;
        background: #fed15f;
        position: absolute;
        bottom: 10px;
        left: 10px;
        z-index: 1;
      }
    }
  }
  .con-list {
    width: 1280px;
    height: 164px;
    margin: auto;
    margin-top: 80px;
    background-image: url('@/assets/fastsImages/b-4-1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
  }
  .con-job {
    width: 1280px;
    margin: auto;
    text-align: center;
    .sub-title {
      text-align: center;
      font-weight: 400;
      font-size: 18px;
      color: #1b1b1b;
    }
    .title-content {
      position: relative;
      height: 80px;
      width: 544px;
      margin: auto;
      margin-top: 100px;
      .title {
        font-weight: bold;
        font-size: 52px;
        color: #1a1a1a;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        bottom: 0;
      }

      > span {
        display: block;
        width: 204px;
        height: 16px;
        background: #fed15f;
        position: absolute;
        bottom: 10px;
        right: 10px;
        z-index: 1;
      }
    }
  }
}
</style>
