<template>
  <div class="login-com">
    <div class="title">
      <el-row class="top-title">
        <el-col :span="12" class="left-title"> {{$t('aboutLogin.registerMember')}} </el-col>
        <el-col :span="24" class="right-title-i">
          <div class="r-t-i-r-1">
            <div v-if="step === '1'">
              <span class="color-step-2">第一步：</span>
              <span class="color-step-2">{{$t('aboutLogin.messagePerson')}}</span>
            </div>
            <div v-if="step === '2'">
              <span class="color-step-2">第二步：</span>
              <span class="color-step-2">{{$t('aboutLogin.componeyMess')}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row class="two-title">
        <el-col :span="24" class="left-title-i">
          <div class="step-1" v-if="step === '2'">
            {{$t('aboutLogin.componeyMess')}} 
          </div>  
          <div  v-if="step === '1'">
            <RegisterTab :registerStyle="registerStyle"  @setRegisterStyle="setRegisterStyle"/>
          </div>
        </el-col>
        <el-col :span="24" class="right-title">
          <div class="tips">{{$t('aboutLogin.haveAccout')}} <span @click="toLogin" style="cursor: pointer;">{{$t('aboutLogin.goLogin')}} </span></div>
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
import { useCommonStore } from "@/stores/modules/common";
// 获取路由实例
const commonStore = useCommonStore()
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
  commonStore.setShowRegisterModal(false)
  commonStore.setShowLoginModal(true)
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
    
    }

    .two-title {
      margin-top: 10px;
    }

    .left-title {
      font-family: Source Han Sans SC, Source Han Sans SC;
font-weight: 500;
font-size: 28px;
color: #1B1B1B;
    }

    .left-title-i {
      // height: 40px;
      width: 100%;

      .step-1 {
        font-weight: 500;
        font-size: 18px;
        color: #387533;
      }
    }

    .right-title-i {
      margin-top: 20px;
      .r-t-i-r-1{
          display: flex;
          align-items: center;
          justify-content: left;
          gap: 10px;
          font-size: 16px;
        .line{
          display: block;
          position: relative;
          width: 100px;
          height: 1px;
          // background-color: #bdbdbd;
        }
        .line::after{
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          position: absolute;
          top: 50%;
          transform: translateY(50%);
        }
          img{
            width: 20px;
            height: 20px;
          }
          label{
            font-size: 14px;
            color: #bdbdbd;
          }
        }
      .color-step-1-span{
        background-color: #999999;
      }
      .color-step-2-span{
        background-color: #387533;
      }
      .color-step-1{
        color: #999999 !important;
      }
      .color-step-2{
        // color: #387533 !important;
        color: #999999;
        font-weight: bold;
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
        bottom: -20px;

        span {
          color: #387533;
        }
      }
    }
  }
}
</style>
