<script setup>
import ButtonBox from '../components/button-box.vue';
import InputBox from '../components/input-box.vue';
import { ref } from 'vue';

const page = ref(1);
const email = ref('');
const otp = ref('');

// page
function submitEmail()
{
    page.value = 2;
}
function sendCodeToEmail()
{
    page.value = 3;
}
function backPage(num)
{
    page.value = num;
}

// input
function onEmail(data)
{
    email.value = data;
}
function onOTP(data)
{
    otp.value = data;
}
</script>

<template>
    <div class="register">
        <div class="form">
            <div class="formcover">
                <div class="logo">
                    <div></div>
                    <span>Company Name</span>
                </div>
                <div class="page" v-if="page == 1">
                    <div class="title">Create an Account</div>
                    <div class="desc">Fill in the requirements below to create you account</div>
                    <div class="container">
                        <div class="inputrow">
                            <InputBox title="Email" :value="email" @oninput="onEmail" />
                        </div>
                        <div class="submitrow">
                            <ButtonBox text="Next" @click="submitEmail" />
                        </div>
                    </div>
                </div>
                <div class="page" v-if="page == 2">
                    <div class="title">Email Confirmation</div>
                    <div class="desc">Please check is this your email</div>
                    <div class="container">
                        <div class="email">
                            <div>
                                <span>TT</span>tester@gmail.com
                            </div>
                        </div>
                        <div class="submitrow">
                            <ButtonBox text="Send OTP" @click="sendCodeToEmail" />
                        </div>
                        <div class="backrow">
                            <span @click="backPage(1)">Back</span>
                        </div>
                    </div>
                </div>
                <div class="page" v-if="page == 3">
                    <div class="title">OTP Verification</div>
                    <div class="desc">Please check your email and enter the verification code below</div>
                    <div class="container">
                        <!-- <div class="resend">
                            <span>Resend OTP</span>
                        </div> -->
                        <div class="inputrow">
                            <InputBox type="otp" :value="otp" @oninput="onOTP" />
                        </div>
                        <div class="submitrow">
                            <ButtonBox text="SIGN IN" @click="sendCodeToEmail" />
                        </div>
                        <div class="backrow">
                            <span @click="backPage(2)">Back</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.register {
    display            : block;
    position           : fixed;
    width              : 100%;
    height             : 100%;
    top                : 0;
    left               : 0;
    background-image   : url('../assets/images/logon-bg.png');
    background-repeat  : no-repeat;
    background-size    : cover;
    background-position: 50% 50%;
    user-select        : none;
    -webkit-user-select: none;

    & > .form
    {
        display   : block;
        position  : relative;
        width     : 420px;
        min-height: 100vh;
        background: #ffffff;
        float     : right;

        & > .formcover
        {
            display           : block;
            position          : relative;
            width             : 100%;
            box-sizing        : border-box;
            -webkit-box-sizing: border-box;
            padding           : 60px 50px;

            & > .logo
            {
                display : block;
                position: relative;
                width   : 100%;
                overflow: hidden;
                margin  : 0px 0px 80px 0px;

                & > div
                {
                    display              : block;
                    position             : relative;
                    float                : left;
                    width                : 50px;
                    height               : 50px;
                    background           : rgba(0,0,0,0.1);
                    border-radius        : 50%;
                    -webkit-border-radius: 50%;
                    margin               : 0px 14px 0px 0px;
                }
                & > span
                {
                    display    : block;
                    position   : relative;
                    float      : left;
                    height     : 50px;
                    line-height: 50px;
                    font-size  : 16px;
                    font-weight: 600;
                }
            }
            & > .page
            {
                display : block;
                position: relative;
                width   : 100%;

                & > .title
                {
                    display    : block;
                    position   : relative;
                    width      : 100%;
                    font-size  : 18px;
                    font-weight: 800;
                    margin     : 0px 0px 8px 0px;
                    text-align : center;
                }
                & > .desc
                {
                    display    : block;
                    position   : relative;
                    width      : 100%;
                    font-size  : 14px;
                    line-height: 20px;
                    margin     : 0px 0px 40px 0px;
                    text-align : center;
                }
                & > .container
                {
                    display : block;
                    position: relative;
                    width   : 100%;

                    & > .email
                    {
                        display   : block;
                        position  : relative;
                        width     : 100%;
                        text-align: center;

                        & > div
                        {
                            display              : inline-block;
                            position             : relative;
                            box-sizing           : border-box;
                            -webkit-box-sizing   : border-box;
                            border               : solid 1px #e0e0e0;
                            border-radius        : 60px;
                            -webkit-border-radius: 60px;
                            height               : 50px;
                            line-height          : 28px;
                            padding              : 10px 12px 10px 50px;
                            font-size            : 14px;

                            & > span
                            {
                                display              : block;
                                position             : absolute;
                                width                : 30px;
                                height               : 30px;
                                line-height          : 30px;
                                text-align           : center;
                                border-radius        : 50%;
                                -webkit-border-radius: 50%;
                                top                  : 10px;
                                left                 : 12px;
                                background-color     : #BEE0FF;
                                font-size            : 14px;
                                font-weight          : 600;
                            }
                        }
                    }
                    & .inputrow
                    {
                        display : block;
                        position: relative;
                        width   : 100%;
                        margin  : 16px 0px 0px 0px;

                        &:first-child
                        {
                            margin:0px;
                        }
                    }
                    & > .noterow
                    {
                        display : block;
                        position: relative;
                        width   : 100%;
                        margin  : 12px 0px 0px 0px;
                        overflow: hidden;

                        & > .rmb
                        {
                            display : block;
                            position: relative;
                            float   : left;

                            & > .toggle
                            {
                                display           : block;
                                position          : relative;
                                box-sizing        : border-box;
                                -webkit-box-sizing: border-box;
                                padding           : 0px 0px 0px 38px;
                                font-size         : 13px;
                                line-height       : 20px;
                                height            : 20px;
                                cursor            : pointer;

                                &.active
                                {
                                    & > div
                                    {
                                        & > span
                                        {
                                            left      : 14px;
                                            background: #5089E9;
                                        }
                                    }
                                }
                                & > div
                                {
                                    display              : block;
                                    position             : absolute;
                                    width                : 32px;
                                    height               : 20px;
                                    border-radius        : 40px;
                                    -webkit-border-radius: 40px;
                                    background           : #D9D9D9;
                                    top                  : 0;
                                    left                 : 0;

                                    & > span
                                    {
                                        display              : block;
                                        position             : absolute;
                                        width                : 16px;
                                        height               : 16px;
                                        background           : #f4f4f4;
                                        border-radius        : 50%;
                                        -webkit-border-radius: 50%;
                                        top                  : 2px;
                                        left                 : 2px;
                                        transition           : all 0.2s ease;
                                        -webkit-transition   : all 0.2s ease;
                                    }
                                }
                            }
                        }
                        & > .forget
                        {
                            display    : block;
                            position   : relative;
                            float      : right;
                            font-size  : 13px;
                            cursor     : pointer;
                            line-height: 20px;
                            height     : 20px;

                            &:hover
                            {
                                color          : #5089E9;
                                text-decoration: underline;
                            }
                        }
                    }
                    & > .submitrow
                    {
                        display : block;
                        position: relative;
                        width   : 100%;
                        margin  : 30px 0px 0px 0px;
                    }
                    & > .backrow
                    {
                        display   : block;
                        position  : relative;
                        width     : 100%;
                        margin    : 20px 0px 0px 0px;
                        text-align: center;

                        & > span
                        {
                            display    : inline-block;
                            position   : relative;
                            height     : 14px;
                            line-height: 14px;
                            font-size  : 14px;
                            cursor     : pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>
