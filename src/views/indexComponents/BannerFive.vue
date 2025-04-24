<template>
    <div class="banner-5-div">
        <div class="content">
            <el-row>
                <el-col :span="12" class="left">
                    <div class="title">
                        独家硬件包
                    </div>
                    <div class="sub-title">
                        价格合理，效率高，随时可用
                    </div>
                </el-col>
                <el-col :span="12" class="right">
                    <div class="one-div">
                        <span>限时提供  800€</span>
                        <span>400€</span>
                    </div>
                    <div class="two-div">
                        *附加系统费用<span class="color-a">20€/月</span> (包括一台平板电脑和一台打印机)
                    </div>
                </el-col>
            </el-row>
            <el-row class="margin-top-50">
                <el-col :span="12" class="left-a">
                    前往商城，<span class="color-a">查看更多</span>
                </el-col>
                <el-col :span="12" class="right-a">
                    *图片仅供参考。具体型号请联系客服
                </el-col>
            </el-row>
            <el-row :gutter="12">
                <el-col :span="8">
                    <div class="content-list-img">
                        <img src="@/assets/fastsImages/b-5-1.png" alt="">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="content-list-img">
                        <img src="@/assets/fastsImages/b-5-2.png" alt="">
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="content-list-img">
                        <img src="@/assets/fastsImages/b-5-3.png" alt="">
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style scoped lang="less">
.banner-5-div{
    width: 100%;
    background-color: #111111;
    color: #ffffff;
    margin-top: 100px;
    .content{
        width: 1280px;
        margin: auto;
        padding: 120px 0;
        .content-list-img{
            img{
                width: 100%;
            }
        }
        .margin-top-50{
            margin-top: 100px;
            margin-bottom: 10px;
            .left-a{
            text-align: left;
            font-weight: 400;
            font-size: 16px;
            color: #D9D9D9;
            .color-a{
                    color: #FED15F;
                }
        }
        .right-a{
            text-align: right;
            font-weight: 400;
            font-size: 12px;
            color: #999999;
        }
        }

        .right{
            .two-div{
                text-align: right;
                .color-a{
                    color: #FED15F;
                }
            }
            .one-div{
                text-align: right;
                position: relative;
                >span:first-child{
                    display: block;
                    width: 210px;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 43px 43px 43px 43px;
                    border: 1px solid #D9D9D9;
                    text-align: center;
                    position: absolute;
                    right: 160px;
                    bottom: 20px;
                }
                >span:last-child{
                    font-weight: bold;
                    font-size: 60px;
                    color: #FED15F;
                    margin-left: 20px;
                }
            }
        }
        .left{
            .title{
            font-weight: bold;
            font-size: 52px;
        }
        .sub-title{
            font-weight: 400;
            font-size: 18px;
        }
        }


    }
}
</style>