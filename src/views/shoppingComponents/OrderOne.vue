<template>
    <div class="order-one">
        <el-row :gutter="6" class="row-list">
                    <el-col :span="16" class="left">
                        <div class="content-list">
                            <div class="list-one">
                                <el-row>
                                    <el-col :span="12" class="left title">
                                        固定套餐
                                    </el-col>
                                    <el-col :span="12" class="right sub-title">
                                        <div class="pos-right">
                                            <el-icon>
                                                <QuestionFilled />
                                            </el-icon> 注册会员输入邀请码后，能享受€800优惠哦
                                        </div>
                                    </el-col>
                                </el-row>

                            </div>
                            <div class="list-one-i">
                                <el-row>
                                    <el-col :span="12" class="left">平板11寸HUAWEI SE</el-col>
                                    <el-col :span="12" class="right">€230</el-col>
                                    <el-col :span="12" class="left">热敏打印机</el-col>
                                    <el-col :span="12" class="right">€300</el-col>
                                    <el-col :span="12" class="left">平板收银防盗支架</el-col>
                                    <el-col :span="12" class="right">€70</el-col>
                                    <el-col :span="12" class="left">FASTSIMPLE软件授权费</el-col>
                                    <el-col :span="12" class="right">€200</el-col>
                                </el-row>
                            </div>
                            <div class="list-one-j">
                                <div>
                                    <span>正常价:</span>
                                    <span class="normal">
                                        €800
                                    </span>
                                    <span class="m-f-20">邀请价:</span>
                                    <span class="origin">
                                        €800
                                    </span>
                                    <div class="pos-abs">
                                        <AddNum />
                                    </div>
                                </div>
                                <div>
                                    <span style="color: #FF0000;">*</span>
                                    固定套餐数量每增加一套，FASTSIMPLE标配版年费增加€10/年
                                </div>
                            </div>
                        </div>
                        <div class="content-list-a">
                            <el-row>
                                <el-col :span="12" class="left">
                                    FASTSIMPLE标配版年费（1打印机+1平板）
                                </el-col>
                                <el-col :span="12" class="right">
                                    <div class="radio-common">
                                        <el-radio-group>
                                            <el-radio :value="3">
                                                <div class="radio-con">
                                                    购买<span class="oragin">€216</span>
                                                </div>
                                            </el-radio>
                                            <el-radio :value="6">
                                                <div>
                                                    租用/月<span class="grey">€20</span>
                                                </div>
                                            </el-radio>
                                        </el-radio-group>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="right tips">
                                    <span style="color: #FF0000;">*</span>二选一
                                </el-col>
                            </el-row>
                        </div>
                        <div class="content-list-a">
                            <el-row>
                                <el-col :span="12" class="left">
                                    POS机(刷卡机)
                                </el-col>
                                <el-col :span="12" class="right">
                                    <div class="radio-common">
                                        <el-radio-group>
                                            <el-radio :value="3">
                                                <div class="radio-con">
                                                    购买<span class="oragin">€220</span>
                                                </div>
                                            </el-radio>
                                            <el-radio :value="6">
                                                <div>
                                                    租用/月<span class="grey">€10</span>
                                                </div>
                                            </el-radio>
                                        </el-radio-group>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="right tips">
                                    <span style="color: #FF0000;">*</span>二选一
                                </el-col>
                            </el-row>
                        </div>
                        <div class="content-list-a">
                            <el-row>
                                <el-col :span="12" class="left">
                                    点单收银打印扫码PDA
                                </el-col>
                                <el-col :span="12" class="right">
                                    <div class="radio-common">
                                        <el-checkbox-group>
                                            <el-checkbox label="Option A" value="Value A">
                                                <div class="radio-con">
                                                    80mm<span class="grey">€800</span>
                                                </div>
                                            </el-checkbox>
                                            <el-checkbox label="Option B" value="Value B">
                                                <div class="radio-con">
                                                    58mm<span class="grey">€600</span>
                                                </div>
                                            </el-checkbox>
                                        </el-checkbox-group>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="content-list-a">
                            <el-row>
                                <el-col :span="12" class="left">
                                    WIFI SIM卡版路由器
                                </el-col>
                                <el-col :span="12" class="right">
                                    <div class="num-div">
                                        台/<span>€100</span>
                                        <div class="pos-abs">
                                            <AddNum />
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="content-list-a">
                            <el-row>
                                <el-col :span="12" class="left">
                                    钱箱
                                </el-col>
                                <el-col :span="12" class="right">
                                    <div class="num-div">
                                        个/<span>€8</span>
                                        <div class="pos-abs">
                                            <AddNum />
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="content-list-a">
                            <el-row>
                                <el-col :span="12" class="left">
                                    热敏打印机
                                </el-col>
                                <el-col :span="12" class="right">
                                    <div class="num-div">
                                        个/<span class="oragin">€300</span>
                                        <div class="pos-abs">
                                            <AddNum />
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="right tips">
                                    <span style="color: #FF0000;">*</span>热敏打印机每增加一台，FASTSIMPLE标配版年费增加€10/年（上限2台）
                                </el-col>
                            </el-row>
                        </div>
                        <div class="content-list-b">
                            <el-row>
                                <el-col :span="24" class="title-b">SOFATTURA套餐</el-col>
                                <el-col :span="24">
                                    <el-checkbox-group class="g-b">
                                        <el-checkbox label="Option A" value="Value A">
                                            <div class="c-b">
                                                A套餐200张发票 /
                                                <span class="mon">€100</span>
                                            </div>
                                        </el-checkbox>
                                        <el-checkbox label="Option A" value="Value A">
                                            <div class="c-b">
                                                A套餐200张发票 /
                                                <span class="mon">€100</span>
                                            </div>
                                        </el-checkbox>
                                        <el-checkbox label="Option A" value="Value A">
                                            <div class="c-b">
                                                A套餐200张发票 /
                                                <span class="mon">€100</span>
                                            </div>
                                        </el-checkbox>
                                        <el-checkbox label="Option A" value="Value A">
                                            <div class="c-b">
                                                A套餐200张发票 /
                                                <span class="mon">€100</span>
                                            </div>
                                        </el-checkbox>
                                        <el-checkbox label="Option A" value="Value A">
                                            <div class="c-b">
                                                A套餐200张发票 /
                                                <span class="mon">€100</span>
                                            </div>
                                        </el-checkbox>
                                        <el-checkbox label="Option A" value="Value A">
                                            <div class="c-b">
                                                A套餐200张发票 /
                                                <span class="mon">€100</span>
                                            </div>
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="content-list content-list-top">
                            <div class="list-one">
                                <el-row>
                                    <el-col :span="12" class="left title">
                                        服务选购
                                    </el-col>
                                </el-row>

                            </div>
                            <div class="list-one-i none-m-b">
                                <el-row>
                                    <el-col :span="12" class="left">远程指导安装人工费</el-col>
                                    <el-col :span="12" class="right">
                                        <div class="all-i">
                                            <span class="i-1"> 小时/</span><span class="i-2">€230</span>
                                            <div class="pos-abs">
                                                <AddNum />
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="12" class="left">商品人工导入费</el-col>
                                    <el-col :span="12" class="right">
                                        <div class="c-k-a">
                                            <el-checkbox-group>
                                                <el-checkbox label="Option A" value="Value A">
                                                    <span class="num-c">€100</span>
                                                </el-checkbox>
                                                <el-checkbox label="Option A" value="Value A">
                                                    <span class="num-c">€200</span>
                                                </el-checkbox>
                                            </el-checkbox-group>
                                        </div>
                                    </el-col>
                                    <el-col :span="12" class="left">商品人工翻译费</el-col>
                                    <el-col :span="12" class="right">
                                        <div class="all-i">
                                            <span class="i-1"> 语言/</span><span class="i-2">€50</span>
                                            <div class="pos-abs">
                                                <AddNum />
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="12" class="left">人工售后费</el-col>
                                    <el-col :span="12" class="right">
                                        <div class="all-i">
                                            <span class="i-1"> 30分钟/</span><span class="i-2">€10</span>
                                            <div class="pos-abs">
                                                <AddNum />
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="right">
                        <div class="content-list-right">
                            <div class="title">
                                <el-row :gutter="12">
                                    <el-col :span="10" class="col-a">
                                        <div class="line"></div>
                                    </el-col>
                                    <el-col :span="4" class="col-a">
                                        总计
                                    </el-col>
                                    <el-col :span="10" class="col-a">
                                        <div class="line"></div>
                                    </el-col>
                                </el-row>
                            </div>
                            <div class="all-order">
                                <div class="order-list">
                                    <el-row>
                                        <el-col :span="24" class="left">
                                            平板11寸HUAWEI SE*1
                                        </el-col>
                                        <el-col :span="24" class="left">
                                            热敏打印机*1
                                        </el-col>
                                        <el-col :span="24" class="left">
                                            平板收银防盗支架*1
                                        </el-col>
                                        <el-col :span="20" class="left">
                                            FASTSIMPLE软件授权费*1
                                        </el-col>
                                        <el-col :span="4" class="right">
                                            €800
                                        </el-col>
                                    </el-row>
                                </div>
                                <div class="order-i">
                                    <el-row>
                                        <el-col :span="24" class="left">
                                            FASTSIMPLE标配版年费
                                        </el-col>
                                        <el-col :span="20" class="left tips">
                                            1打印机+1平板
                                        </el-col>
                                        <el-col :span="4" class="right tips-1">
                                            €216
                                        </el-col>
                                    </el-row>
                                </div>
                                <div class="order-i">
                                    <el-row>
                                        <el-col :span="24" class="left">
                                            POS机（刷卡机）*1
                                        </el-col>
                                        <el-col :span="20" class="left tips">
                                            购买
                                        </el-col>
                                        <el-col :span="4" class="right tips-1">
                                            €220
                                        </el-col>
                                    </el-row>
                                </div>
                                <div class="order-i">
                                    <el-row>
                                        <el-col :span="20" class="left">
                                            热敏打印机*2
                                        </el-col>
                                        <el-col :span="4" class="right">
                                            €600
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                            <div class="order-btn">
                                <el-row>
                                    <el-col :span="8" class="left-i">
                                        <span class="word">总计：</span>
                                    </el-col>
                                    <el-col :span="16" class="right-i">
                                        €1816
                                    </el-col>
                                    <el-col :span="24">
                                        <el-input class="input-h" placeholder="输入邀请码立减400€" size="large" />
                                    </el-col>
                                    <el-col :span="24">
                                        <el-button class="button-h" @click="toPay">立即购买</el-button>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-col>
        </el-row>
    </div>
</template>
<script setup lang="ts">
import AddNum from "./AddNum.vue"
import { QuestionFilled } from '@element-plus/icons-vue'
const emits = defineEmits(['toPay'])
defineOptions({
    name: 'orderOne'
})
const toPay = ()=> {
    console.log("aaaaa")
    emits('toPay')
}
</script>
<style scoped lang="less">
        .order-one {
.row-list {
    .pos-abs {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .el-col {
        display: flex;
        flex-direction: column;
    }
    .content-list,
    .content-list-right {
        height: 100%; // 确保内容容器占满高度
    }
    .content-list-right {
        padding: 30px;
        background-color: #FFFFFF;
        border-radius: 6px;
        position: relative;
        .order-btn{
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            padding: 0px 30px 30px 30px;
            .input-h{
                text-align: center;
                height: 60px;
                margin-top: 16px;
            }
            .button-h{
                text-align: center;
                height: 60px;
                background: #1B1B1B;
                margin-top: 10px;
                font-family: Inter, Inter;
                font-weight: 500;
                font-size: 16px;
                color: #FFFFFF;
            }
            .left-i{
                text-align: left;
                font-family: Source Han Sans SC, Source Han Sans SC;
font-weight: 400;
font-size: 16px;
color: #1B1B1B;
position: relative;
.word{
position: absolute;
bottom: 10px;
left: 0;
}
            }
            .right-i{
                text-align: right;
                font-family: Inter, Inter;
font-weight: bold;
font-size: 48px;
color: #1A1A1A;
            }
        }
        .all-order {
            .left {
                text-align: left;
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 16px;
                padding-top: 30px;
            }

            .right {
                padding-top: 30px;
                font-family: DIN, DIN;
                font-weight: 500;
                font-size: 18px;
                color: #1A1A1A;
            }

            .order-i {
                border-bottom: 1px solid #EDEDED;
                padding-bottom: 24px;

                .tips-1 {
                    padding-top: 0;
                }

                .tips {
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 400;
                    font-size: 14px;
                    color: #999999;
                    padding-top: 0;
                }
            }

            .order-list {
                border-bottom: 1px solid #EDEDED;
                padding-bottom: 24px;


            }
        }

        .title {
            text-align: center;

            .col-a {
                position: relative;

                .line {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 50%;
                    height: 1px;
                    /* 初始高度1px */
                    background: #BDBDBD;
                    transform: scaleY(0.5);
                    /* 垂直缩放至0.5倍 */
                    transform-origin: 0 0;
                    /* 确保缩放基点正确 */
                }
            }
        }
    }

    .left {
        text-align: left;

        .title {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 16px;
            color: #1B1B1B;
        }

        .sub-title {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 12px;
            color: #646464;

            .pos-right {
                position: absolute;
                right: 0;
                bottom: 0;

                .el-icon {
                    color: #2865FF;
                    font-size: 13px;
                }

                // font-size: 13px;
            }
        }
    }

    .right {
        text-align: right;
    }


    .content-list-b {
        padding: 30px;
        background-color: #ffffff;
        margin-top: 5px;
        border-radius: 6px;

        .g-b {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 14px;
            color: #646464;

            .c-b {
                .mon {
                    font-family: DIN, DIN;
                    font-weight: 500;
                    font-size: 18px;
                    color: #999999;
                }
            }
        }

        .title-b {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 16px;
            color: #1B1B1B;
        }

    }

    .content-list-a {
        padding: 30px;
        margin-top: 5px;
        background-color: #FFFFFF;
        border-radius: 6px;

        .tips {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400 !important;
            font-size: 14px !important;
            color: #999999;
        }

        .left {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 500;
            font-size: 16px;
            color: #1B1B1B;
        }

        .right {
            .oragin {
                color: #FDB522;
            }

            .grey {
                color: #999999;
            }

            .num-div {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 14px;
                color: #646464;
                position: relative;
                width: 100%;
                height: 100%;
                padding-right: 102px;

                .oragin {
                    color: #FDB522;
                }

                >span {
                    font-family: DIN, DIN;
                    font-weight: 500;
                    font-size: 18px;
                    color: #999999;
                }
            }

            .radio-common {
                .radio-con {
                    font-family: Source Han Sans SC, Source Han Sans SC;
                    font-weight: 500;
                    font-size: 14px;
                    color: #646464;
                }
            }
        }
    }

    .content-list-top {
        margin-top: 5px;
    }

    .content-list {
        padding: 30px;
        background-color: #FFFFFF;
        border-radius: 6px;

        .list-one-j {
            text-align: right;
            padding-top: 28px;

            >div:first-child {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 500;
                font-size: 14px;
                color: #646464;
                position: relative;
                padding-right: 120px;

                .normal {
                    font-family: DIN, DIN;
                    font-weight: 500;
                    font-size: 18px;
                    color: #999999;
                }

                .m-f-20 {
                    margin-left: 30px;
                }

                .origin {
                    font-family: DIN, DIN;
                    font-weight: 500;
                    font-size: 18px;
                    color: #FDB522;
                }
            }

            >div:last-child {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 14px;
                color: #646464;
            }
        }

        .none-m-b {
            border: none !important;
            padding-bottom: 0px !important;
        }

        .list-one-i {
            padding-left: 10px;
            padding-bottom: 28px;
            border-bottom: 1px solid #EDEDED;

            .left {
                padding-top: 28px;
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 16px;
                color: #595959;
            }

            .right {
                padding-top: 28px;
                font-family: DIN, DIN;
                font-weight: 500;
                font-size: 16px;
                color: #999999;

                .c-k-a {
                    .num-c {
                        font-family: DIN, DIN;
                        font-weight: 500;
                        font-size: 18px;
                        color: #999999;
                    }
                }

                .all-i {
                    padding-right: 102px;
                    position: relative;

                    .i-1 {
                        font-family: Source Han Sans SC, Source Han Sans SC;
                        font-weight: 500;
                        font-size: 14px;
                        color: #646464;
                    }

                    .i-2 {
                        font-family: DIN, DIN;
                        font-weight: 500;
                        font-size: 18px;
                        color: #999999;
                    }
                }
            }
        }

        .list-one {
            padding-left: 10px;
            padding-bottom: 20px;
            border-bottom: 1px solid #EDEDED;
        }
    }
}

}
</style>