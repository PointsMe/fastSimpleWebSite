import { pinia } from "@/stores/index"
import { getCountryListApi } from "@/apis/common"
import { defineStore } from 'pinia'
import {setCountryListStorage,getCountryListStorage} from "@/utils/cache/cookies"
import type * as Types from "@/apis/type"
export const useCommonStore = defineStore("common", () => {
  const countryList = ref<Array<Types.country>>(JSON.parse(getCountryListStorage()))
  //获取国家列表
  const getCountryList = async () => {
    const { data } = await getCountryListApi()
    countryList.value = data
    setCountryListStorage(data)
  }
  return { countryList, getCountryList }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useCommonStoreOutside() {
  return useCommonStore(pinia)
}