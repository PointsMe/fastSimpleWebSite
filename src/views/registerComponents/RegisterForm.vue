<template>
    <div class="login-form">
        <el-form v-if="step === '1' && registerStyle === '1'" :model="phoneFormModel" ref="phoneFormModelRef"
            :rules="phoneFormRules">
            <el-row :gutter="12">
                <el-col v-for="(item, index) in emailForm" :key="index" :span="item.span">
                    <el-form-item :label="item.label" :prop="item.value">
                        <el-input @change="(e: any) => EventFunction({
                            evt: item?.onEventFunction,
                            data: e
                        })" v-if="item.type === 'input'" size="large" :type="`${item.typePass}`"
                            v-model="phoneFormModel[item.value]" :placeholder="item.placeholder" class="bg-input">
                            <template #append v-if="item.haveEmailSelect || item.haveBtn || item.haveIcon">
                                <div v-if="item.haveEmailSelect">
                                    <span class="line-border"></span>
                                    <el-select placeholder="@gmail.com" style="width: 130px">
                                        <el-option label="@gmail.com" value="@gmail.com" />
                                        <el-option label="@qq.com" value="@gmail.com" />
                                    </el-select>
                                </div>
                                <span v-if="item.haveBtn" class="span-code" @click="getVerificationCode"> 
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
                                <div class="country">
                                    <vue3-country-intl v-model="countryCode"></vue3-country-intl>
                                </div>
                            </template>
                        </el-input>
                        <el-select size="large" v-if="item.type === 'select'" v-model="phoneFormModel[item.value]"
                            :placeholder="item.placeholder">
                            <el-option v-for="(iv, ivIndex) in item.optionsData" :key="ivIndex" :label="iv.label"
                                :value="iv.value" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
       
        <el-form v-if="step === '1' && registerStyle === '2'" :model="emailFormModel" ref="emailFormModelRef"
            :rules="emailFormRules">
            <el-row :gutter="12">
                <el-col v-for="(item, index) in emailForm" :key="index" :span="item.span">
                    <el-form-item :label="item.label" :prop="item.value">
                        <el-input @change="(e: any) => EventFunction({
                            evt: item?.onEventFunction,
                            data: e
                        })" v-if="item.type === 'input'" size="large" :type="`${item.typePass}`"
                            v-model="emailFormModel[item.value]" :placeholder="item.placeholder" class="bg-input">
                            <template #append v-if="item.haveEmailSelect || item.haveBtn || item.haveIcon">
                                <div v-if="item.haveEmailSelect">
                                    <span class="line-border"></span>
                                    <el-select placeholder="@gmail.com" style="width: 180px">
                                        <el-option label="@gmail.com" value="@gmail.com" />
                                        <el-option label="@qq.com" value="@gmail.com" />
                                    </el-select>
                                </div>
                                <span v-if="item.haveBtn" class="span-code" @click="getVerificationCode"> 
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
                                <div class="country">
                                    <vue3-country-intl v-model="countryCode"></vue3-country-intl>
                                </div>
                            </template>
                        </el-input>
                        <el-select size="large" v-if="item.type === 'select'" v-model="emailFormModel[item.value]"
                            :placeholder="item.placeholder">
                            <el-option v-for="(iv, ivIndex) in item.optionsData" :key="ivIndex" :label="iv.label"
                                :value="iv.value" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <el-form v-if="step === '2'" :model="stepTwoModel" ref="stepTwoModelRef" :rules="stepTwoRules">
            <el-row :gutter="12">
                <el-col v-for="(item, index) in emailForm" :key="index" :span="item.span">
                    <el-form-item :label="item.label" :prop="item.value">
                        <el-input @change="(e: any) => EventFunction({
                            evt: item?.onEventFunction,
                            data: e
                        })" v-if="item.type === 'input'" size="large" :type="`${item.typePass}`"
                            v-model="stepTwoModel[item.value]" :placeholder="item.placeholder" class="bg-input">
                            <template #append v-if="item.haveEmailSelect || item.haveBtn || item.haveIcon">
                                <div v-if="item.haveEmailSelect">
                                    <span class="line-border"></span>
                                    <el-select placeholder="@gmail.com" style="width: 130px">
                                        <el-option label="@gmail.com" value="@gmail.com" />
                                        <el-option label="@qq.com" value="@gmail.com" />
                                    </el-select>
                                </div>
                                <span v-if="item.haveBtn" class="span-code" @click="getVerificationCode"> 发送验证码 </span>
                                <span v-if="item.haveIcon" class="span-code" @click="changeType(item)">
                                    <el-icon>
                                        <View v-if="item.typePass === 'password'" />
                                        <Hide v-else />
                                    </el-icon>
                                </span>
                            </template>
                            <template #prepend v-if="item.haveTelSelect">
                                <div class="country">
                                    <vue3-country-intl v-model="countryCode"></vue3-country-intl>
                                </div>
                            </template>
                        </el-input>
                        <el-select @change="(e: any) => EventFunction({
                            evt: item?.onEventFunction,
                            data: e
                        })" size="large" v-if="item.type === 'select'" :disabled="item.disabled"
                            v-model="stepTwoModel[item.value]" :placeholder="item.placeholder">
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
                        <div v-if="props.step === '2'">
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
import type * as Types from "@/apis/type"
import { ElMessage } from 'element-plus'
import { getVerificationCodeApi } from "@/apis/user"
import { View, Hide } from '@element-plus/icons-vue'
import { reactive, ref, watch } from 'vue'
import {getProvinceListApi} from "@/apis/common"
import {registerApi} from "@/apis/user"
import type { FormInstance, FormRules } from 'element-plus'
import {
    emailFormStep1,
    phoneFormStep1,
    formStep2
} from "./formList"
import { useRouter } from 'vue-router'
import { useUserStore } from "@/stores/modules/user"
const userStore = useUserStore()
// 获取路由实例
const router = useRouter()

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
const num = ref<number>(0)
const countryCode = ref()

const phoneFormModel: any = reactive({
    name: '',
    storeName: '',
    account: '',
    verificationCode: '',
    password: '',
    againpassword: ''
})
const phoneFormModelRef = ref<FormInstance>()

const phoneFormRules = reactive({
    name: [
        { required: true, message: '请输入姓名', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    storeName: [
        { required: true, message: '请输入门店名称', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    account: [
        { required: true, message: '请输入手机号码', trigger: 'blur' },
        // { min: 7, max: 11, message: 'Length should be 7 to 11', trigger: 'blur' },
    ],
    verificationCode: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        {
            required: true, validator: (rule: any, value: any, callback: any) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (phoneFormModel.againpassword !== '') {
                        if (!phoneFormModelRef.value) return
                        phoneFormModelRef.value.validateField('password')
                    }
                    callback()
                }
            }, trigger: 'blur'
        },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    againpassword: [
        {
            required: true, validator: (rule: any, value: any, callback: any) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== phoneFormModel.password) {
                    callback(new Error("两次密码不一致"))
                } else {
                    callback()
                }
            }, trigger: 'blur'
        },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})

const emailFormModel:any = reactive({
    name: '',
    storeName: '',
    account: '',
    verificationCode: '',
    password: '',
    againpassword: ''
})

const emailFormModelRef = ref<FormInstance>()

const emailFormRules = reactive({
    name: [
        { required: true, message: '请输入姓名11', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    storeName: [
        { required: true, message: '请输入门店名称', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    account: [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        // { min: 7, max: 11, message: 'Length should be 7 to 11', trigger: 'blur' },
    ],
    verificationCode: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        {
            required: true, validator: (rule: any, value: any, callback: any) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (emailFormModel.againpassword !== '') {
                        if (!emailFormModelRef.value) return
                        emailFormModelRef.value.validateField('password')
                    }
                    callback()
                }
            }, trigger: 'blur'
        },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    againpassword: [
        {
            required: true, validator: (rule: any, value: any, callback: any) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== emailFormModel.password) {
                    callback(new Error("两次密码不一致"))
                } else {
                    callback()
                }
            }, trigger: 'blur'
        },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})

const stepTwoModel: any = reactive({
    type: 101,
    name: "",
    vatNumber: "",
    compony: '1',
    taxCode: "",
    countryId: "",
    provinceId: "",
    city: "",
    zipcode: "",
    address: ""
})
const stepTwoRules: any = reactive({
    name: [
        { required: true, message: '请输入企业名称', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    vatNumber: [
        { required: true, message: '请输入门店名称', trigger: 'blur' },
        // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    taxCode: [
        { required: true, message: '请输入taxCode', trigger: 'blur' },
        // { min: 7, max: 11, message: 'Length should be 7 to 11', trigger: 'blur' },
    ],
    countryId: [
        { required: true, message: '请输入countryId', trigger: 'change', },
    ],
    provinceId: [
        { required: true, message: '请输入provinceId', trigger: 'change' },
    ],
    city: [
        { required: true, message: '请输入city', trigger: 'blur' },
    ],
    zipcode: [
        { required: true, message: '请输入zipcode', trigger: 'blur' },
    ],
    address: [
        { required: true, message: '请输入address', trigger: 'blur' },
    ],
})
const stepTwoModelRef = ref<FormInstance>()


const EventFunction = async (event: any) => {
    console.log("EventFunction==>",event)
    switch (event.evt) {
        case 'changeCountryId':
            // eslint-disable-next-line no-case-declarations
            const currentData = emailForm.value.find(iv=>iv.value === 'provinceId');
            if(currentData){
                const { data } = await getProvinceListApi({
                    countryId: event.data
                })
                const arr = data.map(iv=>{
                    return {
                        label: iv.name,
                        value: iv.id
                    }
                })
                currentData.optionsData = arr
            }
            break
        default:
            break
    }
}
const emailForm = ref<Array<Types.formTypeOne>>([])
// do not use same name with ref
const checked1 = ref()
//密码显示与隐藏
const changeType = (e: Types.formTypeOne) => {
    const current = emailForm.value.find(iv => iv.value === e.value)
    if (current) {
        current.typePass = current?.typePass === 'password' ? undefined : 'password'
    }
}
const timer = ref()
// 发送短信验证码
const getVerificationCode = async () => {
    console.log("aaaaa", countryCode.value)
    if(num.value) return false
    if (phoneFormModel.account || emailFormModel.account) {
        await getVerificationCodeApi({
            "account": props.registerStyle === '1' ? phoneFormModel.account : emailFormModel.account,
            "type": 101
        })
        num.value = 5
        timer.value = setInterval(()=>{
            if(num.value){
                num.value = num.value -1
            }else{
                clearInterval(timer.value)
            }
        },1000)
    } else {
        ElMessage.error('请先输入手机号码！！！')
    }
}


const onSubmit = () => {
    if (props.step === '1') {
        if (props.registerStyle === '1') {
            if (!phoneFormModelRef.value) return
            phoneFormModelRef.value.validate((valid) => {
                if (valid) {
                    console.log('submit!', valid, phoneFormModel)
                    emit('setStep', '2')
                } else {
                    console.log('error submit!')
                }
            })
        } else {
            if (!emailFormModelRef.value) return
            emailFormModelRef.value.validate((valid) => {
                if (valid) {
                    console.log('submit!', valid, emailFormModel)
                    emit('setStep', '2')
                } else {
                    console.log('error submit!')
                }
            })
        }

    } else {
        if (!stepTwoModelRef.value) return
        stepTwoModelRef.value.validate(async (valid) => {
            if (valid) {
                if(!checked1.value){
                    ElMessage.error("请先勾选")
                    return Promise.reject(false)
                }
                console.log('submit!', valid, phoneFormModel, emailFormModel, stepTwoModel)
                const phoneParams = {
                    ...phoneFormModel,
                    company: {
                        ...stepTwoModel
                    }
                }
                const emailParams = {
                    ...emailFormModel,
                    company: {
                        ...stepTwoModel
                    }
                }
                const { data } = await registerApi(props.registerStyle === '1' ? phoneParams : emailParams)
                if (data) {
                    ElMessage.success({
                        message: "注册成功，即将前往登录！！！",
                        duration: 2000
                    })
                    userStore.setToken(data.token)
                    userStore.setUserInfo(data.account)
                    setTimeout(()=>{
                        router.push('/layout/index')
                    },2000)
                    
                }
            } else {
                console.log('error submit!')
            }
        })
    }
}

watch(
    () => props.registerStyle,
    (newVal) => {
        console.log("newVal", newVal)
        if (newVal) {
            if (newVal === '1') {
                emailForm.value = phoneFormStep1 as any
            }
            if (newVal === '2') {
                emailForm.value = emailFormStep1 as any
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
                if (props.registerStyle === '1') {
                    emailForm.value = phoneFormStep1 as any
                }
                if (props.registerStyle === '2') {
                    emailForm.value = emailFormStep1 as any
                }
            }
            if (newVal === '2') {
                emailForm.value = formStep2 as any
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

        .margin-top-60 {
            margin-top: 60px;
        }

        .margin-top-148 {
            margin-top: 108px;
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
