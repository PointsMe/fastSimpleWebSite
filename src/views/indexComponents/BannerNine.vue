<template>
    <div class="banner-9-div">
        <div class="top">
            <p>
                简化税务管理
            </p>
            <p>
                选择我们的智能解决方案，以保持您的业务领先，毫不费力地遵守西班牙不断变化的税收法规。
            </p>
        </div>
        <div class="top-t">
            <p>
                全面支持安心工作
            </p>
            <p>
                确保餐厅运作顺畅
            </p>
        </div>
        <div class="top-f">
            <el-row :gutter="12">
                <el-col :span="8">
                    <div class="current-f">
                        <p>
                            自助服务
                        </p>
                        <p>
                            平台可自动创建符合 FatturaPA 标准的XML结构电子发票，并对接SDI通道，实现B2B/B2C发票合法合规流转
                        </p>
                    </div>
                </el-col>

                <el-col :span="8">
                    <div class="current-f">
                        <p>
                            现场和远程支持
                        </p>
                        <p>
                            免费设置和启动支持，无忧开业。
                        </p>
                    </div>
                </el-col>

                <el-col :span="8">
                    <div class="current-f">
                        <p>
                            通过微信进行远程支持
                        </p>
                        <p>
                            与技术人员实时沟通解决问题。
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="list-c-6">
            <div class="flex1 flex1-y">
                <div>
                    <img src="@/assets/fastsImages/b-9-1.png" alt="">
                </div>
                <div>
                    <p>通过远程和现场服务提供全渠道支持</p>
                    <p>远程和AI服务支持。多种支持渠道，从远程电话指导到现场协助，旨在支持您的业务增长</p>
                </div>
            </div>
            <div class="flex1 flex1-g">
                <div>
                    <img src="@/assets/fastsImages/b-9-2.png" alt="">
                </div>
                <div>
                    <p>
                        完全内部开发，拥有专家技术支持
                    </p>
                    <p>
                        内部研发确保优质服务，专业团队提供全面的技术和客户支持
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.banner-9-div {
    width: 100%;
    padding-bottom: 138px;
    p {
        padding: 0;
        margin: 0;
    }

    .list-c-6 {
        display: flex;
        text-align: left;
        width: 1280px;
        margin: auto;
        margin-top: 140px;

        .flex1-y {
            background-color: #FED15F;
            color: #181818;
            margin-right: 10px;
        }

        .flex1-g {
            background: #181818;
            color: #FED15F;
            margin-left: 10px;
        }

        .flex1 {
            flex: 1;
            padding: 40px 30px;

            img {
                width: 42px;
            }

            p {
                padding: 0;
                margin: 0;
            }

            div {
                >p:first-child {
                    font-size: 24px;
                    padding-top: 30px;
                }

                >p:last-child {
                    font-size: 14px;
                    padding-top: 15px;
                }
            }
        }
    }

    .top-f {
        width: 1280px;
        margin: auto;
        margin-top: 60px;

        .current-f {
            text-align: center;
            padding: 16px 26px;
            border-left: 1px solid #1B1B1B;

            >p:first-child {
                font-weight: bold;
                font-size: 24px;
                color: #000000;
            }

            >p:last-child {
                font-family: Source Han Sans SC, Source Han Sans SC;
                font-weight: 400;
                font-size: 14px;
                color: #1A1A1A;
                padding-top: 5px;
            }
        }
    }

    .top-t {
        margin: auto;
        margin-top: 150px;
        width: 1280px;

        >p:first-child {
            font-weight: bold;
            font-size: 52px;
            color: #1A1A1A;
        }

        >p:last-child {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 18px;
            color: #1A1A1A;
        }
    }

    .top {
        width: 100%;
        background: linear-gradient(#1E1E1E 0%, #111111 100%);
        border-radius: 0px 0px 0px 0px;
        padding: 120px 0;
        text-align: center;

        >p:first-child {
            font-weight: bold;
            font-size: 52px;
            color: #FFFFFF;
        }

        >p:last-child {
            font-family: Source Han Sans SC, Source Han Sans SC;
            font-weight: 400;
            font-size: 18px;
            color: #FFFFFF;
        }
    }
}
</style>