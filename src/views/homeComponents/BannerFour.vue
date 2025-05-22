<template>
  <div class="banner-4">
    <el-row>
      <el-col :span="12">
        <div class="left">
          <p>新功能AI语音生成订单</p>
          <p>三种便捷方式，适用于各种场景</p>
          <img src="@/assets/joinkuImages/b-4-1.png" alt="" />
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right">
          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">智能订单生成，提升运营效率</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">01</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom">
              基于历史订单自动生成精准订单
              <ul>
                <li>
                  通过AI分析历史订单数据，自动生成精准订单，减少人工操作，提升库存管理效率。
                </li>
                <li>轻松应对订单需求变化。</li>
              </ul>
            </div>
          </div>

          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">对于 PointsMe 用户</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">02</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom">
              通过 Joinku App 进行语音预订
              <ul>
                <li>
                  只需说出产品名称和数量，系统就会自动匹配之前购买的商品并生成订单
                </li>
                <li>无需手动输入</li>
              </ul>
            </div>
          </div>

          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">适用于PointsMe用户和Joinku Supplier支持的供应商。</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">03</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom">
              AI 预订
              <ul>
                <li>
                   拨打供应商的人工智能电话线并提供您的订单详情。
                </li>
                <li>系统会生成预订单并将其同步到供应商的系统以供审核和确认。</li>
              </ul>
            </div>
          </div>


          <div class="right-one">
            <el-row>
              <el-col :span="20">
                <div class="right-one-left">适用于非PointsMe用户和使用Joinku Supplier的供应商</div>
              </el-col>
              <el-col :span="4">
                <div class="right-one-right">04</div>
              </el-col>
            </el-row>
            <div class="right-one-bottom" style="border: none;">
              电话预订
              <ul>
                <li>
                  使用供应商的智能座机服务生成预订单。
                </li>
                <li>系统向消息平台发送确认链接，让客户轻松查看和确认订单。</li>
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
