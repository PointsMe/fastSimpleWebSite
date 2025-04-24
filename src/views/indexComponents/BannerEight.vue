<template>
  <div class="banner-8-div">
    <div class="current-target">
      <div class="current-one">
        <div class="border-a"></div>
        <div class="content">
          <p>西班牙的自动发票</p>
          <p>轻松遵守税务法规</p>
        </div>
        <div class="num">01</div>
      </div>
      <div class="current-two">
        <div class="border-a"></div>
        <div class="content">
          我们的订购系统现在为西班牙企业提供自动发票生成和报告服务。该系统自动生成具有唯一代码和QR码的税务发票，确保合法性和可验证性。相关信息实时传递给税务机关，消除人工流程，提高效率。
        </div>
      </div>
    </div>

    <div class="current-target padding-top">
      <div class="current-one">
        <div class="border-a"></div>
        <div class="content">
          <p>与先进的税收系统完全集成</p>
          <p>与先进的税收系统完全集成</p>
        </div>
        <div class="num">02</div>
      </div>
      <div class="current-two">
        <div class="border-a"></div>
        <div class="content">
          与TicketBAI和Veri
          Factu系统完全集成，由西班牙省级税务机关认证和批准。符合2024年财政改革法案，并支持新的Facturación
          Electrónica强制性法规。
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-8-div {
  width: 1280px;
  margin: 150px auto;
  .padding-top {
    margin-top: 120px;
  }
  .current-target {
    .current-two {
      position: relative;
      height: 129px;
      width: 100%;
      text-align: left;

      .content {
        // padding: 24px;
        font-weight: 400;
        font-size: 18px;
        color: #666666;
        padding-left: 426px;
        padding-top: 45px;
        padding-right: 24px;
      }

      .border-a {
        width: 836px;
        height: 93px;
        border-right: 1px solid #1b1b1b;
        border-bottom: 1px solid #1b1b1b;
        border-radius: 5px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }

    .current-one {
      position: relative;
      height: 129px;
      width: 100%;

      .num {
        font-weight: bold;
        font-size: 52px;
        color: #999999;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .content {
        padding: 24px;

        p {
          margin: 0;
          padding: 0;
        }

        > p:first-child {
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
        }

        > p:last-child {
          font-weight: 400;
          font-size: 18px;
          color: #1a1a1a;
        }
      }

      .border-a {
        width: 405px;
        height: 129px;
        border-left: 1px solid #1b1b1b;
        border-top: 1px solid #1b1b1b;
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
