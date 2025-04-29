<template>
 <el-select
        v-model="value"
        filterable
        placeholder="+86"
        @change="changeCountry"
    >
        <el-option
            v-for="item in commonStore.countryList"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            >
            <!-- <div class="all-country">
                <img :src="item.icon" alt="">
                <span>{{ item.name }}</span>
                <span>({{ item.num }})</span>
            </div> -->
    </el-option>
  </el-select>
</template>
<script setup lang="ts">
import { useCommonStore } from '@/stores/modules/common';
defineOptions({
    name: 'languageView'
})
import { ref } from 'vue'
const commonStore = useCommonStore()
const emits = defineEmits(['changeCountry'])
const value = ref('中国')

const changeCountry = (e:string)=>{
    console.log(e)
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