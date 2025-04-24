export const emailFormStep1 =     [
    {
        span: 12,
        label: '',
        value: 'firstName',
        type: 'input',
        placeholder:'请输入您的姓'
    },
    {
        span: 12,
        label: '',
        value: 'lastName',
        type: 'input',
        placeholder:'请输入您的名'
    },
    {
        span: 24,
        label: '',
        value: 'email',
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
        value: 'code',
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
        value: 'firstName',
        type: 'input',
        placeholder:'请输入您的姓'
    },
    {
        span: 12,
        label: '',
        value: 'lastName',
        type: 'input',
        placeholder:'请输入您的名'
    },
    {
        span: 24,
        label: '',
        value: 'email',
        type: 'input',
        placeholder:'请输入您的手机号码',
        haveEmailSelect: false,
        haveBtn: false,
        haveIcon: false,
        haveTelSelect:true
    },
    {
        span: 24,
        label: '',
        value: 'code',
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
export const formStep2 =     [
    {
        span: 12,
        label: '',
        value: 'firstName',
        type: 'input',
        placeholder:'公司名称',
    },
    {
        span: 12,
        label: '',
        value: 'lastName',
        type: 'input',
        placeholder:'公司税号P.IVA/CF'
    },
    {
        span: 24,
        label: '',
        value: 'email',
        type:'select',
        optionsData:[
            {
                label: '意大利',
                value: ''
            }
        ],
        placeholder:'请选择门店类型',
      
    },
    {
        span: 12,
        label: '',
        value: 'email',
        type:'select',
        optionsData:[
            {
                label: '意大利',
                value: '1'
            },
            {
                label: '中国',
                value: '2'
            }
        ],
        placeholder:'国家，地区',
    },
    {
        span: 12,
        label: '',
        value: 'code',
        type: 'input',
        placeholder:'邮编',
    },
    {
        span: 24,
        label: '',
        value: 'password',
        type: 'input',
        placeholder:'街道，门牌',
    },
]