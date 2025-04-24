<template>
  <div class="banner-two">
    <div class="title-content">
      <div class="title">效率使餐饮企业变得简单</div>
      <span></span>
    </div>
    <div class="sub-title-con">
      FastSimple专为街头小吃、咖啡和快餐车而设计，结合了自助订购、安全的数字支付和简化的队列管理，提供了效率、价格实惠和简单性
    </div>
    <div class="title-content-1">
      <div class="title">为什么选择FastSimple？</div>
      <span></span>
    </div>
    <div class="choose-fast">
      <el-row>
        <el-col :span="8">
          <div class="b-2-col">
            <p>
              <img src="@/assets/fastsImages/b-2-1.png" alt="" />
            </p>
            <p>无缝集成</p>
            <p>利用智能终端提高运作效率。</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="b-2-col">
            <p>
              <img src="@/assets/fastsImages/b-2-2.png" alt="" />
            </p>
            <p>多样化的功能</p>
            <p>优化操作，降低人工成本。</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="b-2-col">
            <p>
              <img src="@/assets/fastsImages/b-2-3.png" alt="" />
            </p>
            <p>增强客户体验</p>
            <p>减少高峰时段的拥堵，提高满意度。</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="point-banner">
      <h1>关键特性</h1>
      <p class="sub-title">精简的功能，高效的操作</p>
      <div class="top-margin-40">
        <el-row :gutter="12">
          <el-col :span="8">
            <div class="one">
              <div></div>
              <div>
                <p>小巧的平板电脑功能齐全</p>
                <p>功能强大而轻巧的设备，可实现无缝订购</p>
                <p>支持手持，站立安装，或壁挂式使用</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="two">
              <div></div>
              <div>
                <p>二维码点餐，提高效率</p>
                <p>顾客只需几秒即可扫描并下单。</p>
                <p>减少等待时间并提高销量。</p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="three">
              <div></div>
              <div>
                <p>安全、便捷的在线支付</p>
                <p>通过加密安全简化交易。</p>
                <p>降低现金处理成本。</p>
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="12" class="row-top-20">
          <el-col :span="6">
            <div class="eight">
              <div></div>
              <div>
                <p>智能队列管理</p>
                <p>自动排队号码和实时更新。</p>
                <p>允许灵活安排客户时间。</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="seven">
              <div></div>
              <div>
                <p>实时订单同步</p>
                <p>与厨房系统无缝集成。</p>
                <p>减少错误并提高速度。</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="six">
              <div></div>
              <div>
                <p>数字发票，打造更绿色的未来</p>
                <p>生成无纸化发票，实现环保运营。</p>
                <p>轻松访问交易记录。</p>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="five">
              <div></div>
              <div>
                <p>过敏原筛查</p>
                <p>顾客可以预先选择过敏原选项，系统会自</p>
                <p>动过滤危险成分，确保用餐安全。</p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'bannerTwo'
})
</script>
<style scoped lang="less">
.banner-two {
  width: 100%;
  background: #ffffff;

  .point-banner {
    width: 1280px;
    margin: auto;
    margin-top: 100px;
    text-align: left;

    .top-margin-40 {
      margin-top: 40px;

      .row-top-20 {
        margin-top: 20px;
      }

      .one {
        background-image: url('@/assets/fastsImages/b-2-4.png');
      }

      .two {
        background-image: url('@/assets/fastsImages/b-2-10.png');
      }

      .three {
        background-image: url('@/assets/fastsImages/b-2-9.png');
      }

      .eight {
        background-image: url('@/assets/fastsImages/b-2-8.png');
      }

      .seven {
        background-image: url('@/assets/fastsImages/b-2-7.png');
      }

      .six {
        background-image: url('@/assets/fastsImages/b-2-6.png');
      }

      .five {
        background-image: url('@/assets/fastsImages/b-2-5.png');
      }

      .one,
      .two,
      .three,
      .eight,
      .seven,
      .six,
      .five {
        height: 285px;
        width: 100%;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        > div {
          position: absolute;
          bottom: 0;
          color: #ffffff;
          left: 20px;

          > p:first-child {
            font-weight: bold;
            font-size: 18px;
            color: #ffffff;
            padding: 10px 0;
          }

          > p {
            margin: 0;
            padding: 0;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;
          }

          > p:last-child {
            padding-bottom: 10px;
          }
        }
      }
    }

    > h1 {
      font-weight: bold;
      font-size: 52px;
      color: #111111;
    }

    .sub-title {
      font-weight: 400;
      font-size: 18px;
      color: #111111;
    }
  }

  .choose-fast {
    width: 1280px;
    margin: auto;
    margin-top: 100px;

    .b-2-col {
      border-left: 1px solid #a1a1a1;
      text-align: center;

      > p {
        margin: 0;
        padding: 0;

        > img {
          width: 60px;
          height: 60px;
        }
      }

      > p:nth-child(2) {
        padding: 15px 0;
        font-weight: bold;
        font-size: 24px;
        color: #000000;
      }

      > p:last-child {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
      }
    }
  }

  .sub-title-con {
    margin-left: 860px;
    margin-top: 50px;
    font-weight: 400;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.9);
    text-align: left;
    margin-right: 438px;
  }

  .title-content {
    position: relative;
    width: 574px;
    height: 64px;
    margin-left: 428px;
    margin-top: 150px;

    .title {
      font-weight: bold;
      font-size: 52px;
      color: #1a1a1a;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
    }

    > span {
      display: block;
      width: 204px;
      height: 16px;
      background: #fed15f;
      position: absolute;
      bottom: -5px;
      right: 0;
      z-index: 1;
    }
  }

  .title-content-1 {
    position: relative;
    margin-left: 662px;
    margin-right: 662px;
    margin-top: 200px;
    height: 64px;

    .title {
      font-weight: bold;
      font-size: 52px;
      color: #1a1a1a;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
    }

    > span {
      display: block;
      width: 204px;
      height: 16px;
      background: #fed15f;
      position: absolute;
      bottom: -5px;
      left: 0;
      z-index: 1;
    }
  }
}
</style>
