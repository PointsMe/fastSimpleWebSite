<template>
    <div class="join-us-modal">
        <el-dialog v-model="visible" :show-close="false" width="31.25%" :close-on-click-modal="false"
            :destroy-on-close="true">
            <template #header="{ close }">
                <div class="my-header">
                    <el-icon class="el-icon--left" @click="close">
                        <Close />
                    </el-icon>
                </div>
            </template>
            <div class="all-con">
                <div class="content">
                    <p class="t-i">
                        {{ $t('joinUs.welcome') }}
                    </p>
                    <p class="t-s">
                        {{ $t('joinUs.stepsDesc') }}
                    </p>
                    <p class="t-c">
                        <img src="@/assets/fastsImages/j-u-1.png" alt="">
                        {{ $t('joinUs.stepOne') }} <span>{{ $t('joinUs.completeRegistration') }}</span>
                    </p>
                    <p class="t-c">
                        <img src="@/assets/fastsImages/j-u-1.png" alt="">
                        {{ $t('joinUs.stepTwo') }} <span>{{ $t('joinUs.enterInviteCode') }}</span>
                    </p>
                </div>
                <div class="footer-btns">
                    <el-row :gutter="12">
                        <el-col :span="12">
                            <el-button class="btns" @click="goRegister">{{ $t('joinUs.registerNow') }}</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-input v-model="inviteCode" class="btns-i" :placeholder="$t('joinUs.enterInviteCodePlaceholder')" />
                        </el-col>
                        <el-col :span="24" class="tips">
                            {{ $t('joinUs.noInviteCode') }}
                        </el-col>
                    </el-row>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Close } from '@element-plus/icons-vue'
// import { useRouter } from 'vue-router'
import { useCommonStore } from '@/stores/modules/common'
// const router = useRouter()
const commonStore = useCommonStore()
const visible = ref(false)
const inviteCode = ref('')
const showModal = () => {
    visible.value = true
}
const goRegister = () => {
    commonStore.setShowRegisterModal(true)
    // router.push('/module/register')
}
defineExpose({
    showModal
})
</script>

<style scoped lang="less">
.join-us-modal {

    .all-con {
        text-align: center;
        .footer-btns {
            padding: 60px 40px 40px 40px;
            .tips {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 14px;
                color: #656565;
            }

            .btns {
                height: 50px;
                width: 100%;
                border-radius: 8px 8px 8px 8px;
                border: 1px solid #1B1B1B;
            }

            .btns-i {
                height: 50px;
                width: 100%;
                border-radius: 8px 8px 8px 8px;
                border: 1px solid #1B1B1B;
            }
        }

        .content {
            padding: 64px 91px 0px 91px;

            .t-i {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: bold;
                font-size: 32px;
                color: #1B1B1B;
            }

            .t-s {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 16px;
                color: #1B1B1B;
                padding-bottom: 20px;
                padding-top: 10px;
            }

            .t-c {
                text-align: left;
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 16px;
                color: #1B1B1B;
                >img{
                    width: 18px;
                    height: 18px;
                }
                >span{
                    display: inline-block;
                    border-bottom: 2px solid #fff;
                }
            }
        }
    }


    .my-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 16px;

        .el-icon--left {
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 24px;
        }
    }
}
</style>