import { useCommonStoreOutside } from "@/stores/modules/common"
import { bizList } from "@/http/config"
const commonStoreOutside = useCommonStoreOutside()
export const emailFormStep1 =     [
    {
        span: 24,
        label: '',
        value: 'name',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputName',
    },
    // {
    //     span: 12,
    //     label: '',
    //     value: 'storeName',
    //     type: 'input',
    //     placeholder: 'aboutLogin.pleaseInputStoreName',
    //     onEventFunction: 'changeStoreName'
    // },
    {
        span: 24,
        label: '',
        value: 'emailAccount',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputEmail',
        haveEmailSelect: true,
        haveBtn: false,
        haveIcon: false,
        haveTelSelect:false
    },
    {
        span: 24,
        label: '',
        value: 'verificationCode',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputCode',
        haveEmailSelect: false,
        haveBtn: true,
        haveIcon: false
    },
    {
        span: 24,
        label: '',
        value: 'password',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputPassword',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true
    },
    {
        span: 24,
        label: '',
        value: 'againpassword',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputPasswordAgain',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true
    },

]
export const phoneFormStep1 =[
    {
        span: 24,
        label: '',
        value: 'name',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputName',
        onEventFunction: 'changeName'
    },
    {
        span: 24,
        label: '',
        value: 'phoneAccount',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputTel',
        onEventFunction: 'changeAccount',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: false,
        haveTelSelect:true,
        typePass: 'number'
    },
    {
        span: 24,
        label: '',
        value: 'verificationCode',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputCode',
        haveEmailSelect: false,
        haveBtn: true,
        haveIcon: false
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
        typePass: 'password'
    },
    {
        span: 24,
        label: '',
        value: 'againpassword',
        type: 'input',
        placeholder: 'aboutLogin.pleaseInputPasswordAgain',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true,
        typePass: 'password'
    },
]
export const formStep2 =     [
    {
        span: 24,
        label: '',
        value: 'biz',
        type: 'select',
        optionsData: bizList.filter(iv => iv.value === '111'),
        placeholder: '',
        otherStyle:{
            display: 'none'
        }
    },
    {
        span: 12,
        label: '',
        value: 'subName',
        type: 'input',
        placeholder: 'aboutLogin.componeyName',
    },
    {
        span: 12,
        label: '',
        value: 'vatNumber',
        type: 'input',
        placeholder: 'aboutLogin.componeyPI',
    },
    {
        span: 24,
        label: '',
        value: 'biz',
        type:'select',
        optionsData:[
            {
                label: 'JOINKU',
                value: '103'
            },
            {
                label: 'BEAUTY',
                value: '113'
            }
        ],
        placeholder:'aboutLogin.biz',
    },
    {
        span: 8,
        label: '',
        value: 'countryId',
        type:'select',
        onEventFunction: 'changeCountryId',
        optionsData: (commonStoreOutside.countryList || []).map(item=> {
            return {
                label: item.name,
                value: item.id
            }
        }),
        placeholder: 'aboutLogin.countryName',
    },
    {
        span: 8,
        label: '',
        value: 'provinceId',
        type:'select',
        optionsData:[],
        placeholder: 'aboutLogin.printent',
    },
    {
        span: 8,
        label: '',
        value: 'city',
        type: 'input',
        placeholder: 'aboutLogin.city',
    },
    {
        span: 24,
        label: '',
        value: 'zipcode',
        type: 'input',
        placeholder: 'aboutLogin.cityEmail',
    },
    {
        span: 24,
        label: '',
        value: 'address',
        type: 'input',
        placeholder: 'aboutLogin.address',
    },
    {
        span: 24,
        label: '',
        value: 'taxCode',
        type: 'input',
        placeholder: 'aboutLogin.point',
    },
]