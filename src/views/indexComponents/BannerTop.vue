<template>
    <div class="banner-top-div">
        <div class="top">
            <div class="container">
                <!-- Logo -->
                <img src="@/assets/fastsImages/logo.png" alt="Fast Simple Logo" />

                <!-- Navigation Menu -->
                <div class="nav-menu">
                    <el-menu mode="horizontal" :ellipsis="false" class="menu">
                        <el-menu-item index="1" @click="goToPage('index')">主页</el-menu-item>
                        <el-menu-item index="2" @click="goToPage('shopping')">商城</el-menu-item>
                        <el-menu-item index="3" @click="goToPage('news')">新闻</el-menu-item>
                        <el-menu-item index="4" @click="goToPage('server')">服务支持</el-menu-item>
                        <el-menu-item index="5" @click="goToPage('about')">关于我们</el-menu-item>
                        <el-menu-item index="6" @click="goToPage('contact')">联系我们</el-menu-item>
                        <el-menu-item index="7">
                            <el-dropdown @command="handleCommand" trigger="click">
                                <span class="language-selector">
                                    {{ dropdownValue }} <el-icon>
                                        <ArrowDown />
                                    </el-icon>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-for="(item, index) in languageList"
                                            :command="item.code" :key="index">{{ item.label }}</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div class="right-section">
                    <el-button v-if="!userStore.token" class="login-btn" type="pain" @click="login">登录/注册</el-button>
                    <div v-else>
                        <el-dropdown trigger="click">
                            <span class="language-selector">
                                <img src="@/assets/fastsImages/user.png" alt="">
                                {{ userStore.userInfo.username }} 
                                  <!-- 18376614866 -->
                                <el-icon>
                                    <ArrowDown />
                                </el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>我的订单</el-dropdown-item>
                                    <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {languageList} from "@/http/config"
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/modules/user'
import {useCommonStore} from "@/stores/modules/common"
// 获取路由实例
const router = useRouter()
const userStore = useUserStore()
const commonStore = useCommonStore()
const handleCommand = (command: string) => {
    dropdownValue.value = command
    commonStore.setLanguageFn(command)
}
const dropdownValue = ref<string>(commonStore.language || '')
// 跳转到首页的方法
const goToPage = (value: any) => {
    router.push(`/layout/${value}`)
}
const login = () => {
    router.push(`/module/login`)
}
const loginOut = () => {
    userStore.resetToken()
    userStore.resetUserInfo()
    router.push(`/module/login`)
}
onMounted(() => {
    console.log(userStore.userInfo)
})
</script>
<style scoped lang="less">
.banner-top-div {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background-color: #111111;

    .top {
        height: 90px;
        width: 1280px;
        margin: auto;


        .container {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            //   padding: 0 120px;
            box-sizing: border-box;

            >img {
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

                        &:hover,
                        &.is-active {
                            color: #409eff;
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

                    img {
                        width: 36px;
                        height: 36px;
                    }
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
