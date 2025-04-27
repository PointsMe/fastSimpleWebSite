<template>
    <div class="shopping-new-index">
        <div class="content">
            <div class="shopping-tab">
                <el-row :gutter="6">
                    <el-col :span="8" class="shopping-col">
                        <div @click="changeTab('1')"
                            :class="tab === '1' ? 'shopping-content choosed' : 'shopping-content'">
                            <p class="t_c">
                                FASTSIMPLE BASIC
                            </p>
                            <p class="t_d">
                                基础套餐
                            </p>
                            <span></span>
                        </div>
                    </el-col>

                    <el-col :span="8" class="shopping-col">
                        <div @click="changeTab('2')"
                            :class="tab === '2' ? 'shopping-content choosed' : 'shopping-content'">
                            <p class="t_c">
                                FASTSIMPLE PREMIUN
                            </p>
                            <p class="t_d">
                                升级套餐
                            </p>
                            <span></span>
                        </div>
                    </el-col>

                    <el-col :span="8" class="shopping-col">
                        <div @click="changeTab('3')"
                            :class="tab === '3' ? 'shopping-content choosed' : 'shopping-content'">
                            <p class="t_c" style="height: 100%;line-height: 3;">
                                硬件加购
                            </p>
                            <!-- <p class="t_d">
                                基础套餐
                            </p> -->
                            <span></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="tab-content">
                <OrderOne v-if="tab === '1'" @toPay="toPayDrawer"/>
                <OrderTwo v-if="tab === '2'" />
                <OrderThree v-if="tab === '3'" />
            </div>
        </div>
        <DrawerView ref="DrawerRef"/>
    </div>
</template>
<script setup lang="ts">
import OrderOne from "./OrderOne.vue"
import OrderTwo from "./OrderTwo.vue"
import OrderThree from "./OrderThree.vue"
import DrawerView from "./DrawerView.vue"
defineOptions({
    name: 'shoppingNewIndex'
})
const DrawerRef = ref();
const tab = ref<string>('1')
const toPayDrawer = ()=>{
    console.log("toPayDrawer=>",DrawerRef)
    if(DrawerRef.value){
        DrawerRef.value.showDrawer()
    }
}
const changeTab = (val: string) => {
    tab.value = val
}
defineExpose({
    toPayDrawer
})
</script>
<style scoped lang="less">
.shopping-new-index {
    width: 100%;
    background-color: #F6F6F4;

    p {
        margin: 0;
        padding: 0;
    }

    .content {
        width: 1280px;
        margin: auto;

        .tab-content {

            margin-top: 30px;
        }

        .shopping-tab {
            margin-top: 40px;

            .shopping-col {
                display: flex;
                flex-direction: column;

                .choosed {
                    background: linear-gradient(305deg, #1A1A1A 0%, #2F2F2F 100%);
                    box-shadow: 3px 5px 9px 0px rgba(38, 27, 8, 0.14);
                    border-radius: 4px 4px 4px 4px;

                    .t_c {
                        font-family: Inter, Inter;
                        font-weight: normal;
                        font-size: 20px;
                        color: #FED15F !important;
                    }

                    .t_d {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 20px;
                        color: #FFFFFF !important;
                    }

                    >span {
                        display: block;
                        height: 4px;
                        width: 80px;
                        background-color: #FED15F;
                        position: absolute;
                        bottom: 0px;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                }

                .shopping-content {
                    position: relative;
                    background-color: #ffffff;
                    text-align: center;
                    padding: 26px 0;
                    cursor: pointer;
                    height: 100%;

                    // line-height: 1;
                    .t_c {
                        font-family: Inter, Inter;
                        font-weight: normal;
                        font-size: 20px;
                        color: #666666;
                    }

                    .t_d {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 20px;
                        color: #666666;
                    }

                }
            }
        }
    }

}
</style>