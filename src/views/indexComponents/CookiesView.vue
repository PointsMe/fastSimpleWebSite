<template>
    <div class="cookie-view" v-if="cookie">
        <div class="content">
            <el-row>
                <el-col :span="12">
                    <div class="col-left">
                        {{$t('cookieBottom')}}
                        <span @click="toCookiesPage">{{$t('cookieBottomAnd')}}</span>
                        {{$t('cookieBottomOne')}}
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="col-right">
                        <span @click="setCookieLocal">{{$t('agree')}}</span>
                        <span @click="setCookieLocal">{{$t('notAgree')}}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const router = useRouter();
const cookie = ref(window.localStorage.getItem('showCookie') ? false : true)
const setCookieLocal = () => {
    cookie.value = false
    window.localStorage.setItem('showCookie', 'true')
}
const toCookiesPage = ()=>{
    router.push("/cookie");
}
onMounted(() => {
})
</script>
<style scoped lang="less">
.cookie-view {
    background-color: #FED15F;
    height: 80px;
    line-height: 20px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 9;

    .content {
        width: 1280px;
        margin: auto;
        height: 100%;

        .col-left {
            // display: flex;
            height: 80px;
            // flex-direction: column;
            // justify-items: center;
            // justify-content: center;
            // align-items: center;
            margin-top: 20px;
            >span{
                text-decoration: underline;
            }
        }

        .col-right {
            display: flex;
            height: 80px;
            justify-content: center;
            >span {
                display: inline-block;
                margin-top: 20px;
                cursor: pointer;
            }

            >span:first-child {
                border-radius: 6px 6px 6px 6px;
                width: 140px;
                height: 40px;
                text-align: center;
                border: 1px solid #000000;
                padding: 8px;
                
            }
            >span:last-child{
                margin-top: 30px;
                margin-left: 50px;
            }
        }
    }

}
</style>