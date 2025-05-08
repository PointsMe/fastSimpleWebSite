<template>
  <div class="banner-10-div">
    <div class="content">
      <el-row>
        <el-col :span="10" class="col-con">
          <div class="col-left">
            <p>{{ $t('bannerTen.contactUs') }}</p>
            <p>{{ $t('bannerTen.contactDescription') }}</p>
          </div>
          <div class="con-left-i">
            <p>{{ $t('bannerTen.email') }}: info@yine.it</p>
            <p>{{ $t('bannerTen.address') }}: Via Procaccini 11, 20154 – Milano (MI)</p>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="col-right">
            <el-form
              :label-position="'top'"
              style="width: 100%"
              label-width="auto"
              :model="formLabelAlign"
            >
              <el-row :gutter="12">
                <el-col :span="12">
                  <el-form-item :label="$t('bannerTen.form.name')" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.namePlaceholder')"
                      size="large"
                      v-model="formLabelAlign.name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('bannerTen.form.email')" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.emailPlaceholder')"
                      size="large"
                      v-model="formLabelAlign.email"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('bannerTen.form.phone')" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.phonePlaceholder')"
                      size="large"
                      v-model="formLabelAlign.tel"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item :label="$t('bannerTen.form.company')" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      :placeholder="$t('bannerTen.form.companyPlaceholder')"
                      size="large"
                      v-model="formLabelAlign.componey"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item :label="$t('bannerTen.form.message')" :label-position="'top'">
                    <el-input
                      :rows="6"
                      class="bg-input"
                      type="textarea"
                      :placeholder="$t('bannerTen.form.messagePlaceholder')"
                      size="large"
                      v-model="formLabelAlign.message"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <div class="btn-div">
                    <el-button class="btn">{{ $t('bannerTen.form.sendMessage') }}</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

defineOptions({
  name: 'BannerTen'
})
const formLabelAlign = reactive({
  name: '',
  email:'',
  tel:'',
  componey:'',
  message:''
})
</script>
<style scoped lang="less">
.banner-10-div {
  p {
    margin: 0;
    padding: 0;
  }

  width: 100%;
  background-color: #f2f0e4;
  // margin-top: 138px;

  .content {
    padding: 120px 320px;

    .col-right {
      // height: 480px;
      width: 100%;
      border: 1px solid #1a1a1a;
      border-radius: 5px;
      padding: 38px 30px;
      .btn-div {
        text-align: center;
        .btn {
          width: 278px;
          height: 48px;
          background: #1a1a1a;
          color: #ffffff;
          border-radius: 72px 72px 72px 72px;
        }
      }
    }

    .col-con {
      position: relative;
      // height: 480px;
      width: 100%;

      .con-left-i {
        position: absolute;
        left: 0;
        bottom: 0;
        font-family:
          Source Han Sans SC,
          Source Han Sans SC;
        font-weight: 400;
        font-size: 16px;
        color: #1a1a1a;
      }

      .col-left {
        > p:first-child {
          font-weight: bold;
          font-size: 52px;
          color: #1a1a1a;
        }

        > p:last-child {
          font-family:
            Source Han Sans SC,
            Source Han Sans SC;
          font-weight: 400;
          font-size: 18px;
          color: #1a1a1a;
        }
      }
    }
  }
}
</style>
