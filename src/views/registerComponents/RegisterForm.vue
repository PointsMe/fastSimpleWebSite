<template>
    <div class="login-form">
        <el-form :model="form" label-width="auto">
            <el-row :gutter="12">
                <el-col :span="12">
                    <el-form-item label="">
                        <el-input size="large" v-model="form.password" placeholder="请输入您的姓" class="bg-input">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="">
                        <el-input size="large" v-model="form.password" placeholder="请输入您的名" class="bg-input">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <!-- <el-form-item label="">
                <el-input size="large" v-model="form.name" placeholder="请输入您的手机号码" class="bg-input">
                    <template #prepend>
                        <el-select v-model="select" placeholder="+86" style="width: 80px">
                            <el-option label="+86" value="+86" />
                            <el-option label="+101" value="+101" />
                        </el-select>
                    </template>
                </el-input>
            </el-form-item> -->
            <el-form-item label="">
                <el-input size="large" v-model="form.name" placeholder="请输入您的邮箱" class="bg-input">
                    <template #append>
                        <div>
                            <span class="line-border"></span>
                            <el-select v-model="select" placeholder="@gmail.com" style="width: 130px">
                                <el-option label="@gmail.com" value="@gmail.com" />
                                <el-option label="@qq.com" value="@gmail.com" />
                            </el-select>
                        </div>
                    </template>
                </el-input>
            </el-form-item>
            <!-- <el-form-item label="">
                <el-input size="large" v-model="form.name" placeholder="请输入您的手机号码" class="bg-input">
                    <template #prepend>
                        <el-select v-model="select" placeholder="+86" style="width: 80px">
                            <el-option label="+86" value="+86" />
                            <el-option label="+101" value="+101" />
                        </el-select>
                    </template>
                </el-input>
            </el-form-item> -->
            <el-form-item label="">
                <el-input size="large" v-model="form.password" placeholder="请输入您的密码" :suffix-icon="View"
                    class="bg-input">
                </el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input size="large" v-model="form.password" placeholder="请再次输入您的密码" :suffix-icon="View"
                    class="bg-input">
                </el-input>
            </el-form-item>
        </el-form>
        <div class="login-last">
            <p class="forget-pass">
                忘记密码
            </p>
            <div class="btn-login">
                <el-button class="el-btn-color" size="large" style="width: 100%;">注册</el-button>
            </div>
            <div class="checkbox-con">
                <el-checkbox v-model="checked1">
                    已阅读并同意我们的
                    <span class="link-span">《隐私条例》</span>和
                    <span class="link-span">《合同条例》</span>
                </el-checkbox>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { View } from '@element-plus/icons-vue'
import { reactiv, ref } from 'vue'

// do not use same name with ref
const checked1 = ref()
const form = reactive({
    name: '',
    code: '',
    password: ''
})

const onSubmit = () => {
    console.log('submit!')
}
</script>
<style scoped lang="less">
.login-form {
    .login-last {
        .checkbox-con {
            font-family: Inter, Inter;
            font-weight: 500;
            font-size: 12px;
            color: #8F8F8F;
            margin-top: 33px;

            .link-span {
                color: #4C8AFD;
            }
        }

        .forget-pass {
            margin: 0;
            padding: 0;
            text-align: right;
            font-weight: 400;
            font-size: 14px;
            color: #A4A4A4;
        }

        .checkbox-con {}

        .btn-login {
            width: 100%;
            margin-top: 158px;
            background: #FFFFFF;
            border-radius: 8px 8px 8px 8px;
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 16px;
            color: #1A1A1A;

            .el-btn-color {
                // background-color: #1A1A1A;
            }
        }
    }

}
</style>