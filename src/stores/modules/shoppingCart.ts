import { pinia } from "@/stores/index"
import { defineStore } from 'pinia'
import { setOrderId as setOrderIdStorage,getOrderId as getOrderIdStorage,removeOrderId as removeOrderIdStorage } from "@/utils/cache/cookies"
export const useShoppingCartStore = defineStore("shoppingCart", () => {
  const cart = ref<{
    type: Number | string
    items: Array<any>
  }>({
    type:'',
    items:[]
  })
  const tabId = ref<string>('')
  const tabThreeShowWare = ref<Boolean>(false)
  const orderId = ref<string>(getOrderIdStorage() || '')
  const posGoods = ref<any>({
    num: 0,
    show: false,
    type: '',
    currentData: {}
  })
  const setTabThreeShowWare = (value: boolean)=>{
    tabThreeShowWare.value = value
  }
  const resetTabThreeShowWare = ()=>{
    tabThreeShowWare.value = false
  }
  const setTabId = (value: string) => {
    tabId.value = value
  }
  const hotGoods = ref<any>(false)
  const setPosGoods = (value: any) => {
    posGoods.value = value
  }
  const setHotGoods = (value: any) => {
    hotGoods.value = value
  }
  const setCart = (value: any) => {
    cart.value = value
  }
  const setOrderId = (value: string) => {
    setOrderIdStorage(value)
    orderId.value = value
  }

  const resetPosGoods = () => {
    posGoods.value = {
      num: 0,
      show: false,
      currentData: {}
    }
  }
  const resetHotGoods = () => {
    hotGoods.value = false
  }
  const resetCart = () => {
    cart.value = {
        type:'',
        items:[]
      }
  }
  const resetOrderId = () => {
    removeOrderIdStorage()
    orderId.value = ''
  }
  const resetTabId = () => {
    tabId.value = ''
  }

  return {tabThreeShowWare, cart, setCart,resetCart,orderId,setOrderId,resetOrderId,posGoods,setPosGoods,resetPosGoods,hotGoods,setHotGoods,resetHotGoods,tabId,setTabId,resetTabId,setTabThreeShowWare,resetTabThreeShowWare }
})


/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useShoppingCartStoreOutside() {
  return useShoppingCartStore(pinia)
}