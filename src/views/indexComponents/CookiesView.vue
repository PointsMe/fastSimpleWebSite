<template>
  <div class="cookie-view" v-if="cookie">
    <div class="content">
      <el-row>
        <el-col :span="12">
          <div class="col-left">
            {{ $t('cookieBottom') }}
            <span @click="toCookiesPage">{{ $t('cookieBottomAnd') }}</span>
            {{ $t('cookieBottomOne') }}
          </div>
        </el-col>
        <el-col :span="12">
          <div class="col-right">
            <span @click="setCookieLocal">{{ $t('agree') }}</span>
            <span @click="setCookieLocal">{{ $t('notAgree') }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const router = useRouter()
const cookie = ref(window.localStorage.getItem('showCookie') ? false : true)
const setCookieLocal = () => {
  cookie.value = false
  window.localStorage.setItem('showCookie', 'true')
}
const toCookiesPage = () => {
  router.push('/cookie')
}
onMounted(() => {})
</script>
<style scoped lang="less">
.cookie-view {
    background-color: #FED15F;
    line-height: 20px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;
    color: #000000;
    .content {
        width: 1280px;
        margin: auto;
        height: 100%;
        padding: 15px 0;
        .col-left {
            display: -webkit-box;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            >span{
                text-decoration: underline;
            }
        }

        .col-right {
            display: -webkit-box;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 100%;
            >span {
                cursor: pointer;
            }

            >span:first-child {
                border-radius: 6px 6px 6px 6px;
                height: 40px;
                min-width: 140px;
                text-align: center;
                border: 1px solid #000000;
                padding: 8px;
                margin-left: 80px;

            }
            >span:last-child{
                margin-left: 50px;
            }
        }
    }

}
</style>
