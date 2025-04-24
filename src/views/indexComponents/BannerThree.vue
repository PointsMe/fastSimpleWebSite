<template>
    <div class="b-3-div">
        <div class="title">
            多语言支持
        </div>
        <div class="sub-title">
            支持7种语言，为客户和员工提供国际服务
        </div>
        <div class="con-lan">
            <el-row>
                <el-col :span="8">
                    <div class="col-lang">
                        <img src="@/assets/fastsImages/b-3-2.png" alt="">
                        <span>Hello</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="col-lang">
                        <img src="@/assets/fastsImages/b-3-3.png" alt="">
                        <span>Bonjour</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="col-lang">
                        <img src="@/assets/fastsImages/b-3-4.png" alt="">
                        <span>Hallo</span>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <div class="col-lang1">
                        <img src="@/assets/fastsImages/b-3-5.png" alt="">
                        <span>你好</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="col-lang1">
                        <img src="@/assets/fastsImages/b-3-6.png" alt="">
                        <span>Ciao</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="col-lang1">
                        <img src="@/assets/fastsImages/b-3-7.png" alt="">
                        <span>Hola</span>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>
<style scoped lang="less">
.b-3-div {
    height: 618px;
    width: 100%;
    background-image: url('@/assets/fastsImages/b-3-1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    margin-top: 200px;
    .con-lan {
        width: 1280px;
        margin: auto;

        .col-lang {
            margin: auto;
            margin-top: 40px;
        }

        .col-lang1 {
            margin-top: 40px;
        }

        .col-lang,
        .col-lang1 {
            position: relative;
            width: 250px;
            text-align: left;

            >img {
                width: 48px;
                height: 48px;
                display: block;
                position: absolute;
                left: 0;
                top: 13px;
            }

            >span {
                font-weight: 500;
                font-size: 46px;
                color: #FED15F;
                display: block;
                margin-left: 55px;
            }
        }
    }

    .title {
        font-weight: bold;
        font-size: 52px;
        color: #FFFFFF;
        padding-top: 120px;
    }

    .sub-title {
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        margin-top: 10px;
    }
}
</style>