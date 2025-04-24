<template>
    <div class="login-form">
        <el-form :model="form" label-width="auto">
            <el-row :gutter="12">
                <el-col v-for="(item, index) in emailForm" :key="index" :span="item.span">
                    <el-form-item :label="item.label">
                        <el-input v-if="item.type === 'input'" size="large" v-model="form[item.value]"
                            :placeholder="item.placeholder" class="bg-input" :suffix-icon="item.haveIcon ? View : ''">
                            <template #append v-if="item.haveEmailSelect || item.haveBtn">
                                <div v-if="item.haveEmailSelect">
                                    <span class="line-border"></span>
                                    <el-select placeholder="@gmail.com" style="width: 130px">
                                        <el-option label="@gmail.com" value="@gmail.com" />
                                        <el-option label="@qq.com" value="@gmail.com" />
                                    </el-select>
                                </div>
                                <span v-if="item.haveBtn" class="span-code"> 发送验证码 </span>
                            </template>
                            <template #prepend v-if="item.haveTelSelect">
                                <el-select placeholder="+86" style="width: 80px">
                                    <el-option label="+86" value="+86" />
                                    <el-option label="+101" value="+101" />
                                </el-select>
                            </template>
                        </el-input>
                        <el-select size="large"  v-if="item.type === 'select'" v-model="form[item.value]" :placeholder="item.placeholder">
                            <el-option v-for="(iv, ivIndex) in item.optionsData" :key="ivIndex" :label="iv.label"
                                :value="iv.value" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="login-last">
            <!-- <p class="forget-pass">忘记密码</p> -->
            <div :class="props.step === '1' ? 'btn-login margin-top-60' : 'btn-login margin-top-148'">
                <el-button class="el-btn-color" size="large" style="width: 100%" @click="onSubmit">
                    <span v-if="props.step === '2'">注册</span>
                    <span v-if="props.step === '1'">下一步</span>
                </el-button>
            </div>
            <div class="checkbox-con">
                <el-row :gutter="12">
                    <el-col :span="16">
                        <div>
                            <el-checkbox v-model="checked1">
                                已阅读并同意我们的
                                <span class="link-span">《隐私条例》</span>和
                                <span class="link-span">《合同条例》</span>
                            </el-checkbox>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div>
                            <el-select class="chin-select">
                                <el-option label="+86" value="+86" />
                                <el-option label="+101" value="+101" />
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                
                
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { View } from '@element-plus/icons-vue'
import { reactive, ref, onMounted, watch } from 'vue'
import {
    emailFormStep1,
    phoneFormStep1,
} from "./formList"
interface formTypeOne {
    span: number,
    label: string,
    value: string,
    type: string,
    placeholder: string,
    optionsData?: Array<{
        label: string,
        value: string | number
    }>
    haveEmailSelect?: boolean,
    haveBtn?: boolean,
    haveIcon?: boolean,
    haveTelSelect?: boolean
}
//定义props变量接收defineProps返回值
const props = defineProps({
    step: {
        type: String,
        required: true
    },
    registerStyle: {
        type: String,
        required: true
    }

});
const emit = defineEmits(['setStep']);

const form: any = reactive({
    firstName: '',
    lastName: '',
    email: '',
    code: '',
    password: '',
    againpassword: ''

})
const emailForm = ref<Array<formTypeOne>>([])
// do not use same name with ref
const checked1 = ref()


const onSubmit = () => {
    if (props.step === '1') {
        emit('setStep', '2')
    }
    if (props.step === '2') {
        emit('setStep', '1')
    }
    console.log('submit!', props.step, typeof props.step)
}
watch(
    () => props.registerStyle,
    (newVal) => {
        console.log("newVal",newVal)
        if (newVal) {
            if (newVal === '1') {
                emailForm.value = phoneFormStep1
            }
            if (newVal === '2') {
                emailForm.value = emailFormStep1
            }
        };
    },
    { immediate: true } // 关键选项
);
watch(
    () => props.step,
    (newVal) => {
        if (newVal) {
            if (newVal === '1') {
                if(props.registerStyle === '1'){
                    emailForm.value = phoneFormStep1
                }
                if(props.registerStyle === '2'){
                    emailForm.value = emailFormStep1
                }
            }
        };
    },
    { immediate: true } // 关键选项
);
</script>
<style scoped lang="less">
.login-form {
    margin-top: 50px;

    .login-last {
        .checkbox-con {
            font-family: Inter, Inter;
            font-weight: 500;
            font-size: 12px;
            color: #8f8f8f;
            margin-top: 33px;

            .link-span {
                color: #4c8afd;
            }
        }

        .forget-pass {
            margin: 0;
            padding: 0;
            text-align: right;
            font-weight: 400;
            font-size: 14px;
            color: #a4a4a4;
        }

        .checkbox-con {}
        .margin-top-60{
            margin-top: 60px;
        }
        .margin-top-148{
            margin-top: 148px;
        }
        .btn-login {
            width: 100%;
            background: #ffffff;
            border-radius: 8px 8px 8px 8px;
            font-family:
                Source Han Sans SC,
                Source Han Sans SC;
            font-weight: 400;
            font-size: 16px;
            color: #1a1a1a;

            .el-btn-color {
                // background-color: #1A1A1A;
            }
        }
    }
}
</style>
