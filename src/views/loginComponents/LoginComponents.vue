<template>
    <div class="login-com">
        <div class="title">
            <el-row>
                <el-col :span="12" class="left-title">
                    登录
                </el-col>
                <el-col :span="12" class="right-title">
                    <div class="tips">
                        没有账号？ <span @click="toRegister">去注册</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="tabs-login-style">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick" style="width: 100%;">
                <el-tab-pane label="手机号登录" name="phone"></el-tab-pane>
                <el-tab-pane label="邮箱登录" name="email"></el-tab-pane>
            </el-tabs>
        </div>
        <div class="login-form">
            <LoginForm />
        </div>
    </div>
</template>
<script setup lang="ts">
import LoginForm from "./LoginForm.vue"
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import type { TabsPaneContext } from 'element-plus'
const router = useRouter();
const activeName = ref('phone')
const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
// 跳转到首页的方法
const toRegister = () => {
  router.push('/register');
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