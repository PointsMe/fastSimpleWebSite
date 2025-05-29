<template>
  <div class="banner-6">
    <div class="content-6">
      <div class="title">
        <el-divider>
          <div class="col-1-t">{{ $t('bannerSix.exclusiveAdvantages') }}</div>
        </el-divider>
        <div class="s-t">{{ $t('bannerSix.whyChooseJoinku') }}</div>
      </div>
      <div class="list-b-6">
        <div class="flex">
          <div class="flex1 f-1">
            <div class="f-1-b">
              <p>{{ $t('bannerSix.features.smartMatching.title') }}</p>
              <p>{{ $t('bannerSix.features.smartMatching.description') }}</p>
            </div>
          </div>
          <div class="flex1 f-2">
            <div class="f-1-b">
              <p>{{ $t('bannerSix.features.multiChannel.title') }}</p>
              <p>{{ $t('bannerSix.features.multiChannel.description') }}</p>
            </div>
          </div>
          <div class="flex1 f-3">
            <div class="f-1-b">
              <p>{{ $t('bannerSix.features.digitalWorkflow.title') }}</p>
              <p>{{ $t('bannerSix.features.digitalWorkflow.description') }}</p>
            </div>
          </div>
          <div class="flex1 f-4">
            <div class="f-1-b">
              <p>{{ $t('bannerSix.features.roleCoverage.title') }}</p>
              <p>{{ $t('bannerSix.features.roleCoverage.description') }}</p>
            </div>
          </div>
          <div class="flex1 f-5">
            <div class="f-1-b">
              <p>{{ $t('bannerSix.features.voiceOrdering.title') }}</p>
              <p>{{ $t('bannerSix.features.voiceOrdering.description') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="list-c-6">
        <div class="flex1 flex1-y">
          <div>
            <img src="@/assets/headset-fill.png" alt="" />
          </div>
          <div>
            <p>{{ $t('bannerSix.support.omniChannel.title') }}</p>
            <p>{{ $t('bannerSix.support.omniChannel.description') }}</p>
          </div>
        </div>
        <div class="flex1 flex1-g">
          <div>
            <img src="@/assets/headset-fill-1.png" alt="" />
          </div>
          <div>
            <p>{{ $t('bannerSix.support.inHouse.title') }}</p>
            <p>{{ $t('bannerSix.support.inHouse.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.banner-6 {
  padding-top: 100px;
  padding-bottom: 100px;  
  .content-6 {
    width: 1280px;
    margin: auto;

    .list-c-6 {
      display: flex;
      text-align: left;
      margin-top: 140px;
      .flex1-y {
        background-color: #6a8c69;
        color: #fff;
        margin-right: 10px;
      }
      .flex1-g {
        background-color: #f6f6f4;
        color: #88a284;
        margin-left: 10px;
      }
      .flex1 {
        flex: 1;
        padding: 40px 30px;
        img {
          width: 42px;
        }
        p {
          padding: 0;
          margin: 0;
        }
        div {
          > p:first-child {
            font-size: 24px;
            padding-top: 30px;
          }
          > p:last-child {
            font-size: 14px;
            padding-top: 15px;
          }
        }
      }
    }
    .list-b-6 {
      text-align: center;
      .flex {
        display: flex;
        height: 194px;
        p {
          margin: 0;
          padding: 0;
        }
        .f-1 {
          background-image: url('@/assets/01.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-2 {
          background-image: url('@/assets/02.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-3 {
          background-image: url('@/assets/03.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-4 {
          background-image: url('@/assets/04.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .f-5 {
          background-image: url('@/assets/05.png');
          background-size: 60%; /* 确保图片覆盖整个元素 */
          background-position: center; /* 将图片居中显示 */
          background-repeat: no-repeat;
        }
        .flex1 {
          flex: 1;
          position: relative;
          .f-1-b {
            position: absolute;
            bottom: 0;
            > p:first-child {
              font-size: 22px;
              color: #1b1b1b;
            }
            > p:last-child {
              color: #595959;
              font-size: 14px;
              padding-top: 5px;
              padding: 5px 10px 0 10px;
              height: 50px;
            }
          }
        }
      }
    }
    .title {
      color: #000;
      .col-1-t {
          font-size: 52px;
          font-weight: bold;
          text-align: center;
          color: #1b1b1b;
        }
      .s-t {
        text-align: center;
        font-size: 18px;
        font-weight: 400px;
        padding: 15px 0;
      }
    }
  }
}
</style>
