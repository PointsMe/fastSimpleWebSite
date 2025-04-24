<template>
  <div class="login-com">
    <div class="title">
      <el-row class="top-title">
        <el-col :span="12" class="left-title"> 注册账号 </el-col>
        <el-col :span="12" class="right-title-i">
          <el-row :gutter="12" class="r-t-i-r">
            <el-col :span="8">
              <div class="con">
                <img src="@/assets/r-1-1.png" alt="">
                个人信息
              </div>
            </el-col>
            <el-col :span="8">
              <div class="line">
                <span :class="step === '1' ? 'color-step-1-span':'color-step-2-span'"></span>
              </div>
            </el-col>
            <el-col :span="8">
              <div :class="step === '1' ? 'con color-step-1' : 'con color-step-2'">
                <img src="@/assets/r-1-3.png" alt="" v-if="step === '1'">
                <img src="@/assets/r-1-2.png" alt="" v-if="step === '2'">
                公司信息
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="two-title">
        <el-col :span="12" class="left-title-i">
          <div class="step-1" v-if="step === '2'">
            公司信息
          </div>  
          <div  v-if="step === '1'">
            <RegisterTab :registerStyle="registerStyle"  @setRegisterStyle="setRegisterStyle"/>
          </div>
        </el-col>
        <el-col :span="12" class="right-title">
          <div class="tips">已有账号？ <span @click="toLogin">去登录</span></div>
        </el-col>
      </el-row>
    </div>
    <div class="login-form">
      <RegisterForm :step="step" @setStep="setStep" :registerStyle="registerStyle"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import RegisterForm from './RegisterForm.vue'
import RegisterTab from "./RegisterTab.vue"
import { useRouter } from 'vue-router'
// 获取路由实例
const router = useRouter()

const step = ref<string>('1')
const registerStyle = ref<string>('1')

const setStep = (value: string)=>{
  step.value = value
}
const setRegisterStyle = (value: string)=>{
  registerStyle.value = value
}
// 跳转到首页的方法
const toLogin = () => {
  router.push('/module/login')
}
defineExpose({
  setStep,
  setRegisterStyle
})
</script>
<style scoped lang="less">
.login-com {
  width: 100%;
  height: 100%;

  .title {
    .top-title {
      height: 40px;
      line-height: 40px;
    }

    .two-title {
      margin-top: 80px;
    }

    .left-title {
      text-align: left;
      font-family:
        Source Han Sans SC,
        Source Han Sans SC;
      font-weight: 500;
      font-size: 32px;
      color: #ffffff;
    }

    .left-title-i {
      height: 40px;
      width: 100%;

      .step-1 {
        font-weight: 500;
        font-size: 18px;
        color: #FED15F;
      }
    }

    .right-title-i {
      .line {
        position: relative;
        width: 100%;
        height: 100%;

        >span {
          display: block;
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 50%;
        }
        .color-step-1-span{
        background-color: #999999;
      }
      .color-step-2-span{
        background-color: #FED15F;
      }

      }
      .color-step-1{
        color: #999999 !important;
      }
      .color-step-2{
        color: #FED15F !important;
      }
      .con {
        position: relative;
        font-weight: 400;
        font-size: 16px;
        text-align: left;
        text-indent: 28px;
        color: #FED15F;
        >img {
          display: block;
          position: absolute;
          left: 0;
          top: 8px;
          width: 24px;
          height: 24px;
        }
      }
    }

    .right-title {
      text-align: right;
      font-family: Inter, Inter;
      font-weight: 500;
      font-size: 14px;
      color: #bdbdbd;
      position: relative;

      .tips {
        position: absolute;
        right: 0;
        bottom: 0;

        span {
          color: #fed15f;
        }
      }
    }
  }
}
</style>
