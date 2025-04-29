
export const setToken = (value: string)=>{
    return window.localStorage.setItem('token',value)
}

export const getToken = ()=>{
    return window.localStorage.getItem('token')
}

export const removeToken = ()=>{
    return window.localStorage.removeItem('token')
}

export const setCountryListStorage = (value:any)=>{
    return window.localStorage.setItem('countryList',JSON.stringify(value))
}

export const getCountryListStorage = ()=>{
    return window.localStorage.getItem('countryList') as any
}

export const removeCountryListStorage = ()=>{
    return window.localStorage.removeItem('countryList')
}

export const setUserInfoStorage = (value:any)=>{
    return window.localStorage.setItem('userInfo',JSON.stringify(value))
}

export const getUserInfoStorage = ()=>{
    return window.localStorage.getItem('userInfo') as any
}

export const removeUserInfoStorage = ()=>{
    return window.localStorage.removeItem('userInfo')
}