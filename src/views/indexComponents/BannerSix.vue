<template>
  <div class="banner-6-div">
    <div class="con-job">
      <div class="title-content">
        <div class="title">数字税务合规变得容易</div>
        <span></span>
      </div>
      <div class="sub-title">为中小型企业量身定做的解决方案</div>
    </div>
    <div class="list-number">
      <el-row>
        <el-col :span="8">
          <div class="con-con">
            <div class="bg-num bg-num1"></div>
            <div class="con-con-b">
              <p>自动提交数据</p>
              <p>即时向税务机关发送交易数据</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="con-con">
            <div class="bg-num bg-num2"></div>
            <div class="con-con-b">
              <p>自动提交数据</p>
              <p>即时向税务机关发送交易数据</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="con-con">
            <div class="bg-num bg-num3"></div>
            <div class="con-con-b">
              <p>自动提交数据</p>
              <p>即时向税务机关发送交易数据</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="con-job">
      <div class="title-content">
        <div class="title">法规是怎么说的？</div>
        <span style="left: 0.4rem; width: 0.5rem"></span>
      </div>
      <div class="sub-title">
        根据开具电子收据的规定，商户必须使用符合意大利税务局规定规格的税控收银机。这些设备生成合法的收据，并允许客户选择是否接收打印副本
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-6-div {
  width: 100%;
  .list-number {
    width: 1280px;
    margin: auto;
    text-align: center;
    margin-bottom: 150px;
    .con-con {
      width: 100%;
      position: relative;
      .bg-num1 {
        background-image: url('@/assets/fastsImages/b-6-1.png');
      }
      .bg-num2 {
        background-image: url('@/assets/fastsImages/b-6-2.png');
      }
      .bg-num3 {
        background-image: url('@/assets/fastsImages/b-6-3.png');
      }
      .bg-num {
        width: 200px;
        height: 118px;
        margin: auto;

        background-size: 60%; /* 确保图片覆盖整个元素 */
        background-position: center; /* 将图片居中显示 */
        background-repeat: no-repeat;
      }
      .con-con-b {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        p {
          margin: 0;
          padding: 0;
        }
        > p:first-child {
          font-weight: bold;
          font-size: 24px;
          color: #1a1a1a;
        }
        > p:last-child {
          font-weight: 400;
          font-size: 16px;
          color: #666666;
        }
      }
    }
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
      margin-top: 150px;
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
