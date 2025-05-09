<template>
    <div class="shopping-new-index">
        <div class="content">
            <div class="shopping-tab">
                <el-row :gutter="6">
                    <el-col :span="8" class="shopping-col" v-for="(item,index) in tabArr" :key="index">
                        <div @click="changeTab(item.id)"
                            :class="item.checked ? 'shopping-content choosed' : 'shopping-content'">
                            <p :class="index +1 === tabArr.length ? 't_c l_t_c' : 't_c'">
                                {{ item.subtitle }}
                            </p>
                            <p class="t_d" v-if="index + 1 !== tabArr.length">
                                {{ item.name }}
                            </p>
                            <span></span>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="tab-content">
                <div v-for="(item,index) in tabArr" :key="index">
                    <OrderOne v-if="!index && item.checked" :id="item.id" @toPay="toPayDrawer"/>
                    <OrderTwo v-if="index === 1 && item.checked" :id="item.id" @toPay="toPayDrawer"/>
                    <OrderThree v-if="index === 2 && item.checked" :id="item.id" @toPay="toPayDrawer"/>
                </div>
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
import {getGoodsListApi} from "@/apis/goods"
import {useShoppingCartStore} from "@/stores/modules/shoppingCart"
const shoppingCartStore = useShoppingCartStore()
defineOptions({
    name: 'shoppingNewIndex'
})
const hardwareSelection = {
    id: '1003',
    name: '',
    subtitle: '硬件选购',
    checked: false
}
const DrawerRef = ref();
const tab = ref<string>('1')
const tabArr = ref<Array<{
    id: string
    name: string
    subtitle: string
    checked: boolean
}>>([])
// {
//     id: '1001',
//     name: 'FASTSIMPLE BASIC',
//     subtitle: '基础套餐',
//     checked: false
// },
// {
//     id: '1002',
//     name: 'FASTSIMPLE premiun',
//     subtitle: '升级套餐',
//     checked: false
// },hardwareSelection
const toPayDrawer = (orderList:any)=>{
    console.log("toPayDrawer=>",shoppingCartStore.cart)
    if(DrawerRef.value){
        DrawerRef.value.showDrawer(orderList)
    }
}
const changeTab = (val: string) => {
    tabArr.value = tabArr.value.map(item=>{
        return {
            ...item,
            checked: item.id === val ? true : false
        }
    })
    tab.value = val
    shoppingCartStore.setCart({
        type:'',
        items:[]
    })
}
const getData=async()=>{
    const { data } = await getGoodsListApi()
    if(data && data.length > 0){
        console.log("res===>",data)
        const list = data.map((item: any,index: number) =>{
            return {
                id: item.id,
                name: item.name,
                subtitle: item.subtitle,
                checked: !index ? true : false
            }
        })
        console.log("list.contact(hardwareSelection)",list)
        list.push(hardwareSelection)
        tabArr.value = list
    }
}
onMounted(()=>{
    getData()
})
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
                    .l_t_c{
                        height: 100%;
                        line-height: 3;
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
                    .l_t_c{
                        height: 100%;
                        line-height: 3;
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