export const setToken = (value: string)=>{
    return window.localStorage.setItem('token',value)
}

export const getToken = ()=>{
    return window.localStorage.getItem('token')
}

export const removeToken = ()=>{
    return window.localStorage.removeItem('token')
}