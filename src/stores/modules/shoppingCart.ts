import { pinia } from "@/stores/index"
import { defineStore } from 'pinia'
export const useShoppingCartStore = defineStore("shoppingCart", () => {
  const cart = ref<{
    type: Number | string
    items: Array<any>
  }>({
    type:'',
    items:[]
  })
  const setCart = (value: any) => {
    cart.value = value
  }
  const resetCart = () => {
    cart.value = {
        type:'',
        items:[]
      }
  }

  return { cart, setCart,resetCart }
})


/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useCommonStoreOutside() {
  return useShoppingCartStore(pinia)
}