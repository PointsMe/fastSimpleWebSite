import { useCommonStoreOutside } from "@/stores/modules/common"
const commonStoreOutside = useCommonStoreOutside()
export const emailFormStep1 =     [
    {
        span: 12,
        label: '',
        value: 'name',
        type: 'input',
        placeholder:'请输入您的姓名'
    },
    {
        span: 12,
        label: '',
        value: 'storeName',
        type: 'input',
        placeholder:'请输入您的门店名称',
        onEventFunction: 'changeStoreName'
    },
    {
        span: 24,
        label: '',
        value: 'account',
        type: 'input',
        placeholder:'请输入您的邮箱',
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
        placeholder:'请输入您的验证码',
        haveEmailSelect: false,
        haveBtn: true,
        haveIcon: false
    },
    {
        span: 24,
        label: '',
        value: 'password',
        type: 'input',
        placeholder:'请输入您的密码',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true
    },
    {
        span: 24,
        label: '',
        value: 'againpassword',
        type: 'input',
        placeholder:'请再次输入您的密码',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true
    },

]
export const phoneFormStep1 =[
    {
        span: 12,
        label: '',
        value: 'name',
        type: 'input',
        placeholder:'请输入您的姓姓名',
        onEventFunction: 'changeName'
    },
    {
        span: 12,
        label: '',
        value: 'storeName',
        type: 'input',
        placeholder:'请输入您的门店名称',
        onEventFunction: 'changeStoreName'
    },
    {
        span: 24,
        label: '',
        value: 'account',
        type: 'input',
        placeholder:'请输入您的手机号码',
        onEventFunction: 'changeAccount',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: false,
        haveTelSelect:true
    },
    {
        span: 24,
        label: '',
        value: 'verificationCode',
        type: 'input',
        placeholder:'请输入您的验证码',
        haveEmailSelect: false,
        haveBtn: true,
        haveIcon: false
    },
    {
        span: 24,
        label: '',
        value: 'password',
        type: 'input',
        placeholder:'请输入您的密码',
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
        placeholder:'请再次输入您的密码',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: true,
        typePass: 'password'
    },
]
export const formStep2 =     [
    {
        span: 12,
        label: '',
        value: 'name',
        type: 'input',
        placeholder:'公司名称',
    },
    {
        span: 12,
        label: '',
        value: 'vatNumber',
        type: 'input',
        placeholder:'公司税号P.IVA/CF'
    },
    {
        span: 24,
        label: '',
        value: 'compony',
        type:'select',
        disabled:true,
        optionsData:[
            {
                label: 'fastSimple compony',
                value: '1'
            }
        ],
        placeholder:'请选择门店类型',
      
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
        placeholder:'国家',
    },
    {
        span: 8,
        label: '',
        value: 'provinceId',
        type:'select',
        optionsData:[],
        placeholder:'地区',
    },
    {
        span: 8,
        label: '',
        value: 'city',
        type: 'input',
        placeholder:'城市',
    },
    {
        span: 24,
        label: '',
        value: 'zipcode',
        type: 'input',
        placeholder:'邮编',
    },
    {
        span: 24,
        label: '',
        value: 'address',
        type: 'input',
        placeholder:'街道，门牌',
    },
    {
        span: 24,
        label: '',
        value: 'taxCode',
        type: 'input',
        placeholder:'接收发票代码CODICE UNIVOCO / 税务邮箱PEC',
    },
]