<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <div class="login-form">
    <el-form
      :key="registerStyle"
      :model="form"
      label-width="auto"
      ref="formRef"
      :rules="formRules"
    >
      <el-row :gutter="12">
        <el-col
          v-for="(item, index) in emailForm"
          :key="index"
          :span="item.span"
          :style="item?.otherStyle"
        >
          <el-form-item :label="item.label" :prop="item.value">
            <el-input
              v-if="item.type === 'input'"
              size="default"
              v-model="form[item.value]"
              :type="`${item.typePass}`"
              :placeholder="$t(item.placeholder)"
              class="bg-input"
            >
              <template
                #append
                v-if="item.haveEmailSelect || item.haveBtn || item.haveIcon"
              >
                <div v-if="item.haveEmailSelect">
                  <span class="line-border"></span>
                  <AllEmailView @changeEmail="changeEmail" />
                </div>
                <span v-if="item.haveIcon" class="span-code" @click="changeType(item)">
                  <el-icon>
                    <View v-if="item.typePass === 'password'" />
                    <Hide v-else />
                  </el-icon>
                </span>
              </template>
              <template #prepend v-if="item.haveTelSelect">
                <AllCountryView @changeCountry="changeCountry" />
              </template>
            </el-input>
            <el-select
              size="default"
              v-if="item.type === 'select'"
              v-model="form[item.value]"
              :placeholder="$t(item.placeholder)"
              class="bg-input"
            >
              <el-option
                v-for="(iv, ivIndex) in item.optionsData"
                :key="ivIndex"
                :label="$t(iv.label)"
                :value="iv.value"
              />
            </el-select>
            <el-radio-group v-if="item.type === 'radioGroup'" v-model="form[item.value]">
              <el-radio
                v-for="(iv, ivIndex) in item.optionsData"
                :key="ivIndex"
                :value="iv.value"
                >{{ iv.label }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="login-last">
      <p class="forget-pass">
        <span @click="forgetPass" style="cursor: pointer">{{
          $t("aboutLogin.forgetPassword")
        }}</span>
      </p>
      <div class="btn-login margin-top-60">
        <el-button
          class="el-btn-color"
          size="large"
          style="width: 100%"
          @click="onSubmit"
        >
          <span>{{ $t("aboutLogin.loginText") }}</span>
        </el-button>
      </div>
      <div class="checkbox-con">
        <el-row>
          <el-col :span="24">
            <div>
              <el-checkbox v-model="checked1">
                <div class="c_i-check">
                  {{ $t("aboutLogin.loginTips") }}
                  <span class="link-span" @click.native.prevent="checkBooks(1)">{{
                    $t("aboutLogin.linkOne")
                  }}</span>
                  {{ $t("aboutLogin.linkAnd") }}
                  <span class="link-span" @click.native.prevent="checkBooks(2)">{{
                    $t("aboutLogin.linkTwo")
                  }}</span>
                </div>
              </el-checkbox>
            </div>
          </el-col>
          <el-col :span="24">
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
import type * as Types from "@/apis/type";
import AllEmailView from "@/components/AllEmailView.vue";
import LanguageView from "@/components/LanguageView.vue";
import { View, Hide } from "@element-plus/icons-vue";
import { ElMessage, ElLoading } from "element-plus";
import { loginApi } from "@/apis/user";
import { reactive, ref, watch, computed } from "vue";
import type { FormInstance } from "element-plus";
import { useCommonStore } from "@/stores/modules/common";
import AllCountryView from "@/components/AllCountryView.vue";
import { i18n } from "@/lang/index";
import { emailFormStep1, phoneFormStep1 } from "./formList";
import { useUserStore } from "@/stores/modules/user";
const userStore = useUserStore();
const commonStore = useCommonStore();
const countryCode = ref("+86");
const emailCode = ref("@gmail.com");
// 获取路由实例
const router = useRouter();
//定义props变量接收defineProps返回值
const props = defineProps({
  registerStyle: {
    type: String,
    required: true,
  },
});
const formRules = computed(() => {
  return {
    biz: [
      {
        required: true,
        message: i18n.global.t("aboutLogin.pleaseInputBiz"),
        trigger: "change",
      },
    ],
    account: [
      {
        required: true,
        message: i18n.global.t("aboutLogin.pleaseInputTel"),
        trigger: "change",
      },
    ],
    password: [
      {
        required: true,
        message: i18n.global.t("aboutLogin.pleaseInputPassword"),
        trigger: "change",
      },
    ],
  };
});
const checkBooks = (value: number) => {
  if (value === 1) {
    router.push("/privice");
  } else {
    router.push("/regulations");
  }
};
const changeCountry = (e: string) => {
  countryCode.value = e;
};
const changeEmail = (e: string) => {
  emailCode.value = e;
};
const form: any = reactive({
  account: "",
  password: "",
  biz: "",
});

const formRef = ref<FormInstance>();

const emailForm = ref<Array<Types.formTypeOne>>([]);
// do not use same name with ref
const checked1 = ref();

//密码显示与隐藏
const changeType = (e: Types.formTypeOne) => {
  const current = emailForm.value.find((iv) => iv.value === e.value);
  if (current) {
    current.typePass = current?.typePass !== "password" ? "password" : undefined;
  }
  console.log("===emailForm===", emailForm);
};
const onSubmit = async () => {
  if (!formRef.value) return;
  formRef.value.validate(async (valid) => {
    if (valid) {
      console.log(form);
      if (!checked1.value) {
        ElMessage.error(i18n.global.t("aboutLogin.pleaseCheckbox"));
        return Promise.reject(false);
      }
      console.log("submit!", form);
      const params = {
        ...form,
        account: "",
      };
      if (props.registerStyle === "1") {
        params.account = `${countryCode.value.replace("+", "")}-${form.account}`;
      } else {
        params.account = `${form.account}${emailCode.value}`;
      }

      // 跳转到首页的方法
      const { data } = await loginApi({
        ...params,
        // biz: userStore.biz
      });
      console.log("onSubmit===>", data);
      userStore.setToken(data.token);
      userStore.setUserInfo(data.account);
      userStore.setBiz(data.account?.biz);
      commonStore.setShowLoginModal(false);
    } else {
      console.log("error submit!");
    }
  });
};
watch(
  () => props.registerStyle,
  (newVal) => {
    console.log("newVal", newVal);
    if (newVal) {
      if (newVal === "1") {
        form.account = "";
        form.password = "";
        emailForm.value = phoneFormStep1;
      }
      if (newVal === "2") {
        form.account = "";
        form.password = "";
        emailForm.value = emailFormStep1;
      }
    }
  },
  { immediate: true } // 关键选项
);
const forgetPass = () => {
  commonStore.setShowLoginModal(false);
  commonStore.setShowFindPassModal(true);
};
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
      .c_i-check{
        word-break: normal;
        width: 100%;
        // height: 100px;
        display: -ms-inline-grid;
        white-space: pre-line;
        word-wrap: break-word;
        overflow: hidden;
        // line-height: 20px;
      }
      .chin-select {
        margin-top: 10px;
      }
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

    .checkbox-con {
    }
    .margin-top-60 {
      margin-top: 20px;
    }
    .margin-top-148 {
      margin-top: 148px;
    }
    .btn-login {
      width: 100%;
      background: #ffffff;
      border-radius: 8px 8px 8px 8px;
      font-family: Source Han Sans SC, Source Han Sans SC;
      font-weight: 400;
      font-size: 16px;
      color: #1a1a1a;

      .el-btn-color {
        background-color: #1a1a1a;
        color: #fff;
      }
    }
  }
}
</style>
