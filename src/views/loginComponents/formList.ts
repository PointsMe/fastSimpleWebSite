import { bizList } from "@/http/config"
export const emailFormStep1 = [
    {
        span: 24,
        label: '',
        value: 'account',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputEmail',
        haveEmailSelect: true,
        haveBtn: false,
        haveIcon: false,
        haveTelSelect: false,
    },
    {
        span: 24,
        label: '',
        value: 'password',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputPassword',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true,
        typePass: 'password',
    },
    {
        span: 24,
        label: '',
        value: 'biz',
        type: 'radioGroup',
        optionsData: bizList.filter(iv => iv.value !== '111'),
        placeholder: 'aboutLogin.biz',
        otherStyle:{
            display: 'block'
        }
    },
]
export const phoneFormStep1 = [
    {
        span: 24,
        label: '',
        value: 'account',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputTel',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: false,
        haveTelSelect: true,
    },
    {
        span: 24,
        label: '',
        value: 'password',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputPassword',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true,
        typePass: 'password',
    },
    {
        span: 24,
        label: '',
        value: 'biz',
        type: 'radioGroup',
        optionsData: bizList.filter(iv => iv.value !== '111'),
        placeholder: 'aboutLogin.pleaseInputBiz',
        otherStyle:{
            display: 'block'
        }
    },
]