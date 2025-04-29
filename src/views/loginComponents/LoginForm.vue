<template>
    <div class="login-form">
        <el-form :model="form" label-width="auto" ref="formRef" :rules="formRules">
            <el-row :gutter="12">
                <el-col v-for="(item, index) in emailForm" :key="index" :span="item.span">
                    <el-form-item :label="item.label" :prop="item.value">
                        <el-input v-if="item.type === 'input'" size="large" v-model="form[item.value]" :type="`${item.typePass}`"
                            :placeholder="item.placeholder" class="bg-input">
                            <template #append v-if="item.haveEmailSelect || item.haveBtn || item.haveIcon">
                                <div v-if="item.haveEmailSelect">
                                    <span class="line-border"></span>
                                    <AllEmailView @changeEmail="changeEmail"/>
                                    <!-- <el-select placeholder="@gmail.com" style="width: 130px">
                                        <el-option label="@gmail.com" value="@gmail.com" />
                                        <el-option label="@qq.com" value="@gmail.com" />
                                    </el-select> -->
                                </div>
                                <span v-if="item.haveBtn" class="span-code" style="cursor: pointer;" @click="getVerificationCode"> 
                                    <label v-if="!num">发送验证码</label> 
                                    <label v-else>{{ num }}s</label> 
                                </span>
                                <span v-if="item.haveIcon" class="span-code" @click="changeType(item)">
                                    <el-icon>
                                        <View v-if="item.typePass === 'password'" />
                                        <Hide v-else />
                                    </el-icon>
                                </span>
                            </template>
                            <template #prepend v-if="item.haveTelSelect">
                                <AllCountryView @changeCountry="changeCountry"/>
                                <!-- <div class="country">
                                    
                                    <vue3-country-intl v-model="countryCode"></vue3-country-intl>
                                </div> -->
                                <!-- <el-select placeholder="+86" style="width: 80px">
                                    <el-option label="+86" value="+86" />
                                    <el-option label="+101" value="+101" />
                                </el-select> -->
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
            <p class="forget-pass">
                <span @click="forgetPass" style="cursor: pointer;">忘记密码</span>
            </p>
            <div class="btn-login margin-top-60">
                <el-button class="el-btn-color" size="large" style="width: 100%" @click="onSubmit">
                    <span>登录</span>
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
                        <div class="chin-select">
                            <LanguageView />
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ElLoading } from 'element-plus'
import type * as Types from "@/apis/type"
import AllEmailView from "./AllEmailView.vue"
import LanguageView from "./LanguageView.vue"
import { View, Hide } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { getVerificationCodeApi,loginApi } from "@/apis/user"
import { reactive, ref, onMounted, watch } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import AllCountryView from "./AllCountryView.vue"

import {
    emailFormStep1,
    phoneFormStep1,
} from "./formList"
import { useUserStore } from "@/stores/modules/user"
const userStore = useUserStore()
const countryCode = ref('+86')
const emailCode = ref('@gmail.com')
// 获取路由实例
const router = useRouter()
//定义props变量接收defineProps返回值
const props = defineProps({
    registerStyle: {
        type: String,
        required: true
    }
});
const changeCountry = (e:string)=>{
    countryCode.value = e
}
const changeEmail = (e:string)=>{
    emailCode.value = e
}
const form: any = reactive({
    account: "",
    password: "",
    verificationCode: "",
})


const formRules = reactive({
    account: [
        { required: true, message: `请输入账号`, trigger: 'blur' },
        // { min: 7, max: 11, message: 'Length should be 7 to 11', trigger: 'blur' },
    ],
    verificationCode: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})
const formRef = ref<FormInstance>()

const emailForm = ref<Array<Types.formTypeOne>>([])
// do not use same name with ref
const checked1 = ref()

//密码显示与隐藏
const changeType = (e: Types.formTypeOne) => {
    const current = emailForm.value.find((iv) => iv.value === e.value)
    if (current) {
        current.typePass = current?.typePass === 'password' ? undefined : 'password'
    }
    console.log("===emailForm===",emailForm)
}
const onSubmit = async () => {
    if (!formRef.value) return
    formRef.value.validate(async (valid) => {
            if (valid) {
                console.log(form)
                if(!checked1.value){
                    ElMessage.error("请先勾选")
                    return Promise.reject(false)
                }
                console.log('submit!', form)
                const params = {
                    ...form,
                    account: "",
                }
                if(props.registerStyle === '1'){
                    params.account = `${countryCode.value.replace('+','')}-${form.account}`
                }else{
                    params.account =  `${form.account}${emailCode.value}`
                }
                // 跳转到首页的方法
                const { data } = await loginApi(params)
                console.log("onSubmit===>",data)
                userStore.setToken(data.token)
                userStore.setUserInfo(data.account)
                router.push('/layout/index')

            }else{
                console.log('error submit!')
            }
        })
   
}
const num = ref<number>(0)
const timer = ref()
// 发送短信验证码
const getVerificationCode = async () => {
    console.log("aaaaa", countryCode.value,emailCode.value)
    if(num.value) return false
    if(props.registerStyle === '1'){
        if(!countryCode.value) {
        ElMessage.error("请先选择区号！！！")
        return false
    }
    }else{
        if(!emailCode.value) {
        ElMessage.error("请先选择邮箱！！！")
        return false
    }
    }
    if (form.account) {
        const loading = ElLoading.service({
            lock: true,
            text: 'Loading',
            background: 'rgba(0, 0, 0, 0.7)',
        })
        try{
            const params = {
                account: '',
                type: 104
            }
            if(props.registerStyle === '1'){
                params.account = `${countryCode.value.replace('+','')}-${form.account}`
            }else{
                params.account =  `${form.account}${emailCode.value}`
            }
            await getVerificationCodeApi(params)
            loading.close()
            num.value = 5
            timer.value = setInterval(()=>{
                if(num.value){
                    num.value = num.value -1
                }else{
                    clearInterval(timer.value)
                }
            },1000)
        }catch(e){
            loading.close()
        }
    } else {
        ElMessage.error('请先输入手机号码！！！')
    }
}
watch(
    () => props.registerStyle,
    (newVal) => {
        console.log("newVal",newVal)
        if (newVal) {
            if (newVal === '1') {
                form.account = ""
                form.password = ""
                form.verificationCode = ""
                emailForm.value = phoneFormStep1
            }
            if (newVal === '2') {
                form.account = ""
                form.password = ""
                form.verificationCode = ""
                emailForm.value = emailFormStep1
            }
        };
    },
    { immediate: true } // 关键选项
);
const forgetPass = ()=>{
    router.push('/module/findpass')
}
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
