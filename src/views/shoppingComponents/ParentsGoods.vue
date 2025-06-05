<template>
  <div class="radio-content-list">
    <el-radio-group
      v-model="radioPackage"
      v-if="minSelectCount === 1 && maxSelectCount === 1"
    >
      <el-row>
        <el-col :span="24" v-for="(iv, ivIndex) in items" :key="ivIndex">
          <el-radio :value="iv?.id">
            <span>
                {{ iv?.name }}
                <span class="right-i">€{{ iv?.price }}</span>
            </span>
          </el-radio>
        </el-col>
      </el-row>
    </el-radio-group>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
    minSelectCount: {
        type: Number,
        required: true,
    },
    maxSelectCount: {
        type: Number,
        required: true,
    },
    items:{
        type: Array<any>,
        required: true,
    }
})
const radioPackage = ref(props.items[0]?.id)
// onMounted(()=>{
//     if(props.items.length > 0){
//         radioPackage.value = props.items[0]?.id
//     }
// })
const emit = defineEmits(['changeRadioValue'])
defineExpose({
    radioPackage: radioPackage.value
})
watch(
    ()=> radioPackage.value,
    (val:any)=>{
        emit("changeRadioValue",{
            value: val,
            items: props.items
        })
    }
)
</script>
<style scoped lang="less">
.radio-content-list{
    // border-bottom: 1px solid #ededed;
    padding-bottom: 20px;
    padding-top: 20px;
    .right-i{
        float: right;
        font-family: DIN, DIN;
        font-weight: 500;
        font-size: 18px;
        color: #999999;
    }
}
</style>
