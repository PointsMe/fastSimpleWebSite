<template>
    <div class="banner-top-div">
        <div class="top">
            <div class="container">
                <!-- Logo -->
                <img src="@/assets/fastsImages/logo.png" alt="Fast Simple Logo">
                
                <!-- Navigation Menu -->
                <div class="nav-menu">
                    <el-menu mode="horizontal" :ellipsis="false" class="menu">
                        <el-menu-item index="1" @click="goToPage('index')">主页</el-menu-item>
                        <el-menu-item index="2" @click="goToPage('shopping')">商城</el-menu-item>
                        <el-menu-item index="3" @click="goToPage('server')">服务支持</el-menu-item>
                        <el-menu-item index="4" @click="goToPage('about')">关于我们</el-menu-item>
                        <el-menu-item index="5" @click="goToPage('contact')">联系我们</el-menu-item>
                    </el-menu>
                </div>

                <!-- Right Section -->
                <div class="right-section">
                    <el-dropdown>
                        <span class="language-selector">
                            中文 <el-icon><ArrowDown /></el-icon>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>中文</el-dropdown-item>
                                <el-dropdown-item>English</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <el-button class="login-btn" type="pain" @click="login">登录/注册</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ArrowDown } from '@element-plus/icons-vue'

// 获取路由实例
const router = useRouter();
 
// 跳转到首页的方法
const goToPage = (value) => {
  router.push(`/layout/${value}`);
};
const login = () => {
  router.push(`/login`);
};
</script>
<style scoped lang="less">
.banner-top-div{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999999;
    .top {
        height: 90px;
        width: 100%;
        background-color: #111111;

        .container {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 120px;
            box-sizing: border-box;

            > img {
                width: 187.6px;
                height: 36px;
            }

            .nav-menu {
                flex: 1;
                display: flex;
                justify-content: center;

                :deep(.menu) {
                    background-color: transparent;
                    border: none;

                    .el-menu-item {
                        color: #ffffff;
                        font-size: 16px;
                        padding: 0 30px;

                        &:hover, &.is-active {
                            color: #409EFF;
                            background-color: transparent;
                        }
                    }
                }
            }

            .right-section {
                display: flex;
                align-items: center;
                gap: 20px;

                .language-selector {
                    color: #ffffff;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .login-btn {
                    height: 40px;
                    padding: 0 24px;
                    border-radius: 20px;
                    background-color: #111111 !important;
                    color: #ffffff;
                }
            }
        }
    }
}

    </style>