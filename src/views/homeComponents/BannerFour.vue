<template>
  <div class="banner-4">
    <el-row>
      <el-col :span="12">
        <div class="left">
        <p>
          新功能AI语音生成订单
        </p>
        <p>
          三种便捷方式，适用于各种场景
        </p>
        <img src="@/assets/joinkuImages/b-4-1.png" alt="">
        </div>
      </el-col>
      <el-col :span="12">
        <div class="right">
           <div class="right-one">
             <el-row>
              <el-col :span="12">
                <div class="right-one-left">
                  智能订单生成，提升运营效率
                </div>
              </el-col>
              <el-col :span="12">
                <div class="right-one-right">
                  01
                </div>
              </el-col>
             </el-row>
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
  p{
    margin: 0;
    padding: 0;
  }
  .right{
    padding: 20px 0 20px 20px;
    border-left: 1px solid #E5E5E5;
    .right-one{
      .right-one-left{
        font-family: Source Han Sans SC, Source Han Sans SC;
font-weight: 400;
font-size: 18px;
      }
    }
  }
  .left {
    font-family: Source Han Sans SC, Source Han Sans SC;
    p:first-child {
font-weight: bold;
font-size: 52px;
color: #1B1B1B;
    }
    p:last-child {

font-weight: 400;
font-size: 18px;
color: #1B1B1B;
    }
    img{
      width: 340px;
      display: block;
      margin: auto;
      margin-top: 60px;
    }
  }
}
</style>
