<template>
 <el-select
        v-model="commonStore.language"
        placeholder="zh"
        @change="changeCountry"
    >
        <el-option
            v-for="item in languageList"
            :key="item.code"
            :label="item.label"
            :value="item.code"
            >
    </el-option>
  </el-select>
</template>
<script setup lang="ts">
import {languageList} from "@/http/config"
import { useCommonStore } from "@/stores/modules/common"
import {reFlushWindows} from "@/utils/index"
defineOptions({
    name: 'languageView'
})
const commonStore = useCommonStore()
// const emits = defineEmits(['changeCountry'])
const changeCountry = (e:string)=>{
    console.log(e)
    commonStore.setLanguageFn(e)
    reFlushWindows()
}

</script>
<style scoped lang="less">
.all-country{
    width: 120px;
    img{
        width: 15px;
        height: 15px;
    }
    >span{
        display: inline-block;
    }
    >span:first-child{
        margin-left: 20px;
    }
}
</style>