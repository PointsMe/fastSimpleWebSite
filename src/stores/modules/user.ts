import { pinia } from "@/stores/index"
// import { getCurrentUserApi } from "@@/apis/users"
import { defineStore } from 'pinia'
import { setToken as _setToken, getToken, removeToken } from "@/utils/cache/cookies"

export const useUserStore = defineStore("user", () => {
  const token = ref<string>(getToken() || "xxxxxx")
  const roles = ref<string[]>([])
  const username = ref<string>("")

  // 设置 Token
  const setToken = (value: string) => {
    _setToken(value)
    token.value = value
  }

  // 获取用户详情
//   const getInfo = async () => {
//     const { data } = await getCurrentUserApi()
//     username.value = data.username
//     // 验证返回的 roles 是否为一个非空数组，否则塞入一个没有任何作用的默认角色，防止路由守卫逻辑进入无限循环
//     roles.value = data.roles?.length > 0 ? data.roles : routerConfig.defaultRoles
//   }


  // 重置 Token
  const resetToken = () => {
    removeToken()
    token.value = ""
    roles.value = []
  }

  return { token, roles, username, setToken, resetToken }
})

/**
 * @description 在 SPA 应用中可用于在 pinia 实例被激活前使用 store
 * @description 在 SSR 应用中可用于在 setup 外使用 store
 */
export function useUserStoreOutside() {
  return useUserStore(pinia)
}