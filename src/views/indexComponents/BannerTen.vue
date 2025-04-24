<template>
  <div class="banner-10-div">
    <div class="content">
      <el-row>
        <el-col :span="10" class="col-con">
          <div class="col-left">
            <p>联系我们</p>
            <p>与我们联系以获取专家支持和合作机会</p>
          </div>
          <div class="con-left-i">
            <p>邮箱: info@yine.it</p>
            <p>地址: Via Procaccini 11, 20154 – Milano (MI)</p>
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
                  <el-form-item label="姓名" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      placeholder="请输入您的姓"
                      size="large"
                      v-model="formLabelAlign.name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="邮箱" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      placeholder="请输入您的邮箱"
                      size="large"
                      v-model="formLabelAlign.name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="电话" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      placeholder="请输入您的电话"
                      size="large"
                      v-model="formLabelAlign.name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="公司" :label-position="'top'">
                    <el-input
                      class="bg-input"
                      placeholder="请输入您的公司"
                      size="large"
                      v-model="formLabelAlign.name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="消息" :label-position="'top'">
                    <el-input
                      :rows="6"
                      class="bg-input"
                      type="textarea"
                      placeholder="请输入"
                      size="large"
                      v-model="formLabelAlign.name"
                    />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <div class="btn-div">
                    <el-button class="btn">发送消息</el-button>
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
  name: ''
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
      height: 480px;
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
      height: 480px;
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
