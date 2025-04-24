<template>
    <div class="login-com">
        <div class="title">
            <el-row>
                <el-col :span="12" class="left-title">
                    注册
                </el-col>
                <el-col :span="12" class="right-title">
                    <div class="tips">
                        已有账号？ <span @click="toLogin">去登录</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="tabs-login-style">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" style="width: 100%;">
                <el-tab-pane label="手机号注册" name="phone"></el-tab-pane>
                <el-tab-pane label="邮箱注册" name="email"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="login-form">
            <RegisterForm />
        </div>
    </div>
</template>
<script setup lang="ts">
import RegisterForm from "./RegisterForm.vue"
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import type { TabsPaneContext } from 'element-plus'
const activeName = ref('phone')
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
// 获取路由实例
const router = useRouter();
 
// 跳转到首页的方法
const toLogin = () => {
  router.push('/login');
};
</script>
<style scoped lang="less">
.login-com {
    width: 100%;
    height: 100%;
    .tabs-login-style {
        font-family: Source Han Sans SC, Source Han Sans SC;
        font-weight: 400;
        font-size: 18px;
        width: 180px;
        margin-top: 90px;
        color: #BDBDBD;
    }

    .title {
        .left-title {
            text-align: left;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 32px;
            color: #FFFFFF;
        }

        .right-title {
            text-align: right;
            font-family: Inter, Inter;
            font-weight: 500;
            font-size: 14px;
            color: #BDBDBD;
            position: relative;
            .tips{
                position: absolute;
                right: 0;
                bottom: 0;
                span {
                color: #FED15F;
            }
            }
            
        }
    }
}
</style>